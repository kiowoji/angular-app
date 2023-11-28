import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { TagService } from 'src/app/services/tag.service';
import { ITag } from 'src/app/tag/tag.model';
import { IProduct } from '../product.model';

@Component({
  selector: 'app-edit-product-form',
  templateUrl: './edit-product-form.component.html',
  styleUrls: ['./edit-product-form.component.css'],
})
export class EditProductFormComponent {
  @Input() product?: IProduct;
  productForm: FormGroup;
  availableTags: ITag[] = [];
  productId?: number;

  constructor(
    private fb: FormBuilder,
    private tagService: TagService,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.productForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: [
        '',
        [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)],
      ],
      tags: [[]],
    });
  }

  ngOnInit(): void {
    this.tagService.getTags().subscribe((tags) => (this.availableTags = tags));

    this.route.paramMap.subscribe((params) => {
      this.productId = +params.get('id')!;
      if (this.productId) {
        this.productService.getProduct(this.productId).subscribe((product) => {
          if (product) {
            this.productForm.patchValue({
              ...product,
              tags: product.tags,
            });
          } else {
            this.router.navigate(['/product-list']);
          }
        });
      }
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const updatedProduct: IProduct = {
        id: this.productId,
        ...this.productForm.value,
        tags: this.productForm.value.tags.map((tagId:number) => {
          const matchingTag = this.availableTags.find(
            (tag) => tag.id === tagId
          );
          return matchingTag || tagId; 
        }),
      };
      this.productService
        .updateProduct(updatedProduct)
        .subscribe(() => this.router.navigate(['/product-list']));
    }
  }
}

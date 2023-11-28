import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { ITag } from 'src/app/tag/tag.model';
import { TagService } from 'src/app/services/tag.service';
import { IProduct } from '../product.model';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.css'],
})
export class AddProductFormComponent {
  @Input() product?: IProduct;
  addProductForm: FormGroup;
  availableTags: ITag[] = [];
  productId?: number;

  constructor(
    private productService: ProductService,
    private fb: FormBuilder,
    private tagService: TagService,
    private router: Router
  ) {
    this.addProductForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: [
        '',
        [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)],
      ],
      tags: [[]],
    });
  }

  onSubmit(): void {
    if (this.addProductForm.valid) {
      const newProduct: IProduct = {
        id: this.productId,
        ...this.addProductForm.value,
        tags: this.addProductForm.value.tags.map((tagId: number) => {
          const matchingTag = this.availableTags.find(
            (tag) => tag.id === tagId
          );
          return matchingTag || tagId;
        }),
      };
      this.productService.addProduct(newProduct).subscribe();
      this.router.navigate(['/product-list']);
    }
  }

  ngOnInit(): void {
    this.tagService.getTags().subscribe((tags) => (this.availableTags = tags));
  }
}

import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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

  constructor(
    private fb: FormBuilder,
    private tagService: TagService,
    private productService: ProductService
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

    if (this.product) {
      this.productForm.patchValue({
        title: this.product.title,
        description: this.product.description,
        price: this.product.price,
        tags: this.product.tags.map((tag) => tag.id),
      });
    }
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const updatedProduct: IProduct = {
        ...(this.product as IProduct),
        ...this.productForm.value,
        tags: this.availableTags.filter((tag) =>
          this.productForm.value.tags.includes(tag.id)
        ),
      };

      this.productService
        .updateProduct(updatedProduct)
        .subscribe((updatedProducts) => {
          console.log('Product updated:', updatedProduct);
        });
    }
  }
}

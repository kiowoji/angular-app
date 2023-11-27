import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { ITag } from 'src/app/tag/tag.model';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.css'],
})
export class AddProductFormComponent {
  addProductForm: FormGroup;
  availableTags: ITag[] = [];

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
      const newProduct = this.addProductForm.value;
      this.productService.addProduct(newProduct).subscribe();
       this.router.navigate(['/product-list']);
    }
  }

  ngOnInit(): void {
    this.tagService.getTags().subscribe((tags) => (this.availableTags = tags));
  }
}

import { Component, ViewChild } from '@angular/core';
import { IProduct } from '../../../models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { ITag } from 'src/app/models/tag.model';
import { Tags } from 'src/app/components/tag/tags';
import { MatChipListbox } from '@angular/material/chips';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  @ViewChild(MatChipListbox) toggleGroup!: MatChipListbox;
  products: IProduct[] = [];
  tags: ITag[] = Tags;
  selectedProduct?: IProduct;
  selectedTags: number[] = [];

  constructor(private productService: ProductService, private router: Router) {}

  onSelect(product: IProduct): void {
    this.router.navigate(['/product-detail', product.id]);
  }

  getProducts(): void {
    this.productService.getProducts().subscribe((products) => {
      if (this.selectedTags.length > 0) {
        this.products = products.filter((product) =>
          product.tags.some((tag) => this.selectedTags.includes(tag.id))
        );
      } else {
        this.products = products;
      }
    });
  }

  deleteProduct(productId: number): void {
    this.productService
      .deleteProduct(productId)
      .subscribe((products) => (this.products = products));
  }

  filterByTag(tagId: number): void {
    if (this.selectedTags.includes(tagId)) {
      this.selectedTags = this.selectedTags.filter((id) => id !== tagId);
    } else {
      this.selectedTags.push(tagId);
    }
    this.getProducts();
  }

  clearFilter(): void {
    this.toggleGroup.value = null;
    this.selectedTags = [];
    this.getProducts();
  }

  ngOnInit(): void {
    this.getProducts();
  }
}

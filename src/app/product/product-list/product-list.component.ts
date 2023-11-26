import { Component } from '@angular/core';
import { IProduct } from '../product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: IProduct[] = [];
  selectedProduct?: IProduct;

  constructor(private productService: ProductService) {}

  onSelect(product: IProduct): void {
    this.selectedProduct = product;
  }

  getProducts(): void {
    this.productService
      .getProducts()
      .subscribe((products) => (this.products = products));
  }

  ngOnInit(): void {
    this.getProducts();
  }
}

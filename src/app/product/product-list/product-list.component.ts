import { Component } from '@angular/core';
import { IProduct } from '../product.model';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: IProduct[] = [];
  selectedProduct?: IProduct;

  constructor(private productService: ProductService, private router: Router) {}

  onSelect(product: IProduct): void {
    this.router.navigate(['/product-detail', product.id]);
  }

  getProducts(): void {
    this.productService
      .getProducts()
      .subscribe((products) => (this.products = products));
  }

  deleteProduct(productId: number): void {
    this.productService
      .deleteProduct(productId)
      .subscribe((products) => (this.products = products));
  }

  ngOnInit(): void {
    this.getProducts();
  }
}

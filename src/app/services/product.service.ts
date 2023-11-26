import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProduct } from '../product/product.model';
import { Products } from '../product/products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  getProducts(): Observable<IProduct[]> {
    const products = of(Products);
    return products;
  }

  deleteProduct(productId: number): Observable<IProduct[]> {
    const updatedProducts = Products.filter(
      (product) => product.id !== productId
    );
    return of(updatedProducts);
  }

  addProduct(newProduct: IProduct): Observable<IProduct[]> {
    Products.push(newProduct);
    return of(Products);
  }
}

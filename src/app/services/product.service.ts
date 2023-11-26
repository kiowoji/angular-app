import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProduct } from '../product/product.model';
import { Products } from '../product/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Observable<IProduct[]> {
    const products = of(Products)
    return products;
  }
}

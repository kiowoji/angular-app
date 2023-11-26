import { Component, Input } from '@angular/core';
import { IProduct } from '../product.model';

@Component({
  selector: 'app-edit-product-form',
  templateUrl: './edit-product-form.component.html',
  styleUrls: ['./edit-product-form.component.css'],
})
export class EditProductFormComponent {
  @Input() product?: IProduct;
}

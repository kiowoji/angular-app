import { Component, Input } from '@angular/core';
import { IProduct } from '../product.model';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {
  @Input() product?: IProduct;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  getTagNames(): string {
    return this.product?.tags.map((tag) => tag.name).join(', ') || '';
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const productId = Number(params.get('id'));
      if (productId) {
        this.productService.getProduct(productId).subscribe((product) => {
          this.product = product;
        });
      }
    });
  }
}

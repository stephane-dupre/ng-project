import { Component, Input } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductsServices } from '../services/products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product!: Product;
  selected: string;
  multiplier: number;

  constructor(private productsService: ProductsServices) {}

  ngOnInit(): void {
    this.onSelectedSize();
  }

  onLikes() {
    this.productsService.onAddLikes(this.product)
  }

  onSelectedSize() {
    this.multiplier = this.selected === 'L' ? 2 : 1;
    this.product.price = this.product.price * this.multiplier;
    console.log(this.selected);
  }
}

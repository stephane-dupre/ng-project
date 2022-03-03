import { Component, OnInit } from '@angular/core';
import { Product } from './models/product.model';
import { ProductsServices } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  title = 'ng-project';
  products!: Product[];

  constructor(private productsServices: ProductsServices) {}
  
  ngOnInit(): void {
    this.products = this.productsServices.products;
  }
}

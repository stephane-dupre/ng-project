import { Component, OnInit } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ng-project';
  products!: Product[];

  ngOnInit(): void {
    this.products = [
      new Product(
        'Peluche Harry Potter',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut orci iaculis, tincidunt tortor sed, interdum eros. Vivamus tincidunt, justo ac tristique dictum, est metus ultrices eros',
        'https://www.illufantasy.com/media/catalog/product/cache/177ee782e41b4381c1b78a35396cbb5d/a/h/ah9psl9llb_1.jpg',
        12,
        0,
        false,
        new Date('2020-01-20'),
        ['M', 'L']
      ),
      new Product(
        'Peluche Harry Potter',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut orci iaculis, tincidunt tortor sed, interdum eros. Vivamus tincidunt, justo ac tristique dictum, est metus ultrices eros',
        'https://www.illufantasy.com/media/catalog/product/cache/177ee782e41b4381c1b78a35396cbb5d/a/h/ah9psl9llb_1.jpg',
        12,
        0,
        false,
        new Date('2022-01-20'),
        ['M', 'L']
      ),
    ];
  }
}

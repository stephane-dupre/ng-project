import {Pipe, PipeTransform} from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({name: 'sortByDate'})
export class SortByDatePipe implements PipeTransform {
  transform(products: Product[], order?: any) {
    let desc = !(order && order === 'asc');
    if (desc) return products.sort((a,b) =>  b.createdDate.getTime() - a.createdDate.getTime())
    return products.sort((a,b) =>  a.createdDate.getTime() - b.createdDate.getTime())
  }
}
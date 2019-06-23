import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HTTPService } from './http.service';

import {
  IProductCategoryList,
  ICategoryList,
  IProductList,
  IMappedProducts
} from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  productList: Array<IProductList>;
  categoryList: Array<ICategoryList>;
  mappedList: Array<IMappedProducts>;

  constructor(private httpService: HTTPService) {}
  getList(): Observable<Array<IMappedProducts>> {
    const prodList = '../../assets/data/demo.json';

    return this.httpService.getTest(prodList).pipe(
      map((res: IProductCategoryList) => {
        this.categoryList = res.categories;
        this.productList = res.products;

        this.mappedList = this.getMappedList(res.categories, res.products);
        // console.log('this.mappedList', this.mappedList);

        return this.mappedList;
      })
    );
  }

  getMappedList(
    cat: Array<ICategoryList>,
    prod: Array<IProductList>
  ): Array<IMappedProducts> {
    return prod.map((item: IProductList) => {
      return {
        name: item.name,
        price: item.price,
        itemLeft: item.itemLeft,
        rating: item.rating,
        categoryName: item.categories.map(
          (id: number) => cat[id - 1].categoryName
        )
      };
    });
  }
}

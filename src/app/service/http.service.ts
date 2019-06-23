import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { IProductCategoryList } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class HTTPService {
  constructor(private $http: HttpClient) {}

  getTest(urlPath: string): Observable<Array<IProductCategoryList> | any> {
    return this.$http.get(urlPath);
  }
}

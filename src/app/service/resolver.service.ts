import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/delay';
import { MessageService } from './subscribemessage.service';
import { IMappedProducts } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable()
export class ListDataResolver implements Resolve<Array<IMappedProducts>> {
  constructor(private messageService: MessageService) {}

  resolve(): Observable<any> | Promise<any> | any {
    console.log('this.messageService.listData', this.messageService.listData);
    return this.messageService.listData.length > 0
      ? this.messageService.listData
      : false;
  }
}

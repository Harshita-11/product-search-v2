import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import { IMappedProducts, IFilterObj, ITab } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class MessageService {
  private subjectTest = new Subject<Array<IMappedProducts>>();
  private filterObj = new Subject<IFilterObj>();
  private tabData = new Subject<ITab>();

  sendMessage(message: Array<IMappedProducts>) {
    this.subjectTest.next(message);
  }

  getMessage(): Observable<Array<IMappedProducts>> {
    return this.subjectTest.asObservable();
  }

  sendFilter(filter: IFilterObj) {
    this.filterObj.next(filter);
  }

  getFilter(): Observable<IFilterObj> {
    return this.filterObj.asObservable();
  }

  sendTab(sendTab: ITab) {
    this.tabData.next(sendTab);
  }

  getTab(): Observable<ITab> {
    return this.tabData.asObservable();
  }
}

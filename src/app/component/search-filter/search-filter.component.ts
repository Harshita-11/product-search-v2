import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Subscription } from 'rxjs';

import { MessageService } from '../../service/subscribemessage.service';
import { IFilterObj, IMappedProducts } from 'src/app/models/product.model';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  mappedData: Array<IMappedProducts>; // from subject
  uniqueCategoryName: Array<string>;
  searchResult: IFilterObj;
  default: string;
  searchForm: FormGroup;

  constructor(private messageService: MessageService) {
    this.searchForm = new FormGroup({
      search: new FormControl(''),
      price: new FormControl(''),
      category: new FormControl()
    });
  }

  ngOnInit() {
    this.searchResult = { search: '', price: 'all', category: 'Select' };

    this.subscription = this.messageService
      .getMessage()
      .subscribe((msg: Array<IMappedProducts>) => {
        this.mappedData = msg;

        this.uniqueCategoryName = this.mappedData
          .map((data: IMappedProducts) => data.categoryName)
          .flat()
          .filter(
            (item: string, index: number, flatArray: Array<string>) =>
              flatArray.indexOf(item) === index
          );

        this.uniqueCategoryName.splice(0, 0, 'Select');
        this.default = this.uniqueCategoryName[0];

        this.searchForm.controls['category'].setValue(this.default);
        this.searchForm.controls['price'].setValue('all');
      });
  }

  onSubmit(): void {
    this.searchResult = this.searchForm.value;
    // console.log(this.searchResult);
    this.messageService.sendFilter(this.searchResult);
  }

  onReset(): void {
    this.searchForm.reset({ search: '', price: 'all', category: this.default });
    this.onSubmit();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

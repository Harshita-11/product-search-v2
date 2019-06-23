import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

import { MessageService } from '../../service/subscribemessage.service';
import { DemoService } from '../../service/demo1.service';
import { SearchFilterComponent } from '../search-filter/search-filter.component';
import { IMappedProducts, IFilterObj, ITab } from '../../models/product.model';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit, OnDestroy {
  @ViewChild(SearchFilterComponent) searchFilterRef: SearchFilterComponent;

  subscription: Subscription = new Subscription();

  mappedData: Array<IMappedProducts>; // from subject
  filteredData: Array<IMappedProducts>; // from subject
  cardLabels: Array<string>;
  filterObj: IFilterObj;
  tabData: Array<IFilterObj>;
  activeTabIndex: number;
  defaultFilterObj: IFilterObj;
  dataLoadingCase: string;

  constructor(
    private messageService: MessageService,
    private demoService: DemoService
  ) {
    this.filteredData = [];
  }

  ngOnInit(): void {
    // console.log('searchFilterRef', this.searchFilterRef);
    this.activeTabIndex = 0;
    this.dataLoadingCase = 'loading';
    this.defaultFilterObj = { search: '', price: 'all', category: 'Select' };
    this.tabData = [this.defaultFilterObj];

    this.subscription.add(
      this.demoService.getList().subscribe((result: Array<IMappedProducts>) => {
        this.messageService.sendMessage(result);
      })
    );

    this.subscription.add(
      this.messageService
        .getMessage()
        .subscribe((msg: Array<IMappedProducts>) => {
          setTimeout(() => {
            this.mappedData = msg;
            this.filteredData = [...this.mappedData];
            this.cardLabels = Object.keys(this.mappedData[0]);
            this.dataLoadingCase = 'dataLoaded';
          }, 700);
        })
    );

    this.subscription.add(
      this.messageService.getFilter().subscribe((filter: IFilterObj) => {
        this.filteredData = [...this.mappedData];
        // console.log('this.filteredData', this.filteredData.length);
        this.filterObj = filter;
        this.filteredData = this.filteredData.filter(
          (item, index, orignalArray) => {
            if (
              item.name
                .toLowerCase()
                .indexOf(this.filterObj.search.toLowerCase()) > -1
            ) {
              if (
                item.categoryName.indexOf(this.filterObj.category) > -1 ||
                this.filterObj.category === 'Select'
              ) {
                switch (this.filterObj.price) {
                  case 'less':
                    return item.price < 5000;
                  case 'more':
                    return item.price >= 5000;
                  default:
                    return true;
                }
              }
            }
          }
        );
        this.dataLoadingCase = this.filteredData.length
          ? 'dataLoaded'
          : 'error';
      })
    );

    this.subscription.add(
      this.messageService.getTab().subscribe((tab: ITab) => {
        switch (tab.action) {
          case 'add':
            this.tabData.splice(this.tabData.length - 1, 0, tab.tabData);
            this.activeTabIndex = this.tabData.length - 1;
            this.messageService.sendFilter(this.defaultFilterObj);
            this.searchFilterRef.searchForm.controls.search.setValue(
              this.defaultFilterObj.search
            );
            this.searchFilterRef.searchForm.controls.price.setValue(
              this.defaultFilterObj.price
            );
            this.searchFilterRef.searchForm.controls.category.setValue(
              this.defaultFilterObj.category
            );
            break;

          case 'remove':
            this.activeTabIndex = tab.index;
            this.tabData.splice(tab.index, 1);
            this.messageService.sendFilter(this.tabData[tab.index]);
            break;

          case 'switch':
            this.activeTabIndex = tab.index;
            this.messageService.sendFilter(this.tabData[tab.index]);
            this.searchFilterRef.searchForm.reset({
              search: this.tabData[tab.index].search,
              price: this.tabData[tab.index].price,
              category: this.tabData[tab.index].category
            });
            break;

          default:
            break;
        }
        // console.log('getTabData: ', tab, this.tabData, this.activeTabIndex);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

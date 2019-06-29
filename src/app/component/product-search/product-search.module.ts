import { NgModule } from '@angular/core';

import { SearchFilterComponent } from '../search-filter/search-filter.component';
import { TabsComponent } from '../tabs/tabs.component';
import { ProductSearchComponent } from './product-search.component';
import { ErrorComponent } from '../error/error.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProductSearchRoutingModule } from './product-search-routing.module';
import { ProductDetailsModule } from '../product-details/product-details.module';

@NgModule({
  declarations: [
    SearchFilterComponent,
    TabsComponent,
    ProductSearchComponent,
    ErrorComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    ProductSearchRoutingModule,
    ProductDetailsModule
  ]
})
export class ProductSearchModule {}

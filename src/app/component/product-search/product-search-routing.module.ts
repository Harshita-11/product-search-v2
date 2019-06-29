import { Routes, RouterModule } from '@angular/router';
import { ProductSearchComponent } from './product-search.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [{ path: '', component: ProductSearchComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductSearchRoutingModule {}

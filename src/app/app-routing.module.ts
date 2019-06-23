import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductSearchComponent } from './component/product-search/product-search.component';
import { LoginComponent } from './component/login/login.component';

import { AuthGuardService } from './service/auth-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'product',
    component: ProductSearchComponent,
    canActivate: [AuthGuardService]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

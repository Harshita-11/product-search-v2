import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductSearchComponent } from './component/product-search/product-search.component';
import { LoginComponent } from './component/login/login.component';

import { AuthGuardService } from './service/auth-guard.service';
import { LoginGuardService } from './service/login-guard.service';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuardService]
  },
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

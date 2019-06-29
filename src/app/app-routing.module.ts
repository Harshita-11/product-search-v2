import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    path: '',
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'product',
        loadChildren: () =>
          import('./component/product-search/product-search.module').then(
            m => m.ProductSearchModule
          )
        // canActivate: [AuthGuardService]
      },
      {
        path: 'details/:name',
        loadChildren: () =>
          import('./component/product-details/product-details.module').then(
            m => m.ProductDetailsModule
          )
      }
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

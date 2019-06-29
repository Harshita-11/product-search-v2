import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductSearchComponent } from './component/product-search/product-search.component';
import { LoginComponent } from './component/login/login.component';

import { AuthGuardService } from './service/auth-guard.service';
import { LoginGuardService } from './service/login-guard.service';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { ListDataResolver } from './service/resolver.service';

const routes: Routes = [
  {
    path: 'lazymodule',
    loadChildren: () =>
      import('./lazymodule/lazymodule.module').then(m => m.LazymoduleModule)
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuardService]
  },
  {
    path: 'product',
    component: ProductSearchComponent,
    canActivate: [AuthGuardService]
    //   children: [
    //     {
    //       path: 'details',
    //       component: ProductDetailsComponent
    //       // canActivate: [AuthGuardService]
    //     }
    //   ]
  },
  {
    path: 'details/:name',
    component: ProductDetailsComponent
    // resolve: {
    //   myListData: ListDataResolver
    // }
  },

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ListDataResolver]
})
export class AppRoutingModule {}

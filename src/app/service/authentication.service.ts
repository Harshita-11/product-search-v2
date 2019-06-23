import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { IAuth } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  adminObj: IAuth;

  constructor(private _router: Router) {
    this.adminObj = {
      username: 'admin',
      password: 'admin'
    };
  }

  setCredentials(itemKey: string, itemVal: string): void {
    localStorage.setItem(itemKey, itemVal);
  }

  getCredentials(itemKey: string): string {
    return localStorage.getItem(itemKey);
  }

  clearCredentialsStorage(): void {
    localStorage.clear();
  }

  isUserAuthentic(passedValue: IAuth): boolean {
    return (
      passedValue.username === this.adminObj.username &&
      passedValue.password === this.adminObj.password
    );
  }

  isUserLoggedIn(): boolean {
    return this.getCredentials('authObj') ? true : false;
  }

  login(): void {
    this.setCredentials('authObj', JSON.stringify(this.adminObj));
    this._router.navigate(['/product']);
  }

  logout(): void {
    this.clearCredentialsStorage();
    this._router.navigate(['/login']);
  }
}

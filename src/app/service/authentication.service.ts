import { Injectable } from '@angular/core';
import { IAuth } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  adminObj: IAuth;

  constructor() {
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
}

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthenticationService } from '../service/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(
    private _authService: AuthenticationService,
    private _router: Router
  ) {}

  canActivate(): boolean {
    if (this._authService.isUserLoggedIn()) {
      return true;
    }

    this._router.navigate(['/login']);

    return false;
  }
}

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate {
  constructor(
    private _authService: AuthenticationService,
    private _router: Router
  ) {}

  canActivate(): boolean {
    if (this._authService.isUserLoggedIn()) {
      this._router.navigate(['/product']);

      return false;
    }

    return true;
  }
}

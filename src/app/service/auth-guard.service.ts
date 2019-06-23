import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';

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
    if (
      !!this._authService.getCredentials('currentUser') &&
      !!this._authService.getCredentials('currentPassword')
    ) {
      return true;
    } else {
      this._router.navigate(['/login']);

      return false;
    }
  }
}

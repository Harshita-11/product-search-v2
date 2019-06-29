import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';
import { MatSnackBar } from '@angular/material';

import { AuthenticationService } from 'src/app/service/authentication.service';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  durationInSeconds = 5;

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthenticationService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(): void {
    if (this._authService.isUserAuthentic(this.loginForm.value)) {
      this._authService.login();
    } else {
      this.openSnackBar();
    }
  }

  resetData(): void {
    this.loginForm.reset();
  }

  openSnackBar() {
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: this.durationInSeconds * 1000
    });
  }
}

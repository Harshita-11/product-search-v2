import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthenticationService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    //     this.loginForm = new FormGroup({
    //       username: new FormControl('', Validators.required),
    //       password: new FormControl('', Validators.required)
    // });
    this.loginForm = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      this._authService.setCredentials(
        'currentUser',
        this.loginForm.controls['username'].value
      );
      this._authService.setCredentials(
        'currentPassword',
        this.loginForm.controls['password'].value
      );
      this._router.navigate(['/product']);
    }
  }

  resetData(): void {
    this.loginForm.reset();
  }
}

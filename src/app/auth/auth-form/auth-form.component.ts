import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent implements OnInit {
  @Input() formType: string = '';
  authForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    rememberMe: [false],
  });

  hasServerErrors: boolean = false;
  serverError: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    console.log(this.authForm.value.username);
  }

  ngOnInit(): void {}

  login() {
    this.authService.login(this.authForm.value).subscribe({
      next: (val) => {
        this.router.navigate(['/orders']);
      },
      error: (error) => {
        this.setServerError(error);
      },
    });
  }

  setServerError(error: any) {
    this.hasServerErrors = true;
    this.serverError = error.message;
    setTimeout(() => {
      this.hasServerErrors = false;
      this.serverError = '';
    }, 2000);
  }

  // Getters for form fields
  get email() {
    return this.authForm.get('email');
  }
  get username() {
    return this.authForm.get('username');
  }
  get password() {
    return this.authForm.get('password');
  }
}

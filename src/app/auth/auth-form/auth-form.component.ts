import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent implements OnInit {
  @Input() formType: string = '';
  authForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    rememberMe: [false],
  });

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    // Programtically adding "username" field if formType is 'register
    if (this.formType === 'register') {
      this.authForm.addControl(
        'username',
        new FormControl('', [Validators.required])
      );
    }
  }

  submitForm() {
    if (this.formType === 'login') {
      this.login();
    } else if (this.formType === 'register') {
      this.register();
    }
    console.log(this.authForm);
  }

  login() {
    // !TODO Add method in service to login
  }

  register() {
    // !TODO Add method in service to register
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

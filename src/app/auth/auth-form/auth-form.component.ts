import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent implements OnInit {
  @Input() formType: string = '';
  authForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    email: ['newuser@gmail.com', [Validators.required, Validators.email]],
    password: ['newuser3', [Validators.required]],
    rememberMe: [false],
  });

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {}

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
}

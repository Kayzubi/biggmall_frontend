import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorResponse } from '../../models/https.models';
import { ToastService } from '../../services/toast.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  logginIn: boolean;
  loginForm: FormGroup;
  savedEmail: string = localStorage.getItem('biggmall_login') ?? ''

  constructor(
    private auth: AuthService,
    private form: FormBuilder,
    private toast: ToastService,
    private router: Router
  ) {
    this.logginIn = false;
    this.loginForm = this.form.group({
      email: [this.savedEmail, [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.logginIn = true;
      this.auth
        .logInUser({
          email: this.loginForm.value.email,
          password: this.loginForm.value.password,
        })
        .subscribe({
          next: (response) => {
            this.toast.success(response.message)
            localStorage.setItem('biggmall_login', this.loginForm.value.email);
            this.logginIn = false;
            this.router.navigate(['/dashboard'])
          },
          error: (err: ErrorResponse) => {
            this.toast.error(err.message);
            this.logginIn = false;
          },
        });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}

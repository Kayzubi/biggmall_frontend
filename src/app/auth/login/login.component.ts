import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ErrorResponse } from '../../types';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';


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
    private toast: MessageService,
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
            this.toast.add({
              severity: 'success',
              summary: 'Success',
              detail: response.message,
            });
            localStorage.setItem('biggmall_login', this.loginForm.value.email);
            this.logginIn = false;
            this.router.navigate(['/dashboard'])
          },
          error: (err: ErrorResponse) => {
            this.toast.add({
              severity: 'error',
              summary: 'Error',
              detail: err.message,
            });
            this.logginIn = false;
          },
        });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}

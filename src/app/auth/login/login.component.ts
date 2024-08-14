import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  logginIn: boolean;
  loginForm: FormGroup;

  constructor(
    private auth: AuthService,
    private form: FormBuilder,
  ) {
    this.logginIn = false;
    this.loginForm = this.form.group({
      email: ['', [Validators.required, Validators.email]],
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
            console.log(response);
            this.logginIn = false;
          },
          error: (err: any) => {
            console.log(err);
            this.logginIn = false;
          },
        });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}

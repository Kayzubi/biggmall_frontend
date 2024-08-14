import { Injectable, signal } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, map } from 'rxjs';
import { SuccessHttpResponse } from '../types';
import { AuthResponse, User } from '../auth/auth.models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoading: boolean;
  user = signal<User | null>(null);
  private _token: string | undefined

  constructor(private apiService: ApiService) {
    this.isLoading = false;
  }

  get token() {
    return this._token
  }

  logInUser(data: {
    email: string;
    password: string;
  }): Observable<SuccessHttpResponse<AuthResponse>> {
    return this.apiService
      .post<SuccessHttpResponse<AuthResponse>>('/auth/login', { ...data }, {})
      .pipe(
        map((response) => {
          this.user.set(response.data.user)
          this._token = response.data.token
          return response;
        }),
      );
  }
}

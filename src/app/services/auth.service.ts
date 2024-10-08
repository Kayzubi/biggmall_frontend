
import { Injectable, signal } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { AuthResponse, User } from '../models/auth.models';
import { StoreService } from './store.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Store } from '../models/store.models';
import { SuccessHttpResponse } from '../models/https.models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loading = signal<boolean>(false)
  user = signal<User | null>(null);

  constructor(
    private apiService: ApiService,
    private storeService: StoreService,
  ) {}

  logInUser(data: {
    email: string;
    password: string;
  }): Observable<SuccessHttpResponse<AuthResponse>> {
    return this.apiService
      .post<SuccessHttpResponse<AuthResponse>>('/auth/login', { ...data }, {})
      .pipe(
        tap((response) => {
          this.handleAuthentication(
            response.data.user,
            response.data.store,
            response.data.token,
          );
        }),
        catchError((error: HttpErrorResponse) => throwError(error.error)),
      );
  }

  retrieveUserSession() {
    this.loading.set(true)
    return this.apiService
      .get<SuccessHttpResponse<AuthResponse>>('/auth/retrieve-session', {})
      .pipe(
        tap((response) => {

          this.handleAuthentication(
            response.data.user,
            response.data.store,
            response.data.token,
            )
            this.loading.set(false)
          }
        ),
        catchError((error: HttpErrorResponse) => {
          this.loading.set(false)
          return throwError(error.error);
        }),
      );
  }

private handleAuthentication(user: User, store: Store | null, token?: string) {
    this.user.set(user);
    if(token) localStorage.setItem('biggmall_token', token);
    this.storeService.setStoreData(store);
  }
}

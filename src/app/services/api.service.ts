import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Options } from '../types';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl: string;
  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:5000/api';
  }

  get<T>(url: string, options: Options): Observable<T> {
    return this.httpClient.get<T>(
      `${this.baseUrl}${url}`,
      options,
    ) as Observable<T>;
  }

  post<T>(url: string, body: any, options: Options): Observable<T> {
    return this.httpClient.post<T>(
      `${this.baseUrl}${url}`,
      body,
      options,
    ) as Observable<T>;
  }

  put<T>(url: string, body: any, options: Options): Observable<T> {
    return this.httpClient.put<T>(
      `${this.baseUrl}${url}`,
      body,
      options,
    ) as Observable<T>;
  }

  delete<T>(url: string, options: Options): Observable<T> {
    return this.httpClient.delete<T>(
      `${this.baseUrl}${url}`,
      options,
    ) as Observable<T>;
  }
}

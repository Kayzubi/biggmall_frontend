import { Injectable, signal } from '@angular/core';
import { ApiService } from './api.service';
import { SuccessHttpResponse } from '../types';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Coupon, ShippingOption, Store } from '../models/store.models';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  store = signal<Store | null>(null);

  constructor(private api: ApiService) {}

  setStoreData(data: Store | null) {
    this.store.set(data);
  }

  getAllUserStores() {
    return this.api
      .get<SuccessHttpResponse<Store[]>>('/stores', {})
      .pipe(catchError((error: HttpErrorResponse) => throwError(error.error)));
  }

  getStoreBySlug(slug: string) {
    return this.api
      .get<SuccessHttpResponse<Store>>(`/store/${slug}`, {})
      .pipe(catchError((error: HttpErrorResponse) => throwError(error.error)));
  }

  createNewStore(data: Partial<Store>) {
    return this.api.post<SuccessHttpResponse<Store>>('/store', data, {}).pipe(
      tap((response) => this.setStoreData(response.data)),
      catchError((error: HttpErrorResponse) => throwError(error.error)),
    );
  }

  updateStoreDetails(data: Partial<Store>) {
    return this.api.patch<SuccessHttpResponse<Store>>('/store', data, {}).pipe(
      tap((response) => this.setStoreData(response.data)),
      catchError((error: HttpErrorResponse) => throwError(error.error)),
    );
  }

  addShippingMethod(data: Partial<ShippingOption>) {
    return this.api
      .patch<
        SuccessHttpResponse<Store>
      >('/store/shipping-methods/add', data, {})
      .pipe(
        tap((response) => this.setStoreData(response.data)),
        catchError((error: HttpErrorResponse) => throwError(error.error)),
      );
  }

  deleteShippingMethod(id: string) {
    return this.api
      .patch<
        SuccessHttpResponse<Store>
      >(`/store/shipping-methods/delete/${id}`, {}, {})
      .pipe(
        tap((response) => this.setStoreData(response.data)),
        catchError((error: HttpErrorResponse) => throwError(error.error)),
      );
  }

  addDiscountCode(data: Partial<Coupon>) {
    return this.api
      .patch<SuccessHttpResponse<Store>>('/store/coupon/add', data, {})
      .pipe(
        tap((response) => this.setStoreData(response.data)),
        catchError((error: HttpErrorResponse) => throwError(error.error)),
      );
  }

  deleteDiscountCode(id: string) {
    return this.api
      .patch<SuccessHttpResponse<Store>>(`/store/coupon/delete/${id}`, {}, {})
      .pipe(
        tap((response) => this.setStoreData(response.data)),
        catchError((error: HttpErrorResponse) => throwError(error.error)),
      );
  }
}

import { Injectable, signal } from '@angular/core';
import { ApiService } from './api.service';
import { SuccessHttpResponse } from '../types';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Banner, Category, Coupon, ShippingOption, Store } from '../models/store.models';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  store = signal<Store | null>(null);

  constructor(
    private api: ApiService,
    private toast: MessageService,
  ) {}

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
      tap((response) => {
        this.setStoreData(response.data);
        this.toast.add({
          severity: 'success',
          summary: 'Success',
          detail: response.message,
        });
      }),
      catchError((error: HttpErrorResponse) => {
        this.toast.add({
          severity: 'error',
          summary: 'Error',
          detail: error.error.message,
        });
        return error.error;
      }),
    );
  }

  addShippingMethod(data: Partial<ShippingOption>) {
    return this.api
      .patch<
        SuccessHttpResponse<Store>
      >('/store/shipping-methods/add', data, {})
      .pipe(
        tap((response) => {
          this.setStoreData(response.data);
          this.toast.add({
            severity: 'success',
            summary: 'Success',
            detail: response.message,
          });
        }),
        catchError((error: HttpErrorResponse) => {
          this.toast.add({
            severity: 'error',
            summary: 'Error',
            detail: error.error.message,
          });
          return error.error;
        }),
      );
  }

  deleteShippingMethod(id: string) {
    return this.api
      .patch<
        SuccessHttpResponse<Store>
      >(`/store/shipping-methods/delete/${id}`, {}, {})
      .pipe(
        tap((response) => {
          this.setStoreData(response.data);
          this.toast.add({
            severity: 'success',
            summary: 'Success',
            detail: response.message,
          });
        }),
        catchError((error: HttpErrorResponse) => {
          this.toast.add({
            severity: 'error',
            summary: 'Error',
            detail: error.error.message,
          });
          return error.error;
        }),
      );
  }

  addProductCategory(data: Partial<Category>) {
    return this.api
      .patch<SuccessHttpResponse<Store>>('/store/product-categories/add', data, {})
      .pipe(
        tap((response) => {
          this.setStoreData(response.data);
          this.toast.add({
            severity: 'success',
            summary: 'Success',
            detail: response.message,
          });
        }),
        catchError((error: HttpErrorResponse) => {
          this.toast.add({
            severity: 'error',
            summary: 'Error',
            detail: error.error.message,
          });
          return error.error;
        }),
      );
  }

  deleteProductCategory(id: string) {
    return this.api
      .patch<SuccessHttpResponse<Store>>(`/store/product-categories/delete/${id}`, {}, {})
      .pipe(
        tap((response) => {
          this.setStoreData(response.data);
          this.toast.add({
            severity: 'success',
            summary: 'Success',
            detail: response.message,
          });
        }),
        catchError((error: HttpErrorResponse) => {
          this.toast.add({
            severity: 'error',
            summary: 'Error',
            detail: error.error.message,
          });
          return error.error;
        }),
      );
  }

  addDiscountCode(data: Partial<Coupon>) {
    return this.api
      .patch<SuccessHttpResponse<Store>>('/store/coupon/add', data, {})
      .pipe(
        tap((response) => {
          this.setStoreData(response.data);
          this.toast.add({
            severity: 'success',
            summary: 'Success',
            detail: response.message,
          });
        }),
        catchError((error: HttpErrorResponse) => {
          this.toast.add({
            severity: 'error',
            summary: 'Error',
            detail: error.error.message,
          });
          return error.error;
        }),
      );
  }

  deleteDiscountCode(id: string) {
    return this.api
      .patch<SuccessHttpResponse<Store>>(`/store/coupon/delete/${id}`, {}, {})
      .pipe(
        tap((response) => {
          this.setStoreData(response.data);
          this.toast.add({
            severity: 'success',
            summary: 'Success',
            detail: response.message,
          });
        }),
        catchError((error: HttpErrorResponse) => {
          this.toast.add({
            severity: 'error',
            summary: 'Error',
            detail: error.error.message,
          });
          return error.error;
        }),
      );
  }

  addSiteBanner(data: Partial<Banner>) {
    return this.api
      .patch<SuccessHttpResponse<Store>>('/store/banners/add', data, {})
      .pipe(
        tap((response) => {
          this.setStoreData(response.data);
          this.toast.add({
            severity: 'success',
            summary: 'Success',
            detail: response.message,
          });
        }),
        catchError((error: HttpErrorResponse) => {
          this.toast.add({
            severity: 'error',
            summary: 'Error',
            detail: error.error.message,
          });
          return error.error;
        }),
      );
  }

  deleteSiteBanner(id: string) {
    return this.api
      .patch<SuccessHttpResponse<Store>>(`/store/banners/delete/${id}`, {}, {})
      .pipe(
        tap((response) => {
          this.setStoreData(response.data);
          this.toast.add({
            severity: 'success',
            summary: 'Success',
            detail: response.message,
          });
        }),
        catchError((error: HttpErrorResponse) => {
          this.toast.add({
            severity: 'error',
            summary: 'Error',
            detail: error.error.message,
          });
          return error.error;
        }),
      );
  }
}

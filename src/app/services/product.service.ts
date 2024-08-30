import { Injectable, signal } from '@angular/core';
import { ApiService } from './api.service';
import { catchError, map, tap, throwError } from 'rxjs';
import { ErrorResponse, SuccessHttpResponse } from '../models/https.models';
import { Product, Variant } from '../models/products.models';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products = signal<Product[]>([]);

  constructor(private api: ApiService) {}

  getStoreProducts() {
    return this.api.get<SuccessHttpResponse<Product[]>>(`/products`, {}).pipe(
      tap((res) => this.products.set(res.data)),
      catchError((err: ErrorResponse) => throwError(err.message)),
    );
  }

  getProductbyId(id: string) {
    return this.api
      .get<SuccessHttpResponse<Product>>(`/product/${id}`, {})
      .pipe(
        map((res) => res.data),
        catchError((err: ErrorResponse) => throwError(err.message)),
      );
  }

  addNewStoreProduct(data: Partial<Product>) {
    return this.api.post<SuccessHttpResponse<Product>>(`/products`, data, {}).pipe(
      tap((res) => this.products.update((prev) => ([...prev, res.data]))),
      map((res) => res.data),
      catchError((err: ErrorResponse) => throwError(err.message)),
    );
  }

  updateProduct(id: string, data: Partial<Product>) {
    return this.api
      .patch<SuccessHttpResponse<Product>>(`/product/${id}`, data, {})
      .pipe(
        map((res) => res.data),
        catchError((err: ErrorResponse) => throwError(err.message)),
      );
  }

  deleteStoreProduct(id: string) {
    return this.api.delete<SuccessHttpResponse<null>>(`/products/${id}`, {}).pipe(
      tap(() => this.products.update(prev => prev.filter((item) => item._id !== id))),
      catchError((err: ErrorResponse) => throwError(err.message))
    )
  }

  addProductVariant(id: string, data: Partial<Variant>) {
    return this.api
      .patch<SuccessHttpResponse<Product>>(`/product/${id}/variant`, data, {})
      .pipe(
        map((res) => res.data),
        catchError((err: ErrorResponse) => throwError(err.message)),
      );
  }

  deleteProductVariant(id: string, variant_id: string) {
    return this.api
      .delete<
        SuccessHttpResponse<Product>
      >(`/product/${id}/variant/${variant_id}`, {})
      .pipe(
        map((res) => res.data),
        catchError((err: ErrorResponse) => throwError(err.message)),
      );
  }
}

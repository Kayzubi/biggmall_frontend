import { Injectable, signal } from '@angular/core';
import { ApiService } from './api.service';
import { catchError, map, throwError } from 'rxjs';
import { ErrorResponse, SuccessHttpResponse } from '../models/https.models';
import { Product } from '../models/products.models';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products = signal<Product[]>([]);

  constructor(private api: ApiService) {}

  getStoreProducts() {
    return this.api.get<SuccessHttpResponse<Product[]>>(`/products`, {}).pipe(
      map((res) => {
        this.products.set(res.data)
        return res.data }),
      catchError((err: ErrorResponse) => throwError(err.message)),
    );
  }
}

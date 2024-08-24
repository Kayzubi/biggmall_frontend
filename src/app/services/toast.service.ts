import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private toaster: MessageService) {}

  success(message: string) {
    this.toaster.add({
      severity: 'success',
      summary: 'Success',
      detail: message,
    });
  }
  error(message: string) {
    this.toaster.add({
      severity: 'error',
      summary: 'Error',
      detail: message || 'Something went wrong',
    });
  }
  warning(message: string) {
    this.toaster.add({
      severity: 'warn',
      summary: 'Warning',
      detail: message,
    });
  }
}

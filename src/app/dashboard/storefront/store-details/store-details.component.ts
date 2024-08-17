import { Component, computed, effect, signal } from '@angular/core';
import { StoreService } from '../../../services/store.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ErrorResponse } from '../../../types';
import { ShippingOption, Store, categories } from '../../../models/store.models';

@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.component.html',
  styleUrl: './store-details.component.scss',
})
export class StoreDetailsComponent {
  isUpdatingStore = signal<boolean>(false);
  showModal: boolean;
  storeDetails: FormGroup;
  shippingOptionsForm: FormGroup;
  store = computed(() => this.storeService.store());
  categoryOptions: { name: string }[];

  constructor(
    private storeService: StoreService,
    private fb: FormBuilder,
    private toast: MessageService,
    private confirmation: ConfirmationService,
  ) {
    this.categoryOptions = categories;
    this.showModal = false;
    this.storeDetails = fb.group({
      store_name: [this.store()?.store_name, [Validators.required]],
      slug: [this.store()?.slug, [Validators.required]],
      tag_line: [this.store()?.tag_line],
      store_email: [
        this.store()?.store_email,
        [Validators.required, Validators.email],
      ],
      description: [this.store()?.description],
      category: [{ name: this.store()?.category }],
    });

    this.shippingOptionsForm = fb.group({
      name: ['', [Validators.required]],
      price: [null, [Validators.required, Validators.min(100)]],
    });

  }

  handleUpdateStore(data: Partial<Store>) {
    this.isUpdatingStore.set(true);
    this.storeService.updateStoreDetails(data).subscribe({
      next: (response) => {
        this.toast.add({
          severity: 'success',
          summary: 'Success',
          detail: response.message,
        });
        this.isUpdatingStore.set(false);
      },
      error: (err: ErrorResponse) => {
        this.toast.add({
          severity: 'error',
          summary: 'Error',
          detail: err.message,
        });
        this.isUpdatingStore.set(false);
      },
    });
  }

  onUpdateStoreDetails() {
    if (this.storeDetails.valid) {
      this.handleUpdateStore({
        ...this.storeDetails.value,
        category: this.storeDetails.value.category.name,
      });
    } else {
      this.storeDetails.markAllAsTouched();
    }
  }

  onAddNewShippingOption() {
    if (this.shippingOptionsForm.valid) {
      this.isUpdatingStore.set(true);

      this.storeService
        .addShippingMethod(this.shippingOptionsForm.value)
        .subscribe({
          next: (response) => {
            this.toast.add({
              severity: 'success',
              summary: 'Success',
              detail: response.message,
            });
            this.isUpdatingStore.set(false);
            this.toggleModal(false);
          },
          error: (err: ErrorResponse) => {
            this.toast.add({
              severity: 'error',
              summary: 'Error',
              detail: err.message,
            });
            this.isUpdatingStore.set(false);
          },
        });
    } else {
      this.shippingOptionsForm.markAllAsTouched();
    }
  }

  deleteShippingMethod(id: string) {
     this.confirmation.confirm({
       header: 'Delete Shipping Option?',
       message: 'Are you sure you want to delete this shipping option?',
       accept: () => {
        this.isUpdatingStore.set(true);
        this.storeService.deleteShippingMethod(id).subscribe({
          next: (response) => {
            this.toast.add({
              severity: 'success',
              summary: 'Success',
              detail: response.message,
            });
            this.isUpdatingStore.set(false);
          },
          error: (err: ErrorResponse) => {
            this.toast.add({
              severity: 'error',
              summary: 'Error',
              detail: err.message,
            });
            this.isUpdatingStore.set(false);
          },
        });
       },
       reject: () => {},
     });
  }

  toggleModal(value: boolean) {
    this.showModal = value;
  }
}

import { Component, computed, signal } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-discounts',
  templateUrl: './discounts.component.html',
  styleUrl: './discounts.component.scss',
})
export class DiscountsComponent {
  showModal: boolean;
  isLoading = signal<boolean>(false)

  startDate: Date | undefined;
  endDate: Date | undefined;
  discountType!: 'fixed' | 'percentage';
  store = computed(() => this.storeService.store());
  addDiscountForm: FormGroup;

  constructor(
    private storeService: StoreService,
    private fb: FormBuilder,
    private confirmation: ConfirmationService
  ) {
    this.showModal = false;
    this.addDiscountForm = fb.group(
      {
        code: ['', [Validators.required]],
        discount_type: ['fixed', [Validators.required]],
        value: [
          null,
          [Validators.required, this.discountValueValidator.bind(this)],
        ],
        start_date: ['', [Validators.required]],
        end_date: [''],
        show_on_site: [false],
      },
      { validators: this.dateRangeValidator },
    );

    this.addDiscountForm.get('discount_type')?.valueChanges.subscribe(() => {
      this.addDiscountForm.get('value')?.updateValueAndValidity();
    });
  }

  discountValueValidator(
    control: AbstractControl,
  ): { [key: string]: any } | null {
    const discountType = this.addDiscountForm?.get('discount_type')?.value;

    if (discountType === 'fixed') {
      return control.value > 0 ? null : { invalidFixedValue: true };
    } else if (discountType === 'percentage') {
      return control.value > 0 && control.value <= 100
        ? null
        : { invalidPercentageValue: true };
    }

    return null;
  }

  dateRangeValidator: ValidatorFn = (
    group: AbstractControl,
  ): { [key: string]: any } | null => {
    const startDate = group.get('start_date')?.value;
    const endDate = group.get('end_date')?.value;

    if (startDate && endDate && new Date(startDate) > new Date(endDate)) {
      return { invalidDateRange: true };
    }

    if (startDate && new Date(startDate) < new Date()) {
      return { startDateInPast: true };
    }

    return null;
  };

  get discountCodes() {
    return this.store()?.coupons ?? [];
  }

  onSubmitAddDiscountCode() {
    if (this.addDiscountForm.valid) {
      this.isLoading.set(true)
      this.storeService.addDiscountCode(this.addDiscountForm.value).subscribe({
        next: () => this.toggleModal(false),
        complete: () => this.isLoading.set(false)
      });
    } else {
      this.addDiscountForm.markAllAsTouched();
    }
  }



  deleteDiscountCode(id: string) {
    this.confirmation.confirm({
      header: 'Delete Discount Code',
      message: 'Are you sure you want to delete this discount code?',
      accept: () => {
         this.isLoading.set(true);
         this.storeService.deleteDiscountCode(id).subscribe({
           complete: () => this.isLoading.set(false),
         });
      },
      reject: () => {}
    })
  }

  toggleModal(value: boolean) {
    this.showModal = value;
    this.addDiscountForm.reset()
  }
}

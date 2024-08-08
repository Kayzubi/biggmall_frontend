import { Component } from '@angular/core';

@Component({
  selector: 'app-discounts',
  templateUrl: './discounts.component.html',
  styleUrl: './discounts.component.scss',
})
export class DiscountsComponent {
  showModal: boolean;
  showAddModal: boolean;


  startDate: Date | undefined
  endDate: Date | undefined
  discountType!: 'fixed' | 'percentage'


  constructor() {
    this.showModal = false;
    this.showAddModal = false;
  }

  toggleModal(value: boolean) {
    this.showModal = value;
  }

  toggleAddModal(value: boolean) {
    this.showAddModal = value;
  }
}

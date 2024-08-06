import { Component } from '@angular/core';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrl: './create-order.component.scss',
})
export class CreateOrderComponent {
  total: number;
  showDiscount: boolean;
  showModal: boolean;

  constructor() {
    this.showDiscount = false;
    this.total = 100000;
    this.showModal = false;
  }

  toggleModal(value: boolean) {
    this.showModal = value;
  }
}

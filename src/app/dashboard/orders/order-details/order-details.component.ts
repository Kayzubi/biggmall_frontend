import { Component } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.scss',
})
export class OrderDetailsComponent {
  total: number;
  showDiscount: boolean;
  showModal: boolean;

  constructor() {
    this.showDiscount = false;
    this.total = 100000;
    this.showModal = false;
  }
}

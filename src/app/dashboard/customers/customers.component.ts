import { Component } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss',
})
export class CustomersComponent {
  showModal: boolean;

  constructor() {
    this.showModal = false;
  }

  toggleModal(value: boolean) {
    this.showModal = value;
  }
}

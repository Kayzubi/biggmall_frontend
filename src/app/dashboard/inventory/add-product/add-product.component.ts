import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss',
})
export class AddProductComponent {
  showModal: boolean;

  hasVariants: boolean;
  onSale: boolean;

  constructor() {
    this.hasVariants = false;
    this.onSale = false;
    this.showModal = false;
  }

  toggleModal(value: boolean) {
    this.showModal = value;
  }
}

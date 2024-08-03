import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  showModal: boolean

  hasVariants: boolean
  onSale: boolean


  constructor () {
    this.hasVariants = false
    this.onSale = false
    this.showModal = false
  }


  toggleModal(value: boolean) {
    this.showModal = value
  }


}

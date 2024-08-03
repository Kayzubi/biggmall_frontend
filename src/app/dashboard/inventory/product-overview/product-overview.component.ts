import { Component } from '@angular/core';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrl: './product-overview.component.scss'
})
export class ProductOverviewComponent {
  products: any[]


  constructor () {
    this.products = Array.from({ length: 5}).map((_, index) => index + 1)
  }
}

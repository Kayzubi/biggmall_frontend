import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrl: './all-orders.component.scss',
})
export class AllOrdersComponent {
  orders: any[];

  constructor(private router: Router) {
    this.orders = [
      {
        name: 'Kizito Azubuike',
      },
      {
        name: 'Ugonna Azubuike',
      },
    ];
  }

  goToOrderDetails() {
    this.router.navigate(['/dashboard/orders/details'])
  }
}

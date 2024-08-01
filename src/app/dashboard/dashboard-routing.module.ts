import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { OverviewComponent } from './overview/overview.component';
import { OrdersComponent } from './orders/orders.component';
import { CustomersComponent } from './customers/customers.component';
import { CategoriesComponent } from './categories/categories.component';
import { DiscountsComponent } from './discounts/discounts.component';
import { StorefrontComponent } from './storefront/storefront.component';
import { InventoryComponent } from './inventory/inventory.component';
import { CreateOrderComponent } from './orders/create-order/create-order.component';
import { OrderDetailsComponent } from './orders/order-details/order-details.component';
import { AllOrdersComponent } from './orders/all-orders/all-orders.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: OverviewComponent,
      },
      {
        path: 'orders',
        component: OrdersComponent,
        title: 'Orders',
        children: [
          {
            path: '',
            component: AllOrdersComponent,
          },
          {
            path: 'create',
            component: CreateOrderComponent,
          },
          {
            path: 'details',
            component: OrderDetailsComponent,
          },
        ],
      },

      {
        path: 'products',
        component: InventoryComponent,
      },
      {
        path: 'customers',
        component: CustomersComponent,
      },
      {
        path: 'categories',
        component: CategoriesComponent,
      },
      {
        path: 'discounts',
        component: DiscountsComponent,
      },
      {
        path: 'store',
        component: StorefrontComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}

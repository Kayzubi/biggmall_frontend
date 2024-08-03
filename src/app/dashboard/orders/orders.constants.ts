import { Route } from "@angular/router";
import { AllOrdersComponent } from "./all-orders/all-orders.component";
import { CreateOrderComponent } from "./create-order/create-order.component";
import { OrderDetailsComponent } from "./order-details/order-details.component";

export const orderRoutes: Route[] = [
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
];

import { Route } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';

export const inventoryRoutes: Route[] = [
  {
    path: '',
    component: ProductOverviewComponent,
  },
  {
    path: 'add',
    component: AddProductComponent,
  },

  {
    path: ':id',
    component: ProductDetailsComponent
  }
];

import { NgModule } from '@angular/core';
import {
  CommonModule,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
} from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { OverviewComponent } from './overview/overview.component';
import { OrdersComponent } from './orders/orders.component';
import { InventoryComponent } from './inventory/inventory.component';
import { CategoriesComponent } from './categories/categories.component';
import { CustomersComponent } from './customers/customers.component';
import { DiscountsComponent } from './discounts/discounts.component';
import { StorefrontComponent } from './storefront/storefront.component';
import { SettingsComponent } from './settings/settings.component';
import { StatItemComponent } from './components/stat-item/stat-item.component';
import { SharedUIModule } from '../shared/shared-ui.module';
import { ProductItemStatComponent } from './components/product-item-stat/product-item-stat.component';
import { OrderItemSmallComponent } from './components/order-item-small/order-item-small.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CreateOrderComponent } from './orders/create-order/create-order.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { OrderDetailsComponent } from './orders/order-details/order-details.component';
import { AllOrdersComponent } from './orders/all-orders/all-orders.component';
import { AddProductComponent } from './inventory/add-product/add-product.component';
import { ProductDetailsComponent } from './inventory/product-details/product-details.component';
import { ProductOverviewComponent } from './inventory/product-overview/product-overview.component';
import { SharedFormModule } from "../shared/shared-form.module";
import { CustomerComponent } from './customers/customer/customer.component';
import { StoreDetailsComponent } from './storefront/store-details/store-details.component';
import { ThemeComponent } from './storefront/theme/theme.component';
import { SocialMediaComponent } from './storefront/social-media/social-media.component';
import { BankAccountComponent } from './storefront/bank-account/bank-account.component';
import { ThemeItemComponent } from './components/theme-item/theme-item.component';
import { ShipppingOptionComponent } from './components/shippping-option/shippping-option.component';

@NgModule({
  declarations: [
    DashboardComponent,
    OverviewComponent,
    OrdersComponent,
    InventoryComponent,
    CategoriesComponent,
    CustomersComponent,
    DiscountsComponent,
    StorefrontComponent,
    SettingsComponent,
    StatItemComponent,
    ProductItemStatComponent,
    OrderItemSmallComponent,
    SidebarComponent,
    CreateOrderComponent,
    PageHeaderComponent,
    OrderDetailsComponent,
    AllOrdersComponent,
    AddProductComponent,
    ProductDetailsComponent,
    ProductOverviewComponent,
    CustomerComponent,
    StoreDetailsComponent,
    ThemeComponent,
    SocialMediaComponent,
    BankAccountComponent,
    ThemeItemComponent,
    ShipppingOptionComponent,
  ],
  imports: [
    CommonModule,
    AvatarModule,
    BadgeModule,
    DashboardRoutingModule,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    SharedUIModule,
    ChartModule,
    TableModule,
    SharedFormModule,

],
})
export class DashboardModule {}

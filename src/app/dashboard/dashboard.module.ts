import { NgModule } from '@angular/core';
import {
  CommonModule,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
} from '@angular/common';

import { NgIconsModule } from '@ng-icons/core';
import {
  ionNotificationsOutline,
  ionSettingsOutline,
  ionHelpCircleOutline,
  ionSunnyOutline,
  ionMoonOutline,
  ionMoon,
} from '@ng-icons/ionicons';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { SplitButtonModule } from 'primeng/splitbutton';

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
  ],
  imports: [
    CommonModule,
    AvatarModule,
    BadgeModule,
    DashboardRoutingModule,
    NgIconsModule.withIcons({
      ionHelpCircleOutline,
      ionNotificationsOutline,
      ionSunnyOutline,
      ionMoonOutline,
      ionMoon,
      ionSettingsOutline,
    }),
    SplitButtonModule,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    SharedUIModule
  ],
})
export class DashboardModule {}

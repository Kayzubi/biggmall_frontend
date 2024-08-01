import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SidebarModule } from 'primeng/sidebar';
import { CarouselModule } from 'primeng/carousel';
import { CardComponent } from '../components/shared/card/card.component';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ButtonComponent } from '../components/button/button.component';
import { NgIconsModule } from '@ng-icons/core';
import {
  ionArchiveOutline,
  ionTimeOutline,
  ionAnalyticsOutline,
  ionLogoInstagram,
  ionLogoTwitter,
  ionLogoYoutube,
  ionNotificationsOutline,
  ionSettingsOutline,
  ionHelpCircleOutline,
  ionSunnyOutline,
  ionMoonOutline,
  ionStorefrontOutline,
  ionMoon,
  ionHomeOutline,
  ionFileTrayStackedOutline,
  ionGridOutline,
  ionLayersOutline,
  ionPeopleOutline,
  ionPricetagsOutline,
  ionTrendingUpOutline,
  ionLogOutOutline,
  ionAddOutline,
  ionArrowBackOutline
} from '@ng-icons/ionicons';
import { TableComponent } from '../components/table/table.component';


@NgModule({
  declarations: [CardComponent, ButtonComponent, TableComponent],
  imports: [
    ButtonModule,
    RippleModule,
    SidebarModule,
    CarouselModule,
    NgIconsModule.withIcons({
      ionHelpCircleOutline,
      ionNotificationsOutline,
      ionSunnyOutline,
      ionMoonOutline,
      ionMoon,
      ionSettingsOutline,
      ionStorefrontOutline,
      ionHomeOutline,
      ionFileTrayStackedOutline,
      ionGridOutline,
      ionLayersOutline,
      ionPeopleOutline,
      ionPricetagsOutline,
      ionTrendingUpOutline,
      ionLogOutOutline,
      ionArchiveOutline,
      ionTimeOutline,
      ionAnalyticsOutline,
      ionLogoInstagram,
      ionLogoTwitter,
      ionLogoYoutube,
      ionAddOutline,
      ionArrowBackOutline
    }),
  ],
  exports: [
    ButtonModule,
    RippleModule,
    SidebarModule,
    CarouselModule,
    CardComponent,
    TieredMenuModule,
    PanelMenuModule,
    ButtonComponent,
    NgIconsModule,
    TableComponent
  ],
})
export class SharedUIModule {}

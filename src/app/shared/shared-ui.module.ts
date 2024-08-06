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
import { ChipModule } from 'primeng/chip';
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
  ionArrowBackOutline,
  ionPencilOutline,
  ionCloudUploadOutline,
  ionImagesOutline,
  ionCloseOutline,
  ionRemoveOutline

} from '@ng-icons/ionicons';
import { TableComponent } from '../components/table/table.component';
import { DialogModule } from 'primeng/dialog';
import { PopupComponent } from '../components/popup/popup.component';



@NgModule({
  declarations: [
    CardComponent,
    ButtonComponent,
    TableComponent,
    PopupComponent,
  ],
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
      ionArrowBackOutline,
      ionPencilOutline,
      ionCloudUploadOutline,
      ionImagesOutline,
      ionCloseOutline,
      ionRemoveOutline
    }),
    DialogModule,
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
    DialogModule,
    TableComponent,
    PopupComponent,
    ChipModule
  ],
})
export class SharedUIModule {}

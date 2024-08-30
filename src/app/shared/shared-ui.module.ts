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
  ionLogoFacebook,
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
  ionRemoveOutline,
  ionEyeOutline,
  ionTrashBinOutline,
  ionColorPaletteOutline,
  ionWalletOutline,
  ionCopyOutline,
  ionCheckmarkCircle,
} from '@ng-icons/ionicons';
import { TableComponent } from '../components/table/table.component';
import { DialogModule } from 'primeng/dialog';
import { PopupComponent } from '../components/popup/popup.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmDeletePopupComponent } from '../components/confirm-delete-popup/confirm-delete-popup.component';
import { LoaderComponent } from '../components/loader/loader.component';




@NgModule({
  declarations: [
    CardComponent,
    ButtonComponent,
    TableComponent,
    PopupComponent,
    ConfirmDeletePopupComponent,
    LoaderComponent
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
      ionRemoveOutline,
      ionEyeOutline,
      ionTrashBinOutline,
      ionColorPaletteOutline,
      ionWalletOutline,
      ionCopyOutline,
      ionCheckmarkCircle,
      ionLogoFacebook,
    }),
    DialogModule,
    ConfirmDialogModule,
  ],
  exports: [
    ButtonModule,
    ConfirmDialogModule,
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
    ChipModule,
    ConfirmDeletePopupComponent,
    LoaderComponent
  ],
})
export class SharedUIModule {}

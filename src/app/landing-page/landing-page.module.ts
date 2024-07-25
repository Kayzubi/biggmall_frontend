import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconsModule } from '@ng-icons/core';
import { AccordionModule } from 'primeng/accordion';
import {
  ionArchiveOutline,
  ionTimeOutline,
  ionAnalyticsOutline,
  ionLogoInstagram,
  ionLogoTwitter,
  ionLogoYoutube
} from '@ng-icons/ionicons';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { SharedUIModule } from '../shared/shared-ui.module';
import { FooterComponent } from './components/footer/footer.component';
import { SectionHeaderComponent } from './components/section-header/section-header.component';
import { FeatureItemComponent } from './components/feature-item/feature-item.component';
import { ThemesSectionComponent } from './components/themes-section/themes-section.component';
import { FaqSectionComponent } from './components/faq-section/faq-section.component';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageBannerComponent } from './components/page-banner/page-banner.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    NavbarComponent,
    FooterComponent,
    SectionHeaderComponent,
    FeatureItemComponent,
    ThemesSectionComponent,
    FaqSectionComponent,
    HomeComponent,
    FeaturesComponent,
    HowItWorksComponent,
    PageBannerComponent,
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    SharedUIModule,
    NgIconsModule.withIcons({
      ionArchiveOutline,
      ionAnalyticsOutline,
      ionTimeOutline,
      ionLogoInstagram,
      ionLogoTwitter,
      ionLogoYoutube,
    }),
    AccordionModule,
  ],
})
export class LandingPageModule {}

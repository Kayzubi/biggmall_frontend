import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SharedUIModule } from '../shared/shared-ui.module';


@NgModule({
  declarations: [
    LandingPageComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    SharedUIModule
  ]
})
export class LandingPageModule { }

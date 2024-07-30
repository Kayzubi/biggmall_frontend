import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnboardingRoutingModule } from './onboarding-routing.module';
import { OnboardingComponent } from './onboarding.component';
import { CreateStoreComponent } from './create-store/create-store.component';
import { StoreDetailsComponent } from './store-details/store-details.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { LaunchStoreComponent } from './launch-store/launch-store.component';


@NgModule({
  declarations: [
    OnboardingComponent,
    CreateStoreComponent,
    StoreDetailsComponent,
    AddProductComponent,
    AccountDetailsComponent,
    LaunchStoreComponent
  ],
  imports: [
    CommonModule,
    OnboardingRoutingModule
  ]
})
export class OnboardingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { SharedUIModule } from '../shared/shared-ui.module';
import { SharedFormModule } from '../shared/shared-form.module';


@NgModule({
  declarations: [
    AuthComponent,
    SignUpComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedUIModule,
    SharedFormModule
  ]
})
export class AuthModule { }

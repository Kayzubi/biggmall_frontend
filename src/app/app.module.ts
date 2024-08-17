import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { authInterceptor } from './interceptors/auth.interceptor';



@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ToastModule],
  providers: [provideHttpClient(withInterceptors([authInterceptor])), provideAnimationsAsync(), MessageService, ConfirmationService],
  bootstrap: [AppComponent],
})
export class AppModule {}

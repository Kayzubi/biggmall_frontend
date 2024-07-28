import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SidebarModule } from 'primeng/sidebar';
import { CarouselModule } from 'primeng/carousel';


@NgModule({
  imports: [
    ButtonModule,
    RippleModule,
    SidebarModule,
    CarouselModule,
  ],
  exports: [ButtonModule, RippleModule, SidebarModule, CarouselModule],
})
export class SharedUIModule {}

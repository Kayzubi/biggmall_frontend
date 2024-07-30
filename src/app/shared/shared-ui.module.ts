import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SidebarModule } from 'primeng/sidebar';
import { CarouselModule } from 'primeng/carousel';
import { CardComponent } from '../components/shared/card/card.component';


@NgModule({
  declarations: [CardComponent],
  imports: [
    ButtonModule,
    RippleModule,
    SidebarModule,
    CarouselModule,
  ],
  exports: [ButtonModule, RippleModule, SidebarModule, CarouselModule, CardComponent],
})
export class SharedUIModule {}

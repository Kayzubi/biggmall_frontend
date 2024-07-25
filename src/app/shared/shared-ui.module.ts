import { NgModule } from "@angular/core";
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SidebarModule } from 'primeng/sidebar';



@NgModule({
  imports: [ ButtonModule, RippleModule, SidebarModule],
  exports: [ButtonModule, RippleModule, SidebarModule]
})
export class SharedUIModule {}

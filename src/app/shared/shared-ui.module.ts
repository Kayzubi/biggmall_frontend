import { NgModule } from "@angular/core";
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';


@NgModule({
  imports: [ ButtonModule, RippleModule],
  exports: [ButtonModule, RippleModule]
})
export class SharedUIModule {}

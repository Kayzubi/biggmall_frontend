import { NgModule } from "@angular/core";


import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';

import { FormInputComponent } from '../components/shared/form-input/form-input.component';
import { CommonModule } from "@angular/common";




@NgModule({
  declarations: [FormInputComponent],
  imports: [InputTextModule, FloatLabelModule, CommonModule],
  exports: [FormInputComponent, PasswordModule],
})
export class SharedFormModule {}

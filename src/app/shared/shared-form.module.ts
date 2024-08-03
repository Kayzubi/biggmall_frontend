import { NgModule } from "@angular/core";


import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipsModule } from 'primeng/chips';
import { DropdownModule } from 'primeng/dropdown';
import { ColorPickerModule } from 'primeng/colorpicker';
import { InputNumberModule } from 'primeng/inputnumber';
import { FileUploadModule } from 'primeng/fileupload';

import { FormInputComponent } from '../components/shared/form-input/form-input.component';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [FormInputComponent],
  imports: [InputTextModule, FloatLabelModule, CommonModule, FormsModule],
  exports: [
    FormInputComponent,
    PasswordModule,
    InputSwitchModule,
    CheckboxModule,
    ChipsModule,
    DropdownModule,
    ColorPickerModule,
    InputTextareaModule,
    InputNumberModule,
    FileUploadModule,
    FormsModule
  ],
})
export class SharedFormModule {}

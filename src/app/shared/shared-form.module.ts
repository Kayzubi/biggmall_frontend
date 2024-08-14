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
import { CalendarModule } from 'primeng/calendar';
import { RadioButtonModule } from 'primeng/radiobutton';

import { FormInputComponent } from '../components/shared/form-input/form-input.component';
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormInputErrorComponent } from "../components/form-input-error/form-input-error.component";





@NgModule({
  declarations: [FormInputComponent, FormInputErrorComponent],
  imports: [InputTextModule, FloatLabelModule, CommonModule, ReactiveFormsModule, FormsModule],
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
    ReactiveFormsModule,
    FormsModule,
    CalendarModule,
    RadioButtonModule
  ],
})
export class SharedFormModule {}

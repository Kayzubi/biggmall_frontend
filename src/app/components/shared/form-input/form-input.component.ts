import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.scss'
})
export class FormInputComponent {
  @Input({ required: true}) label!: string
  @Input({ required: true}) inputName!: string
  @Input() description?: string

}

import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.scss',
})
export class FormInputComponent implements OnInit {
  @Input() form?: FormGroup;
  @Input({ required: true }) label!: string;
  @Input({ required: true }) inputName!: string;
  @Input() description?: string;
  @Input() errorMessages?: { [key: string]: string };

  formControl: AbstractControl | null = null;

  ngOnInit(): void {
    this.formControl = this.form ? this.form.get(this.inputName) : null;
  }
}

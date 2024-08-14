import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-input-error',
  templateUrl: './form-input-error.component.html',
  styleUrl: './form-input-error.component.scss',
})
export class FormInputErrorComponent {
  @Input() control: AbstractControl | null = null;
  @Input() messages?: { [key: string]: string };
  @Input({required: true}) label!: string

  get errorKeys(): string[] {
    return this.control ? Object.keys(this.control.errors || {}) : [];
  }

  getErrorMessage(errorKey: string): string {
    const messages: { [key: string]: string } = {
      required: `${this.label} is required.`,
      minlength: `Minimum length required.`,
      maxlength: `Maximum length exceeded.`,
      email: 'Please enter a valid email address.',
      pattern: 'Invalid format.',
    };
    return {...messages, ...this.messages}[errorKey] || 'Invalid field.';
  }
}

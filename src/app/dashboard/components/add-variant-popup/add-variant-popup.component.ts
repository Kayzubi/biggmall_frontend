import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Variant } from '../../../models/products.models';

@Component({
  selector: 'app-add-variant-popup',
  templateUrl: './add-variant-popup.component.html',
  styleUrl: './add-variant-popup.component.scss',
})
export class AddVariantPopupComponent {
  showModal = signal<boolean>(false);
  @Input() loading?: boolean;
  @Output() handleAddVariant = new EventEmitter<Partial<Variant>>();

  addVariantForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addVariantForm = this.fb.group({
      group_name: ['', [Validators.required]],
      option_name: [''],
      option_quantity: [null],
      options: this.fb.array([], this.minArrayLengthValidator(1)),
    });
  }

  minArrayLengthValidator(min: number) {
    return (control: AbstractControl) => {
      const formArray = control as FormArray;
      return formArray.length >= min
        ? null
        : {
            minLengthArray: {
              valid: false,
              actualLength: formArray.length,
              requiredLength: min,
            },
          };
    };
  }

  get addedNewVariants() {
    return this.addVariantForm.get('options') as FormArray;
  }

  addNewVarianntOption() {
    if (
      this.addVariantForm.value.option_name &&
      this.addVariantForm.value.option_quantity
    ) {
      this.addedNewVariants.push(
        this.fb.control({
          name: this.addVariantForm.value.option_name,
          quantity: this.addVariantForm.value.option_quantity,
        }),
      );
      this.addVariantForm.get('option_name')?.reset('');
      this.addVariantForm.get('option_quantity')?.reset(null);
    }
  }

  removeVariantOption(index: number) {
    this.addedNewVariants.removeAt(index);
  }

  onSubmitNewVariant() {
    if (this.addVariantForm.valid) {
      this.handleAddVariant.emit({
        group_name: this.addVariantForm.value.group_name,
        options: this.addVariantForm.value.options
      })
    } else {
      this.addVariantForm.markAllAsTouched();
      console.log(this.addVariantForm.controls);
    }
  }

  toggleModal(arg: boolean) {
    this.showModal.set(arg)
    this.addVariantForm.patchValue({
      group_name: '',
      option_quantity: null,
      option_name: '',
    });
    this.addVariantForm.setControl(
      'options',
      this.fb.array([], this.minArrayLengthValidator(1)),
    );
  }
}

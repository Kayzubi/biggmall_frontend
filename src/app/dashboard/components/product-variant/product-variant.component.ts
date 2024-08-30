import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Variant } from '../../../models/products.models';

@Component({
  selector: 'app-product-variant',
  templateUrl: './product-variant.component.html',
  styleUrl: './product-variant.component.scss',
})
export class ProductVariantComponent {
  @Input({ required: true }) variant!: Variant;
  @Output() deleteVariant = new EventEmitter();

  handleDelete() {
    this.deleteVariant.emit();
  }

  buildVariants(): string[] {
    return this.variant.options.map((option) => option.name);
  }
}

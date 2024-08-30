import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ShippingOption } from '../../../models/store.models';


@Component({
  selector: 'app-shippping-option',
  templateUrl: './shippping-option.component.html',
  styleUrl: './shippping-option.component.scss',
})
export class ShipppingOptionComponent {
  @Input({ required: true }) option!: ShippingOption;
  @Output() delete = new EventEmitter<string>()

  constructor(
  ) {}

  handleDelete() {
    this.delete.emit(this.option._id)
  }
}

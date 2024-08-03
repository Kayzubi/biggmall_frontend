import { Component, EventEmitter, Input, Output } from '@angular/core';

type Position = 'center'
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'topleft'
    | 'topright'
    | 'bottomleft'
    | 'bottomright';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss',
})
export class PopupComponent {
  @Input() position: Position = 'center'
  @Input({ required: true}) visible!: boolean
  @Output() showModal = new EventEmitter<boolean>()


  toggleModal(event: boolean) {
    this.showModal.emit(event)
  }

}

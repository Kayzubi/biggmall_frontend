import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input({ required: true}) type!: 'submit' | 'reset' | 'button'
  @Input() label?: string;
  @Input() styleClass?: string;
  @Input() icon?: string
  @Input() loading?: boolean
  @Input() disabled?: boolean
  @Input() route?: string
  @Output() onClick = new EventEmitter()


  constructor (private router: Router) {}

  handleClick(event: any) {
    if (this.route) {
      this.router.navigate([this.route])
      return
    }

    if(this.onClick) this.onClick.emit(event)
  }
}

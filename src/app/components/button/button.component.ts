import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  animations: [
    trigger('loadingState', [
      state(
        'loading',
        style({
          width: '44px',
          borderRadius: '22px',
          margin: 'auto',
          opacity: 0.8,
        }),
      ),
      state(
        'not-loading',
        style({
          width: '',
          borderRadius: '6px',
        }),
      ),
      transition('loading <=> not-loading', [
        animate('0.5s cubic-bezier(0.4, 0.0, 0.2, 1)'), // Ease-out for smooth finish
      ]),
    ]),
  ],
})
export class ButtonComponent {
  @Input() type: 'submit' | 'reset' | 'button' = 'button';
  @Input() variant: 'round' | 'main' = 'main';
  @Input() size: 'large' | 'medium' | 'normal' | 'extralarge' = 'normal';
  @Input() label?: string;
  @Input() styleClass?: string;
  @Input() icon?: string;
  @Input() loading?: boolean;
  @Input() disabled?: boolean;
  @Input() route?: string;
  @Output() onClick = new EventEmitter();

  constructor(private router: Router) {}

  handleClick(event: any) {
    if (this.route) {
      this.router.navigate([this.route]);
      return;
    }

    if (this.onClick) this.onClick.emit(event);
  }
}

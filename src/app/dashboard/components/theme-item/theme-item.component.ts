import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ThemeOptions } from '../../../models/store.models';

@Component({
  selector: 'app-theme-item',
  templateUrl: './theme-item.component.html',
  styleUrl: './theme-item.component.scss',
})
export class ThemeItemComponent {
  @Input({ required: true }) theme!: ThemeOptions

  @Input({ required: true }) activeTheme!: ThemeOptions
  @Input() loading?: boolean

  @Output() selectTheme = new EventEmitter<
    'minimal' | 'trendy' | 'classic' | 'retro' | 'antique'
  >();


  onThemeSelect() {
    this.selectTheme.emit(this.theme)
  }
}

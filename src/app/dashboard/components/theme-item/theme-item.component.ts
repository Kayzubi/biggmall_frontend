import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ThemeOptions } from '../../storefront/theme/theme.component';

@Component({
  selector: 'app-theme-item',
  templateUrl: './theme-item.component.html',
  styleUrl: './theme-item.component.scss',
})
export class ThemeItemComponent {
  @Input({ required: true }) theme!: ThemeOptions

  @Input({ required: true }) activeTheme!: ThemeOptions

  @Output() selectTheme = new EventEmitter<
    'minimal' | 'trendy' | 'classic' | 'retro' | 'antique'
  >();


  onThemeSelect(arg: ThemeOptions) {
    this.selectTheme.emit(arg)
  }
}

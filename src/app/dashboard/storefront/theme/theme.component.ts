import { Component } from '@angular/core';


export type ThemeOptions = 'minimal' | 'trendy' | 'classic' | 'retro' | 'antique';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.scss',
})
export class ThemeComponent {
  themes: ThemeOptions[];
  activeTheme: ThemeOptions;
  primaryColor: string
  secondaryColor: string
  banners: any[]

  constructor() {
    this.themes = ['antique', 'trendy', 'minimal', 'classic', 'retro'];
    this.activeTheme = 'trendy'
    this.primaryColor = '#da5726';
    this.secondaryColor = '#ffffff'
    this.banners = Array.from({ length: 0}).map((_, index) => (`${index}`) )
  }

  selectNewTheme(arg: ThemeOptions) {
    this.activeTheme = arg
  }
}

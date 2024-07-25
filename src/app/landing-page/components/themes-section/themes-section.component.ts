import { Component } from '@angular/core';

@Component({
  selector: 'app-themes-section',
  templateUrl: './themes-section.component.html',
  styleUrl: './themes-section.component.scss'
})
export class ThemesSectionComponent {
  themes: string[]

  constructor () {
    this.themes = Array.from({ length: 3}).map((item) => (`${item}`))
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-themes-section',
  templateUrl: './themes-section.component.html',
  styleUrl: './themes-section.component.scss',
})
export class ThemesSectionComponent {
  themes: string[];
  responsiveOptions: any[]

  constructor() {
    this.themes = [
      'antique',
      'classic',
      'minimal',
      'retro',
      'trendy',
    ]

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-themes-section',
  templateUrl: './themes-section.component.html',
  styleUrl: './themes-section.component.scss',
})
export class ThemesSectionComponent {
  themes: number[];
  responsiveOptions: any[]

  constructor() {
    this.themes = Array.from({ length: 7 }).map((_, index) => index + 1);

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

import { Component } from '@angular/core';

import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  theme: 'light' | 'dark' | 'dark-blue'

  themeOptions: MenuItem[]

  constructor () {
    this.theme = 'light'

    this.themeOptions = [
      {
        label: 'Light',
        command: () => {
          this.theme = 'light';
        },
      },
      {
        label: 'Dark',
        command: () => {
          this.theme = 'dark';
        },
      },
      {
        label: 'Blue',
        command: () => {
          this.theme = 'dark-blue';
        },
      },
    ];
  }

}

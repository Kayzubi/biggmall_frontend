import { Component, OnInit, computed, signal } from '@angular/core';

import { MenuItem } from 'primeng/api';
import { AuthService } from '../services/auth.service';
import { User } from '../models/auth.models';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  loading: boolean = false;
  themeOptions: MenuItem[];
  user = computed( () => this.authService.user());
  theme: 'light' | 'dark' | 'dark-blue' = this.user()?.dashboard_theme ?? 'light';

  constructor(private authService: AuthService) {

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

  ngOnInit(): void {
    if (!this.authService.user()) {
      this.loading = true;

      this.authService.retrieveUserSession().subscribe({
        next: () => {
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        },
      });
    }
  }
}

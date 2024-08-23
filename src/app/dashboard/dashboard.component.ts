import { Component, OnInit, computed, signal } from '@angular/core';

import { MenuItem } from 'primeng/api';
import { AuthService } from '../services/auth.service';
import { DashboardTheme, User } from '../models/auth.models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  themeOptions: MenuItem[];
  user = computed(() => this.authService.user());
  loading = computed(() => this.authService.loading())

  constructor(private authService: AuthService) {
    this.themeOptions = [
      {
        label: 'Light',
        command: () => {
          this.handleUpdateUserTheme('light');
        },
      },
      {
        label: 'Dark',
        command: () => {
          this.handleUpdateUserTheme('dark');
        },
      },
      {
        label: 'Blue',
        command: () => {
          this.handleUpdateUserTheme('dark-blue');
        },
      },
    ];
  }


  get theme() {
    return this.user()?.dashboard_theme ?? 'light'
  }

  handleUpdateUserTheme(theme: DashboardTheme) {}
}

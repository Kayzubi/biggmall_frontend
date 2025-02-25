import { Component, computed } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Biggmall';
  loading = computed(() => this.authService.loading());
  user = computed(() => this.authService.user());

  get theme() {
    return this.user()?.dashboard_theme ?? 'light';
  }

  constructor(private authService: AuthService) {}
}

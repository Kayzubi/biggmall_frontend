import { Component, computed } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Biggmall';
  loading = computed(() => this.authService.loading())

  constructor (private authService: AuthService) {}
}

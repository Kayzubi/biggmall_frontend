import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss'
})
export class PageHeaderComponent {
  @Input() header?: string
  @Input() showBackButton?: boolean = false

  constructor(private location: Location) {}

  goBack() {
    this.location.back()
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrl: './section-header.component.scss'
})
export class SectionHeaderComponent {
  @Input({ required: true})  header!: string
  @Input({ required: true }) subtext!: string

}

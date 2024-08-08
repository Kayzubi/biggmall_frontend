import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  @Input({ required: true }) headers!: string[];
  @Input() minWidth?: string = '50rem';
  @Input() maxWidth?: string;
}

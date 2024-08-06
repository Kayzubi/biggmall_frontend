import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent {
  showModal: boolean;
  showAddModal: boolean;

  constructor() {
    this.showModal = false;
    this.showAddModal = false;
  }

  toggleModal(value: boolean) {
    this.showModal = value;
  }

  toggleAddModal(value: boolean) {
    this.showAddModal = value;
  }
}

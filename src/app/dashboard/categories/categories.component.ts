import { Component, computed, signal } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent {
  showModal: boolean;
  showAddModal: boolean;
  store = computed(() => this.storeService.store())
  isLoading = signal<boolean>(false)

  addCategoryForm: FormGroup


  constructor(private storeService: StoreService, private fb: FormBuilder, private confirmation: ConfirmationService) {
    this.showModal = false;
    this.showAddModal = false;
    this.addCategoryForm = fb.group({
      name: ['', Validators.required],
      description: [''],
      media: ['']
    })
  }

  get categories () {
    return this.store()?.categories ?? []
  }

  toggleModal(value: boolean) {
    this.showModal = value;
  }

  onAddCategory() {
    if(this.addCategoryForm.valid) {
      this.isLoading.set(true)
      this.storeService.addProductCategory(this.addCategoryForm.value).subscribe({
        next: () => {
          this.isLoading.set(false);
          this.toggleAddModal(false)
        },
        error: () => this.isLoading.set(false)
      })
    } else {
      this.addCategoryForm.markAllAsTouched()
    }
  }

  deleteCategory(id: string) {
    this.confirmation.confirm({
      header: 'Delete Category?',
      message: 'Are you sure you want to delete this category?',
      accept: () => {
        this.isLoading.set(true)
        this.storeService.deleteProductCategory(id).subscribe({
          next: () => this.isLoading.set(false),
          error: () => this.isLoading.set(false),
        });
      },
      reject: () => {}
    })
  }

  toggleAddModal(value: boolean) {
    this.showAddModal = value;
    this.addCategoryForm.reset()
  }
}

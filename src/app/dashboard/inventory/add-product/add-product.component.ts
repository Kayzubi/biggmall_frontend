import { Component, ViewChild, computed, signal } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../../services/product.service';
import { ToastService } from '../../../services/toast.service';
import { StoreService } from '../../../services/store.service';
import { Variant } from '../../../models/products.models';
import { AddVariantPopupComponent } from '../../components/add-variant-popup/add-variant-popup.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss',
})
export class AddProductComponent {
  store = computed(() => this.storeService.store());
  @ViewChild(AddVariantPopupComponent)
  addVariantComponent!: AddVariantPopupComponent;
  loading = signal<boolean>(false);
  addProductForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private toast: ToastService,
    private storeService: StoreService,
    private router: Router,
  ) {
    this.addProductForm = this.fb.group({
      name: ['', [Validators.required]],
      price: [0, [Validators.required, Validators.min(100)]],
      description: [''],
      active: [true],
      available_quantity: [0, [Validators.required, Validators.min(0)]],
      has_variants: [false],
      categories: [],
      slug: [''],
      on_sale: this.fb.group({
        is_on_sale: [false],
        sale_price: [0,[Validators.min(0)]],
      }),
      variants: this.fb.array([]),
    });
  }

  get categories() {
    return (
      this.store()?.categories.map((cat) => ({
        name: cat.name,
      })) ?? []
    );
  }

  get addedVariants() {
    return this.addProductForm.get('variants') as FormArray;
  }

  onSubmitNewVariant(data: Partial<Variant>) {
    this.addedVariants.push(this.fb.control(data));
    this.toggleModal(false);
  }

  deletAddedVariant(index: number) {
    this.addedVariants.removeAt(index);
  }

  addNewProduct() {
    if (this.addProductForm.valid) {
      console.log(this.addProductForm.value);
      this.loading.set(true);
      this.productService
        .addNewStoreProduct({
          ...this.addProductForm.value,
          categories: this.addProductForm.value.categories.map(
            (item: { name: string }) => item.name,
          ),
          available_quantity: this.addProductForm.value.has_variants
            ? 0
            : this.addProductForm.value.available_quantity,
        })
        .subscribe({
          next: () => {
            this.toast.success('Product Added Succesfully');
            this.addProductForm.reset();
            this.router.navigate(['/dashboard/products']);
            this.loading.set(false);
          },
          error: (err) => {
            this.toast.error(err);
            this.loading.set(false);
          },
        });
    } else {
      this.addProductForm.markAllAsTouched();
    }
  }

  toggleModal(value: boolean) {
    this.addVariantComponent.toggleModal(value);
  }
}

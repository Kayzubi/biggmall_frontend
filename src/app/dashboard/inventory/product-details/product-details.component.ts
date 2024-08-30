import { Component, Input, OnInit, computed, signal } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product, Variant } from '../../../models/products.models';
import { ToastService } from '../../../services/toast.service';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { StoreService } from '../../../services/store.service';
import { Category } from '../../../models/store.models';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit {
  @Input() id!: string;
  loading = signal<boolean>(false);
  updatingProdut = signal<boolean>(false);
  addingVariant = signal<boolean>(false);
  product: Product | undefined;
  store = computed(() => this.storeService.store());

  showModal: boolean;
  productForm!: FormGroup;
  addVariantForm: FormGroup;

  constructor(
    private productService: ProductService,
    private toast: ToastService,
    private fb: FormBuilder,
    private storeService: StoreService,
  ) {
    this.showModal = false;
    this.addVariantForm = this.fb.group({
      group_name: ['', [Validators.required]],
      option_name: [''],
      option_quantity: [null],
      options: this.fb.array([], this.minArrayLengthValidator(1)),
    });
  }

  toggleModal(value: boolean) {
    this.showModal = value;
    this.addVariantForm.patchValue({
      group_name: '',
      option_quantity: null,
      option_name: '',
    });
    this.addVariantForm.setControl(
      'options',
      this.fb.array([], this.minArrayLengthValidator(1)),
    );
  }

  get categories() {
    return (
      this.store()?.categories.map((cat) => ({
        name: cat.name,
      })) ?? []
    );
  }

  ngOnInit(): void {
    this.loading.set(true);
    this.productService.getProductbyId(this.id).subscribe({
      next: (res) => {
        this.product = res;
        this.initializeForm(res);
        this.loading.set(false);
      },
      error: (err) => {
        this.toast.error(err);
        this.loading.set(false);
      },
    });
  }

  private initializeForm(product: Product) {
    this.productForm = this.fb.group({
      name: [product.name, [Validators.required]],
      price: [product.price, [Validators.required, Validators.min(0)]],
      description: [product.description],
      active: [product.active],
      available_quantity: [
        product.available_quantity,
        [Validators.required, Validators.min(0)],
      ],
      has_variants: [product.has_variants || false],
      categories: [product.categories.map((item) => ({ name: item }))],
      slug: [product.slug],
      on_sale: this.fb.group({
        is_on_sale: [product.on_sale?.is_on_sale || false],
        sale_price: [product.on_sale?.sale_price || 0, Validators.min(0)],
      }),
    });
  }

  minArrayLengthValidator(min: number) {
    return (control: AbstractControl) => {
      const formArray = control as FormArray;
      return formArray.length >= min
        ? null
        : {
            minLengthArray: {
              valid: false,
              actualLength: formArray.length,
              requiredLength: min,
            },
          };
    };
  }

  buildVariants(variant: Variant): string[] {
    return variant.options.map((option) => option.name);
  }

  get addedNewVariants() {
    return this.addVariantForm.get('options') as FormArray;
  }

  addNewVarianntOption() {
    if (
      this.addVariantForm.value.option_name &&
      this.addVariantForm.value.option_quantity
    ) {
      this.addedNewVariants.push(
        this.fb.control({
          name: this.addVariantForm.value.option_name,
          quantity: this.addVariantForm.value.option_quantity,
        }),
      );
      this.addVariantForm.get('option_name')?.reset('');
      this.addVariantForm.get('option_quantity')?.reset(null);
    }
  }

  removeVariantOption(index: number) {
    this.addedNewVariants.removeAt(index);
  }

  onSubmitNewVariant() {
    if (this.addVariantForm.valid) {
      this.addingVariant.set(true);
      this.productService
        .addProductVariant(this.product?._id!, {
          group_name: this.addVariantForm.value.group_name,
          options: this.addVariantForm.value.options,
        })
        .subscribe({
          next: (res) => {
            this.product = res;
            this.toggleModal(false);
          },
          complete: () => {
            this.addingVariant.set(false);
            this.toast.success('Variant Added');
          },
          error: (err) => this.toast.error(err),
        });
    } else {
      this.addVariantForm.markAllAsTouched();
      console.log(this.addVariantForm.controls);
    }
  }

  handleDeleteVariant(index: number) {
    const foundVariant = this.product?.variants[index]

    if(!foundVariant) return

    this.productService.deleteProductVariant(this.product?._id!, foundVariant._id).subscribe({
      next: (res) => {
        this.product = res;
        this.toast.success('Variant Deleted');
      },
      error: (err) => this.toast.error(err),
    });
  }

  calculateTotalQuantity(variants: Variant[]): number {
    return variants.reduce((total, variant) => {
      const variantTotal = variant.options.reduce(
        (sum, option) => sum + option.quantity,
        0,
      );
      return total + variantTotal;
    }, 0);
  }

  onUpdateProductDetails() {
    if (this.productForm.valid) {
      const {
        name,
        price,
        description,
        active,
        available_quantity,
        has_variants,
        categories,
        on_sale,
      } = this.productForm.value;
      this.updatingProdut.set(true);
      this.productService
        .updateProduct(this.product?._id!, {
          name,
          price,
          description,
          active,
          available_quantity:
            has_variants && this.product?.variants.length
              ? this.calculateTotalQuantity(this.product.variants)
              : 0,
          has_variants,
          variants: has_variants ? this.product?.variants : [],
          categories: categories.map((item: { name: string }) => item.name),
          on_sale: {
            ...on_sale,
            sale_price: on_sale.is_on_sale ? on_sale.sale_price : 0,
          },
        })
        .subscribe({
          next: (res) => {
            this.product = res;
            this.updatingProdut.set(false);
            this.toast.success('Product updated');
          },
          error: (err) => {
            this.toast.error(err);
            this.updatingProdut.set(false);
          },
        });
    } else {
      this.productForm.markAllAsTouched();
    }
  }
}

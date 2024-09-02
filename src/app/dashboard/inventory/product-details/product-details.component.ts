import {
  Component,
  Input,
  OnInit,
  ViewChild,
  computed,
  signal,
} from '@angular/core';
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
import { AddVariantPopupComponent } from '../../components/add-variant-popup/add-variant-popup.component';

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
  @ViewChild(AddVariantPopupComponent)
  addVariantPopUp!: AddVariantPopupComponent;

  productForm!: FormGroup;

  constructor(
    private productService: ProductService,
    private toast: ToastService,
    private fb: FormBuilder,
    private storeService: StoreService,
  ) {}

  toggleModal(value: boolean) {
    this.addVariantPopUp.toggleModal(value);
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

  onSubmitNewVariant(data: Partial<Variant>) {
    this.addingVariant.set(true);
    this.productService.addProductVariant(this.product?._id!, data).subscribe({
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
  }

  handleDeleteVariant(index: number) {
    const foundVariant = this.product?.variants[index];

    if (!foundVariant) return;

    this.productService
      .deleteProductVariant(this.product?._id!, foundVariant._id)
      .subscribe({
        next: (res) => {
          this.product = res;
          this.toast.success('Variant Deleted');
        },
        error: (err) => this.toast.error(err),
      });
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
          available_quantity: has_variants ? 0 : available_quantity,
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

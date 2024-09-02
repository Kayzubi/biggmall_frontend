import { Component, OnInit, computed, signal } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/products.models';
import { ToastService } from '../../../services/toast.service';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrl: './product-overview.component.scss'
})
export class ProductOverviewComponent implements OnInit {
  products = computed(() => this.productsService.products())
  loading = signal<boolean>(false)




  constructor (private productsService: ProductService, private toast: ToastService, private connfirmation: ConfirmationService) {
  }

  ngOnInit(): void {
    if(!this.products().length) {
       this.loading.set(true);
       this.productsService.getStoreProducts().subscribe({
         next: () => this.loading.set(false),
         error: (err) => {
           this.loading.set(false);
           this.toast.error(err);
         },
       });
    }
  }

  deleteProduct(id: string) {
    this.connfirmation.confirm({
      header: 'Delete Product',
      message: 'Are you sure you want to delete this product?',
      accept: () => {
        this.loading.set(true);
        this.productsService.deleteStoreProduct(id).subscribe({
          next: () => {
            this.toast.success('Product Deleted');
            this.loading.set(false);
          },
          error: (err) => {
            this.toast.error(err);
            this.loading.set(false);
          },
        });
      },
      reject: () => {}
    })

  }
}

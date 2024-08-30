import { Component, OnInit, computed, signal } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/products.models';
import { ToastService } from '../../../services/toast.service';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrl: './product-overview.component.scss'
})
export class ProductOverviewComponent implements OnInit {
  products = computed(() => this.productsService.products())
  loading = signal<boolean>(false)




  constructor (private productsService: ProductService, private toast: ToastService) {
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
    this.loading.set(true)
    this.productsService.deleteStoreProduct(id).subscribe({
      next: () => {
        this.toast.success('Product Deleted')
        this.loading.set(false)
      },
      error: (err) => {
        this.toast.error(err)
        this.loading.set(false)
      }
    })
  }
}

import { Component, inject } from '@angular/core';
import { Product } from '../product';
import { ProductServiceService } from '../product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products!: Product[];

  private productService = inject(ProductServiceService);
  private router = inject(Router);

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.obtainProducts();
  }

  obtainProducts(): void {
    this.productService.listProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      },
    });
  }

  editProduct(id: number) {
    this.router.navigate(['/editProduct', id]);
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id).subscribe({
      next: () => {
        this.obtainProducts();
      },
      error: (err) => {
        console.error('Error deleting product:', err);
      },
    });
  }
}

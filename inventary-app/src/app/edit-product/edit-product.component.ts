import { Component, inject } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-edit-product',
  imports: [],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css',
})
export class EditProductComponent {
  product: Product = new Product();
  id!: number;

  private productService = inject(ProductServiceService);
  private router = inject(ActivatedRoute);

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.productService.findById(this.id).subscribe({
      next: (data) => (this.product = data),
      error: (err) => {
        console.error('Error fetching product:', err);
      },
    });
  }
}

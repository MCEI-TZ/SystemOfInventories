import { Component, inject } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from '../product-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  imports: [FormsModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css',
})
export class EditProductComponent {
  product: Product = new Product();
  id!: number;

  private productService = inject(ProductServiceService);
  private router = inject(ActivatedRoute);
  private route = inject(Router);

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.productService.findById(this.id).subscribe({
      next: (data) => (this.product = data),
      error: (err) => {
        console.error('Error fetching product:', err);
      },
    });
  }

  onSubmit() {
    this.productService.updateProduct(this.product).subscribe({
      next: () => this.route.navigate(['/products']),
      error: (error) => console.error('Error updating product', error),
    });
  }
}

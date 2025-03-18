import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../product';
import { ProductServiceService } from '../product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  imports: [FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {
  product: Product = new Product();

  private productService = inject(ProductServiceService);
  private router = inject(Router);

  onSubmint() {
    this.productService.saveProduct(this.product).subscribe({
      next: () => this.router.navigate(['/products']),
      error: (error) => console.error('Error saving product', error),
    });
  }
}

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  private urlBase = 'http://localhost:8080/inventory-app/products';
  private clientHttp = inject(HttpClient);

  listProducts(): Observable<Product[]> {
    return this.clientHttp.get<Product[]>(this.urlBase);
  }

  saveProduct(product: Product): Observable<Object> {
    return this.clientHttp.post<Object>(this.urlBase, product);
  }

  findById(id: number): Observable<Product> {
    return this.clientHttp.get<Product>(`${this.urlBase}/${id}`);
  }

  deleteProduct(id: number) {
    return this.clientHttp.delete(`${this.urlBase}/${id}`);
  }

  constructor() {}
}

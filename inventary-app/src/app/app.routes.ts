import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';

//http://localhost:4200/products/
export const routes: Routes = [
  {path: 'products',component: ProductListComponent},
  {path: '', redirectTo: 'products' , pathMatch:'full'}
];

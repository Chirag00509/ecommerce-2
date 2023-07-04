import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
// import { ProductListComponent } from './product-list/product-list.component';
// import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'cart',
    component : CartComponent
  },

  {
    // path: 'details/:id',
    // component: ProductDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

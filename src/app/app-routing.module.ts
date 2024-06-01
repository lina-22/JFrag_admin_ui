import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddProductComponent } from './components/product/add-product/add-product.component';
import { GetProductComponent } from './components/product/get-product/get-product.component';
import { EditProductComponent } from './components/product/edit-product/edit-product.component';
import { DeleteProductComponent } from './components/product/delete-product/delete-product.component';

import { GetOrderComponent } from './components/order/get-order/get-order.component';
import { MainComponent } from './dashbord/main/main.component';
import { DeleteOrderComponent } from './components/order/delete-order/delete-order.component';
import { EditOrderComponent } from './components/order/edit-order/edit-order.component';
import { AddOrderComponent } from './components/order/add-order/add-order.component';

const routes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: 'login', component: LoginComponent },

  // { path: '**', component: LoginComponent },
  { path: '', component: MainComponent },
  { path: 'product/get', component: GetProductComponent },
  { path: 'product/add', component: AddProductComponent },
  { path: 'product/edit/:id', component: EditProductComponent },
  { path: 'product/delete', component: DeleteProductComponent },
  //order details********
  { path: 'order/get', component: GetOrderComponent },
  { path: 'order/add', component: AddOrderComponent },
  { path: 'order/edit/:id', component: EditOrderComponent },
  { path: 'order/delete', component: DeleteOrderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

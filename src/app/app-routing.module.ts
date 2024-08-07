import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddProductComponent } from './components/product/add-product/add-product.component';
import { GetProductComponent } from './components/product/get-product/get-product.component';
import { EditProductComponent } from './components/product/edit-product/edit-product.component';
import { DeleteProductComponent } from './components/product/delete-product/delete-product.component';

import { MainComponent } from './dashbord/main/main.component';

import { GetCategoryComponent } from './components/category/get-category/get-category.component';
import { EditCategoryComponent } from './components/category/edit-category/edit-category.component';
import { AddCategoryComponent } from './components/category/add-category/add-category.component';

import { GetOrderComponent } from './components/order/get-order/get-order.component';
import { EditOrderComponent } from './components/order/edit-order/edit-order.component';

import { GetSizeComponent } from './components/size/get-size/get-size.component';
import { EditSizeComponent } from './components/size/edit-size/edit-size.component';
import { AddSizeComponent } from './components/size/add-size/add-size.component';

import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: '', component: MainComponent },
  { path: 'product/get', component: GetProductComponent },
  { path: 'product/add', component: AddProductComponent },
  { path: 'product/edit/:id', component: EditProductComponent },
  { path: 'product/delete', component: DeleteProductComponent },
  //order details********
  { path: 'order/get', component: GetOrderComponent },
  { path: 'order/edit/:id', component: EditOrderComponent },
  //category details********
  { path: 'category/get', component: GetCategoryComponent },
  { path: 'category/add', component: AddCategoryComponent },
  { path: 'category/edit/:id', component: EditCategoryComponent },
  { path: '**', redirectTo: 'category' }, // Wildcard route for a 404 page
  //size details********
  { path: 'size/get', component: GetSizeComponent },
  { path: 'size/add', component: AddSizeComponent },
  { path: 'size/edit/:id', component: EditSizeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

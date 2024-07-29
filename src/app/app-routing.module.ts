import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './login/login.component';
//import { LoginComponent } from './login/login.component';
import { AddProductComponent } from './components/product/add-product/add-product.component';
import { GetProductComponent } from './components/product/get-product/get-product.component';
import { EditProductComponent } from './components/product/edit-product/edit-product.component';
import { DeleteProductComponent } from './components/product/delete-product/delete-product.component';

import { MainComponent } from './dashbord/main/main.component';

import { GetCategoryComponent } from './components/category/get-category/get-category.component';
import { DeleteCategoryComponent } from './components/category/delete-category/delete-category.component';
import { EditCategoryComponent } from './components/category/edit-category/edit-category.component';
import { AddCategoryComponent } from './components/category/add-category/add-category.component';

import { GetOrderComponent } from './components/order/get-order/get-order.component';
import { EditOrderComponent } from './components/order/edit-order/edit-order.component';

import { GetSizeComponent } from './components/size/get-size/get-size.component';
import { DeleteSizeComponent } from './components/size/delete-size/delete-size.component';
import { EditSizeComponent } from './components/size/edit-size/edit-size.component';
import { AddSizeComponent } from './components/size/add-size/add-size.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: 'login', component: LoginComponent },
  { path: 'login', component: SignInComponent },

  // { path: '**', component: LoginComponent },
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
  { path: 'category/delete', component: DeleteCategoryComponent },
  //size details********
  { path: 'size/get', component: GetSizeComponent },
  { path: 'size/add', component: AddSizeComponent },
  { path: 'size/edit/:id', component: EditSizeComponent },
  { path: 'size/delete', component: DeleteSizeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

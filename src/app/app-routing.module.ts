import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddProductComponent } from './components/product/add-product/add-product.component';
import { GetProductComponent } from './components/product/get-product/get-product.component';
import { EditProductComponent } from './components/product/edit-product/edit-product.component';
import { DeleteProductComponent } from './components/product/delete-product/delete-product.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: 'login', component: LoginComponent },

  // { path: '**', component: LoginComponent },
  // { path: '/', component: MainComponent },
  { path: 'product/get', component: GetProductComponent },
  { path: 'product/add', component: AddProductComponent },
  { path: 'product/edit', component: EditProductComponent },
  { path: 'product/delete', component: DeleteProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

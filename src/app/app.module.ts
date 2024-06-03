import { NgModule, Inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { TopWidgetsComponent } from './dashbord/top-widgets/top-widgets.component';
import { SalesByMonthComponent } from './dashbord/sales-by-month/sales-by-month.component';
import { SalesByCategoryComponent } from './dashbord/sales-by-category/sales-by-category.component';
import { LastFewTransactionsComponent } from './dashbord/last-few-transactions/last-few-transactions.component';
import { TopThreeProductsComponent } from './dashbord/top-three-products/top-three-products.component';
import { MainComponent } from './dashbord/main/main.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartModule } from 'angular-highcharts';
import { AddProductComponent } from './components/product/add-product/add-product.component';
import { GetProductComponent } from './components/product/get-product/get-product.component';
import { CategoryComponent } from './components/category/category.component';
import { EditProductComponent } from './components/product/edit-product/edit-product.component';
import { DeleteProductComponent } from './components/product/delete-product/delete-product.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GetOrderComponent } from './components/order/get-order/get-order.component';
import { AddOrderComponent } from './components/order/add-order/add-order.component';
import { DeleteOrderComponent } from './components/order/delete-order/delete-order.component';
import { EditOrderComponent } from './components/order/edit-order/edit-order.component';

import { EditSizeComponent } from './components/size/edit-size/edit-size.component';
import { AddSizeComponent } from './components/size/add-size/add-size.component';
import { DeleteSizeComponent } from './components/size/delete-size/delete-size.component';
import { GetSizeComponent } from './components/size/get-size/get-size.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    SideNavComponent,
    TopWidgetsComponent,
    SalesByMonthComponent,
    SalesByCategoryComponent,
    LastFewTransactionsComponent,
    TopThreeProductsComponent,
    MainComponent,
    AddProductComponent,
    GetProductComponent,
    CategoryComponent,
    EditProductComponent,
    DeleteProductComponent,
    GetOrderComponent,
    AddOrderComponent,
    DeleteOrderComponent,
    EditOrderComponent,
    EditSizeComponent,
    AddSizeComponent,
    DeleteSizeComponent,
    GetSizeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ChartModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {}
}

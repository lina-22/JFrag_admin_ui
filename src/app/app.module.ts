import { NgModule, Inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { EditProductComponent } from './components/product/edit-product/edit-product.component';
import { DeleteProductComponent } from './components/product/delete-product/delete-product.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GetOrderComponent } from './components/order/get-order/get-order.component';
import { EditOrderComponent } from './components/order/edit-order/edit-order.component';

import { EditSizeComponent } from './components/size/edit-size/edit-size.component';
import { AddSizeComponent } from './components/size/add-size/add-size.component';
import { DeleteSizeComponent } from './components/size/delete-size/delete-size.component';
import { GetSizeComponent } from './components/size/get-size/get-size.component';
import { EditCategoryComponent } from './components/category/edit-category/edit-category.component';
import { AddCategoryComponent } from './components/category/add-category/add-category.component';
import { DeleteCategoryComponent } from './components/category/delete-category/delete-category.component';
import { GetCategoryComponent } from './components/category/get-category/get-category.component';
import { FooterComponent } from './footer/footer.component';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
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
    EditProductComponent,
    DeleteProductComponent,
    GetOrderComponent,
    EditOrderComponent,
    EditSizeComponent,
    AddSizeComponent,
    DeleteSizeComponent,
    GetSizeComponent,
    EditCategoryComponent,
    AddCategoryComponent,
    DeleteCategoryComponent,
    GetCategoryComponent,
    FooterComponent,
    SignInComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ChartModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
  ],
  exports: [
    // other exports,
    SignInComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {}
}

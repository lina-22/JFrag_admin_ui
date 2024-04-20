import { ProductsService } from './../../../products.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent implements OnInit, OnDestroy {
  constructor(private product: ProductsService) {}

  addProduct = new FormGroup({
    productName: new FormControl(''),
    productDescription: new FormControl(''),
    productViews: new FormControl(''),
  });
  ngOnInit(): void {}
  ngOnDestroy(): void {}
  SaveData() {
    // console.log(this.addProduct.value);
    this.product.saveProductData(this.addProduct.value).subscribe((result) => {
      console.log(result);
    });
  }
}

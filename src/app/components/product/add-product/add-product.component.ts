import { ProductsService } from '../../../service/product_service/products.service';
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
    productViews: new FormControl(''),
    productImage: new FormControl(''),
  });
  message: boolean = false;
  ngOnInit(): void {}
  ngOnDestroy(): void {}
  SaveData() {
    // console.log(this.addProduct.value);
    this.product.saveProductData(this.addProduct.value).subscribe((result) => {
      console.log(result);
      this.message = true;
      this.addProduct.reset({});
      const newProductId = this.product.getNextId();
    });
  }

  removeMessage() {
    this.message = false;
  }
}

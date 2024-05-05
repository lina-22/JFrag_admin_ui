import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../../../service/product_service/products.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css',
})
export class EditProductComponent implements OnInit, OnDestroy {
  constructor(
    private product: ProductsService,
    private router: ActivatedRoute
  ) {}

  editProduct = new FormGroup({
    productName: new FormControl(''),
    productViews: new FormControl(''),
    productImage: new FormControl(''),
  });
  message: boolean = false;
  ngOnInit(): void {
    console.log(this.router.snapshot.params['id']);
    this.product
      .getProductById(this.router.snapshot.params['id'])
      .subscribe((result: any) => {
        console.log(result);
        this.editProduct = new FormGroup({
          productName: new FormControl(result['productName']),
          productViews: new FormControl(result['productViews']),
          productImage: new FormControl(result['productImage']),
        });
      });
  }
  ngOnDestroy(): void {}
  UpdateData() {
    console.log(this.editProduct.value);
    this.product
      .updateProductData(
        this.router.snapshot.params['id'],
        this.editProduct.value
      )
      .subscribe((result) => {
        console.log(result);
        // console.log(this.editProduct.value);
        this.message = true;
        // this.editProduct.reset({});
        // const newProductId = this.product.getNextId();
      });
  }

  removeMessage() {
    this.message = false;
  }
}

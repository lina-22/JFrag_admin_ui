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
  }
  ngOnDestroy(): void {}
  updateData() {
    // console.log(this.addProduct.value);
    this.product.saveProductData(this.editProduct.value).subscribe((result) => {
      console.log(result);
      this.message = true;
      this.editProduct.reset({});
      const newProductId = this.product.getNextId();
    });
  }

  removeMessage() {
    this.message = false;
  }
}

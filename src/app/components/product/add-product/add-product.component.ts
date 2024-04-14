import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent implements OnInit, OnDestroy {
  constructor() {}

  addProduct = new FormGroup({
    productName: new FormControl(''),
    productDescription: new FormControl(''),
  });
  ngOnInit(): void {}
  ngOnDestroy(): void {}
}

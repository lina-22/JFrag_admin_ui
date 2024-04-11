import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../../products.service';

@Component({
  selector: 'app-get-product',
  templateUrl: './get-product.component.html',
  styleUrl: './get-product.component.css',
})
export class GetProductComponent implements OnInit {
  constructor(private products: ProductsService) {}
  productData: any = [];

  ngOnInit(): void {
    this.products.getAllProduct().subscribe((allData) => {
      console.log(allData);
      this.productData = allData;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../service/product_service/products.service';
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

  deleteProduct(product_id: any) {
    // console.log(product_id);
    this.products.deleteProductData(product_id).subscribe((result) => {
      console.log(result);
      this.ngOnInit();
    });
  }
}

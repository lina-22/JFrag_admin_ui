import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../service/product_service/products.service';
@Component({
  selector: 'app-get-product',
  templateUrl: './get-product.component.html',
  styleUrl: './get-product.component.css',
})
export class GetProductComponent implements OnInit {
  constructor(private prod: ProductsService) {}
  showAddProductPopup = false;
  showEditProductPopup = false;
  selectedProd: any = null;

  toggleAddProductPopup(): void {
    this.showAddProductPopup = !this.showAddProductPopup;
  }

  toggleEditProductPopup(prod?: any): void {
    this.selectedProd = prod || null;
    this.showEditProductPopup = !this.showEditProductPopup;
  }

  productData: any = [];

  ngOnInit(): void {
    this.prod.getAllProduct().subscribe((allData) => {
      console.log(allData);
      this.productData = allData;
    });
  }

  deleteProduct(product_id: any) {
    // console.log(product_id);
    this.prod.deleteProductData(product_id).subscribe((result) => {
      console.log(result);
      this.ngOnInit();
    });
  }
}

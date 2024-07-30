import { ProductsService } from '../../../service/product_service/products.service';
import {
  Component,
  OnDestroy,
  OnInit,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent implements OnInit, OnDestroy {
  constructor(private product: ProductsService) {}
  @Output() close = new EventEmitter<void>();

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
      // Optionally close the modal after a successful save
      setTimeout(() => this.closeModal(), 2000);
    });
  }

  closeModal() {
    this.close.emit();
  }
  removeMessage() {
    this.message = false;
  }
}

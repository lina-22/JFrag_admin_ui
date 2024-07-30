import {
  Component,
  OnDestroy,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';
import { ProductsService } from '../../../service/product_service/products.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css',
})
export class EditProductComponent implements OnInit, OnDestroy {
  constructor(private prod: ProductsService, private router: Router) {}
  @Input() product: any = null;
  @Output() close = new EventEmitter<void>();

  editProduct = new FormGroup({
    productName: new FormControl(''),
    productViews: new FormControl(''),
    productImage: new FormControl(''),
  });
  message: boolean = false;
  populateForm(): void {
    if (this.product) {
      this.editProduct.patchValue({
        productName: this.product.productName,
      });
    }
  }
  ngOnInit(): void {
    this.populateForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['product'] && changes['product'].currentValue) {
      this.populateForm();
    }
  }

  ngOnDestroy(): void {}

  UpdateData() {
    let updatedProd = {
      id: this.product.id,
      name: this.editProduct.value.productName,
    };

    this.prod.updateProductData(updatedProd).subscribe((result: any) => {
      console.log(result);
      this.message = true;
      this.editProduct.value.productName;
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

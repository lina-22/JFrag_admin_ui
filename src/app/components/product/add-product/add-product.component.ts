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
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit, OnDestroy {
  constructor(private product: ProductsService) {}
  @Output() close = new EventEmitter<void>();

  addProduct = new FormGroup({
    productName: new FormControl(''),
    productCategory: new FormControl(''),
    productIngredient: new FormControl(''),
    productDescription: new FormControl(''),
    productImage: new FormControl(null),
  });

  message: boolean = false;
  ngOnInit(): void {}
  ngOnDestroy(): void {}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.addProduct.patchValue({ productImage: file });
    this.addProduct.get('productImage')!.updateValueAndValidity();
  }

  SaveData() {
    const formData: FormData = new FormData();
    formData.append(
      'productName',
      this.addProduct.get('productName')!.value || ''
    );
    formData.append(
      'productCategory',
      this.addProduct.get('productCategory')!.value || ''
    );
    formData.append(
      'productIngredient',
      this.addProduct.get('productIngredient')!.value || ''
    );
    formData.append(
      'productDescription',
      this.addProduct.get('productDescription')!.value || ''
    );

    const productImage = this.addProduct.get('productImage')!.value;
    if (productImage) {
      formData.append('productImage', productImage);
    }

    this.product.saveProductData(formData).subscribe(
      (result) => {
        console.log(result);
        this.message = true;
        this.addProduct.reset({});
        setTimeout(() => this.closeModal(), 2000);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  closeModal() {
    this.close.emit();
  }

  removeMessage() {
    this.message = false;
  }
}

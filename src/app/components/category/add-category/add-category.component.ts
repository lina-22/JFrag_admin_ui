import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

import { CatService } from './../../../service/cat_service/cat-service.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css',
})
export class AddCategoryComponent implements OnInit, OnDestroy {
  @Output() close = new EventEmitter<void>();
  constructor(private cat: CatService) {}

  addCat = new FormGroup({
    name: new FormControl(''),
  });
  message: boolean = false;
  ngOnInit(): void {}
  ngOnDestroy(): void {}

  SaveData() {
    // console.log(this.addProduct.value);
    this.cat.saveCatData(this.addCat.value).subscribe((result) => {
      console.log(result);
      this.message = true;
      this.addCat.reset({});
      const newOrderId = this.cat.getNextId();
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

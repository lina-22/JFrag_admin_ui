import { Component, OnDestroy, OnInit } from '@angular/core';

import { CatService } from './../../../service/cat_service/cat-service.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent implements OnInit, OnDestroy{
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
    });
  }

  removeMessage() {
    this.message = false;
  }

}

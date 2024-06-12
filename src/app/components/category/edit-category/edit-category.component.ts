import { CatService } from './../../../service/cat_service/cat-service.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrl: './edit-category.component.css'
})
export class EditCategoryComponent implements OnInit, OnDestroy{
    constructor(private cat: CatService, private router: ActivatedRoute) {}

     editCat = new FormGroup({
    name: new FormControl(''),
  });

   message: boolean = false;
  ngOnInit(): void {
    this.cat
      .getCatById(this.router.snapshot.params['id'])
      .subscribe((result: any) => {
        this.editCat= new FormGroup({
          name: new FormControl(result['name']),
        });
      });
  }
  ngOnDestroy(): void {}

  UpdateData() {
    // console.log(this.size.value);
    this.cat
      .updateCatData(this.router.snapshot.params['id'], this.editCat.value)
      .subscribe((result) => {
        console.log(result);
        // console.log(this.editProduct.value);
        this.message = true;
      });
  }

  removeMessage() {
    this.message = false;
  }
}

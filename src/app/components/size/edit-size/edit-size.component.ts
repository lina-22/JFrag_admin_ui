import { SizesService } from './../../../service/size_service/size.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-size',
  templateUrl: './edit-size.component.html',
  styleUrl: './edit-size.component.css',
})
export class EditSizeComponent implements OnInit, OnDestroy {
  constructor(private size: SizesService, private router: ActivatedRoute) {}

  editSize = new FormGroup({
    value: new FormControl(''),
  });
sizeId = null;
  message: boolean = false;
  ngOnInit(): void {
    // console.log(this.router.snapshot.params['id']);
    this.size
      .getSizeById(this.router.snapshot.params['id'])
      .subscribe((result: any) => {
        // console.log(result);
        this.editSize = new FormGroup({
          value: new FormControl(result['value']),
        });
      });
      this.sizeId = this.router.snapshot.params['id'];
  }
  ngOnDestroy(): void {}
 
  UpdateData() {
    // console.log(this.size.value);
    let updatedSize = {
      "id": this.sizeId,
      "value" : this.editSize.value.value
    }
    this.size
      .updateSizeData(updatedSize)
      .subscribe((result:any) => {
        console.log(result);
        this.message = true;
      });
  }

  removeMessage() {
    this.message = false;
  }
}

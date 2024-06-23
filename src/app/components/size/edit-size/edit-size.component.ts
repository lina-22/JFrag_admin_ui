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

  message: boolean = false;
  ngOnInit(): void {
    console.log(this.router.snapshot.params['id']);
    this.size
      .getSizeById(this.router.snapshot.params['id'])
      .subscribe((result: any) => {
        console.log(result);
        this.editSize = new FormGroup({
          value: new FormControl(result['value']),
        });
      });
  }
  ngOnDestroy(): void {}
 
  UpdateData() {
    // console.log(this.size.value);
    this.size
      .updateSizeData(this.router.snapshot.params['id'], this.editSize.value)
      .subscribe((result) => {
        console.log(result);
        console.log(this.editSize.value);
        this.message = true;
      });
  }

  removeMessage() {
    this.message = false;
  }
}

import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

import { SizesService } from './../../../service/size_service/size.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-size',
  templateUrl: './add-size.component.html',
  styleUrl: './add-size.component.css',
})
export class AddSizeComponent implements OnInit, OnDestroy {
  @Output() close = new EventEmitter<void>();
  @Output() sizeAdded = new EventEmitter<void>();
  constructor(private size: SizesService) {}

  addSize = new FormGroup({
    value: new FormControl(''),
  });
  message: boolean = false;
  ngOnInit(): void {}
  ngOnDestroy(): void {}

  SaveData() {
    // console.log(this.addProduct.value);
    this.size.saveSizeData(this.addSize.value).subscribe((result) => {
      console.log(result);
      this.message = true;
      this.addSize.reset({});
      const newOrderId = this.size.getNextId();
      this.sizeAdded.emit();
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

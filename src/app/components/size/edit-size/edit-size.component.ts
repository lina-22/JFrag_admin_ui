import { SizesService } from './../../../service/size_service/size.service';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-size',
  templateUrl: './edit-size.component.html',
  styleUrl: './edit-size.component.css',
})
export class EditSizeComponent implements OnInit, OnDestroy {
  constructor(private size: SizesService, private router: ActivatedRoute) {}
  @Input() sizeIn: any = null;
  @Output() close = new EventEmitter<void>();
  @Output() sizeUpdated = new EventEmitter<void>();
  editSize = new FormGroup({
    value: new FormControl(''),
  });

  // sizeId = null;
  message: boolean = false;

  populateForm(): void {
    if (this.sizeIn) {
      this.editSize.patchValue({
        value: this.sizeIn.name,
      });
    }
  }
  ngOnInit(): void {
    this.populateForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['sizeIn'] && changes['sizeIn'].currentValue) {
      this.populateForm();
    }
  }
  ngOnDestroy(): void {}

  UpdateData() {
    // console.log(this.size.value);
    let updatedSize = {
      id: this.sizeIn.id,
      value: this.editSize.value.value,
    };
    this.size.updateSizeData(updatedSize).subscribe((result: any) => {
      console.log(result);
      this.message = true;
      this.sizeUpdated.emit();
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

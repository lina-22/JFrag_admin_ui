import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CatService } from './../../../service/cat_service/cat-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css'],
})
export class EditCategoryComponent implements OnInit, OnDestroy, OnChanges {
  @Input() category: any = null;
  @Output() close = new EventEmitter<void>();

  editCat = new FormGroup({
    name: new FormControl(''),
  });

  message: boolean = false;

  constructor(private cat: CatService, private router: Router) {}

  ngOnInit(): void {
    this.populateForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['category'] && changes['category'].currentValue) {
      this.populateForm();
    }
  }

  ngOnDestroy(): void {}

  populateForm(): void {
    if (this.category) {
      this.editCat.patchValue({
        name: this.category.name,
      });
    }
  }

  UpdateData() {
    let updatedCat = {
      id: this.category.id,
      name: this.editCat.value.name,
    };

    this.cat.updateCatData(updatedCat).subscribe((result: any) => {
      console.log(result);
      this.message = true;
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

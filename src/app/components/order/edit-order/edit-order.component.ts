import { OrdersService } from './../../../service/order_service/orders.service';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrl: './edit-order.component.css',
})
export class EditOrderComponent implements OnInit, OnDestroy {
  constructor(private orderS: OrdersService, private router: ActivatedRoute) {}
  @Input() order: any = null;
  @Output() close = new EventEmitter<void>();
  @Output() orderUpdated = new EventEmitter<void>();

  editOrder = new FormGroup({
    reference: new FormControl(''),
    status: new FormControl(''),
  });

  message: boolean = false;

  populateForm(): void {
    console.log('Order:', this.order); // Debugging
    if (this.order) {
      this.editOrder.patchValue({
        reference: this.order.orderRef,
        status: this.order.status,
      });
    }
  }
  ngOnInit(): void {
    this.populateForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['order'] && changes['order'].currentValue) {
      this.populateForm();
    }
  }

  ngOnDestroy(): void {}
  UpdateData() {
    let updatedOrd = {
      id: this.order.id,
      reference: this.order.reference,
      status: this.order.status,
    };

    this.orderS.updateOrderData(updatedOrd).subscribe((result: any) => {
      console.log(result);
      this.message = true;
      this.orderUpdated.emit(); // Emit event on successful update
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

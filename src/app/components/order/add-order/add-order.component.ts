import { Component, OnDestroy, OnInit } from '@angular/core';

import { OrdersService } from '../../../service/order_service/orders.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrl: './add-order.component.css',
})
export class AddOrderComponent implements OnInit, OnDestroy {
  constructor(private order: OrdersService) {}

  addOrder = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
  message: boolean = false;
  ngOnInit(): void {}
  ngOnDestroy(): void {}
  SaveData() {
    // console.log(this.addProduct.value);
    this.order.saveOrderData(this.addOrder.value).subscribe((result) => {
      console.log(result);
      this.message = true;
      this.addOrder.reset({});
      const newOrderId = this.order.getNextId();
    });
  }

  removeMessage() {
    this.message = false;
  }
}

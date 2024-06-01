import { OrdersService } from './../../../service/order_service/orders.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrl: './edit-order.component.css',
})
export class EditOrderComponent implements OnInit, OnDestroy {
  constructor(private order: OrdersService, private router: ActivatedRoute) {}

  editOrder = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  message: boolean = false;
  ngOnInit(): void {
    console.log(this.router.snapshot.params['id']);
    this.order
      .getOrderById(this.router.snapshot.params['id'])
      .subscribe((result: any) => {
        console.log(result);
        this.editOrder = new FormGroup({
          firstName: new FormControl(result['firstName']),
          lastName: new FormControl(result['lastName']),
        });
      });
  }
  ngOnDestroy(): void {}
  UpdateData() {
    console.log(this.editOrder.value);
    this.order
      .updateOrderData(this.router.snapshot.params['id'], this.editOrder.value)
      .subscribe((result) => {
        console.log(result);
        // console.log(this.editProduct.value);
        this.message = true;
        // this.editProduct.reset({});
        // const newProductId = this.product.getNextId();
      });
  }

  removeMessage() {
    this.message = false;
  }
}

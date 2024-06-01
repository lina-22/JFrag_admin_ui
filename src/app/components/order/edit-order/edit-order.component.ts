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
    reference: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    deliveryAddress: new FormControl(''),
    phone: new FormControl(''),
    status: new FormControl(''),
  });

  message: boolean = false;
  ngOnInit(): void {
    console.log(this.router.snapshot.params['id']);
    this.order
      .getOrderById(this.router.snapshot.params['id'])
      .subscribe((result: any) => {
        console.log(result);
        this.editOrder = new FormGroup({
          reference: new FormControl(result['reference']),
          firstName: new FormControl(result['firstName']),
          lastName: new FormControl(result['lastName']),
          email: new FormControl(result['email']),
          address: new FormControl(result['address']),
          deliveryAddress: new FormControl(result['deliveryAddress']),
          phone: new FormControl(result['phone']),
          status: new FormControl(result['status']),
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

import DataTables from 'datatables.net';
import { OrdersService } from './../../../service/order_service/orders.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-order',
  templateUrl: './get-order.component.html',
  styleUrl: './get-order.component.css',
})
export class GetOrderComponent implements OnInit {
  constructor(private orders: OrdersService) {}
  orderData: any = [];

  // dtOptions: DataTables.Settings = {};
  ngOnInit(): void {
    // this.dtOptions = {
    //   pagingType: 'full8numbers',
    //   pageLength: 5,
    //   processing: true,
    // };
    this.orders.getAllOrder().subscribe((allData) => {
      console.log(allData);
      this.orderData = allData;
    });
  }

  deleteOrder(order_id: any) {
    // console.log(order_id);
    this.orders.deleteOrderData(order_id).subscribe((result) => {
      console.log(result);
      this.ngOnInit();
    });
  }
}

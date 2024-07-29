// import { DataTables } from 'datatables.net';
// import { Settings } from 'datatables.net';
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
  // dtOptions: Settings = {};
  // dtOptions: DataTables.Settings = {};
  ngOnInit(): void {
    this.orders.getAllOrder().subscribe((allData) => {
      console.log(allData);
      this.orderData = allData;
    });
  }
}

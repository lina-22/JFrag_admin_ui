import { OrdersService } from './../../../service/order_service/orders.service';
import { Component, OnInit } from '@angular/core';
import { OrderResponse, Order } from './order-response.model'; // Adjust the path as necessary

@Component({
  selector: 'app-get-order',
  templateUrl: './get-order.component.html',
  styleUrls: ['./get-order.component.css'],
})
export class GetOrderComponent implements OnInit {
  constructor(private orders: OrdersService) {}

  showEditOrderPopup = false;
  selectedOrder: any = null;
  orderData: Order[] = []; // Use the Order type here

  toggleEditOrderPopup(orders?: any): void {
    this.selectedOrder = orders || null;
    this.showEditOrderPopup = !this.showEditOrderPopup;
  }

  ngOnInit(): void {
    this.orders.getAllOrder().subscribe(
      (response: OrderResponse) => {
        // Specify the response type
        console.log(response);
        this.orderData = response.content || []; // Now TypeScript understands 'content'
      },
      (error) => {
        console.error('Error fetching orders:', error);
      }
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  // url = 'http://localhost:3000/orders';
 
  url = 'http://localhost:8080/api/v1/orders';  
  idurl = 'http://localhost:8080/api/v1/orders/order';
  editurl = 'http://localhost:8080/api/v1/orders/update-order';
  
  constructor(private http: HttpClient) {}

  getAllOrder() {
    return this.http.get(this.url);
  }

  private lastId: number = 0;
  getNextId(): number {
    // Increment the last used ID and return it
    return ++this.lastId;
  }


  getOrderById(id: any) {
    // console.log(data);
    return this.http.get(`${this.url}/${id}`);
  }
  updateOrderData(id: any, data: any) {
    // console.log(data);
    return this.http.put(`${this.url}/${id}`, data);
  }

}

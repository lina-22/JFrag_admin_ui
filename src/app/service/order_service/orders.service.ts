import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  url = 'http://localhost:3000/orders';
  constructor(private http: HttpClient) {}

  getAllOrder() {
    return this.http.get(this.url);
  }

  private lastId: number = 0;
  getNextId(): number {
    // Increment the last used ID and return it
    return ++this.lastId;
  }

  saveOrderData(data: any) {
    console.log(data);
    return this.http.post(this.url, data);
  }

  getOrderById(id: any) {
    // console.log(data);
    return this.http.get(`${this.url}/${id}`);
  }
  updateOrderData(id: any, data: any) {
    // console.log(data);
    return this.http.put(`${this.url}/${id}`, data);
  }
  deleteOrderData(id: any) {
    // console.log(data);
    return this.http.delete(`${this.url}/${id}`);
  }
}

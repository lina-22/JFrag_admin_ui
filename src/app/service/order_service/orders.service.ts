import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OrderResponse } from '../../components/order/get-order/order-response.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  // url = 'http://localhost:3000/orders';

  url = 'http://localhost:8080/api/v1/orders/restricted/admin';
  idurl = 'http://localhost:8080/api/v1/orders/order';
  editurl = 'http://localhost:8080/api/v1/orders/update-order';

  constructor(private http: HttpClient) {}

  // Helper to create headers with the token
  private createAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token'); // Or get from authService
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }
  getAllOrder(): Observable<OrderResponse> {
    const headers = this.createAuthHeaders();
    return this.http.get<OrderResponse>(this.url, { headers });
  }

  private lastId: number = 0;
  getNextId(): number {
    // Increment the last used ID and return it
    return ++this.lastId;
  }

  getOrderById(id: any) {
    const headers = this.createAuthHeaders();
    // console.log(data);
    return this.http.get(`${this.url}/${id}`);
  }
  updateOrderData(data: any) {
    const headers = this.createAuthHeaders();
    // console.log(data);
    return this.http.put(`${this.editurl}`, data, {
      headers,
      responseType: 'text' as 'json',
    });
  }
}

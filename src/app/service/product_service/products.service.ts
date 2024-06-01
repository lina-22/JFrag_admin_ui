import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  url = 'http://localhost:3000/products';
  constructor(private http: HttpClient) {}
  getAllProduct() {
    return this.http.get(this.url);
  }

  private lastId: number = 0;
  getNextId(): number {
    // Increment the last used ID and return it
    return ++this.lastId;
  }
  saveProductData(data: any) {
    console.log(data);
    return this.http.post(this.url, data);
  }

  getProductById(id: any) {
    // console.log(data);
    return this.http.get(`${this.url}/${id}`);
  }
  updateProductData(id: any, data: any) {
    // console.log(data);
    return this.http.put(`${this.url}/${id}`, data);
  }
  deleteProductData(id: any) {
    // console.log(data);
    return this.http.delete(`${this.url}/${id}`);
  }
}

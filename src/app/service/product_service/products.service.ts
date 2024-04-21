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

  saveProductData(data: any) {
    console.log(data);
    return this.http.post(this.url, data);
  }
  deleteProductData(id: any) {
    // console.log(data);
    return this.http.delete(`${this.url}/${id}`);
  }
}

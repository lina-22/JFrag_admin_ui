import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetProductComponent } from '../../components/product/get-product/get-product.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  url = 'http://localhost:8080/api/v1/products/admin';
  constructor(private http: HttpClient) {}

  getAllProduct() {
    return this.http.get(this.url);
    // return this.http.get<GetProductComponent[]>(this.url);
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
    return this.http.get(`${this.url}/product/${id}`);
  }
  // updateProductData(id: any, data: any) {
  //   // console.log(data);
  //   return this.http.put(`${this.url}/${id}`, data);
  // }

  updateProductData(data: any): Observable<any> {
    console.log(data);
    // {headers, responseType: 'text' as 'json'}
    return this.http.put(`${this.url}`, data, {
      responseType: 'text' as 'json',
    });
  }
  deleteProductData(id: any) {
    // console.log(data);
    return this.http.delete(`${this.url}/${id}`);
  }
}

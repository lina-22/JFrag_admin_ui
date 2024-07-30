import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetProductComponent } from '../../components/product/get-product/get-product.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  url = 'http://localhost:8080/api/v1/products/admin';
  addurl = 'http://localhost:8080/api/v1/products/admin/add-product';
  idurl = 'http://localhost:8080/api/v1/products/product';
  editurl = 'http://localhost:8080/api/v1/products/admin/update-product';
  deleteurl = 'http://localhost:8080/api/v1/products/admin/product';

  constructor(private http: HttpClient) {}

  getAllProduct() {
    return this.http.get(this.url);
  }

  private lastId: number = 0;
  getNextId(): number {
    // Increment the last used ID and return it
    return ++this.lastId;
  }

  // saveProductData(data: FormData): Observable<any> {
  //   console.log(data);
  //   return this.http.post(this.addurl, data);
  // }
  saveProductData(formData: FormData): Observable<any> {
    return this.http.post<any>(this.addurl, formData);
  }

  getProductById(id: any) {
    // console.log(data);
    return this.http.get(`${this.idurl}/${id}`);
  }

  updateProductData(data: any): Observable<any> {
    console.log(data);
    // {headers, responseType: 'text' as 'json'}
    return this.http.put(`${this.editurl}`, data, {
      responseType: 'text' as 'json',
    });
  }
  deleteProductData(id: any) {
    // console.log(data);
    return this.http.delete(`${this.idurl}/${id}`);
  }
}

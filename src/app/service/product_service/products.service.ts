import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { GetProductComponent } from '../../components/product/get-product/get-product.component';
import { Observable, throwError } from 'rxjs';
import { AuthenticationService } from '../auth_service/authentication.service';
import { catchError, map, tap } from 'rxjs/operators'; // <-- Add this import
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  // url = 'http://localhost:8080/api/v1/products';
  url = 'http://localhost:8080/api/v1/products/admin';
  addurl = 'http://localhost:8080/api/v1/products/admin/add-product';
  idurl = 'http://localhost:8080/api/v1/products/product';
  editurl = 'http://localhost:8080/api/v1/products/admin/update-product';
  deleteurl = 'http://localhost:8080/api/v1/products/admin/product';

  constructor(
    private http: HttpClient,
    private authService: AuthenticationService // Inject AuthenticationService
  ) {}

  // Helper to create headers with the token
  private createAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token'); // Or get from authService
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }
  // Test for client product ok
  // getAllProduct(): Observable<any> {
  //   return this.http.get(this.url);
  // }
  getAllProduct(): Observable<any> {
    const headers = this.createAuthHeaders();
    return this.http.get(this.url, { headers });
  }

  private lastId: number = 0;
  getNextId(): number {
    // Increment the last used ID and return it
    return ++this.lastId;
  }

  saveProductData(formData: FormData): Observable<any> {
    const headers = this.createAuthHeaders();
    return this.http.post<any>(this.addurl, formData, { headers });
  }

  getProductById(id: any): Observable<any> {
    const headers = this.createAuthHeaders();
    return this.http.get(`${this.idurl}/${id}`, { headers });
  }

  updateProductData(data: any): Observable<any> {
    const headers = this.createAuthHeaders();
    return this.http.put(`${this.editurl}`, data, { headers });
  }

  // deleteProductData(id: any): Observable<any> {
  //   const headers = this.createAuthHeaders();
  //   return this.http.delete(`${this.deleteurl}/${id}`, { headers });
  // }

  deleteProductData(id: any): Observable<any> {
    const headers = this.createAuthHeaders();
    // console.log(data);
    return this.http
      .delete(`${this.deleteurl}/${id}`, {
        headers,
        responseType: 'text' as 'json',
      })
      .pipe(
        tap((response) => {
          console.log('Delete response:', response);
        }),
        catchError((error: HttpErrorResponse) => {
          console.error('Delete error:', error);
          return throwError(() => new Error('Failed to delete product.'));
        })
      );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../auth_service/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class SizesService {
  // url = 'http://localhost:3000/sizes';
  url = 'http://localhost:8080/api/v1/sizes/admin';
  addurl = 'http://localhost:8080/api/v1/sizes/admin/add-size';
  idurl = 'http://localhost:8080/api/v1/sizes/admin/size';
  editurl = 'http://localhost:8080/api/v1/sizes/admin/update-size';
  deleteurl = 'http://localhost:8080/api/v1/sizes/admin/size';
  constructor(
    private http: HttpClient,
    private authService: AuthenticationService
  ) {}

  // Helper to create headers with the token
  private createAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token'); // Or get from authService
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }

  getAllSize(): Observable<any> {
    const headers = this.createAuthHeaders();
    return this.http.get(this.url, { headers });
  }

  private lastId: number = 0;
  getNextId(): number {
    // Increment the last used ID and return it
    return ++this.lastId;
  }

  saveSizeData(data: any): Observable<any> {
    const headers = this.createAuthHeaders();
    console.log(data);
    return this.http.post(this.addurl, data, { headers });
  }

  getSizeById(id: any): Observable<any> {
    const headers = this.createAuthHeaders();
    // console.log(data);
    return this.http.get(`${this.idurl}/${id}`, { headers });
  }
  updateSizeData(data: any): Observable<any> {
    console.log(data);
    const headers = this.createAuthHeaders();
    // {headers, responseType: 'text' as 'json'}
    return this.http.put(`${this.editurl}`, data, {
      headers,
      responseType: 'text' as 'json',
    });
  }
  deleteSizeData(id: any): Observable<any> {
    const headers = this.createAuthHeaders();
    // console.log(data);
    return this.http.delete(`${this.deleteurl}/${id}`, {
      headers,
      responseType: 'text' as 'json',
    });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CatService {
  //  url = 'http://localhost:3000/cats';

  url = 'http://localhost:8080/api/v1/categories';
  addurl = 'http://localhost:8080/api/v1/categories/admin/add-category';
  idurl = 'http://localhost:8080/api/v1/categories/admin/category';
  editurl = 'http://localhost:8080/api/v1/categories/admin/update-category';
  deleteurl = 'http://localhost:8080/api/v1/categories/admin/category';
  constructor(private http: HttpClient) {}

  getAllCat(): Observable<any> {
    return this.http.get(this.url);
  }
  private lastId: number = 0;
  getNextId(): number {
    return ++this.lastId;
  }
  saveCatData(data: any): Observable<any> {
    console.log(data);
    return this.http.post(this.addurl, data);
  }
  getCatById(id: any): Observable<any> {
    return this.http.get(`${this.idurl}/${id}`);
  }

  updateCatData(data: any): Observable<any> {
    console.log(data);
    // {headers, responseType: 'text' as 'json'}
    return this.http.put(`${this.editurl}`, data, {
      responseType: 'text' as 'json',
    });
  }
  deleteCatData(id: any): Observable<any> {
    return this.http.delete(`${this.idurl}/${id}`, {
      responseType: 'text' as 'json',
    });
  }
}

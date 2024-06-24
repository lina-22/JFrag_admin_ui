import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatService {
//  url = 'http://localhost:3000/cats';

   url = 'http://localhost:8080/api/v1/categories';  
  addurl = 'http://localhost:8080/api/v1/categories/add-category';
  idurl = 'http://localhost:8080/api/v1/categories/category';
  editurl = 'http://localhost:8080/api/v1/categories/update-category';
  deleteurl = 'http://localhost:8080/api/v1/categories/category';
  constructor(private http: HttpClient) { }

   getAllCat() {
    return this.http.get(this.url);
  }
  private lastId: number = 0;
  getNextId(): number {
    return ++this.lastId;
  }
  saveCatData(data: any) {
    console.log(data);
    return this.http.post(this.addurl, data);
  }
  getCatById(id: any) {
    return this.http.get(`${this.url}/${id}`);
  }
  updateCatData(id: any, data: any) {
    return this.http.put(`${this.url}/${id}`, data);
  }
  deleteCatData(id: any) {
    return this.http.delete(`${this.url}/${id}`);
  }
}

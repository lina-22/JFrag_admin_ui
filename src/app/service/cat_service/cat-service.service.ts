import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatService {
 url = 'http://localhost:3000/cats';
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
    return this.http.post(this.url, data);
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

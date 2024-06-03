import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SizesService {
  url = 'http://localhost:3000/sizes';
  constructor(private http: HttpClient) {}

  getAllSize() {
    return this.http.get(this.url);
  }

  private lastId: number = 0;
  getNextId(): number {
    // Increment the last used ID and return it
    return ++this.lastId;
  }

  saveSizeData(data: any) {
    console.log(data);
    return this.http.post(this.url, data);
  }

  getSizeById(id: any) {
    // console.log(data);
    return this.http.get(`${this.url}/${id}`);
  }
  updateSizeData(id: any, data: any) {
    // console.log(data);
    return this.http.put(`${this.url}/${id}`, data);
  }
  deleteSizeData(id: any) {
    // console.log(data);
    return this.http.delete(`${this.url}/${id}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SizesService {
  // url = 'http://localhost:3000/sizes';
  url = 'http://localhost:8080/api/v1/sizes';
  addurl = 'http://localhost:8080/api/v1/sizes/add-size';
  idurl = 'http://localhost:8080/api/v1/sizes/size';
  editurl = 'http://localhost:8080/api/v1/sizes/update-size';
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
    return this.http.post(this.addurl, data);
  }

  getSizeById(id: any) {
    // console.log(data);
    return this.http.get(`${this.idurl}/${id}`);
  }
  updateSizeData(id: any, data: any) {
    // console.log(data);
    return this.http.put(`${this.editurl}/${id}`, data);
  }
  deleteSizeData(id: any) {
    // console.log(data);
    return this.http.delete(`${this.idurl}/${id}`);
  }
}

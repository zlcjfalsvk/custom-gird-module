import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getData() {
      const dataUrl = 'assets/data/100k.json';
      return this.http.get(dataUrl);
  }

}

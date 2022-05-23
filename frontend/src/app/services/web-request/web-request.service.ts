import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  private API_URL;

  constructor(private http: HttpClient) {
    this.API_URL = 'http://localhost:3000/api'
   }

  get(url: string) {
    return this.http.get(`${this.API_URL}/${url}`)
  }

  post(url: string, payload: Object) {
    return this.http.post(`${this.API_URL}/${url}`, payload)
  }
}

import { Injectable } from '@angular/core';
import { WebRequestService } from '../web-request/web-request.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private webRequest: WebRequestService) { }

  getUsers() {
    return this.webRequest.get('users')
  }

  getSchools() {
    return this.webRequest.get('school')
  }
}

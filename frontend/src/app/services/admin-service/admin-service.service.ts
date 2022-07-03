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

  addSchool(schoolName: string, adminRut: string) {
    return this.webRequest.put('school', { "name": schoolName, "director": adminRut })
  }

  removeSchool(schoolName: string) {
    return this.webRequest.delete(`school/${schoolName}`)
  }

  modifySchool(schoolName: string, adminRut: string) {
    return this.webRequest.post('school', { "name": schoolName, "director": adminRut } )
  }

  getTopUsers() {
    return this.webRequest.get('users/top')
  }

  getTopSchools() {
    return this.webRequest.get('school/top')
  }
}

import { Injectable } from '@angular/core';
import { WebRequestService } from '../web-request/web-request.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private webRequest: WebRequestService) { }

  login(payload: Object) {
    return this.webRequest.post('users/login', payload)
  }

  verifyRole(payload: Object) {
    return this.webRequest.post('auth/session', payload)
  }
}

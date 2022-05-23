import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from 'src/app/services/login-service/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.sass']
})
export class LoginScreenComponent implements OnInit {
  public userRut: string = '';
  public userPassword: string = '';
  private rolesRedirect: any = {
    0: 'admin/dashboard',
    1: '/',
    2: 'teacher/dashboard',
    3: 'student/dashboard'
  }

  constructor(
    private loginService: LoginService,
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(userRut: string, userPassword: string) {
    this.loginService.login({
      rut: userRut,
      password: userPassword
    }).subscribe((response: any) => {
      if (response['accessToken']) {
        this.cookieService.set('accessToken', response.accessToken, 7, '/')

        const role = response['session']['role']
        this.router.navigate([this.rolesRedirect[role]])
      } else {
        return response
      }
    })
  }

}

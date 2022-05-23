import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from 'src/app/services/login-service/login-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private cookieService: CookieService,
    private router: Router,
    private loginService: LoginService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const cookieExists = this.cookieService.check('accessToken')
      const role = route.data['role']

      if (cookieExists) {
        const res = this.loginService.verifyRole( {token: this.cookieService.get('accessToken'), role: role} )
        res.subscribe((response: any) => {
          console.log(response.auth)
          if (!response.auth) {
            this.router.navigate(['/login'])
          }
        })
      } else {
        this.router.navigate(['/login'])
      }

      return true;
  }
  
}

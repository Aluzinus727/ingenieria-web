import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sidebar-admin',
  templateUrl: './sidebar-admin.component.html',
  styleUrls: ['./sidebar-admin.component.sass']
})
export class SidebarAdminComponent implements OnInit {

  constructor(
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
  }

  deleteCookies() {
    this.cookieService.delete('accessToken', '/')
  }

}

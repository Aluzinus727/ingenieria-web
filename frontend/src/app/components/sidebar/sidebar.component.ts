import { Component, Input, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

  @Input()
  props = {
    first_name: '',
    last_name: '',
    course: ''
  }

  constructor(
    private cookieService: CookieService,
  ) { }

  ngOnInit(): void {
  }

  deleteCookies() {
    this.cookieService.delete('accessToken', '/')
  }

}

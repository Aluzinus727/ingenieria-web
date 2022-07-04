import { Component, OnInit, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sidebar-teacher',
  templateUrl: './sidebar-teacher.component.html',
  styleUrls: ['./sidebar-teacher.component.sass']
})
export class SidebarTeacherComponent implements OnInit {

  @Input()
  props = {
    first_name: '',
    last_name: '',
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

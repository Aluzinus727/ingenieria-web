import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { StudentService } from 'src/app/services/student-service/student-service.service';

import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-notifications-student',
  templateUrl: './notifications-student.component.html',
  styleUrls: ['./notifications-student.component.sass']
})
export class NotificationsStudentComponent implements OnInit {
  
  props = {
    first_name: '',
    last_name: '',
    course: ''
  }

  notifications: { id: number, date: string, author: string, issue: string, content: string }[]

  constructor(
    private cookieService: CookieService,
    private studentService: StudentService
  ) {
    this.notifications = []
  }

  ngOnInit(): void {
    const tokenData: any = jwt_decode(this.cookieService.get('accessToken'))

    if (tokenData) {
      this.props.first_name = tokenData['first_name']
      this.props.last_name = tokenData['last_name']
      this.props.course = tokenData['course']
    }

    const data = this.studentService.getNotifications( { rut: tokenData['rut'] })
    if (data.notifications) {
      this.notifications = data.notifications.notifications
    }
    console.log(this.notifications)
  }

}

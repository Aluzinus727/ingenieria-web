import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { StudentService } from 'src/app/services/student-service/student-service.service';
import { NextEvaluations } from 'src/app/models/evaluations.model';
import { Notification } from 'src/app/models/notifications.model';

import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-homepage-student',
  templateUrl: './homepage-student.component.html',
  styleUrls: ['./homepage-student.component.sass']
})
export class HomepageStudentComponent implements OnInit {

  props = {
    first_name: '',
    last_name: '',
    course: ''
  }

  evaluations: NextEvaluations[]
  notifications: Notification[]

  constructor(
    private cookieService: CookieService,
    private studentService: StudentService
  ) { 
    this.evaluations = []
    this.notifications = []
  }

  ngOnInit(): void {
    const tokenData: any = jwt_decode(this.cookieService.get('accessToken'))

    if (tokenData) {
      this.props.first_name = tokenData['first_name']
      this.props.last_name = tokenData['last_name']
      this.props.course = tokenData['course']
    }

    const data = this.studentService.getDashboardInfo( { rut: tokenData['rut'] })
    
    if (data.evaluations) {
      this.evaluations = data.evaluations.nextEvaluations
    }

    if (data.notifications) {
      const notifications = data.notifications.notifications.map(({content, ...notification}) => notification)
      this.notifications = notifications
    }

  }

}

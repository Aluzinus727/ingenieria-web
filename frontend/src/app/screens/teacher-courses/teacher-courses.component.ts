import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { TeacherService } from 'src/app/services/teacher-service/teacher-service.service';

import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-teacher-courses',
  templateUrl: './teacher-courses.component.html',
  styleUrls: ['./teacher-courses.component.sass']
})
export class TeacherCoursesComponent implements OnInit {

  props = {
    first_name: '',
    last_name: ''
  }

  courses: { course: string, grade: string, students: number, average: number, img_path: string }[]

  constructor(
    private cookieService: CookieService,
    private teacherService: TeacherService
  ) { 
    this.courses = []
  }

  ngOnInit(): void {
    const tokenData: any = jwt_decode(this.cookieService.get('accessToken'))

    if (tokenData) {
      this.props.first_name = tokenData['first_name']
      this.props.last_name = tokenData['last_name']
    }

    const data = this.teacherService.getDashboardInfo( { rut: tokenData['rut'] } )
    if (data && data.courses) {
      this.courses = data.courses.courses
    }
  }

}

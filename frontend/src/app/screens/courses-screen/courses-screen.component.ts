import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { StudentService } from 'src/app/services/student-service/student-service.service';

import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-courses-screen',
  templateUrl: './courses-screen.component.html',
  styleUrls: ['./courses-screen.component.sass']
})
export class CoursesScreenComponent implements OnInit {

  props = {
    first_name: '',
    last_name: '',
    course: ''
  }

  courses: { course: string, teacher: string, img_path: string, average: number }[]

  constructor(
    private cookieService: CookieService,
    private studentService: StudentService
  ) { 
    this.courses = []
  }

  ngOnInit(): void {
    const tokenData: any = jwt_decode(this.cookieService.get('accessToken'))

    if (tokenData) {
      this.props.first_name = tokenData['first_name']
      this.props.last_name = tokenData['last_name']
      this.props.course = tokenData['course']
    }

    const data = this.studentService.getCoursesInfo( { rut: tokenData['rut'] } )
    if (data.courses) {
      this.courses = data.courses.courses
    }

    console.log(this.courses)
  }

}

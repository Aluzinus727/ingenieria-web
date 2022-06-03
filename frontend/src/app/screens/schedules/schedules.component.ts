import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { StudentService } from 'src/app/services/student-service/student-service.service';

import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.sass']
})
export class SchedulesComponent implements OnInit {

  props = {
    first_name: '',
    last_name: '',
    course: ''
  }

  schedules: { block: number, schedules: { day: number, course: string, color: string }[] }[]

  constructor(
    private cookieService: CookieService,
    private studentService: StudentService
  ) { 
    this.schedules = []
  }

  ngOnInit(): void {
    const tokenData: any = jwt_decode(this.cookieService.get('accessToken'))

    if (tokenData) {
      this.props.first_name = tokenData['first_name']
      this.props.last_name = tokenData['last_name']
      this.props.course = tokenData['course']
    }

    const data = this.studentService.getSchedulesInfo( { rut: tokenData['rut'] } )
    console.log(data)
    if(data.schedules) {
      this.schedules = data.schedules
    }
    
  }

}

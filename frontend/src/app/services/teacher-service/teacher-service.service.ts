import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeacherServiceService {

  courses = [
    {
      course: "Inglés",
      grade: "1° Básico",
      students: 39
    },
    {
      course: "Inglés",
      grade: "2° Básico",
      students: 35
    },
    {
      course: "Inglés",
      grade: "3° Básico",
      students: 42
    }
  ]

  constructor() { }

  getDashboardInfo(payload: any) {

  }
}

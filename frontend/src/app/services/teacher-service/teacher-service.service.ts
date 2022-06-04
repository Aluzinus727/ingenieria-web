import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  courses = [
    {
      rut: "20100200",
      courses: [
        {
          course: "Inglés",
          grade: "1° Básico",
          students: 39,
          average: 5.3,
          img_path: "assets/primary-school.svg"
        },
        {
          course: "Inglés",
          grade: "2° Básico",
          students: 35,
          average: 6.7,
          img_path: "assets/primary-school.svg"
        },
        {
          course: "Inglés",
          grade: "3° Básico",
          students: 42,
          average: 6.5,
          img_path: "assets/primary-school.svg"
        }
      ]
    }
  ]

  evaluations = [
    {
      rut: "20100200",
      evaluations: [
        {
          date: "10 MAYO",
          grade: "3° Básico",
          course: "Inglés",
          evaluation_type: "Prueba"
        },
        {
          date: "10 MAYO",
          grade: "2° Básico",
          course: "Inglés",
          evaluation_type: "Presentación oral"
        },
        {
          date: "12 MAYO",
          grade: "1° Básico",
          course: "Inglés",
          evaluation_type: "Prueba"
        }
      ]
    }
  ]

  constructor() { }

  getDashboardInfo(payload: any) {
    const courses = this.courses.find(c => c.rut === payload['rut'])
    const nextEvaluations = this.evaluations.find(e => e.rut === payload['rut'])

    return {
      courses,
      nextEvaluations
    }
  }
}

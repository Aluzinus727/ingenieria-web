import { Injectable } from '@angular/core';
import { WebRequestService } from '../web-request/web-request.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  nextEvaluations = [
    {
      rut: "17200300",  // En la base de datos se buscaría idealmente por el RUT del estudiante, retorna nextEvaluations.
      nextEvaluations: [
        {
          date: "10 MAYO",
          subject: "FÍSICA ELECTROMAGNETISMO",
          evaluation_type: "PRUEBA"
    
        },
        {
          date: "12 MAYO",
          subject: "HISTORIA Y GEOGRAFÍA",
          evaluation_type: "PRESENTACIÓN ORAL"
        },
        {
          date: "12 MAYO",
          subject: "MATEMÁTICAS",
          evaluation_type: "PRUEBA"
        }
      ]
    }
  ]

  notices = [
    {
      rut: "17200300", // En la base de datos se buscaría idealmente por el RUT del estudiante, retorna notices.
      notices: [
        {
          date: "2 MAYO",
          author: "SISTEMA",
          issue: "Calificaciones disponibles"
        },
        {
          date: "3 MAYO",
          author: "Juan Diaz",
          issue: "Inasistencia"
        },
        {
          date: "3 MAYO",
          author: "Maria Pérez",
          issue: "Mal comportamiento"
        }
      ]
    }
  ]

  courses = [
    {
      rut: "17200300", 
      courses: [
        {
          course: "Matemáticas",
          teacher: "Javier González",
          img_path: "assets/math.jpg",
          average: 5.3
        },
        {
          course: "Ciencias",
          teacher: "Marta Diaz",
          img_path: "assets/ciencias.jpg",
          average: 6.5
        },
        {
          course: "Educación física",
          teacher: "Roberto Inostroza",
          img_path: "assets/educacion-fisica.jpg",
          average: 3.4
        }
      ]
    }
  ]

  schedules = [
    {
      rut: "17200300",
      schedules: [
        {
          block: 1,
          schedules: [
            {
              day: 1,
              course: "Matemáticas",
              color: "lightblue"
            },
            {
              day: 2,
              course: "Educación física",
              color: "cornsilk"
            },
            {
              day: 3,
              course: "Matemáticas",
              color: "lightblue"
            },
            {
              day: 4,
              course: "Religión",
              color: "darkorchid"
            },
            {
              day: 5,
              course: "Matemáticas",
              color: "lightblue"
            }
          ]
        },
        {
          block: 2,
          schedules: [
            {
              day: 1,
              course: "Lenguaje",
              color: "red"
            },
            {
              day: 2,
              course: "Tecnología",
              color: "deeppink"
            },
            {
              day: 3,
              course: "Inglés",
              color: "darkcyan"
            },
            {
              day: 4,
              course: "Lenguaje",
              color: "red"
            },
            {
              day: 5,
              course: "Educación física",
              color: "cornsilk"
            }
          ]
        },
        {
          block: 3,
          schedules: [
            {
              day: 1,
              course: "Inglés",
              color: "darkcyan"
            },
            {
              day: 2,
              course: "Matemáticas",
              color: "lightblue"
            },
            {
              day: 3,
              course: "Ciencias",
              color: "green"
            },
            {
              day: 4,
              course: "Lenguaje",
              color: "red"
            },
            {
              day: 5,
              course: "Historia",
              color: "darkseagreen"
            }
          ]
        },
        {
          block: 4,
          schedules: [
            {
              day: 1,
              course: "Historia",
              color: "darkseagreen"
            },
            {
              day: 2,
              course: "Ciencias",
              color: "green",
            },
            {
              day: 3,
              course: "Filosofía",
              color: "whitesmoke"
            },
            {
              day: 4,
              course: "Inglés",
              color: "darkcyan"
            },
            {
              day: 5,
              course: "Lenguaje",
              color: "red"
            }
          ]
        },
        {
          block: 5,
          schedules: [
            {
              day: 1,
              course: "Ciencias",
              color: "green"
            },
            {
              day: 2,
              course: "Ciencias",
              color: "green"
            },
            {
              day: 3,
              course: "Filosofía",
              color: "whitesmoke",
            },
            {
              day: 4,
              course: "Consejo de curso",
              color: "brown"
            },
            {
              day: 5,
              course: "Historia",
              color: "darkseagreen"
            }
          ]
        }
      ]
    }
  ]

  notifications = [
    {
      rut: "17200300",
      notifications: [
        {
          id: 0,
          date: "2 MAYO",
          author: "SISTEMA",
          issue: "Calificaciones disponibles",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          id: 1,
          date: "3 MAYO",
          author: "Juan Diaz",
          issue: "Inasistencia",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          id: 2,
          date: "3 MAYO",
          author: "Maria Pérez",
          issue: "Mal comportamiento",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      ]
    }
  ]

  constructor(
    private webRequest: WebRequestService
  ) { }

  getDashboardInfo(payload: any) {
    // Deberia obtener estos datos desde la base de datos, por eso se importa el servicio de WebRequest
    const evaluations = this.nextEvaluations.find(e => e.rut === payload['rut'])
    const notices = this.notices.find(n => n.rut === payload['rut'])

    return {
      evaluations,
      notices
    }
  } 

  getCoursesInfo(payload: any) {
    // Deberia obtener estos datos desde la base de datos
    const courses = this.courses.find(c => c.rut === payload['rut'])

    return {
      courses
    }
  }

  getSchedulesInfo(payload: any) {
    // Debería obtener estos datos desde la base de datos
    const schedules = this.schedules.find(s => s.rut === payload['rut'])

    return {
      schedules: schedules?.schedules
    }
  }

  getNotifications(payload: any) {
    const notifications = this.notifications.find(n => n.rut === payload['rut'])

    return {
      notifications
    }
  }
}

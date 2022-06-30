import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { AboutScreenComponent } from './screens/about-screen/about-screen.component';
import { ContactScreenComponent } from './screens/contact-screen/contact-screen.component';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { HomepageStudentComponent } from './screens/homepage-student/homepage-student.component';
import { CoursesScreenComponent } from './screens/courses-screen/courses-screen.component';
import { SchedulesComponent } from './screens/schedules/schedules.component';
import { DashboardAdminComponent } from './screens/dashboard-admin/dashboard-admin.component';
import { InstitutionsComponent } from './screens/institutions/institutions.component';
import { UsersComponent } from './screens/users/users.component';
import { DashboardTeacherComponent } from './screens/dashboard-teacher/dashboard-teacher.component';
import { TeacherCoursesComponent } from './screens/teacher-courses/teacher-courses.component';
import { TeacherCourseComponent } from './screens/teacher-course/teacher-course.component';
import { TeacherNoticesComponent } from './screens/teacher-notices/teacher-notices.component';
import { AuthGuard } from './guards/auth-guard/auth.guard';
import { NotificationsStudentComponent } from './screens/notifications-student/notifications-student.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeScreenComponent },
  { path: 'about', component: AboutScreenComponent },
  { path: 'contact', component: ContactScreenComponent },
  { path: 'login', component: LoginScreenComponent },
  { 
    path: 'admin/dashboard', 
    component: DashboardAdminComponent, 
    canActivate: [AuthGuard],
    data: { role: '0' }
  },
  { 
    path: 'admin/institutions', 
    component: InstitutionsComponent,
    canActivate: [AuthGuard],
    data: { role: '0' }
  },
  { 
    path: 'admin/users', 
    component: UsersComponent,
    canActivate: [AuthGuard],
    data: { role: '0' }
  },
  { 
    path: 'teacher/dashboard', 
    component: DashboardTeacherComponent, 
    canActivate: [AuthGuard],
    data: { role: '2' }
  },
  { 
    path: 'teacher/courses', 
    component: TeacherCoursesComponent,
    canActivate: [AuthGuard],
    data: { role: '2' }
  },
  { 
    path: 'teacher/course', 
    component: TeacherCourseComponent,
    canActivate: [AuthGuard],
    data: { role: '2' }
  },
  { 
    path: 'teacher/notices', 
    component: TeacherNoticesComponent,
    canActivate: [AuthGuard],
    data: { role: '2' }
  },  
  { 
    path: 'student/dashboard', 
    component: HomepageStudentComponent,
    canActivate: [AuthGuard],
    data: { role: '3' }
  },
  { 
    path: 'student/courses', 
    component: CoursesScreenComponent,
    canActivate: [AuthGuard],
    data: { role: '3' }
  },
  { 
    path: 'student/schedules', 
    component: SchedulesComponent,
    canActivate: [AuthGuard],
    data: { role: '3' }
  },
  {
    path: 'student/notifications',
    component: NotificationsStudentComponent,
    canActivate: [AuthGuard],
    data: { role: '3' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

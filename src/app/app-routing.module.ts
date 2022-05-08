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

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeScreenComponent },
  { path: 'about', component: AboutScreenComponent },
  { path: 'contact', component: ContactScreenComponent },
  { path: 'login', component: LoginScreenComponent },
  { path: 'student/dashboard', component: HomepageStudentComponent },
  { path: 'student/courses', component: CoursesScreenComponent },
  { path: 'student/schedules', component: SchedulesComponent },
  { path: 'admin/dashboard', component: DashboardAdminComponent },
  { path: 'admin/institutions', component: InstitutionsComponent },
  { path: 'admin/users', component: UsersComponent },
  { path: 'teacher/dashboard', component: DashboardTeacherComponent },
  { path: 'teacher/courses', component: TeacherCoursesComponent },
  { path: 'teacher/course', component: TeacherCourseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

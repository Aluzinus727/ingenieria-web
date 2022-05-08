import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { AboutScreenComponent } from './screens/about-screen/about-screen.component';
import { ContactScreenComponent } from './screens/contact-screen/contact-screen.component';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomepageStudentComponent } from './screens/homepage-student/homepage-student.component';
import { CoursesScreenComponent } from './screens/courses-screen/courses-screen.component';
import { SchedulesComponent } from './screens/schedules/schedules.component';
import { DashboardAdminComponent } from './screens/dashboard-admin/dashboard-admin.component';
import { SidebarAdminComponent } from './components/sidebar-admin/sidebar-admin.component';
import { InstitutionsComponent } from './screens/institutions/institutions.component';
import { UsersComponent } from './screens/users/users.component';
import { DashboardTeacherComponent } from './screens/dashboard-teacher/dashboard-teacher.component';
import { SidebarTeacherComponent } from './components/sidebar-teacher/sidebar-teacher.component';
import { TeacherCoursesComponent } from './screens/teacher-courses/teacher-courses.component';
import { TeacherCourseComponent } from './screens/teacher-course/teacher-course.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeScreenComponent,
    AboutScreenComponent,
    ContactScreenComponent,
    LoginScreenComponent,
    FooterComponent,
    SidebarComponent,
    HomepageStudentComponent,
    CoursesScreenComponent,
    SchedulesComponent,
    DashboardAdminComponent,
    SidebarAdminComponent,
    InstitutionsComponent,
    UsersComponent,
    DashboardTeacherComponent,
    SidebarTeacherComponent,
    TeacherCoursesComponent,
    TeacherCourseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

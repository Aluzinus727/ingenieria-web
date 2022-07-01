import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin-service/admin-service.service';
import { User } from 'src/app/models/user.model'  

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  users_per_page = 5;
  
  start: number = 0;
  end: number = this.start + this.users_per_page;
  
  currentPage: number = 1;
  numberOfPages: number = 1;

  constructor(
    private adminService: AdminService
  ) { 
    this.adminService.getUsers()
      .subscribe((data: any) => {
        console.log(data)
        this.users = data
        this.numberOfPages = Math.ceil(this.users.length / this.users_per_page)
      }
    )
  }

  ngOnInit(): void {
  }

  advancePage() {
    this.currentPage = this.currentPage + 1
    this.start = (this.currentPage * this.users_per_page) - this.users_per_page
    this.end = this.start + 5
  }

  backPage() {
    this.currentPage = this.currentPage - 1
    this.start = (this.currentPage * this.users_per_page) - this.users_per_page
    this.end = this.start + 5
  }
}

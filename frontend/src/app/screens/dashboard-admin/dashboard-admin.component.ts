import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin-service/admin-service.service';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.sass']
})
export class DashboardAdminComponent implements OnInit {
  users: [] = []
  schools: [] = []

  constructor(
    private adminService: AdminService
  ) {
    this.adminService.getTopUsers()
      .subscribe((data: any) => {
        this.users = data
        console.log(this.users)
      })
    
    this.adminService.getTopSchools()
      .subscribe((data: any) => {
        this.schools = data
      })
  }

  ngOnInit(): void {
  }

}

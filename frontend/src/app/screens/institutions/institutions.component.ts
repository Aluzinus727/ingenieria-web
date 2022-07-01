import { Component, OnInit } from '@angular/core';
import { Institution } from 'src/app/models/institution.model';
import { AdminService } from 'src/app/services/admin-service/admin-service.service';

@Component({
  selector: 'app-institutions',
  templateUrl: './institutions.component.html',
  styleUrls: ['./institutions.component.sass']
})
export class InstitutionsComponent implements OnInit {
  institutions: Institution[] = [];

  schools_per_page = 5;
  
  start: number = 0;
  end: number = this.start + this.schools_per_page;
  
  currentPage: number = 1;
  numberOfPages: number = 1;

  constructor(
    private adminService: AdminService
  ) { 
    this.adminService.getSchools()
      .subscribe((data: any) => {
        this.institutions = data[0]
        this.numberOfPages = Math.ceil(this.institutions.length)
      }
    )
  }

  ngOnInit(): void {
  }

  advancePage() {
    this.currentPage = this.currentPage + 1
    this.start = (this.currentPage * this.schools_per_page) - this.schools_per_page
    this.end = this.start + 5
  }

  backPage() {
    this.currentPage = this.currentPage - 1
    this.start = (this.currentPage * this.schools_per_page) - this.schools_per_page
    this.end = this.start + 5
  }
}

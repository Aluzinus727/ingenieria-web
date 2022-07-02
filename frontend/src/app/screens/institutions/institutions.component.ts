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

  // Institución a agregar
  public addName: string = ''
  public addRutAdmin: string = ''

  // Institución a modificar
  public modifyName: string = ''
  public modifyRut: string = ''

  // Institución a borrar
  public selectedInstitution: any = null

  constructor(
    private adminService: AdminService
  ) { 
    this.adminService.getSchools()
      .subscribe((data: any) => {
        this.institutions = data[0]

        if (this.institutions.length > 0) {
          this.selectedInstitution = this.institutions[0]
        }

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

  addInstitution(add_name: string, add_rut_admin: string) {
    let new_institution = {
      school_name: add_name,
      director: add_rut_admin,
      name: '',
      last_name: '',
      rut: ''
    }

    this.adminService.addSchool(add_name, add_rut_admin)
      .subscribe((data: any) => {
        if (data && data.name && data.last_name && data.rut) {
          new_institution.name = data.name
          new_institution.last_name = data.last_name
          new_institution.rut = data.rut

          this.institutions.push(new_institution)
        }
      })
  }

  selectInstitution(institution: any) {
    if (institution === this.selectedInstitution) {
      console.log(institution, this.selectedInstitution)
      this.selectedInstitution = null
    } else {
      this.selectedInstitution = institution
      console.log(this.selectedInstitution)
    }
  }

  deleteInstitution() {
    for (let i = 0; i < this.institutions.length; i++) {
      if(this.institutions[i].rut == this.selectedInstitution.rut){
        this.institutions.splice(i, 1);
        this.adminService.removeSchool(this.selectedInstitution.school_name).subscribe()
        this.selectedInstitution = null
      }
    }
  }

  modifyInstitution(modifyRut: string) {
    let alert = document.getElementById('modifyDangerAlert') as HTMLInputElement
    console.log(modifyRut, this.selectedInstitution.school_name)

    if (this.selectedInstitution.school_name === '' || modifyRut === '') {
      alert.removeAttribute('hidden')
    } else {
      alert.setAttribute('hidden', 'true')
      this.adminService.modifySchool(this.selectedInstitution.school_name, modifyRut).subscribe()
    }
  }
}

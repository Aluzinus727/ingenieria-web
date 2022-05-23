import { Component, OnInit } from '@angular/core';
import { Institution } from 'src/app/models/institution.model';

@Component({
  selector: 'app-institutions',
  templateUrl: './institutions.component.html',
  styleUrls: ['./institutions.component.sass']
})
export class InstitutionsComponent implements OnInit {
  public institutions: Institution[] = [];

  constructor() { 
    this.institutions = [
      {
        id: 1,
        name: "Colegio X",
        admin_rut: "15.552.132-1",
        admin_name: "Felipe Diaz"
      },
      {
        id: 2,
        name: "Colegio Y",
        admin_rut: "10.375.514-K",
        admin_name: "Roberto Sepulveda"
      },
      {
        id: 3,
        name: "Colegio Z",
        admin_rut: "9.523.512-1",
        admin_name: "Beatriz Gonzalez"
      }
    ]
  }

  ngOnInit(): void {
  }
}

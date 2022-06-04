import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-teacher',
  templateUrl: './sidebar-teacher.component.html',
  styleUrls: ['./sidebar-teacher.component.sass']
})
export class SidebarTeacherComponent implements OnInit {

  @Input()
  props = {
    first_name: '',
    last_name: '',
  }

  constructor() { }

  ngOnInit(): void {
  }

}

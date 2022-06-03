import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

  @Input()
  props = {
    first_name: '',
    last_name: '',
    course: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}

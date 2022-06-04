import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-teacher-notices',
  templateUrl: './teacher-notices.component.html',
  styleUrls: ['./teacher-notices.component.sass']
})
export class TeacherNoticesComponent implements OnInit {

  form: FormGroup

  constructor(
    public formBuilder: FormBuilder
  ) { 
    this.form = this.formBuilder.group({
      issue: ["", [Validators.required]],
      message: ["", [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  saveForm() {
    const errorElement = document.querySelector('#formError')
    const successElement = document.querySelector('#formSuccess')

    if (this.form.controls['issue'].invalid || this.form.controls['message'].invalid) {
      errorElement?.removeAttribute('hidden')
    } else {
      errorElement?.setAttribute('hidden', "true")
      successElement?.removeAttribute('hidden')
    }
  }
}

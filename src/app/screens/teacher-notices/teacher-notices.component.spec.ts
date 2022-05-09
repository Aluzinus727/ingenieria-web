import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherNoticesComponent } from './teacher-notices.component';

describe('TeacherNoticesComponent', () => {
  let component: TeacherNoticesComponent;
  let fixture: ComponentFixture<TeacherNoticesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherNoticesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherNoticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

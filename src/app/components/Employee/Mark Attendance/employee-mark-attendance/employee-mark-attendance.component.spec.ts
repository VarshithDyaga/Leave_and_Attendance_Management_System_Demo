import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeMarkAttendanceComponent } from './employee-mark-attendance.component';

describe('EmployeeMarkAttendanceComponent', () => {
  let component: EmployeeMarkAttendanceComponent;
  let fixture: ComponentFixture<EmployeeMarkAttendanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeMarkAttendanceComponent]
    });
    fixture = TestBed.createComponent(EmployeeMarkAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLeaveRequestViewComponent } from './admin-leave-request-view.component';

describe('AdminLeaveRequestViewComponent', () => {
  let component: AdminLeaveRequestViewComponent;
  let fixture: ComponentFixture<AdminLeaveRequestViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminLeaveRequestViewComponent]
    });
    fixture = TestBed.createComponent(AdminLeaveRequestViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyLeaveRequestComponent } from './apply-leave-request.component';

describe('ApplyLeaveRequestComponent', () => {
  let component: ApplyLeaveRequestComponent;
  let fixture: ComponentFixture<ApplyLeaveRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplyLeaveRequestComponent]
    });
    fixture = TestBed.createComponent(ApplyLeaveRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

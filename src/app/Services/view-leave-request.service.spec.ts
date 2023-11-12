import { TestBed } from '@angular/core/testing';

import { ViewLeaveRequestService } from './view-leave-request.service';

describe('ViewLeaveRequestService', () => {
  let service: ViewLeaveRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewLeaveRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

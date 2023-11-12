import { TestBed } from '@angular/core/testing';

import { EmployeeInformationService } from './employee-information.service';

describe('EmployeeInformationService', () => {
  let service: EmployeeInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { AddNewProjectService } from './add-new-project.service';

describe('AddNewProjectService', () => {
  let service: AddNewProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddNewProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

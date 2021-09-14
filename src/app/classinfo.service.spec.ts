import { TestBed } from '@angular/core/testing';

import { ClassinfoService } from './classinfo.service';

describe('ClassinfoService', () => {
  let service: ClassinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

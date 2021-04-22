import { TestBed } from '@angular/core/testing';

import { IctService } from './ict.service';

describe('IctService', () => {
  let service: IctService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IctService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

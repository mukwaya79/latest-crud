import { TestBed } from '@angular/core/testing';

import { StationaryService } from './stationary.service';

describe('StationaryService', () => {
  let service: StationaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StationaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { RiderTestService } from './rider-test.service';

describe('RiderTestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RiderTestService]
    });
  });

  it('should be created', inject([RiderTestService], (service: RiderTestService) => {
    expect(service).toBeTruthy();
  }));
});

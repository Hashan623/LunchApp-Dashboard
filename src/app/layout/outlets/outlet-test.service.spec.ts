import { TestBed, inject } from '@angular/core/testing';

import { OutletTestService } from './outlet-test.service';

describe('OutletTestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OutletTestService]
    });
  });

  it('should be created', inject([OutletTestService], (service: OutletTestService) => {
    expect(service).toBeTruthy();
  }));
});

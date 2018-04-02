import { TestBed, inject } from '@angular/core/testing';

import { FooddetailTestService } from './fooddetail-test.service';

describe('FooddetailTestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FooddetailTestService]
    });
  });

  it('should be created', inject([FooddetailTestService], (service: FooddetailTestService) => {
    expect(service).toBeTruthy();
  }));
});

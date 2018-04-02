import { TestBed, inject } from '@angular/core/testing';

import { FoodtypeTestService } from './foodtype-test.service';

describe('FoodtypeTestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoodtypeTestService]
    });
  });

  it('should be created', inject([FoodtypeTestService], (service: FoodtypeTestService) => {
    expect(service).toBeTruthy();
  }));
});

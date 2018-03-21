import { TestBed, inject } from '@angular/core/testing';

import { FoodDetailTypeService } from './food-detail-type.service';

describe('FoodDetailTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoodDetailTypeService]
    });
  });

  it('should be created', inject([FoodDetailTypeService], (service: FoodDetailTypeService) => {
    expect(service).toBeTruthy();
  }));
});

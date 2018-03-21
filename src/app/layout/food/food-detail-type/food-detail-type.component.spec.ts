import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodDetailTypeComponent } from './food-detail-type.component';

describe('FoodDetailTypeComponent', () => {
  let component: FoodDetailTypeComponent;
  let fixture: ComponentFixture<FoodDetailTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodDetailTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodDetailTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

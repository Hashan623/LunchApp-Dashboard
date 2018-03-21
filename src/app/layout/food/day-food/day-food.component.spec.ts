import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayFoodComponent } from './day-food.component';

describe('DayFoodComponent', () => {
  let component: DayFoodComponent;
  let fixture: ComponentFixture<DayFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletsFormComponent } from './outlets-form.component';

describe('OutletFormComponent', () => {
  let component: OutletsFormComponent;
  let fixture: ComponentFixture<OutletsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutletsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutletsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

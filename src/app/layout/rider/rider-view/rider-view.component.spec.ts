import { DataTableModule } from 'angular5-data-table';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiderViewComponent } from './rider-view.component';

describe('RiderViewComponent', () => {
  let component: RiderViewComponent;
  let fixture: ComponentFixture<RiderViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiderViewComponent ],
      imports: [
        DataTableModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiderViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

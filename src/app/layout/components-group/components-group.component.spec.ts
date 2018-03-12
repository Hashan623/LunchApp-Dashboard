import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsGroupComponent } from './components-group.component';

describe('CategoryGroupComponent', () => {
  let component: ComponentsGroupComponent;
  let fixture: ComponentFixture<ComponentsGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewhealthComponent } from './viewhealth.component';

describe('ViewhealthComponent', () => {
  let component: ViewhealthComponent;
  let fixture: ComponentFixture<ViewhealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewhealthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewhealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewgiftComponent } from './viewgift.component';

describe('ViewgiftComponent', () => {
  let component: ViewgiftComponent;
  let fixture: ComponentFixture<ViewgiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewgiftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewgiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

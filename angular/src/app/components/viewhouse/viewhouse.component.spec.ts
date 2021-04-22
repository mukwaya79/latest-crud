import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewhouseComponent } from './viewhouse.component';

describe('ViewhouseComponent', () => {
  let component: ViewhouseComponent;
  let fixture: ComponentFixture<ViewhouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewhouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewhouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

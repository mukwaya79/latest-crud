import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationaryComponent } from './stationary.component';

describe('StationaryComponent', () => {
  let component: StationaryComponent;
  let fixture: ComponentFixture<StationaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StationaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StationaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewstationaryComponent } from './viewstationary.component';

describe('ViewstationaryComponent', () => {
  let component: ViewstationaryComponent;
  let fixture: ComponentFixture<ViewstationaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewstationaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewstationaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

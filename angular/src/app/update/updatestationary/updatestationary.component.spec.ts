import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatestationaryComponent } from './updatestationary.component';

describe('UpdatestationaryComponent', () => {
  let component: UpdatestationaryComponent;
  let fixture: ComponentFixture<UpdatestationaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatestationaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatestationaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

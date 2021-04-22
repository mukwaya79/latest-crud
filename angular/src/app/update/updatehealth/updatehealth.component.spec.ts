import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatehealthComponent } from './updatehealth.component';

describe('UpdatehealthComponent', () => {
  let component: UpdatehealthComponent;
  let fixture: ComponentFixture<UpdatehealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatehealthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatehealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

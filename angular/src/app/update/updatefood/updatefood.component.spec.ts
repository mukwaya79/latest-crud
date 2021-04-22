import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatefoodComponent } from './updatefood.component';

describe('UpdatefoodComponent', () => {
  let component: UpdatefoodComponent;
  let fixture: ComponentFixture<UpdatefoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatefoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatefoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

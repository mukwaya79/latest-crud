import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatehouseComponent } from './updatehouse.component';

describe('UpdatehouseComponent', () => {
  let component: UpdatehouseComponent;
  let fixture: ComponentFixture<UpdatehouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatehouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateassetComponent } from './updateasset.component';

describe('UpdateassetComponent', () => {
  let component: UpdateassetComponent;
  let fixture: ComponentFixture<UpdateassetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateassetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateassetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

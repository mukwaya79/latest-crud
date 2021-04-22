import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateictComponent } from './updateict.component';

describe('UpdateictComponent', () => {
  let component: UpdateictComponent;
  let fixture: ComponentFixture<UpdateictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

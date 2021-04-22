import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewictComponent } from './viewict.component';

describe('ViewictComponent', () => {
  let component: ViewictComponent;
  let fixture: ComponentFixture<ViewictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

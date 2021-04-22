import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IctComponent } from './ict.component';

describe('IctComponent', () => {
  let component: IctComponent;
  let fixture: ComponentFixture<IctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IctComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

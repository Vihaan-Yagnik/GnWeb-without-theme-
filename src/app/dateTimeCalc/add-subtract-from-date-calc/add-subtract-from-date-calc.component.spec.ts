import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubtractFromDateCalcComponent } from './add-subtract-from-date-calc.component';

describe('AddSubtractFromDateCalcComponent', () => {
  let component: AddSubtractFromDateCalcComponent;
  let fixture: ComponentFixture<AddSubtractFromDateCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddSubtractFromDateCalcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddSubtractFromDateCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

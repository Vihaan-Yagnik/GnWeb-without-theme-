import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BMICalcComponent } from './bmi-calc.component';

describe('BMICalcComponent', () => {
  let component: BMICalcComponent;
  let fixture: ComponentFixture<BMICalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BMICalcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BMICalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

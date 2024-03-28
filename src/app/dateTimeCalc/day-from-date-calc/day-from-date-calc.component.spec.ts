import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayFromDateCalcComponent } from './day-from-date-calc.component';

describe('DayFromDateCalcComponent', () => {
  let component: DayFromDateCalcComponent;
  let fixture: ComponentFixture<DayFromDateCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DayFromDateCalcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DayFromDateCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

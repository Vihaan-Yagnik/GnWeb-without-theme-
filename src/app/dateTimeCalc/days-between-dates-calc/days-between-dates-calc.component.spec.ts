import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysBetweenDatesCalcComponent } from './days-between-dates-calc.component';

describe('DaysBetweenDatesCalcComponent', () => {
  let component: DaysBetweenDatesCalcComponent;
  let fixture: ComponentFixture<DaysBetweenDatesCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DaysBetweenDatesCalcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DaysBetweenDatesCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

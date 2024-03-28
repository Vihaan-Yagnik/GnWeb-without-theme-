import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalCalorieCarbohydrateIntakeComponent } from './cal-calorie-carbohydrate-intake.component';

describe('CalCalorieCarbohydrateIntakeComponent', () => {
  let component: CalCalorieCarbohydrateIntakeComponent;
  let fixture: ComponentFixture<CalCalorieCarbohydrateIntakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalCalorieCarbohydrateIntakeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalCalorieCarbohydrateIntakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

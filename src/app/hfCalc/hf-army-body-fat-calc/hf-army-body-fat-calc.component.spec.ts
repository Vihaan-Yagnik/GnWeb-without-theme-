import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HfArmyBodyFatCalcComponent } from './hf-army-body-fat-calc.component';

describe('HfArmyBodyFatCalcComponent', () => {
  let component: HfArmyBodyFatCalcComponent;
  let fixture: ComponentFixture<HfArmyBodyFatCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HfArmyBodyFatCalcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HfArmyBodyFatCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToCalcComponent } from './how-to-calc.component';

describe('HowToCalcComponent', () => {
  let component: HowToCalcComponent;
  let fixture: ComponentFixture<HowToCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HowToCalcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HowToCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

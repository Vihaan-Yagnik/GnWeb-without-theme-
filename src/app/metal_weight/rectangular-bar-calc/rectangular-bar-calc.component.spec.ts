import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RectangularBarCalcComponent } from './rectangular-bar-calc.component';

describe('RectangularBarCalcComponent', () => {
  let component: RectangularBarCalcComponent;
  let fixture: ComponentFixture<RectangularBarCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RectangularBarCalcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RectangularBarCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareBarCalcComponent } from './square-bar-calc.component';

describe('SquareBarCalcComponent', () => {
  let component: SquareBarCalcComponent;
  let fixture: ComponentFixture<SquareBarCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SquareBarCalcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SquareBarCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

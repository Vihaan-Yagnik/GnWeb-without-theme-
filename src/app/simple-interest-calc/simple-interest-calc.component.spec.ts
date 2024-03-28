import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleInterestCalcComponent } from './simple-interest-calc.component';

describe('SimpleInterestCalcComponent', () => {
  let component: SimpleInterestCalcComponent;
  let fixture: ComponentFixture<SimpleInterestCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimpleInterestCalcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimpleInterestCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

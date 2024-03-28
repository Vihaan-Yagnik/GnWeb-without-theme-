import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TBarCalcComponent } from './t-bar-calc.component';

describe('TBarCalcComponent', () => {
  let component: TBarCalcComponent;
  let fixture: ComponentFixture<TBarCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TBarCalcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TBarCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

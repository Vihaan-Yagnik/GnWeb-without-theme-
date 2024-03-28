import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatPlateCalcComponent } from './flat-plate-calc.component';

describe('FlatPlateCalcComponent', () => {
  let component: FlatPlateCalcComponent;
  let fixture: ComponentFixture<FlatPlateCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlatPlateCalcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlatPlateCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

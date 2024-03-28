import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HexagonBarCalcComponent } from './hexagon-bar-calc.component';

describe('HexagonBarCalcComponent', () => {
  let component: HexagonBarCalcComponent;
  let fixture: ComponentFixture<HexagonBarCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HexagonBarCalcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HexagonBarCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriangularBarCalcComponent } from './triangular-bar-calc.component';

describe('TriangularBarCalcComponent', () => {
  let component: TriangularBarCalcComponent;
  let fixture: ComponentFixture<TriangularBarCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TriangularBarCalcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TriangularBarCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

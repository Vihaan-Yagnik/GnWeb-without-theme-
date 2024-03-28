import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriangularPipeCalcComponent } from './triangular-pipe-calc.component';

describe('TriangularPipeCalcComponent', () => {
  let component: TriangularPipeCalcComponent;
  let fixture: ComponentFixture<TriangularPipeCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TriangularPipeCalcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TriangularPipeCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

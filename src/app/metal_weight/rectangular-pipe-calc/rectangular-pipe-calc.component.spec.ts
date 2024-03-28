import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RectangularPipeCalcComponent } from './rectangular-pipe-calc.component';

describe('RectangularPipeCalcComponent', () => {
  let component: RectangularPipeCalcComponent;
  let fixture: ComponentFixture<RectangularPipeCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RectangularPipeCalcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RectangularPipeCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

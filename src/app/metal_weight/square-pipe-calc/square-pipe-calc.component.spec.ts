import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquarePipeCalcComponent } from './square-pipe-calc.component';

describe('SquarePipeCalcComponent', () => {
  let component: SquarePipeCalcComponent;
  let fixture: ComponentFixture<SquarePipeCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SquarePipeCalcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SquarePipeCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

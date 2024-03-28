import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundPipeCalcComponent } from './round-pipe-calc.component';

describe('RoundPipeCalcComponent', () => {
  let component: RoundPipeCalcComponent;
  let fixture: ComponentFixture<RoundPipeCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoundPipeCalcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoundPipeCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

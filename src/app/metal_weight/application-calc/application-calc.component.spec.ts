import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationCalcComponent } from './application-calc.component';

describe('ApplicationCalcComponent', () => {
  let component: ApplicationCalcComponent;
  let fixture: ComponentFixture<ApplicationCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApplicationCalcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApplicationCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

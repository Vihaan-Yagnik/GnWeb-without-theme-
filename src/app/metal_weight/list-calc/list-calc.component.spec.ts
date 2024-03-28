import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCalcComponent } from './list-calc.component';

describe('ListCalcComponent', () => {
  let component: ListCalcComponent;
  let fixture: ComponentFixture<ListCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListCalcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

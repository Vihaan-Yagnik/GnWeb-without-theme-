import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateAndTimeListComponent } from './date-and-time-list.component';

describe('DateAndTimeListComponent', () => {
  let component: DateAndTimeListComponent;
  let fixture: ComponentFixture<DateAndTimeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DateAndTimeListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DateAndTimeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

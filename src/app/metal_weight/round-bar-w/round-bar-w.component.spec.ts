import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundBarWComponent } from './round-bar-w.component';

describe('RoundBarWComponent', () => {
  let component: RoundBarWComponent;
  let fixture: ComponentFixture<RoundBarWComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoundBarWComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoundBarWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

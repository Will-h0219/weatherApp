import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastdayComponent } from './forecastday.component';

describe('ForecastdayComponent', () => {
  let component: ForecastdayComponent;
  let fixture: ComponentFixture<ForecastdayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForecastdayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForecastdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

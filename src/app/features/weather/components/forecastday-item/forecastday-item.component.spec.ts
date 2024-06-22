import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastdayItemComponent } from './forecastday-item.component';

describe('ForecastdayItemComponent', () => {
  let component: ForecastdayItemComponent;
  let fixture: ComponentFixture<ForecastdayItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForecastdayItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForecastdayItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

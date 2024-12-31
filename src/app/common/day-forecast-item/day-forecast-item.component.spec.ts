import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayForecastItemComponent } from './day-forecast-item.component';

describe('DayForecastItemComponent', () => {
  let component: DayForecastItemComponent;
  let fixture: ComponentFixture<DayForecastItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DayForecastItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DayForecastItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

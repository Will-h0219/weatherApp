import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextDaysForecastComponent } from './next-days-forecast.component';

describe('NextDaysForecastComponent', () => {
  let component: NextDaysForecastComponent;
  let fixture: ComponentFixture<NextDaysForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NextDaysForecastComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextDaysForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

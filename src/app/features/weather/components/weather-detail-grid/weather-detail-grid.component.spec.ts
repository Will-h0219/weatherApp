import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDetailGridComponent } from './weather-detail-grid.component';

describe('WeatherDetailGridComponent', () => {
  let component: WeatherDetailGridComponent;
  let fixture: ComponentFixture<WeatherDetailGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherDetailGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeatherDetailGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDetailItemComponent } from './weather-detail-item.component';

describe('WeatherDetailItemComponent', () => {
  let component: WeatherDetailItemComponent;
  let fixture: ComponentFixture<WeatherDetailItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherDetailItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeatherDetailItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

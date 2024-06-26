import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { DetailBannerComponent } from '../detail-banner/detail-banner.component';
import { WeatherForecast } from '../../../../data/interfaces/weatherForecast.interface';
import { ForecastService } from '../../../../data/services/forecast/forecast.service';
import { WeatherDetailGridComponent } from '../weather-detail-grid/weather-detail-grid.component';
import { ForecastdayComponent } from '../forecastday/forecastday.component';

@Component({
  selector: 'app-weather-detail',
  standalone: true,
  imports: [
    DetailBannerComponent,
    ForecastdayComponent,
    WeatherDetailGridComponent
  ],
  templateUrl: './weather-detail.component.html',
  styleUrl: './weather-detail.component.scss'
})
export class WeatherDetailComponent implements OnInit {
  private forecastService = inject(ForecastService);
  currentForecast = signal<WeatherForecast | null>(null);
  bannerInfo = computed(() => {
    if (this.currentForecast()) {
      return {
        locationName: this.currentForecast()?.location.name,
        temperature: this.currentForecast()?.current.temp_c,
        conditionText: this.currentForecast()?.current.condition.text,
        maxTemperature: this.currentForecast()?.forecast.forecastday[0].day.maxtemp_c,
        minTemperature: this.currentForecast()?.forecast.forecastday[0].day.mintemp_c
      }
    }
    return {};
  });
  showDay = signal<boolean>(true);

  ngOnInit(): void {
    this.forecastService.weatherForecast$.subscribe({
      next: (data) => this.currentForecast.update(() => ({...data}))
    });
    this.showDay.update(() => {
      return new Date().getHours() > 5 && new Date().getHours() < 19;
    });
  }
}

import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { DetailBannerComponent } from '../detail-banner/detail-banner.component';
import { WeatherDetailItemComponent } from '../weather-detail-item/weather-detail-item.component';
import { WeatherForecast } from '../../../../data/interfaces/weatherForecast.interface';
import { ForecastService } from '../../../../data/services/forecast/forecast.service';

@Component({
  selector: 'app-weather-detail',
  standalone: true,
  imports: [
    DetailBannerComponent,
    WeatherDetailItemComponent
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

  ngOnInit(): void {
    this.forecastService.weatherForecast$.subscribe({
      next: (data) => this.currentForecast.update(() => ({...data}))
    });
  }
}

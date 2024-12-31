import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastService } from '../../data/services/forecast/forecast.service';
import { ThemeService } from '../../services/theme/theme.service';
import { HeaderComponent } from './components/header/header.component';
import { CurrentCityComponent } from './components/current-city/current-city.component';
import { WeatherInfoComponent } from './components/weather-info/weather-info.component';
import { NextDaysForecastComponent } from './components/next-days-forecast/next-days-forecast.component';
import { HourlyForecastComponent } from './components/hourly-forecast/hourly-forecast.component';

@Component({
  selector: 'app-weather',
  imports: [
    CommonModule,
    HeaderComponent,
    CurrentCityComponent,
    WeatherInfoComponent,
    NextDaysForecastComponent,
    HourlyForecastComponent,
  ],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
})
export class WeatherComponent {
  private forecastService: ForecastService = inject(ForecastService);
  themeService: ThemeService = inject(ThemeService);
  loading = computed(() => this.forecastService.weatherForecastSignal().loading);
  data = computed(() => this.forecastService.weatherForecastSignal().response);
}

import { Component, Input } from '@angular/core';
import { CurrentWeather } from '../../../../data/interfaces/currentWeather.interface';
import { DetailBannerComponent } from '../detail-banner/detail-banner.component';
import { WeatherDetailItemComponent } from '../weather-detail-item/weather-detail-item.component';

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
export class WeatherDetailComponent {
  @Input() currentWeather!: CurrentWeather;
}

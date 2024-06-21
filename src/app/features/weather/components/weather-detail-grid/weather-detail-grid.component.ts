import { Component, Input } from '@angular/core';
import { WeatherDetailItemComponent } from '../weather-detail-item/weather-detail-item.component';
import { CurrentWeather } from '../../../../data/interfaces/currentWeather.interface';

@Component({
  selector: 'app-weather-detail-grid',
  standalone: true,
  imports: [
    WeatherDetailItemComponent
  ],
  templateUrl: './weather-detail-grid.component.html',
  styleUrl: './weather-detail-grid.component.scss'
})
export class WeatherDetailGridComponent {
  @Input() currentWeather!: CurrentWeather;
}

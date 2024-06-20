import { Component, Input } from '@angular/core';
import { CurrentWeather } from '../../../../data/interfaces/currentWeather.interface';

@Component({
  selector: 'app-weather-detail',
  standalone: true,
  imports: [
  ],
  templateUrl: './weather-detail.component.html',
  styleUrl: './weather-detail.component.scss'
})
export class WeatherDetailComponent {
  @Input() currentWeather!: CurrentWeather;
}

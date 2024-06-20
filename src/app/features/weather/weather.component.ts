import { Component } from '@angular/core';
import { LeftSideComponent } from './components/left-side/left-side.component';
import { WeatherContentComponent } from './components/weather-content/weather-content.component';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [
    LeftSideComponent,
    WeatherContentComponent
  ],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent {

}

import { Component } from '@angular/core';
import { GeneralInfoComponent } from './components/general-info/general-info.component';
import { WeatherDetailComponent } from './components/weather-detail/weather-detail.component';
import { SearchBarComponent } from '../../common/search-bar/search-bar.component';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [
    GeneralInfoComponent,
    SearchBarComponent,
    WeatherDetailComponent
  ],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent {

}

import { Component, inject } from '@angular/core';
import { GeneralInfoComponent } from './components/general-info/general-info.component';
import { WeatherDetailComponent } from './components/weather-detail/weather-detail.component';
import { SearchBarComponent } from '../../common/search-bar/search-bar.component';
import { ForecastService } from '../../data/services/forecast/forecast.service';
import { LocationListComponent } from './components/location-list/location-list.component';
import { Location } from '../../data/interfaces/location.interface';
import { WeatherForecast } from '../../data/interfaces/weatherForecast.interface';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    GeneralInfoComponent,
    LocationListComponent,
    SearchBarComponent,
    WeatherDetailComponent
  ],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent {
  private forecastService = inject(ForecastService);

  currentForecast!: WeatherForecast;

  search(value: string) {
    this.forecastService.getForecast(value).subscribe({
      next: (data) => console.log(data)
    });
  }

  selectLocation(location: Location) {
    const nameLowercase = location.name.toLowerCase();
    this.forecastService.getForecast(nameLowercase).subscribe({
      next: (data) => {
        this.currentForecast = data;
        console.log(this.currentForecast)
      }
    });
  }
}

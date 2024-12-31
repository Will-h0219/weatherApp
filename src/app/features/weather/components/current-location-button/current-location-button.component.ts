import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ForecastService } from '../../../../data/services/forecast/forecast.service';

@Component({
    selector: 'app-current-location-button',
    imports: [
        MatButtonModule,
        MatIconModule,
    ],
    templateUrl: './current-location-button.component.html',
    styleUrl: './current-location-button.component.scss'
})
export class CurrentLocationButtonComponent {
  forecastService: ForecastService = inject(ForecastService);

  getCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
        const { coords: { latitude, longitude } } = position;
        this.forecastService.getForecast(`${latitude},${longitude}`);
      });
    } else {
      // Handle navigators that not support geolocation.
      console.log('Feature not supported');
    }
  }
}

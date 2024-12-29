import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-current-location-button',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './current-location-button.component.html',
  styleUrl: './current-location-button.component.scss'
})
export class CurrentLocationButtonComponent {
  getCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => console.log(position));
    } else {
      // Handle navigators that not support geolocation.
      console.log('Feature not supported');
    }
  }
}

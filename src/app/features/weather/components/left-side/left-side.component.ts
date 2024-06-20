import { CommonModule } from '@angular/common';
import { Component, OnInit, Signal, inject, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ForecastService } from '../../../../data/services/forecast/forecast.service';
import { Location } from '../../../../data/interfaces/location.interface';
import { LocationCardComponent } from '../location-card/location-card.component';

@Component({
  selector: 'app-left-side',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    LocationCardComponent
  ],
  templateUrl: './left-side.component.html',
  styleUrl: './left-side.component.scss'
})
export class LeftSideComponent implements OnInit {
  private USER_LOCATIONS = 'userLocations';
  private forecastService = inject(ForecastService);
  private fb = inject(FormBuilder);
  userLocations = signal<Location[]>([]);
  locationForm!: FormGroup;

  ngOnInit(): void {
    const savedLocations = localStorage.getItem(this.USER_LOCATIONS);
    if (savedLocations) {
      this.userLocations.update(() => [...JSON.parse(savedLocations)])
    }
    this.locationForm = this.fb.group({
      location: ['', [Validators.required]]
    })
  }

  searchCountry() {
    if (this.locationForm.invalid) return;
    const searchValue = this.locationForm.controls['location'].value;
    this.forecastService.getForecast(searchValue).subscribe({
      next: (resp) => {
        const respLocation = resp.location;
        if (!this.userLocations().length) {
          respLocation.selected = true;
        }
        this.userLocations.update((values) => [...values, respLocation]);
        localStorage.setItem(this.USER_LOCATIONS, JSON.stringify(this.userLocations()));
      },
      error: (err) => console.log(`An error ocurred: ${err.message}`)
    });
  }

  deleteLocation(name: string) {
    this.userLocations.update(values => values.filter(loc => loc.name !== name));
    localStorage.setItem(this.USER_LOCATIONS, JSON.stringify(this.userLocations()));
  }

  selectLocation(name: string) {
    this.userLocations.update(values => {
      values.map(loc => loc.selected = loc.name === name);
      return [...values]
    });
  }

  getUserLocation() {
    navigator.geolocation.getCurrentPosition((pos) => {
      console.log(pos);
    }, (error) => {
      console.warn(`ERROR(${error.code}): ${error.message}`);
    }, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    });
  }
}

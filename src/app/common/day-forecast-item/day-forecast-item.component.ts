import { Component, computed, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Forecastday } from '../../data/interfaces/forecast-day.interface';
import { DegreePipe } from '../../shared/pipes/degree.pipe';
import { CODES_DICTIONARY } from '../../data/constants/conditions-codes.constants';

@Component({
  selector: 'app-day-forecast-item',
  imports: [
    CommonModule,
    DegreePipe,
  ],
  templateUrl: './day-forecast-item.component.html',
  styleUrl: './day-forecast-item.component.scss'
})
export class DayForecastItemComponent {
  forecastday = input<Forecastday>();
  altText = computed(() => {
    return this.forecastday()?.day.condition.text.split(' ').join('_');
  });
}

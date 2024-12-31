import { Component, input } from '@angular/core';
import { CardComponent } from '../../../../common/card/card.component';
import { Forecastday } from '../../../../data/interfaces/forecast-day.interface';
import { DayForecastItemComponent } from '../../../../common/day-forecast-item/day-forecast-item.component';

@Component({
  selector: 'app-next-days-forecast',
  imports: [
    CardComponent,
    DayForecastItemComponent,
  ],
  templateUrl: './next-days-forecast.component.html',
  styleUrl: './next-days-forecast.component.scss'
})
export class NextDaysForecastComponent {
  daysForecast = input<Forecastday[]>([]);
}

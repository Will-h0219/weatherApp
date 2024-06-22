import { Component, Input } from '@angular/core';
import { Forecastday } from '../../../../data/interfaces/forecastDay.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forecastday-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './forecastday-item.component.html',
  styleUrl: './forecastday-item.component.scss'
})
export class ForecastdayItemComponent {
  @Input() forecastday!: Forecastday;
}

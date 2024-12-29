import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastService } from '../../data/services/forecast/forecast.service';
import { ThemeService } from '../../services/theme/theme.service';
import { ThemeToggleComponent } from '../../common/theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [
    CommonModule,
    ThemeToggleComponent
  ],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent {
  private forecastService = inject(ForecastService);
  themeService: ThemeService = inject(ThemeService);
}

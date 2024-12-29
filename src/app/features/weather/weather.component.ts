import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastService } from '../../data/services/forecast/forecast.service';
import { ThemeService } from '../../services/theme/theme.service';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from '../../common/card/card.component';

@Component({
  selector: 'app-weather',
  imports: [
    CommonModule,
    HeaderComponent,
    CardComponent
  ],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
})
export class WeatherComponent {
  private forecastService = inject(ForecastService);
  themeService: ThemeService = inject(ThemeService);
}

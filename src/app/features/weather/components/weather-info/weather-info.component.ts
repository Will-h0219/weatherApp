import { Component, computed, inject, input, InputSignal, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentWeather } from '../../../../data/interfaces/current-weather.interface';
import { CardComponent } from '../../../../common/card/card.component';
import { DegreePipe } from '../../../../shared/pipes/degree.pipe';
import { ThemeService } from '../../../../services/theme/theme.service';
import { WidgetItemComponent } from '../../../../common/widget-item/widget-item.component';
import { CODES_DICTIONARY } from '../../../../data/constants/conditions-codes.constants';
import { AVAILABLE_WIDGETS } from './weather-info.constants';
import { WidgetItem } from '../../../../data/interfaces/widget-item.interface';

@Component({
  selector: 'app-weather-info',
  imports: [
    CommonModule,
    CardComponent,
    WidgetItemComponent,
    DegreePipe,
  ],
  templateUrl: './weather-info.component.html',
  styleUrl: './weather-info.component.scss'
})
export class WeatherInfoComponent {
  themeService: ThemeService = inject(ThemeService);
  currentWeather: InputSignal<CurrentWeather | undefined> = input();
  imageData = computed(() => {
    const isDay = this.currentWeather()?.is_day;
    const code = this.currentWeather()?.condition.code || 1000;
    const conditionObject = CODES_DICTIONARY[`${code}`];
    const dayNight = isDay ? 'day' : 'night';
    const dayNightImage = isDay ? 'dayImage' : 'nightImage';
    const path = `assets/images/${dayNight}/${conditionObject[dayNightImage]}.svg`;
    const label = conditionObject[dayNight];
    const altText = conditionObject[dayNightImage];
    return { path, altText, label };
  });
  widgets: Signal<WidgetItem[]> = computed(() => {
    return Object.keys(AVAILABLE_WIDGETS).map(key => {
      const { id, icon, label } = AVAILABLE_WIDGETS[key];
      const value = AVAILABLE_WIDGETS[key].sufix
        ? `${AVAILABLE_WIDGETS[key].value}${AVAILABLE_WIDGETS[key].sufix}`
        : AVAILABLE_WIDGETS[key].value;
      return { id, icon, label, value }
    });
  });
}

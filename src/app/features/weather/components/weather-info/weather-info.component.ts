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

type WeatherWithoutCondition = Omit<CurrentWeather, 'condition' | 'astro'>;

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

  temperature = computed(() => {
    return {
      temp: this.currentWeather()?.temp_c,
      feelsLike: this.currentWeather()?.feelslike_c,
      sunrise: this.currentWeather()?.astro?.sunrise,
      sunset: this.currentWeather()?.astro?.sunset,
    };
  });

  imageData = computed(() => {
    let path, label, altText;
    if (!this.currentWeather()) {
      return {
        path: 'assets/images/day/sunnyday.svg',
        label: 'Sunny',
        altText: 'sunnyday',
      };
    }
    const isDay = this.currentWeather()?.is_day;
    const code = this.currentWeather()?.condition.code || 1000;
    const conditionObject = CODES_DICTIONARY[`${code}`];
    const dayNight = isDay ? 'day' : 'night';
    const dayNightImage = isDay ? 'dayImage' : 'nightImage';
    path = `assets/images/${dayNight}/${conditionObject[dayNightImage]}.svg`;
    label = conditionObject[dayNight];
    altText = conditionObject[dayNightImage];
    return { path, altText, label };
  });

  widgets: Signal<WidgetItem[]> = computed(() => {
    return Object.keys(AVAILABLE_WIDGETS).map(key => {
      const { id, icon, label } = AVAILABLE_WIDGETS[key];
      const dataValue = (this.currentWeather() as WeatherWithoutCondition)?.[key as keyof WeatherWithoutCondition];
      const value = AVAILABLE_WIDGETS[key].sufix
        ? `${dataValue || 0}${AVAILABLE_WIDGETS[key].sufix}`
        : dataValue || 0;
      return { id, icon, label, value }
    });
  });
}

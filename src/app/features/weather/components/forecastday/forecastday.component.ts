import { Component, Input } from '@angular/core';
import { Condition } from '../../../../data/interfaces/condition.interface';
import { Forecastday } from '../../../../data/interfaces/forecastDay.interface';
import { ForecastdayItemComponent } from '../forecastday-item/forecastday-item.component';
import { CODES_DICTIONARY } from '../../../../data/constants/conditions-codes.constants';

@Component({
  selector: 'app-forecastday',
  standalone: true,
  imports: [
    ForecastdayItemComponent
  ],
  templateUrl: './forecastday.component.html',
  styleUrl: './forecastday.component.scss'
})
export class ForecastdayComponent {
  @Input() currentCondition?: Condition;
  @Input() forecast: Forecastday[] = [];
  @Input() isDay: boolean = true;

  private codesDict = CODES_DICTIONARY;

  get iconUrl() {
    const code = this.codesDict[this.currentCondition?.code.toString() as keyof typeof this.codesDict];
    const day = this.isDay ? 'day' : 'night';
    return `../../../../../assets/images/${day}/${day ? code?.dayImage : code?.nightImage}.png`;
  }
}

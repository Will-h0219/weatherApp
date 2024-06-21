import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ITEMS } from './weather-detail-item.contants';
import { DegreePipe } from '../../../../shared/pipes/degree.pipe';

interface DetailItem {
  label: string;
  icon:  string;
};

@Component({
  selector: 'app-weather-detail-item',
  standalone: true,
  imports: [
    MatIconModule,
    DegreePipe
  ],
  templateUrl: './weather-detail-item.component.html',
  styleUrl: './weather-detail-item.component.scss'
})
export class WeatherDetailItemComponent {
  @Input() type: string = '';
  @Input() value?: number;
  private items: { [key: string]: DetailItem } = ITEMS;

  get icon(): string {
    return this.items[this.type].icon;
  }

  get label(): string {
    return this.items[this.type].label;
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail-banner',
  standalone: true,
  imports: [],
  templateUrl: './detail-banner.component.html',
  styleUrl: './detail-banner.component.scss'
})
export class DetailBannerComponent {
  @Input() locationName: string = 'Bogotá';
  @Input() averageTemperature: number = 11;
  @Input() conditionCode: number = 1000;
  @Input() conditionDesc: string = 'Moderate rain'
  @Input() minimumTemperature: number = 9.8;
  @Input() maximumTemperature: number = 20.4;
}

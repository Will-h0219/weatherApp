import { Component, Input } from '@angular/core';
import { DegreePipe } from '../../../../shared/pipes/degree.pipe';
import { BannerInfo } from '../../../../data/interfaces/bannerInfo.interface';

@Component({
  selector: 'app-detail-banner',
  standalone: true,
  imports: [
    DegreePipe
  ],
  templateUrl: './detail-banner.component.html',
  styleUrl: './detail-banner.component.scss'
})
export class DetailBannerComponent {
  @Input() data?: BannerInfo;
}

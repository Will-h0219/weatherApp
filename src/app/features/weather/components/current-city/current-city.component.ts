import { Component, input, Input } from '@angular/core';
import { CardComponent } from '../../../../common/card/card.component';
import { Location } from '../../../../data/interfaces/location.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-current-city',
  imports: [
    CommonModule,
    CardComponent,
  ],
  templateUrl: './current-city.component.html',
  styleUrl: './current-city.component.scss'
})
export class CurrentCityComponent {
  location = input<Location>();
}

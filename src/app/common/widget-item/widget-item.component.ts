import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { WidgetItem } from '../../data/interfaces/widget-item.interface';

@Component({
  selector: 'app-widget-item',
  imports: [
    MatIconModule,
  ],
  templateUrl: './widget-item.component.html',
  styleUrl: './widget-item.component.scss'
})
export class WidgetItemComponent {
  widgetData = input.required<WidgetItem>();
}

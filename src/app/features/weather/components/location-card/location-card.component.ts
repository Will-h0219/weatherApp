import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Location } from '../../../../data/interfaces/location.interface';

@Component({
  selector: 'app-location-card',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './location-card.component.html',
  styleUrl: './location-card.component.scss'
})
export class LocationCardComponent {
  @Input() location!: Location;
  @Output() onDelete = new EventEmitter<string>();
  @Output() onSelect = new EventEmitter<string>();

  deleteLocation(name: string) {
    this.onDelete.emit(name);
  }

  selectLocation(name: string) {
    this.onSelect.emit(name);
  }
}

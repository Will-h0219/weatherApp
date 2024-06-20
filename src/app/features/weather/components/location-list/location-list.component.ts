import { Component, EventEmitter, OnInit, Output, signal } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { Location } from '../../../../data/interfaces/location.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-location-list',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './location-list.component.html',
  styleUrl: './location-list.component.scss'
})
export class LocationListComponent implements OnInit {
  userLocations = signal<Location[]>([]);
  @Output() onLocationSelect: EventEmitter<Location> = new EventEmitter();

  ngOnInit(): void {
    const savedLocations = localStorage.getItem('userLocations');
    this.userLocations.update(() => savedLocations ? JSON.parse(savedLocations) : []);
  }

  openAddDialog() {
    console.log('Should open a dialog');
  }

  selectLocation(location: Location) {
    this.onLocationSelect.emit(location);
  }
}

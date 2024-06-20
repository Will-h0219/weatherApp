import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent implements OnInit {
  @Input() searchValue = '';
  search = new FormControl(this.searchValue);
  @Output() onSearch: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    this.search.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe({
      next: (value) => {
        if (value) {
          this.onSearch.emit(value);
        }
      }
    });
  }

  clearSearch() {
    this.search.reset('');
  }
}

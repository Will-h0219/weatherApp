import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { debounceTime } from 'rxjs';
import { ThemeService } from '../../services/theme/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-bar',
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent implements OnInit {
  themeService: ThemeService = inject(ThemeService);
  @Input() searchValue = '';
  search = new FormControl(this.searchValue);
  @Output() onSearch: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    this.search.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe({
      next: (value) => {
        if (value) {
          const treatedValue = value.trim().toLocaleLowerCase();
          this.onSearch.emit(treatedValue);
        }
      }
    });
  }

  clearSearch() {
    this.search.reset('');
  }
}

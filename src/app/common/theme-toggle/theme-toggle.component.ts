import { Component, inject, OnInit } from '@angular/core';
import { MatSlideToggleChange, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ThemeService } from '../../services/theme/theme.service';

@Component({
    selector: 'app-theme-toggle',
    imports: [MatSlideToggleModule],
    templateUrl: './theme-toggle.component.html',
    styleUrl: './theme-toggle.component.scss'
})
export class ThemeToggleComponent implements OnInit {
  themeService: ThemeService = inject(ThemeService);

  ngOnInit(): void {
    this.themeService.initializeTheme();
  }

  toggleTheme(event: MatSlideToggleChange) {
    this.themeService.updateTheme(event.checked);
  }
}

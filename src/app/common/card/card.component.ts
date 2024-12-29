import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ThemeService } from '../../services/theme/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [
    CommonModule,
    MatCardModule,
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  themeService: ThemeService = inject(ThemeService);
}

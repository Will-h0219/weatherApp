import { Component } from '@angular/core';
import { ThemeToggleComponent } from '../../../../common/theme-toggle/theme-toggle.component';
import { SearchBarComponent } from '../../../../common/search-bar/search-bar.component';
import { CustomButtonComponent } from '../../../../common/custom-button/custom-button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CustomButtonComponent,
    SearchBarComponent,
    ThemeToggleComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}

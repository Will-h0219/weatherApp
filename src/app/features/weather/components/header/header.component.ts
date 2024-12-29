import { Component } from '@angular/core';
import { ThemeToggleComponent } from '../../../../common/theme-toggle/theme-toggle.component';
import { SearchBarComponent } from '../../../../common/search-bar/search-bar.component';
import { CurrentLocationButtonComponent } from '../current-location-button/current-location-button.component';

@Component({
    selector: 'app-header',
    imports: [
        CurrentLocationButtonComponent,
        SearchBarComponent,
        ThemeToggleComponent,
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {

}

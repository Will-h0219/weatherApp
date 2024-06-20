import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'weather',
    loadComponent: () => import('./features/weather/weather.component').then(c => c.WeatherComponent)
  },
  {
    path: '',
    redirectTo: '/weather',
    pathMatch: 'full'
  }
];

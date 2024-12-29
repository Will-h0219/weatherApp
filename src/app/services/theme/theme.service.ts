import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private DARK = 'dark';
  private LIGHT = 'light';
  themeSignal = signal<string>(this.DARK);

  initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.setTheme(savedTheme);
    } else {
      this.setTheme(this.LIGHT);
      localStorage.setItem('theme', this.LIGHT);
    }
  }
  
  setTheme(theme: string) {
    this.themeSignal.set(theme);
  }

  updateTheme(value:  boolean) {
    const currentTheme = value ? this.DARK : this.LIGHT;
    this.themeSignal.update(() => currentTheme);
    localStorage.setItem('theme', currentTheme);
  }
}

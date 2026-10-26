
import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { Theme } from '../enums/theme.enum';

const themes: readonly Theme[] = [Theme.Dark, Theme.Light, Theme.Monokai];

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly currentTheme = signal<Theme>(Theme.Dark);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('theme');
      const theme = themes.find((availableTheme) => availableTheme === savedTheme);

      if (theme) {
        this.setTheme(theme);
      }
    }
  }

  setTheme(theme: Theme): void {
    this.currentTheme.set(theme);

    if (isPlatformBrowser(this.platformId)) {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    }
  }

  cycleTheme(): void {
    const currentIndex = themes.indexOf(this.currentTheme());
    const nextTheme = themes[(currentIndex + 1) % themes.length];

    this.setTheme(nextTheme);
  }

  getTheme(): Theme {
    return this.currentTheme();
  }
}

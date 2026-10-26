import { Component, inject } from '@angular/core';
import { ThemeService } from '../../../services/theme-service';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss',
})
export class NavBar {
  readonly themeService = inject(ThemeService);
}

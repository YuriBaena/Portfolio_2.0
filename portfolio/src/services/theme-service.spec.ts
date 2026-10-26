import { TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';

import { Theme } from '../enums/theme.enum';
import { ThemeService } from './theme-service';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    localStorage.removeItem('theme');
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()]
    });
    service = TestBed.inject(ThemeService);
  });

  afterEach(() => {
    localStorage.removeItem('theme');
    document.documentElement.removeAttribute('data-theme');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('cycles through the available themes', () => {
    service.cycleTheme();
    expect(service.getTheme()).toBe(Theme.Light);

    service.cycleTheme();
    expect(service.getTheme()).toBe(Theme.Monokai);

    service.cycleTheme();
    expect(service.getTheme()).toBe(Theme.Dark);
  });

  it('applies and persists a selected theme', () => {
    service.setTheme(Theme.Monokai);

    expect(service.getTheme()).toBe(Theme.Monokai);
    expect(document.documentElement.getAttribute('data-theme')).toBe(Theme.Monokai);
    expect(localStorage.getItem('theme')).toBe(Theme.Monokai);
  });

  it('restores a previously saved theme', () => {
    localStorage.setItem('theme', Theme.Monokai);
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()]
    });

    const restoredService = TestBed.inject(ThemeService);

    expect(restoredService.getTheme()).toBe(Theme.Monokai);
    expect(document.documentElement.getAttribute('data-theme')).toBe(Theme.Monokai);
  });
});

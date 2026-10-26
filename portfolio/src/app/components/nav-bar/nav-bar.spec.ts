import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';

import { Theme } from '../../../enums/theme.enum';
import { NavBar } from './nav-bar';

describe('NavBar', () => {
  let component: NavBar;
  let fixture: ComponentFixture<NavBar>;

  beforeEach(async () => {
    localStorage.removeItem('theme');
    document.documentElement.removeAttribute('data-theme');

    await TestBed.configureTestingModule({
      imports: [NavBar],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('cycles the theme when the theme button is clicked', () => {
    fixture.nativeElement.querySelector('.theme-toggle').click();

    expect(component.themeService.getTheme()).toBe(Theme.Light);
    expect(document.documentElement.getAttribute('data-theme')).toBe(Theme.Light);
  });
});

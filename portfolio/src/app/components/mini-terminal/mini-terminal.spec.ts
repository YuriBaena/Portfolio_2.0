import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Theme } from '../../../enums/theme.enum';
import { MiniTerminal } from './mini-terminal';

describe('MiniTerminal', () => {
  beforeEach(async () => {
    localStorage.removeItem('theme');
    await TestBed.configureTestingModule({
      imports: [MiniTerminal],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();
  });

  afterEach(() => {
    localStorage.removeItem('theme');
    document.documentElement.removeAttribute('data-theme');
  });

  it('shows the hidden coffee easter egg', () => {
    const fixture = TestBed.createComponent(MiniTerminal);
    fixture.detectChanges();

    fixture.componentInstance.runCommand('coffee');
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Easter egg desbloqueado');
  });

  it('cycles the selected theme when the theme command runs', () => {
    const fixture = TestBed.createComponent(MiniTerminal);
    fixture.detectChanges();

    fixture.componentInstance.runCommand('theme');
    fixture.detectChanges();

    expect(document.documentElement.getAttribute('data-theme')).toBe(Theme.Light);
    expect(fixture.nativeElement.textContent).toContain('Tema alterado para light');
  });
});

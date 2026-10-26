import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideZonelessChangeDetection()]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the portfolio sections', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Yuri Baena');
    expect(compiled.querySelector('#stack')).toBeTruthy();
    expect(compiled.querySelector('#engineering')).toBeTruthy();
    expect(compiled.querySelector('#projects')).toBeTruthy();
    expect(compiled.querySelector('#contact')).toBeTruthy();
    expect(compiled.querySelectorAll('.project-card').length).toBe(4);
    expect(compiled.textContent).toContain('Aluno Online 2.0 UERJ');
    expect(compiled.querySelector('a[href="https://github.com/YuriBaena/Semana-do-Matematico"]'))
      .toBeTruthy();
    expect(compiled.querySelector('a[href="https://github.com/YuriBaena/HilbertCurve"]'))
      .toBeTruthy();
    expect(compiled.querySelector('a[href="https://www.linkedin.com/in/yuri-baena-dias-nascimento-098b6b285"]'))
      .toBeTruthy();
    expect(compiled.querySelector('a[href="https://www.instagram.com/yuri._.baena/"]'))
      .toBeTruthy();
    expect(compiled.querySelector('app-mini-terminal')).toBeTruthy();

    const curveButton = compiled.querySelector<HTMLButtonElement>('.curve-toggle');
    expect(curveButton).toBeTruthy();
    curveButton?.click();
    fixture.detectChanges();
    expect(compiled.querySelector('#hilbert-curve-demo')).toBeTruthy();
  });
});

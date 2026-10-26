import { Component } from '@angular/core';
import { NavBar } from './components/nav-bar/nav-bar';
import { CareerSection } from './components/career-section/career-section';
import { EngineeringSection } from './components/engineering-section/engineering-section';
import { MiniTerminal } from './components/mini-terminal/mini-terminal';
import { ProjectsSection } from './components/projects-section/projects-section';
import { StackSection } from './components/stack-section/stack-section';

@Component({
  selector: 'app-root',
  imports: [
    NavBar,
    StackSection,
    EngineeringSection,
    ProjectsSection,
    CareerSection,
    MiniTerminal,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}

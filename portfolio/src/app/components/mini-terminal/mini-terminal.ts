import { Component, inject, signal } from '@angular/core';
import { Theme } from '../../../enums/theme.enum';
import { ThemeService } from '../../../services/theme-service';

interface TerminalLine {
  command?: string;
  output: string;
}

@Component({
  selector: 'app-mini-terminal',
  imports: [],
  templateUrl: './mini-terminal.html',
})
export class MiniTerminal {
  private readonly themeService = inject(ThemeService);

  readonly history = signal<TerminalLine[]>([
    { output: 'Terminal interativo iniciado. Comandos são simulados com respostas predefinidas.' },
  ]);

  runCommand(value: string): void {
    const command = value.trim().toLowerCase();

    if (!command) {
      return;
    }

    if (command === 'clear') {
      this.history.set([{ output: 'Terminal limpo. Digite "help" para ver os comandos.' }]);
      return;
    }

    const output = this.getOutput(command);
    this.history.update((history) => [...history, { command, output }].slice(-30));
  }

  private getOutput(command: string): string {
    switch (command) {
      case 'help':
        return 'Comandos: about, projects, skills, learning, github, theme [dark|light|monokai], sudo hire yuri, coffee, clear.';
      case 'about':
      case 'whoami':
        return 'Yuri Baena — estudante de Ciência da Computação na UERJ e desenvolvedor Full Stack com foco em backend, algoritmos e arquitetura.';
      case 'projects':
        return 'Aluno Online 2.0 UERJ, From Pixels to Music, HilbertCurve e Portfolio Console. Veja a seção Projetos.';
      case 'skills':
        return 'Java, Spring Boot, Angular, TypeScript, PostgreSQL, Python e C++. Confira a seção Stack para estudos e ferramentas.';
      case 'learning':
        return 'Atualmente explorando Clean Architecture, DDD, SOLID, sistemas distribuídos, algoritmos, IA e machine learning.';
      case 'github':
        return 'Perfil: https://github.com/YuriBaena';
      case 'sudo hire yuri':
        return 'Permissão concedida :) Vamos conversar pelo LinkedIn: linkedin.com/in/yuri-baena-dias-nascimento-098b6b285';
      case 'theme dark':
        this.themeService.setTheme(Theme.Dark);
        return 'Tema alterado para dark.';
      case 'theme light':
        this.themeService.setTheme(Theme.Light);
        return 'Tema alterado para light.';
      case 'theme monokai':
        this.themeService.setTheme(Theme.Monokai);
        return 'Tema secreto ativado: monokai.';
      case 'theme':
        this.themeService.cycleTheme();
        return `Tema alterado para ${this.themeService.getTheme()}.`;
      case 'coffee':
        return 'Easter egg desbloqueado: ☕ combustível para mais uma sessão de código.';
      default:
        return `Comando não encontrado: ${command}. Digite "help" para ver os comandos.`;
    }
  }
}

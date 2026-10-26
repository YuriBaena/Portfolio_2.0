import { Component, signal } from '@angular/core';

interface Project {
  title: string;
  path: string;
  category: string;
  description: string;
  technologies: string[];
  repository: string;
  repositoryLabel?: string;
  showHilbertDemo?: boolean;
  reference?: {
    label: string;
    url: string;
  };
}

@Component({
  selector: 'app-projects-section',
  imports: [],
  templateUrl: './projects-section.html',
})
export class ProjectsSection {
  readonly hilbertVisible = signal(false);
  readonly hilbertPoints = this.createHilbertPoints(4);

  readonly projects: Project[] = [
    {
      title: 'Aluno Online 2.0 UERJ',
      path: 'featured/aluno-online',
      category: 'Aplicação universitária · Full Stack',
      description:
        'Aplicação web voltada à rotina universitária, com consulta de disciplinas e organização de horários. O projeto integra frontend, backend e persistência, incluindo regras para identificar conflitos de horário.',
      technologies: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'Docker', 'AWS'],
      repository: 'https://github.com/YuriBaena',
      repositoryLabel: 'Ver perfil no GitHub',
    },
    {
      title: 'Portfolio Console',
      path: 'portfolio-console/README.md',
      category: 'Projeto pessoal',
      description:
        'Portfólio pessoal com uma interface inspirada em ferramentas de desenvolvimento, temas alternáveis e conteúdo organizado para apresentar meu perfil e minha evolução técnica.',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'SSR'],
      repository: 'https://github.com/YuriBaena/Portfolio_2.0',
    },
    {
      title: 'From Pixels to Music',
      path: 'semana-do-matematico/README.md',
      category: 'Computação criativa · Python',
      description:
        'Projeto de computação criativa que conecta matemática, processamento de imagens e síntese sonora. A curva fractal de Hilbert percorre os pixels de uma imagem e transforma características visuais em parâmetros de áudio para gerar composições sonoras.',
      technologies: [
        'Python',
        'Curva de Hilbert',
        'Processamento de imagens',
        'Síntese sonora',
      ],
      repository: 'https://github.com/YuriBaena/Semana-do-Matematico',
    },
    {
      title: 'Exploring Fractals Through Code',
      path: 'hilbert-curve/README.md',
      category: 'Fractais · matemática · algoritmos',
      description:
        'Exploração computacional de fractais com foco na curva de Hilbert e em estruturas geométricas geradas a partir de padrões matemáticos. O projeto investiga como recursão, geometria e algoritmos podem ser representados visualmente por meio de código.',
      technologies: [
        'Fractais',
        'Matemática',
        'Algoritmos',
        'Computação gráfica',
      ],
      repository: 'https://github.com/YuriBaena/HilbertCurve',
      showHilbertDemo: true,
      reference: {
        label: 'Referência: The Coding Train',
        url: 'https://thecodingtrain.com/tracks/coding-in-the-cabana/c3-hilbert-curve/',
      },
    },
  ];

  toggleHilbertDemo(): void {
    this.hilbertVisible.update((visible) => !visible);
  }

  private createHilbertPoints(order: number): string {
    const size = 2 ** order;
    const lastCoordinate = size - 1;
    const points: string[] = [];

    for (let distance = 0; distance < size * size; distance++) {
      let x = 0;
      let y = 0;
      let remainingDistance = distance;

      for (let scale = 1; scale < size; scale *= 2) {
        const rx = (remainingDistance >> 1) & 1;
        const ry = (remainingDistance ^ rx) & 1;

        if (ry === 0) {
          if (rx === 1) {
            x = scale - 1 - x;
            y = scale - 1 - y;
          }

          [x, y] = [y, x];
        }

        x += scale * rx;
        y += scale * ry;
        remainingDistance = Math.floor(remainingDistance / 4);
      }

      const svgX = 6 + (x / lastCoordinate) * 88;
      const svgY = 6 + (y / lastCoordinate) * 88;
      points.push(`${svgX.toFixed(2)},${svgY.toFixed(2)}`);
    }

    return points.join(' ');
  }
}

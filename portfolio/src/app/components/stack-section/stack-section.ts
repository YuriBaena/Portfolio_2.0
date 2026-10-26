import { Component } from '@angular/core';

@Component({
  selector: 'app-stack-section',
  imports: [],
  templateUrl: './stack-section.html',
})
export class StackSection {
  readonly groups = [
    {
      label: 'Backend & APIs',
      context: 'Experiência profissional e projetos',
      skills: ['Java', 'Spring Boot', 'APIs REST', 'Orientação a objetos'],
    },
    {
      label: 'Frontend',
      context: 'Desenvolvimento web e projetos',
      skills: ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      label: 'Dados, ferramentas & infraestrutura',
      context: 'Tecnologias do Aluno Online 2.0',
      skills: ['PostgreSQL', 'SQL', 'Git', 'GitHub', 'Docker', 'Linux', 'AWS'],
    },
    {
      label: 'Fundamentos & exploração',
      context: 'Estudos atuais',
      skills: [
        'C++',
        'Python',
        'Estruturas de dados',
        'Teoria dos grafos',
        'Complexidade',
        'Combinatória',
        'Programação competitiva',
        'Inteligência artificial',
        'Machine learning',
      ],
    },
  ];
}

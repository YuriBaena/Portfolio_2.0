import { Component } from '@angular/core';

@Component({
  selector: 'app-engineering-section',
  imports: [],
  templateUrl: './engineering-section.html',
})
export class EngineeringSection {
  readonly engineeringTopics = [
    'Clean Architecture e Arquitetura Hexagonal',
    'Domain-Driven Design e modelagem de domínio',
    'SOLID, orientação a objetos e padrões de projeto',
    'Monólitos modulares e microsserviços',
    'Testes automatizados e CI/CD',
    'Sistemas distribuídos, escalabilidade e observabilidade',
    'Inteligência artificial e machine learning',
  ];

  readonly computerScienceTopics = [
    'Estruturas de dados e análise de complexidade',
    'Teoria dos grafos: pontes, articulações e caminhos mínimos',
    'Bitmasks, combinatória e inclusão-exclusão',
    'Programação competitiva e resolução de problemas',
  ];

  readonly learningStatus = 'Explorando';
}

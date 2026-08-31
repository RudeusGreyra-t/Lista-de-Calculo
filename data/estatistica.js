window.COURSES_DATA = window.COURSES_DATA || {};

window.COURSES_DATA["estatistica"] = {
  name: "AED - Estatística",
  sections: [
    { id: "descritiva", title: "Estatística Descritiva" },
    { id: "probabilidade", title: "Probabilidade" }
  ],
  topics: [
    {
      materia: "Estatística Descritiva",
      subtopico: "Medidas de Tendência Central",
      secId: "descritiva",
      exercicios: [
        {
          id: "EST-001",
          origem: "Gerado a partir das listas Lista 1",
          dificuldade: "Fácil",
          relevancia: "Alta",
          enunciado: "Calcule a média aritmética simples do conjunto de dados: 12, 15, 18, 20, 25.",
          resposta: "$$ \\bar{x} = \\frac{12+15+18+20+25}{5} = 18 $$"
        },
        {
          id: "EST-002",
          origem: "Gerado a partir das listas Lista 1",
          dificuldade: "Fácil",
          relevancia: "Média",
          enunciado: "Encontre a mediana do seguinte conjunto de idades: 22, 29, 21, 24, 25, 30, 25.",
          resposta: "Rol: 21, 22, 24, 25, 25, 29, 30. A mediana é 25."
        },
        {
          id: "EST-003",
          origem: "Prova antiga",
          dificuldade: "Médio",
          relevancia: "Alta",
          enunciado: "Identifique a moda do conjunto: {2, 4, 4, 5, 7, 4, 8, 2, 9}.",
          resposta: "A moda é 4 (aparece três vezes)."
        },
        {
          id: "EST-004",
          origem: "Dado em aula",
          dificuldade: "Médio",
          relevancia: "Alta",
          enunciado: "Calcule a média ponderada das notas de um aluno sabendo que as notas foram 7.0 (peso 2), 6.5 (peso 3) e 8.0 (peso 5).",
          resposta: "$$ \\bar{x}_p = \\frac{7(2) + 6.5(3) + 8(5)}{2+3+5} = \\frac{14 + 19.5 + 40}{10} = 7.35 $$"
        }
      ]
    },
    {
      materia: "Estatística Descritiva",
      subtopico: "Medidas de Dispersão",
      secId: "descritiva",
      exercicios: [
        {
          id: "EST-005",
          origem: "Gerado a partir das listas Lista 2",
          dificuldade: "Médio",
          relevancia: "Alta",
          enunciado: "Calcule a variância populacional dos valores: 2, 4, 6, 8.",
          resposta: "A média é 5. Variância: $$ \\sigma^2 = \\frac{(-3)^2 + (-1)^2 + 1^2 + 3^2}{4} = \\frac{9+1+1+9}{4} = 5 $$"
        },
        {
          id: "EST-006",
          origem: "Prova antiga",
          dificuldade: "Difícil",
          relevancia: "Alta",
          enunciado: "Calcule o desvio padrão amostral dos dados: 10, 12, 23, 23, 16, 23, 21, 16.",
          resposta: "Média amostral = 18. Variância amostral (dividido por n-1 = 7) = 28.57. Desvio padrão amostral ≈ 5.35."
        }
      ]
    },
    {
      materia: "Probabilidade",
      subtopico: "Regras Básicas",
      secId: "probabilidade",
      exercicios: [
        {
          id: "PROB-001",
          origem: "Dado em aula",
          dificuldade: "Fácil",
          relevancia: "Alta",
          enunciado: "Qual é a probabilidade de se obter um número par ao lançar um dado justo de 6 faces?",
          resposta: "$$ P(Par) = \\frac{3}{6} = 0.5 \\text{ ou } 50\\% $$"
        },
        {
          id: "PROB-002",
          origem: "Prova antiga",
          dificuldade: "Médio",
          relevancia: "Alta",
          enunciado: "Em uma urna há 4 bolas vermelhas, 3 azuis e 3 verdes. Se retirarmos duas bolas sem reposição, qual a probabilidade de ambas serem vermelhas?",
          resposta: "$$ P = \\frac{4}{10} \\times \\frac{3}{9} = \\frac{12}{90} \\approx 13.33\\% $$"
        },
        {
          id: "PROB-003",
          origem: "Gerado a partir das listas Lista 3",
          dificuldade: "Médio",
          relevancia: "Alta",
          enunciado: "Sejam A e B eventos mutuamente exclusivos. Se P(A) = 0.3 e P(B) = 0.4, calcule P(A ∪ B).",
          resposta: "$$ P(A \\cup B) = P(A) + P(B) = 0.3 + 0.4 = 0.7 $$"
        }
      ]
    },
    {
      materia: "Probabilidade",
      subtopico: "Teorema de Bayes",
      secId: "probabilidade",
      exercicios: [
        {
          id: "PROB-004",
          origem: "Prova antiga",
          dificuldade: "Muito difícil",
          relevancia: "Alta",
          enunciado: "Um teste detecta uma doença com 95% de precisão (verdadeiro positivo) e tem 5% de taxa de falso positivo. Sabendo que 1% da população tem a doença, qual a probabilidade de uma pessoa ter a doença dado que o teste deu positivo?",
          resposta: "Aplicando o Teorema de Bayes: $$ P(D|+) = \\frac{P(+|D)P(D)}{P(+|D)P(D) + P(+|D^c)P(D^c)} = \\frac{0.95 \\times 0.01}{(0.95 \\times 0.01) + (0.05 \\times 0.99)} \\approx 16.1\\% $$"
        }
      ]
    }
  ]
};

window.COURSES_DATA = window.COURSES_DATA || {};

/* ======================= SVGs & DIAGRAMAS ======================= */
const SVG_EST_BOX_001 = `<svg viewBox="0 0 500 160" width="480" height="150" xmlns="http://www.w3.org/2000/svg">
  <line x1="40" y1="120" x2="460" y2="120" stroke="#334155" stroke-width="2" />
  <line x1="80" y1="115" x2="80" y2="125" stroke="#334155" stroke-width="1.5" />
  <text x="80" y="142" font-family="sans-serif" font-size="13" text-anchor="middle" fill="#475569">10 (Min)</text>
  <line x1="160" y1="115" x2="160" y2="125" stroke="#334155" stroke-width="1.5" />
  <text x="160" y="142" font-family="sans-serif" font-size="13" text-anchor="middle" fill="#475569">18 (Q1)</text>
  <line x1="260" y1="115" x2="260" y2="125" stroke="#334155" stroke-width="1.5" />
  <text x="260" y="142" font-family="sans-serif" font-size="13" text-anchor="middle" fill="#2563eb" font-weight="bold">25 (Mediana)</text>
  <line x1="360" y1="115" x2="360" y2="125" stroke="#334155" stroke-width="1.5" />
  <text x="360" y="142" font-family="sans-serif" font-size="13" text-anchor="middle" fill="#475569">34 (Q3)</text>
  <line x1="430" y1="115" x2="430" y2="125" stroke="#334155" stroke-width="1.5" />
  <text x="430" y="142" font-family="sans-serif" font-size="13" text-anchor="middle" fill="#475569">45 (Max)</text>
  <line x1="80" y1="60" x2="160" y2="60" stroke="#2563eb" stroke-width="2" stroke-dasharray="4,4" />
  <line x1="80" y1="40" x2="80" y2="80" stroke="#2563eb" stroke-width="2" />
  <line x1="360" y1="60" x2="430" y2="60" stroke="#2563eb" stroke-width="2" stroke-dasharray="4,4" />
  <line x1="430" y1="40" x2="430" y2="80" stroke="#2563eb" stroke-width="2" />
  <rect x="160" y="30" width="200" height="60" fill="rgba(37,99,235,0.12)" stroke="#2563eb" stroke-width="2.5" rx="3" />
  <line x1="260" y1="30" x2="260" y2="90" stroke="#dc2626" stroke-width="3" />
</svg>`;

window.COURSES_DATA["estatistica"] = {
  name: "AED - Estatística",
  originConfig: {
    "Lista P1": { sequential: true },
    "Prova antiga": { sequential: false },
    "Dado em aula": { sequential: false },
    "Aula de revisão": { sequential: false }
  },
  sections: [
    { id: "descritiva", title: "Estatística Descritiva" },
    { id: "probabilidade", title: "Probabilidade" }
  ],
  topics: [
    /* =========================================================================
       SEÇÃO 1: ESTATÍSTICA DESCRITIVA
       ========================================================================= */
    {
      materia: "Estatística Descritiva",
      subtopico: "Medidas de Tendência Central (Média, Moda, Mediana)",
      secId: "descritiva",
      exercicios: [
        {
          id: "LISTA-001",
          origem: "Lista P1",
          dificuldade: "Fácil",
          relevancia: "Alta",
          enunciado: "Calcule a média aritmética simples do conjunto de dados: 12, 15, 18, 20, 25.",
          resposta: "$$ \\bar{x} = \\frac{12+15+18+20+25}{5} = 18 $$"
        },
        {
          id: "LISTA-002",
          origem: "Lista P1",
          dificuldade: "Fácil",
          relevancia: "Média",
          enunciado: "Encontre a mediana do seguinte conjunto de idades: 22, 29, 21, 24, 25, 30, 25.",
          resposta: "Rol ordenado: 21, 22, 24, 25, 25, 29, 30. A mediana é 25."
        },
        {
          id: "LISTA-003",
          origem: "Lista P1",
          dificuldade: "Fácil",
          relevancia: "Média",
          enunciado: "Identifique a moda do conjunto: {2, 4, 4, 5, 7, 4, 8, 2, 9}.",
          resposta: "A moda é 4 (aparece três vezes)."
        },
        {
          id: "LISTA-004",
          origem: "Lista P1",
          dificuldade: "Médio",
          relevancia: "Alta",
          enunciado: "Calcule a média ponderada das notas de um aluno sabendo que as notas foram 7.0 (peso 2), 6.5 (peso 3) e 8.0 (peso 5).",
          resposta: "$$ \\bar{x}_p = \\frac{7(2) + 6.5(3) + 8(5)}{2+3+5} = \\frac{14 + 19.5 + 40}{10} = 7.35 $$"
        }
      ]
    },
    {
      materia: "Estatística Descritiva",
      subtopico: "Medidas de Dispersão e Variabilidade",
      secId: "descritiva",
      exercicios: [
        {
          id: "LISTA-005",
          origem: "Lista P1",
          dificuldade: "Médio",
          relevancia: "Alta",
          enunciado: "Calcule a variância populacional dos valores: 2, 4, 6, 8.",
          resposta: "A média é 5. Variância: $$ \\sigma^2 = \\frac{(-3)^2 + (-1)^2 + 1^2 + 3^2}{4} = \\frac{9+1+1+9}{4} = 5 $$"
        },
        {
          id: "LISTA-006",
          origem: "Lista P1",
          dificuldade: "Difícil",
          relevancia: "Alta",
          enunciado: "Calcule o desvio padrão amostral dos dados: 10, 12, 23, 23, 16, 23, 21, 16.",
          resposta: "Média amostral = 18. Variância amostral (dividido por n-1 = 7) = 28.57. Desvio padrão amostral ≈ 5.35."
        }
      ]
    },
    {
      materia: "Estatística Descritiva",
      subtopico: "Análise Gráfica e Boxplot",
      secId: "descritiva",
      exercicios: [
        {
          id: "LISTA-007",
          origem: "Lista P1",
          dificuldade: "Médio",
          relevancia: "Alta",
          enunciado: "Analise o diagrama de caixa (Boxplot) apresentado abaixo e determine:<br>a) O primeiro quartil (Q1) e o terceiro quartil (Q3).<br>b) O Intervalo Interquartil (IQR).<br>c) A mediana.",
          resposta: "a) \\( Q_1 = 18 \\) e \\( Q_3 = 34 \\)<br>b) \\( IQR = 34 - 18 = 16 \\)<br>c) Mediana = 25",
          svg: SVG_EST_BOX_001
        }
      ]
    },
    {
      materia: "Estatística Descritiva",
      subtopico: "Dados Agrupados em Classes",
      secId: "descritiva",
      exercicios: [
        {
          id: "LISTA-008",
          origem: "Lista P1",
          dificuldade: "Médio",
          relevancia: "Alta",
          enunciado: `Calcule a média estimada da distribuição de frequências abaixo:
          <div style="overflow-x:auto; margin: 12px 0;">
            <table style="width:100%; border-collapse:collapse; text-align:center; font-size:14px; background:var(--bg);">
              <thead>
                <tr style="border-bottom:2px solid var(--border); background:var(--surface);">
                  <th style="padding:6px;">Classes</th>
                  <th style="padding:6px;">Ponto Médio ($$x_i$$)</th>
                  <th style="padding:6px;">Frequência ($$f_i$$)</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom:1px solid var(--border);"><td style="padding:6px;">10 |-- 20</td><td>15</td><td>4</td></tr>
                <tr style="border-bottom:1px solid var(--border);"><td style="padding:6px;">20 |-- 30</td><td>25</td><td>6</td></tr>
              </tbody>
            </table>
          </div>`,
          resposta: "$$ \\bar{x} = \\frac{15(4) + 25(6)}{4+6} = \\frac{60+150}{10} = 21 $$"
        }
      ]
    },

    /* =========================================================================
       SEÇÃO 2: PROBABILIDADE
       ========================================================================= */
    {
      materia: "Probabilidade",
      subtopico: "Regras Básicas e Teorema de Bayes",
      secId: "probabilidade",
      exercicios: [
        {
          id: "LISTA-009",
          origem: "Lista P1",
          dificuldade: "Fácil",
          relevancia: "Alta",
          enunciado: "Qual é a probabilidade de se obter um número par ao lançar um dado justo de 6 faces?",
          resposta: "$$ P(Par) = \\frac{3}{6} = 0.5 \\text{ ou } 50\\% $$"
        },
        {
          id: "LISTA-010",
          origem: "Lista P1",
          dificuldade: "Médio",
          relevancia: "Alta",
          enunciado: "Sejam A e B eventos mutuamente exclusivos. Se P(A) = 0.3 e P(B) = 0.4, calcule P(A ∪ B).",
          resposta: "$$ P(A \\cup B) = P(A) + P(B) = 0.3 + 0.4 = 0.7 $$"
        }
      ]
    }
  ]
};
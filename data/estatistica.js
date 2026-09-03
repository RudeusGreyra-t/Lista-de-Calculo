window.COURSES_DATA = window.COURSES_DATA || {};

/* ======================= SVGs & DIAGRAMAS ======================= */
const SVG_EST_BOX_001 = `<svg viewBox="0 0 500 160" width="480" height="150" xmlns="http://www.w3.org/2000/svg">
  <!-- Eixo -->
  <line x1="40" y1="120" x2="460" y2="120" stroke="#334155" stroke-width="2" />
  <!-- Ticks -->
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
  
  <!-- Whiskers -->
  <line x1="80" y1="60" x2="160" y2="60" stroke="#2563eb" stroke-width="2" stroke-dasharray="4,4" />
  <line x1="80" y1="40" x2="80" y2="80" stroke="#2563eb" stroke-width="2" />
  
  <line x1="360" y1="60" x2="430" y2="60" stroke="#2563eb" stroke-width="2" stroke-dasharray="4,4" />
  <line x1="430" y1="40" x2="430" y2="80" stroke="#2563eb" stroke-width="2" />
  
  <!-- Box -->
  <rect x="160" y="30" width="200" height="60" fill="rgba(37,99,235,0.12)" stroke="#2563eb" stroke-width="2.5" rx="3" />
  
  <!-- Mediana Line -->
  <line x1="260" y1="30" x2="260" y2="90" stroke="#dc2626" stroke-width="3" />
</svg>`;

const SVG_EST_ASSIM_001 = `<svg viewBox="0 0 500 200" width="480" height="190" xmlns="http://www.w3.org/2000/svg">
  <!-- Eixo X -->
  <line x1="30" y1="170" x2="470" y2="170" stroke="#334155" stroke-width="2" />
  <!-- Curva Asimétrica Positiva (à direita) -->
  <path d="M 40,170 C 80,170 110,20 160,20 C 220,20 280,120 460,170" fill="rgba(37,99,235,0.08)" stroke="#2563eb" stroke-width="3" />
  
  <!-- Linhas: Moda, Mediana, Média -->
  <line x1="160" y1="20" x2="160" y2="170" stroke="#16a34a" stroke-width="2" stroke-dasharray="4,3" />
  <text x="160" y="190" font-family="sans-serif" font-size="12" text-anchor="middle" font-weight="bold" fill="#16a34a">Moda</text>
  
  <line x1="205" y1="48" x2="205" y2="170" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4,3" />
  <text x="205" y="190" font-family="sans-serif" font-size="12" text-anchor="middle" font-weight="bold" fill="#d97706">Mediana</text>
  
  <line x1="255" y1="88" x2="255" y2="170" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,3" />
  <text x="255" y="190" font-family="sans-serif" font-size="12" text-anchor="middle" font-weight="bold" fill="#dc2626">Média</text>
  
  <text x="350" y="45" font-family="sans-serif" font-size="13" fill="#334155" font-weight="600">Assimetria Positiva (à Direita):</text>
  <text x="350" y="65" font-family="sans-serif" font-size="13" fill="#2563eb">Moda &lt; Mediana &lt; Média</text>
</svg>`;

window.COURSES_DATA["estatistica"] = {
  name: "AED - Estatística",
  originConfig: {
    "Lista P1": { sequential: true },
    "Prova antiga": { sequential: false },
    "Dado em aula": { sequential: false },
    "Aula de revisão": { sequential: false },
    "Listas de IA": { sequential: false }
  },
  sections: [
    { id: "posicao", title: "Medidas de Posição" },
    { id: "dispersao", title: "Medidas de Dispersão" },
    { id: "graficos", title: "Análise Gráfica & Boxplot" },
    { id: "agrupados", title: "Dados Agrupados em Classes" }
  ],
  topics: [
    /* =========================================================================
       SEÇÃO 1: MEDIDAS DE POSIÇÃO
       ========================================================================= */
    {
      materia: "Média",
      subtopico: "Média Aritmética e Ponderada",
      secId: "posicao",
      exercicios: [
        {
          id: "P1-01",
          numero: 1,
          origem: "Lista P1",
          dificuldade: "Fácil",
          relevancia: "Alta",
          enunciado: "Em um determinado setor de atendimento, o tempo de espera (em minutos) de 6 clientes foi: 14, 18, 11, 25, 12 e 16. Calcule a média aritmética do tempo de espera.",
          resposta: "$$ \\bar{x} = \\frac{14 + 18 + 11 + 25 + 12 + 16}{6} = \\frac{96}{6} = 16 \\text{ minutos} $$"
        },
        {
          id: "P1-02",
          numero: 2,
          origem: "Lista P1",
          dificuldade: "Médio",
          relevancia: "Alta",
          enunciado: "Um estudante obteve as seguintes notas em três provas bimestrais: P1 = 5.0 (peso 2), P2 = 7.0 (peso 3) e P3 = 8.5 (peso 5). Determine a média final ponderada obtida.",
          resposta: "$$ \\bar{x}_p = \\frac{5.0(2) + 7.0(3) + 8.5(5)}{2 + 3 + 5} = \\frac{10 + 21 + 42.5}{10} = \\frac{73.5}{10} = 7.35 $$"
        },
        {
          id: "P1-03",
          numero: 3,
          origem: "Lista P1",
          dificuldade: "Médio",
          relevancia: "Alta",
          enunciado: "A média salarial de 15 funcionários de uma empresa era de R$ 3.000,00. Após a contratação de 5 novos estagiários com salário de R$ 1.400,00 cada, qual passou a ser a nova média salarial de todos os 20 colaboradores?",
          resposta: "Soma salarial anterior: \\( 15 \\times 3000 = 45.000 \\)<br>Novo total: \\( 45.000 + (5 \\times 1.400) = 45.000 + 7.000 = 52.000 \\)<br>Nova média: $$ \\bar{x}_{novo} = \\frac{52.000}{20} = \\text{R\\$ } 2.600,00 $$"
        }
      ]
    },
    {
      materia: "Mediana",
      subtopico: "Cálculo em Rols Pares e Ímpares",
      secId: "posicao",
      exercicios: [
        {
          id: "P1-04",
          numero: 4,
          origem: "Lista P1",
          dificuldade: "Fácil",
          relevancia: "Alta",
          enunciado: "Considere as idades dos candidatos aprovados em um concurso: 28, 22, 35, 24, 40, 26, 31. Encontre a mediana.",
          resposta: "1. Ordenando o Rol (n = 7, ímpar): 22, 24, 26, <b>28</b>, 31, 35, 40.<br>2. Posição da mediana: \\( \\frac{7+1}{2} = 4^a \\) posição.<br><br>$$ Md = 28 $$"
        },
        {
          id: "P1-05",
          numero: 5,
          origem: "Lista P1",
          dificuldade: "Fácil",
          relevancia: "Alta",
          enunciado: "Determine a mediana do seguinte conjunto de dados amostrais com número par de observações: \\( \\{4, 12, 8, 20, 15, 6\\} \\).",
          resposta: "1. Ordenando o Rol (n = 6, par): 4, 6, <b>8, 12</b>, 15, 20.<br>2. Elementos centrais na 3ª e 4ª posições: 8 e 12.<br>$$ Md = \\frac{8 + 12}{2} = 10 $$"
        }
      ]
    },
    {
      materia: "Moda",
      subtopico: "Classificação Modal e Propriedades",
      secId: "posicao",
      exercicios: [
        {
          id: "P1-06",
          numero: 6,
          origem: "Lista P1",
          dificuldade: "Fácil",
          relevancia: "Média",
          enunciado: "Classifique quanto ao número de modas os seguintes conjuntos de dados:<br>a) \\( A = \\{2, 3, 5, 7, 11\\} \\)<br>b) \\( B = \\{1, 3, 3, 4, 6, 6, 8\\} \\)<br>c) \\( C = \\{5, 5, 5, 9, 12\\} \\)",
          resposta: "a) <b>Amodal</b> (nenhum valor se repete).<br>b) <b>Bimodal</b> com modas \\( Mo = 3 \\) e \\( Mo = 6 \\).<br>c) <b>Unimodal</b> com moda \\( Mo = 5 \\)."
        }
      ]
    },
    {
      materia: "Média, Moda e Mediana Conjuntas",
      subtopico: "Relações de Simetria e Comparação",
      secId: "posicao",
      exercicios: [
        {
          id: "P1-07",
          numero: 7,
          origem: "Lista P1",
          dificuldade: "Médio",
          relevancia: "Alta",
          enunciado: "Dado o conjunto de observações \\( \\{3, 7, 7, 8, 9, 10, 12, 14, 19\\} \\), calcule simultaneamente a <b>Média</b>, a <b>Moda</b> e a <b>Mediana</b>.",
          resposta: "• <b>Média:</b> \\( \\bar{x} = \\frac{3+7+7+8+9+10+12+14+19}{9} = \\frac{89}{9} \\approx 9.89 \\)<br>• <b>Moda:</b> \\( Mo = 7 \\) (aparece 2 vezes)<br>• <b>Mediana:</b> 5º elemento do rol ordenado \\( \\to Md = 9 \\)<br><br>$$ Mo (7) < Md (9) < \\bar{x} (9.89) $$"
        },
        {
          id: "P1-08",
          numero: 8,
          origem: "Lista P1",
          dificuldade: "Médio",
          relevancia: "Alta",
          enunciado: "Em uma distribuição unimodal contínua de rendimentos, verificou-se que \\( \\text{Moda} = 1.800 \\), \\( \\text{Mediana} = 2.400 \\) e \\( \\text{Média} = 3.100 \\). Qual é o tipo de assimetria desta curva e por que a média é tão superior à mediana?",
          resposta: "Como \\( \\text{Moda} < \\text{Mediana} < \\text{Média} \\), a distribuição possui <b>Assimetria Positiva (à Direita)</b>.<br>A média é puxada para a direita porque é uma medida sensível a valores extremos (outliers elevados, como altos salários).",
          svg: SVG_EST_ASSIM_001,
          svgPos: "resposta"
        }
      ]
    },

    /* =========================================================================
       SEÇÃO 2: MEDIDAS DE DISPERSÃO
       ========================================================================= */
    {
      materia: "Variância e Desvio Padrão",
      subtopico: "Amostral vs. Populacional",
      secId: "dispersao",
      exercicios: [
        {
          id: "P1-09",
          numero: 9,
          origem: "Lista P1",
          dificuldade: "Médio",
          relevancia: "Alta",
          enunciado: "Calcule a <b>variância populacional</b> (\\( \\sigma^2 \\)) e o <b>desvio padrão populacional</b> (\\( \\sigma \\)) do conjunto de dados: \\( \\{2, 4, 6, 8, 10\\} \\).",
          resposta: "1. Média: \\( \\mu = \\frac{2+4+6+8+10}{5} = 6 \\)<br>2. Quadrados dos desvios: \\( (2-6)^2 + (4-6)^2 + (6-6)^2 + (8-6)^2 + (10-6)^2 = 16 + 4 + 0 + 4 + 16 = 40 \\)<br>3. Variância populacional: $$ \\sigma^2 = \\frac{40}{5} = 8 $$<br>4. Desvio padrão: $$ \\sigma = \\sqrt{8} \\approx 2.83 $$"
        },
        {
          id: "P1-10",
          numero: 10,
          origem: "Lista P1",
          dificuldade: "Difícil",
          relevancia: "Alta",
          enunciado: "Uma <b>amostra</b> de 5 peças industriais apresentou os seguintes comprimentos (em mm): 10, 12, 15, 18, 20. Calcule a <b>variância amostral</b> (\\( s^2 \\)) e o <b>desvio padrão amostral</b> (\\( s \\)).",
          resposta: "1. Média amostral: \\( \\bar{x} = \\frac{10+12+15+18+20}{5} = 15 \\)<br>2. Soma dos quadrados dos desvios: \\( (10-15)^2 + (12-15)^2 + (15-15)^2 + (18-15)^2 + (20-15)^2 = 25 + 9 + 0 + 9 + 25 = 68 \\)<br>3. Variância amostral (divide-se por \\( n-1 = 4 \\)): $$ s^2 = \\frac{68}{4} = 17 $$<br>4. Desvio padrão amostral: $$ s = \\sqrt{17} \\approx 4.12 \\text{ mm} $$"
        }
      ]
    },
    {
      materia: "Coeficiente de Variação",
      subtopico: "Dispersão Relativa e Homogeneidade",
      secId: "dispersao",
      exercicios: [
        {
          id: "P1-11",
          numero: 11,
          origem: "Lista P1",
          dificuldade: "Médio",
          relevancia: "Alta",
          enunciado: "Deseja-se comparar a estabilidade de duas linhas de produção A e B:<br>• Linha A: Média = 100 kg com desvio padrão = 5 kg.<br>• Linha B: Média = 25 kg com desvio padrão = 2 kg.<br>Qual das duas linhas apresenta <b>maior dispersão relativa (menor homogeneidade)</b>?",
          resposta: "Calculando o Coeficiente de Variação \\( CV = \\frac{s}{\\bar{x}} \\times 100\\% \\):<br>• \\( CV_A = \\frac{5}{100} \\times 100\\% = 5\\% \\)<br>• \\( CV_B = \\frac{2}{25} \\times 100\\% = 8\\% \\)<br><br><b>Resposta:</b> A <b>Linha B</b> é relativamente mais dispersa (menos homogênea), pois seu coeficiente de variação (8%) é superior ao da Linha A (5%)."
        }
      ]
    },

    /* =========================================================================
       SEÇÃO 3: ANÁLISE GRÁFICA & BOXPLOT
       ========================================================================= */
    {
      materia: "Boxplot e Separatrizes",
      subtopico: "Quartis, Intervalo Interquartil e Outliers",
      secId: "graficos",
      exercicios: [
        {
          id: "P1-12",
          numero: 12,
          origem: "Lista P1",
          dificuldade: "Médio",
          relevancia: "Alta",
          enunciado: "Analise o diagrama de caixa (Boxplot) apresentado abaixo e determine:<br>a) O valor do primeiro quartil (Q1) e terceiro quartil (Q3).<br>b) O Intervalo Interquartil (IQR).<br>c) A mediana da distribuição.",
          resposta: "a) \\( Q_1 = 18 \\) e \\( Q_3 = 34 \\)<br>b) \\( IQR = Q_3 - Q_1 = 34 - 18 = 16 \\)<br>c) Mediana \\( Md = 25 \\)",
          svg: SVG_EST_BOX_001
        },
        {
          id: "P1-13",
          numero: 13,
          origem: "Lista P1",
          dificuldade: "Difícil",
          relevancia: "Alta",
          enunciado: "Em uma amostra sabe-se que \\( Q_1 = 30 \\) e \\( Q_3 = 50 \\). Calcule os limites inferior e superior para a detecção de valores discrepantes (outliers leves) usando a regra de 1.5 vezes o IQR.",
          resposta: "1. \\( IQR = Q_3 - Q_1 = 50 - 30 = 20 \\)<br>2. Limite Inferior: $$ LI = Q_1 - 1.5(IQR) = 30 - 1.5(20) = 30 - 30 = 0 $$<br>3. Limite Superior: $$ LS = Q_3 + 1.5(IQR) = 50 + 1.5(20) = 50 + 30 = 80 $$<br>Qualquer observação \\( x < 0 \\) ou \\( x > 80 \\) é considerada outlier."
        }
      ]
    },

    /* =========================================================================
       SEÇÃO 4: DADOS AGRUPADOS EM CLASSES
       ========================================================================= */
    {
      materia: "Média e Moda para Dados Agrupados",
      subtopico: "Ponto Médio e Fórmula de Czuber",
      secId: "agrupados",
      exercicios: [
        {
          id: "P1-14",
          numero: 14,
          origem: "Lista P1",
          dificuldade: "Médio",
          relevancia: "Alta",
          enunciado: `Calcule a <b>média estimada</b> da distribuição de salários abaixo utilizando os pontos médios (\\( x_i \\)):
          <div style="overflow-x:auto; margin: 12px 0;">
            <table style="width:100%; border-collapse:collapse; text-align:center; font-size:14px; background:var(--bg);">
              <thead>
                <tr style="border-bottom:2px solid var(--border); background:var(--surface);">
                  <th style="padding:8px;">Classes (R$)</th>
                  <th style="padding:8px;">Ponto Médio ($$x_i$$)</th>
                  <th style="padding:8px;">Freq. Simples ($$f_i$$)</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom:1px solid var(--border);">
                  <td style="padding:6px;">1000 |-- 2000</td><td>1500</td><td>4</td>
                </tr>
                <tr style="border-bottom:1px solid var(--border);">
                  <td style="padding:6px;">2000 |-- 3000</td><td>2500</td><td>6</td>
                </tr>
                <tr style="border-bottom:1px solid var(--border);">
                  <td style="padding:6px;">3000 |-- 4000</td><td>3500</td><td>10</td>
                </tr>
              </tbody>
            </table>
          </div>`,
          resposta: "$$ \\bar{x} = \\frac{\\sum x_i f_i}{\\sum f_i} = \\frac{1500(4) + 2500(6) + 3500(10)}{4 + 6 + 10} = \\frac{6000 + 15000 + 35000}{20} = \\frac{56000}{20} = \\text{R\\$ } 2.800,00 $$"
        },
        {
          id: "P1-15",
          numero: 15,
          origem: "Lista P1",
          dificuldade: "Muito difícil",
          relevancia: "Alta",
          enunciado: `Dada a tabela de distribuição de frequências abaixo com amplitude $$h = 10$$:
          <div style="overflow-x:auto; margin: 12px 0;">
            <table style="width:100%; border-collapse:collapse; text-align:center; font-size:14px; background:var(--bg);">
              <thead>
                <tr style="border-bottom:2px solid var(--border); background:var(--surface);">
                  <th style="padding:8px;">Classe</th>
                  <th style="padding:8px;">Frequência ($$f_i$$)</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom:1px solid var(--border);"><td style="padding:6px;">20 |-- 30</td><td>5</td></tr>
                <tr style="border-bottom:1px solid var(--border);"><td style="padding:6px;">30 |-- 40</td><td>12 (Classe Modal)</td></tr>
                <tr style="border-bottom:1px solid var(--border);"><td style="padding:6px;">40 |-- 50</td><td>8</td></tr>
              </tbody>
            </table>
          </div>
          Calcule a <b>Moda de Czuber</b> da distribuição.`,
          resposta: `Fórmula de Czuber: $$ Mo = l_1 + \\left( \\frac{\\Delta_1}{\\Delta_1 + \\Delta_2} \\right) \\times h $$
          Onde:<br>
          • \\( l_1 = 30 \\) (limite inferior da classe modal)<br>
          • \\( \\Delta_1 = f_{modal} - f_{ant} = 12 - 5 = 7 \\)<br>
          • \\( \\Delta_2 = f_{modal} - f_{post} = 12 - 8 = 4 \\)<br>
          • \\( h = 10 \\)<br><br>
          $$ Mo = 30 + \\left( \\frac{7}{7 + 4} \\right) \\times 10 = 30 + \\frac{70}{11} \\approx 30 + 6.36 = 36.36 $$`
        }
      ]
    },
    {
      materia: "Mediana para Dados Agrupados",
      subtopico: "Interpolação Linear e Frequência Acumulada",
      secId: "agrupados",
      exercicios: [
        {
          id: "P1-16",
          numero: 16,
          origem: "Lista P1",
          dificuldade: "Muito difícil",
          relevancia: "Alta",
          enunciado: `Encontre a <b>Mediana</b> da distribuição de pesos de 40 indivíduos:
          <div style="overflow-x:auto; margin: 12px 0;">
            <table style="width:100%; border-collapse:collapse; text-align:center; font-size:14px; background:var(--bg);">
              <thead>
                <tr style="border-bottom:2px solid var(--border); background:var(--surface);">
                  <th style="padding:8px;">Classes de Peso (kg)</th>
                  <th style="padding:8px;">$$f_i$$</th>
                  <th style="padding:8px;">$$F_{ac}$$</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom:1px solid var(--border);"><td style="padding:6px;">50 |-- 60</td><td>8</td><td>8</td></tr>
                <tr style="border-bottom:1px solid var(--border);"><td style="padding:6px;">60 |-- 70</td><td>16</td><td>24</td></tr>
                <tr style="border-bottom:1px solid var(--border);"><td style="padding:6px;">70 |-- 80</td><td>12</td><td>36</td></tr>
                <tr style="border-bottom:1px solid var(--border);"><td style="padding:6px;">80 |-- 90</td><td>4</td><td>40</td></tr>
              </tbody>
            </table>
          </div>`,
          resposta: `1. Posição da Mediana: \\( \\frac{N}{2} = \\frac{40}{2} = 20 \\) (cai na 2ª classe: 60 |-- 70).<br>
          2. Fórmula da Mediana: $$ Md = l_1 + \\left( \\frac{\\frac{N}{2} - F_{ant}}{f_{med}} \\right) \\times h $$
          Onde:<br>
          • \\( l_1 = 60 \\)<br>
          • \\( F_{ant} = 8 \\)<br>
          • \\( f_{med} = 16 \\)<br>
          • \\( h = 10 \\)<br><br>
          $$ Md = 60 + \\left( \\frac{20 - 8}{16} \\right) \\times 10 = 60 + \\left( \\frac{12}{16} \\right) \\times 10 = 60 + 7.5 = 67.5 \\text{ kg} $$`
        }
      ]
    }
  ]
};
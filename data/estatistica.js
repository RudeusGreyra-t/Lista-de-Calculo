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

const SVG_EST_ASSIM_001 = `<svg viewBox="0 0 500 200" width="480" height="190" xmlns="http://www.w3.org/2000/svg">
  <path d="M 40,170 C 80,170 110,20 160,20 C 220,20 280,120 460,170" fill="rgba(37,99,235,0.08)" stroke="#2563eb" stroke-width="3" />
  <line x1="30" y1="170" x2="470" y2="170" stroke="#334155" stroke-width="2" />
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
    "PDF Matéria": { sequential: false },
    "Dado em aula": { sequential: false }
  },
  sections: [
    {
      id: "estatistica_descritiva",
      title: "Estatística Descritiva"
    },
    {
      id: "analise_exploratoria",
      title: "Análise Exploratória"
    },
    {
      id: "boxplot_secao",
      title: "Boxplots"
    }
  ],
  topics: [
    {
      materia: "Estatística Descritiva",
      subtopico: "Medidas a partir de Dados Brutos",
      secId: "estatistica_descritiva",
      exercicios: [
        {
          id: "PDF-001",
          origem: "PDF Matéria",
          dificuldade: "Fácil",
          relevancia: "Média",
          enunciado: "Do conjunto de valores dados abaixo de uma população de seis elementos, calcule a média. $$ X = \\{3, 5, 8, 4, 8, 6\\} $$",
          resposta: "$$ \\mu_{(X)} = \\frac{\\sum_{i=1}^6 X_i}{6} = \\frac{3 + 5 + 8 + 4 + 8 + 6}{6} = \\frac{34}{6} \\approx 5,67 $$"
        },
        {
          id: "PDF-003",
          origem: "PDF Matéria",
          dificuldade: "Médio",
          relevancia: "Alta",
          enunciado: "Do conjunto de valores observados abaixo, calcule a mediana e moda.<br>a) $$ X = \\{3, 5, 8, 4, 8, 6\\} $$<br>b) $$ Y = \\{3, 6, 8, 8, 6, 6, 10, 20, 12\\} $$",
          resposta: "<strong>Letra a:</strong> Rol: 3, 4, 5, 6, 8, 8 (\\( n = 6 \\), par).<br>\\( Md = \\frac{5+6}{2} = 5,5 \\)<br>\\( Mo = 8 \\)<br><br><strong>Letra b:</strong> Rol: 3, 6, 6, 6, 8, 8, 10, 12, 20 (\\( n = 9 \\), ímpar).<br>\\( Md = 8 \\)<br>\\( Mo = 6 \\)"
        },
        {
          id: "PDF-005",
          origem: "PDF Matéria",
          dificuldade: "Fácil",
          relevancia: "Média",
          enunciado: "Exercício Relâmpago: Sabendo-se que o nível de colesterol (mg/100 ml) de um conjunto de sete pacientes clínicos foi de 10, 14, 13, 15, 16, 18 e 12, qual o colesterol médio desses pacientes?",
          resposta: "$$ \\bar{X} = \\frac{10+14+13+15+16+18+12}{7} = \\frac{98}{7} = 14 \\text{ mg/100 ml} $$"
        },
        {
          id: "PDF-006",
          origem: "PDF Matéria",
          dificuldade: "Fácil",
          relevancia: "Alta",
          enunciado: "Exercício Relâmpago: Sabendo-se que o nível de colesterol (mg/100 ml) de um conjunto de oito pacientes clínicos foi de 10, 10, 13, 15, 16, 16, 12 e 18, qual a mediana e a moda do colesterol desses pacientes?",
          resposta: "Rol: \\( X = \\{10, 10, 12, 13, 15, 16, 16, 18\\} \\) \\(\\Rightarrow n=8\\) (par).<br>\\( Md(X) = \\frac{13+15}{2} = 14 \\)<br>\\( Mo(X) = 10 \\) e \\( 16 \\) (Distribuição Bimodal)."
        },
        {
          id: "LISTA-Q06",
          numero: 6,
          origem: "Lista P1",
          dificuldade: "Médio",
          relevancia: "Alta",
          enunciado: "Cinco pessoas usaram dois instrumentos para indicar o nível de dor 12 horas após uma operação. A seguir estão os escores de dor de cada pessoa, em cada instrumento:<br><br><table style='width:100%; border-collapse:collapse; background-color:var(--bg); text-align:center;'><tr style='background-color:rgba(128,128,128,0.1);'><th style='border:1px solid var(--border); padding:8px;'>Pessoa</th><th style='border:1px solid var(--border); padding:8px;'>A</th><th style='border:1px solid var(--border); padding:8px;'>B</th><th style='border:1px solid var(--border); padding:8px;'>C</th><th style='border:1px solid var(--border); padding:8px;'>D</th><th style='border:1px solid var(--border); padding:8px;'>E</th></tr><tr><td style='border:1px solid var(--border); padding:8px;'>Dor (Inst. 1)</td><td style='border:1px solid var(--border); padding:8px;'>8</td><td style='border:1px solid var(--border); padding:8px;'>6</td><td style='border:1px solid var(--border); padding:8px;'>4</td><td style='border:1px solid var(--border); padding:8px;'>4</td><td style='border:1px solid var(--border); padding:8px;'>3</td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>Dor (Inst. 2)</td><td style='border:1px solid var(--border); padding:8px;'>9</td><td style='border:1px solid var(--border); padding:8px;'>7</td><td style='border:1px solid var(--border); padding:8px;'>4</td><td style='border:1px solid var(--border); padding:8px;'>4</td><td style='border:1px solid var(--border); padding:8px;'>6</td></tr></table><br>a) Qual instrumento teve um escore, em média, de mais dor?<br>b) Qual a mediana dos escores dos dois instrumentos?<br>c) Qual a moda dos escores dos dois instrumentos?",
          resposta: "a) Inst 1: \\( \\bar{x}_1 = \\frac{25}{5} = 5 \\). Inst 2: \\( \\bar{x}_2 = \\frac{30}{5} = 6 \\) (Inst 2 teve média maior).<br>b) Inst 1 rol: 3, 4, 4, 6, 8 \\(\\Rightarrow Md_1 = 4\\). Inst 2 rol: 4, 4, 6, 7, 9 \\(\\Rightarrow Md_2 = 6\\).<br>c) \\( Mo_1 = 4 \\), \\( Mo_2 = 4 \\)."
        }
      ]
    },
    {
      materia: "Estatística Descritiva",
      subtopico: "Média Ponderada",
      secId: "estatistica_descritiva",
      exercicios: [
        {
          id: "PDF-002",
          origem: "PDF Matéria",
          dificuldade: "Fácil",
          relevancia: "Alta",
          enunciado: "Um candidato obteve, nas diversas provas de um concurso, as seguintes notas com seus respectivos pesos descritos abaixo. Calcule a média das notas.<br><br><table style='width:100%; border-collapse:collapse; background-color:var(--bg); text-align:center;'><tr style='background-color:rgba(128,128,128,0.1);'><th style='border:1px solid var(--border); padding:8px;'>Matéria</th><th style='border:1px solid var(--border); padding:8px;'>Nota</th><th style='border:1px solid var(--border); padding:8px;'>Peso</th></tr><tr><td style='border:1px solid var(--border); padding:8px;'>Português</td><td style='border:1px solid var(--border); padding:8px;'>66</td><td style='border:1px solid var(--border); padding:8px;'>3</td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>Contabilidade</td><td style='border:1px solid var(--border); padding:8px;'>63</td><td style='border:1px solid var(--border); padding:8px;'>3</td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>Estatística</td><td style='border:1px solid var(--border); padding:8px;'>74</td><td style='border:1px solid var(--border); padding:8px;'>2</td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>Direito</td><td style='border:1px solid var(--border); padding:8px;'>79</td><td style='border:1px solid var(--border); padding:8px;'>2</td></tr></table>",
          resposta: "$$ \\bar{X} = \\frac{(66 \\times 3) + (63 \\times 3) + (74 \\times 2) + (79 \\times 2)}{3+3+2+2} = \\frac{693}{10} = 69,3 $$"
        },
        {
          id: "LISTA-Q07",
          numero: 7,
          origem: "Lista P1",
          dificuldade: "Médio",
          relevancia: "Média",
          enunciado: "Um candidato obteve, nas diversas provas de um concurso, as seguintes notas com seus respectivos pesos: Português: 66 (peso 3), Contabilidade: 63 (peso 3), Estatística: X (peso 2) e Direito: 79 (peso 2). A média aritmética ponderada, obtida pelo candidato foi de 69,3. Calcule a nota do candidato em Estatística.",
          resposta: "$$ \\frac{(66 \\cdot 3) + (63 \\cdot 3) + (X \\cdot 2) + (79 \\cdot 2)}{3 + 3 + 2 + 2} = 69,3 \\Rightarrow \\frac{198 + 189 + 2X + 158}{10} = 69,3 \\Rightarrow 545 + 2X = 693 \\Rightarrow 2X = 148 \\Rightarrow X = 74 $$"
        },
        {
          id: "LISTA-Q08",
          numero: 8,
          origem: "Lista P1",
          dificuldade: "Fácil",
          relevancia: "Média",
          enunciado: "Uma empresa possui dois técnicos em informática recebendo salários de R$ 3.400,00 cada, quatro economistas recebendo R$ 4.500,00 cada, um diretor com salário de R$ 7.000,00 e três outros profissionais recebendo R$ 5.500,00 cada. Calcule a média mensal de salários.",
          resposta: "$$ \\bar{X} = \\frac{(3.400 \\times 2) + (4.500 \\times 4) + (7.000 \\times 1) + (5.500 \\times 3)}{2 + 4 + 1 + 3} = \\frac{48.300}{10} = R\\$ 4.830,00 $$"
        },
        {
          id: "LISTA-Q12",
          numero: 12,
          origem: "Lista P1",
          dificuldade: "Médio",
          relevancia: "Alta",
          enunciado: "Um aluno fez três provas. A primeira prova tem peso 1, a segunda peso 2 e a terceira peso 3. O aluno obteve notas 4, 7 e 6 respectivamente. Calcule a média e a mediana do aluno.",
          resposta: "<strong>Média:</strong> $$ \\bar{x} = \\frac{(4\\times1) + (7\\times2) + (6\\times3)}{1+2+3} = \\frac{4+14+18}{6} = 6,5 $$<br><strong>Mediana:</strong> É necessário repetir as notas de acordo com seus pesos antes de ordenar. Notas: 4; 7, 7; 6, 6, 6.<br>Rol: 4, 6, 6, 6, 7, 7 (\\( n=6 \\)).<br>$$ Md = \\frac{6+6}{2} = 6 $$"
        }
      ]
    },
    {
      materia: "Estatística Descritiva",
      subtopico: "Medidas em Dados Agrupados (Classes)",
      secId: "estatistica_descritiva",
      exercicios: [
        {
          id: "AULA-001",
          origem: "Dado em aula",
          dificuldade: "Médio",
          relevancia: "Muito Alta",
          enunciado: "A partir da tabela de frequências de dados agrupados em classes abaixo, calcule a Média, a Mediana e a Moda Bruta.<br><br><table style='width:100%; border-collapse:collapse; background-color:var(--bg); text-align:center;'><tr style='background-color:rgba(128,128,128,0.1);'><th style='border:1px solid var(--border); padding:8px;'>Classes</th><th style='border:1px solid var(--border); padding:8px;'>Freq. (\\( f_i \\))</th></tr><tr><td style='border:1px solid var(--border); padding:8px;'>0 |- 10</td><td style='border:1px solid var(--border); padding:8px;'>4</td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>10 |- 20</td><td style='border:1px solid var(--border); padding:8px;'>9</td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>20 |- 30</td><td style='border:1px solid var(--border); padding:8px;'>15</td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>30 |- 40</td><td style='border:1px solid var(--border); padding:8px;'>12</td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>40 |- 50</td><td style='border:1px solid var(--border); padding:8px;'>6</td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>50 |- 60</td><td style='border:1px solid var(--border); padding:8px;'>4</td></tr></table>",
          resposta: "<strong>Média:</strong> $$ \\bar{x} = \\frac{\\sum f_i \\cdot x_i}{\\sum f_i} = \\frac{1440}{50} = 28,8 $$<br><strong>Mediana:</strong> Posição \\( n/2 = 25 \\). Frequências acumuladas: 4, 13, 28... A classe mediana é 20 |- 30. Utilizando a fórmula de interpolação linear: $$ \\frac{Md - 20}{30 - 20} = \\frac{25 - 13}{28 - 13} \\Rightarrow \\frac{Md - 20}{10} = \\frac{12}{15} \\Rightarrow Md = 28 $$<br><strong>Moda Bruta:</strong> Ponto médio da classe de maior frequência (20 |- 30). $$ Mo = \\frac{20 + 30}{2} = 25 $$"
        },
        {
          id: "AULA-002",
          origem: "Dado em aula",
          dificuldade: "Médio",
          relevancia: "Muito Alta",
          enunciado: "Uma fábrica registrou o salário mensal (em R$) de 80 funcionários, organizado na tabela abaixo. Determine a média, a mediana e a moda bruta dos salários.<br><br><table style='width:100%; border-collapse:collapse; background-color:var(--bg); text-align:center;'><tr style='background-color:rgba(128,128,128,0.1);'><th style='border:1px solid var(--border); padding:8px;'>Salário (R$)</th><th style='border:1px solid var(--border); padding:8px;'>Freq. (\\( f_i \\))</th></tr><tr><td style='border:1px solid var(--border); padding:8px;'>1000 |- 1500</td><td style='border:1px solid var(--border); padding:8px;'>8</td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>1500 |- 2000</td><td style='border:1px solid var(--border); padding:8px;'>18</td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>2000 |- 2500</td><td style='border:1px solid var(--border); padding:8px;'>24</td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>2500 |- 3000</td><td style='border:1px solid var(--border); padding:8px;'>16</td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>3000 |- 3500</td><td style='border:1px solid var(--border); padding:8px;'>10</td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>3500 |- 4000</td><td style='border:1px solid var(--border); padding:8px;'>4</td></tr></table>",
          resposta: "<strong>Média:</strong> Somatório de \\( x_i \\cdot f_i = 187000 \\). $$ \\bar{x} = \\frac{187000}{80} = 2337,50 $$<br><strong>Mediana:</strong> Posição \\( 80/2 = 40 \\). Freq. acumuladas: 8, 26, 50. Classe mediana = 2000 |- 2500. Aplicando a interpolação: $$ \\frac{Md - 2000}{2500 - 2000} = \\frac{40 - 26}{50 - 26} \\Rightarrow Md \\approx 2291,67 $$<br><strong>Moda Bruta:</strong> A classe modal é 2000 |- 2500. $$ Mo = \\frac{2000+2500}{2} = 2250,00 $$"
        },
        {
          id: "LISTA-Q05",
          numero: 5,
          origem: "Lista P1",
          dificuldade: "Fácil",
          relevancia: "Média",
          enunciado: "Seja a distribuição de frequências abaixo, resultado da observação de pesos em kg de um grupo de 50 pessoas adultas. Calcule a média do grupo.<br><br><table style='width:100%; border-collapse:collapse; background-color:var(--bg); text-align:center;'><tr style='background-color:rgba(128,128,128,0.1);'><th style='border:1px solid var(--border); padding:8px;'>Pesos (Kg)</th><th style='border:1px solid var(--border); padding:8px;'>\\( f_i \\)</th></tr><tr><td style='border:1px solid var(--border); padding:8px;'>46 |- 56</td><td style='border:1px solid var(--border); padding:8px;'>4</td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>56 |- 66</td><td style='border:1px solid var(--border); padding:8px;'>10</td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>66 |- 76</td><td style='border:1px solid var(--border); padding:8px;'>16</td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>76 |- 86</td><td style='border:1px solid var(--border); padding:8px;'>12</td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>86 |- 96</td><td style='border:1px solid var(--border); padding:8px;'>8</td></tr></table>",
          resposta: "Pontos Médios (\\( x_i \\)): 51, 61, 71, 81, 91.<br> $$ \\bar{x} = \\frac{(51\\cdot 4) + (61\\cdot 10) + (71\\cdot 16) + (81\\cdot 12) + (91\\cdot 8)}{50} = \\frac{3650}{50} = 73 $$"
        }
      ]
    },
    {
      materia: "Estatística Descritiva",
      subtopico: "Tomada de Decisão (Média vs Mediana)",
      secId: "estatistica_descritiva",
      exercicios: [
        {
          id: "PDF-004-B",
          origem: "PDF Matéria",
          dificuldade: "Fácil",
          relevancia: "Muito Alta",
          enunciado: "Do conjunto de valores observados abaixo por um médico em relação às idades de seus pacientes: $$ X = \\{3, 4, 5, 8, 100\\} $$. Qual a vantagem de utilizar a mediana ao invés da média neste caso?",
          resposta: "A média (24) é fortemente puxada pelo valor extremo 100, não representando bem o conjunto. A mediana (5) expressa melhor o grupo pois não é influenciada por outliers."
        },
        {
          id: "LISTA-Q11",
          numero: 11,
          origem: "Lista P1",
          dificuldade: "Fácil",
          relevancia: "Muito Alta",
          enunciado: "Para os escores 205, 6, 5, 5, 5, 2 e 1, calcule a moda, a mediana e a média. Qual medida de tendência central não deveria ser usada para descrever esse conjunto? Por quê?",
          resposta: "\\( Mo = 5 \\), \\( Md = 5 \\), \\( \\bar{X} \\approx 32,7 \\)<br><strong>Justificativa:</strong> A média não é uma boa medida para este conjunto pois é influenciada pelo valor extremo (outlier) 205. A mediana é mais representativa."
        },
        {
          id: "LISTA-Q09",
          numero: 9,
          origem: "Lista P1",
          dificuldade: "Difícil",
          relevancia: "Baixa",
          enunciado: "Suzana e Sandra jogam uma moeda cada uma. Se do lançamento resultar duas caras, Suzana paga a Sandra R$6,00. Dando qualquer outro resultado, Sandra paga a Suzana R$4,00. Qual o valor médio, em reais, dos ganhos de Sandra?",
          resposta: "$$ \\bar{x} = \\frac{6 - 4 - 4 - 4}{4} = \\frac{-6}{4} = -1,50 $$"
        }
      ]
    },
    {
      materia: "Análise Exploratória",
      subtopico: "Tipos e Qualidade de Gráficos",
      secId: "analise_exploratoria",
      exercicios: [
        {
          id: "LISTA-Q01",
          numero: 1,
          origem: "Lista P1",
          dificuldade: "Fácil",
          relevancia: "Média",
          enunciado: "Complete a tabela abaixo com os dados percentuais. Cite um tipo de gráfico adequado para visualização desta tabela.<br><br><table style='width:100%; border-collapse:collapse; background-color:var(--bg); text-align:center;'><tr style='background-color:rgba(128,128,128,0.1);'><th style='border:1px solid var(--border); padding:8px;'>Sexo</th><th style='border:1px solid var(--border); padding:8px;'>Base</th><th style='border:1px solid var(--border); padding:8px;'>%</th></tr><tr><td style='border:1px solid var(--border); padding:8px;'>Masculino</td><td style='border:1px solid var(--border); padding:8px;'>402</td><td style='border:1px solid var(--border); padding:8px;'></td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>Feminino</td><td style='border:1px solid var(--border); padding:8px;'>4.958</td><td style='border:1px solid var(--border); padding:8px;'></td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>Não Informado</td><td style='border:1px solid var(--border); padding:8px;'>434</td><td style='border:1px solid var(--border); padding:8px;'></td></tr></table>",
          resposta: "Masculino: 6,9%; Feminino: 85,6%; Não Informado: 7,5%. O gráfico mais apropriado seria o de pizza (ou colunas/barras). O gráfico de linhas não é adequado pois não é série temporal."
        },
        {
          id: "LISTA-Q02",
          numero: 2,
          origem: "Lista P1",
          dificuldade: "Fácil",
          relevancia: "Baixa",
          enunciado: "Comente os gráficos abaixo que delineiam ocorrências reais e metas de roubos no RJ.<br><br><div style='text-align:center; overflow-x:auto;'><svg viewBox='0 0 650 250' style='width:100%; max-width:650px; height:auto; background:var(--bg); border:1px solid var(--border); font-family:sans-serif; margin:10px 0;'><text x='55' y='20' font-size='14' font-weight='bold' fill='currentColor'>Roubo de veículo</text><line x1='55' y1='30' x2='55' y2='200' stroke='currentColor' stroke-width='1'/><line x1='55' y1='200' x2='325' y2='200' stroke='currentColor' stroke-width='1'/><text x='50' y='40' text-anchor='end' font-size='10' fill='currentColor'>30.000</text><text x='50' y='95' text-anchor='end' font-size='10' fill='currentColor'>20.000</text><text x='50' y='150' text-anchor='end' font-size='10' fill='currentColor'>10.000</text><text x='50' y='200' text-anchor='end' font-size='10' fill='currentColor'>0</text><rect x='75' y='130' width='30' height='70' fill='#c8f7c5'/><text x='90' y='125' text-anchor='middle' font-size='9' fill='currentColor'>13.129</text><rect x='105' y='142' width='30' height='58' fill='#007a7a'/><text x='120' y='137' text-anchor='middle' font-size='9' fill='currentColor' paint-order='stroke' stroke='var(--bg)' stroke-width='2.5'>10.914</text><text x='105' y='215' text-anchor='middle' font-size='10' fill='currentColor'>2º Sem /09</text><rect x='155' y='72' width='30' height='128' fill='#c8f7c5'/><text x='170' y='67' text-anchor='middle' font-size='9' fill='currentColor'>23.942</text><rect x='185' y='93' width='30' height='107' fill='#007a7a'/><text x='200' y='88' text-anchor='middle' font-size='9' fill='currentColor' paint-order='stroke' stroke='var(--bg)' stroke-width='2.5'>20.052</text><text x='185' y='215' text-anchor='middle' font-size='10' fill='currentColor'>Ano 2010</text><rect x='235' y='145' width='30' height='55' fill='#c8f7c5'/><text x='250' y='140' text-anchor='middle' font-size='9' fill='currentColor'>10.299</text><rect x='265' y='152' width='30' height='48' fill='#007a7a'/><text x='280' y='147' text-anchor='middle' font-size='9' fill='currentColor' paint-order='stroke' stroke='var(--bg)' stroke-width='2.5'>8.993</text><text x='265' y='215' text-anchor='middle' font-size='10' fill='currentColor'>1º Sem /11</text><text x='365' y='20' font-size='14' font-weight='bold' fill='currentColor'>Roubo de rua</text><line x1='365' y1='30' x2='365' y2='200' stroke='currentColor' stroke-width='1'/><line x1='365' y1='200' x2='635' y2='200' stroke='currentColor' stroke-width='1'/><text x='360' y='40' text-anchor='end' font-size='10' fill='currentColor'>90.000</text><text x='360' y='95' text-anchor='end' font-size='10' fill='currentColor'>60.000</text><text x='360' y='150' text-anchor='end' font-size='10' fill='currentColor'>30.000</text><text x='360' y='200' text-anchor='end' font-size='10' fill='currentColor'>0</text><rect x='385' y='116' width='30' height='84' fill='#c8f7c5'/><text x='400' y='111' text-anchor='middle' font-size='9' fill='currentColor'>47.180</text><rect x='415' y='127' width='30' height='73' fill='#007a7a'/><text x='430' y='122' text-anchor='middle' font-size='9' fill='currentColor' paint-order='stroke' stroke='var(--bg)' stroke-width='2.5'>40.904</text><text x='415' y='215' text-anchor='middle' font-size='10' fill='currentColor'>2º Sem /09</text><rect x='465' y='49' width='30' height='151' fill='#c8f7c5'/><text x='480' y='44' text-anchor='middle' font-size='9' fill='currentColor'>84.761</text><rect x='495' y='60' width='30' height='140' fill='#007a7a'/><text x='510' y='55' text-anchor='middle' font-size='9' fill='currentColor' paint-order='stroke' stroke='var(--bg)' stroke-width='3'>78.536</text><text x='495' y='215' text-anchor='middle' font-size='10' fill='currentColor'>Ano 2010</text><rect x='545' y='131' width='30' height='69' fill='#c8f7c5'/><text x='560' y='126' text-anchor='middle' font-size='9' fill='currentColor'>38.926</text><rect x='575' y='138' width='30' height='62' fill='#007a7a'/><text x='590' y='133' text-anchor='middle' font-size='9' fill='currentColor' paint-order='stroke' stroke='var(--bg)' stroke-width='2.5'>34.944</text><text x='575' y='215' text-anchor='middle' font-size='10' fill='currentColor'>1º Sem /11</text><rect x='280' y='230' width='10' height='10' fill='#c8f7c5'/><text x='295' y='239' font-size='10' fill='currentColor'>Meta</text><rect x='330' y='230' width='10' height='10' fill='#007a7a'/><text x='345' y='239' font-size='10' fill='currentColor'>Real</text></svg></div>",
          "resposta": "Embora tenham sido alcançadas as metas em todos os períodos analisados, os números absolutos permanecem elevados."
        },
        {
          id: "LISTA-Q04",
          numero: 4,
          origem: "Lista P1",
          dificuldade: "Fácil",
          relevancia: "Média",
          enunciado: "Encontre os problemas do gráfico abaixo e descreva o que poderiam acarretar.<br><br><div style='text-align:center; overflow-x:auto;'><svg viewBox='0 0 520 250' style='width:100%; max-width:520px; height:auto; background:var(--bg); border:1px solid var(--border); font-family:sans-serif; margin:10px 0;'><text x='260' y='20' text-anchor='middle' font-size='14' font-weight='bold' fill='currentColor'>Homicídio Doloso</text><line x1='50' y1='40' x2='50' y2='200' stroke='currentColor' stroke-width='1'/><line x1='50' y1='200' x2='490' y2='200' stroke='currentColor' stroke-width='1'/><text x='45' y='44' text-anchor='end' font-size='10' fill='currentColor'>700</text><text x='45' y='67' text-anchor='end' font-size='10' fill='currentColor'>600</text><text x='45' y='90' text-anchor='end' font-size='10' fill='currentColor'>500</text><text x='45' y='113' text-anchor='end' font-size='10' fill='currentColor'>400</text><text x='45' y='136' text-anchor='end' font-size='10' fill='currentColor'>300</text><text x='45' y='159' text-anchor='end' font-size='10' fill='currentColor'>200</text><text x='45' y='182' text-anchor='end' font-size='10' fill='currentColor'>100</text><text x='45' y='204' text-anchor='end' font-size='10' fill='currentColor'>0</text><line x1='50' y1='183' x2='490' y2='183' stroke='#ccc' stroke-width='0.5'/><line x1='50' y1='160' x2='490' y2='160' stroke='#ccc' stroke-width='0.5'/><line x1='50' y1='137' x2='490' y2='137' stroke='#ccc' stroke-width='0.5'/><line x1='50' y1='114' x2='490' y2='114' stroke='#ccc' stroke-width='0.5'/><line x1='50' y1='91' x2='490' y2='91' stroke='#ccc' stroke-width='0.5'/><line x1='50' y1='68' x2='490' y2='68' stroke='#ccc' stroke-width='0.5'/><line x1='50' y1='45' x2='490' y2='45' stroke='#ccc' stroke-width='0.5'/><text x='70' y='215' text-anchor='middle' font-size='10' fill='currentColor'>Jan</text><text x='105' y='215' text-anchor='middle' font-size='10' fill='currentColor'>Fev</text><text x='140' y='215' text-anchor='middle' font-size='10' fill='currentColor'>Mar</text><text x='175' y='215' text-anchor='middle' font-size='10' fill='currentColor'>Abr</text><text x='210' y='215' text-anchor='middle' font-size='10' fill='currentColor'>Mai</text><text x='245' y='215' text-anchor='middle' font-size='10' fill='currentColor'>Jun</text><text x='280' y='215' text-anchor='middle' font-size='10' fill='currentColor'>Jul</text><text x='315' y='215' text-anchor='middle' font-size='10' fill='currentColor'>Ago</text><text x='350' y='215' text-anchor='middle' font-size='10' fill='currentColor'>Set</text><text x='385' y='215' text-anchor='middle' font-size='10' fill='currentColor'>Out</text><text x='420' y='215' text-anchor='middle' font-size='10' fill='currentColor'>Nov</text><text x='455' y='215' text-anchor='middle' font-size='10' fill='currentColor'>Dez</text><polyline points='70,79 105,78 140,71 175,81 210,86 245,105 280,115 315,106 350,106 385,108 420,105 455,95' fill='none' stroke='red' stroke-width='1.5'/><rect x='68' y='77' width='4' height='4' fill='red'/> <text x='70' y='73' text-anchor='middle' font-size='9' fill='currentColor'>551</text><rect x='103' y='76' width='4' height='4' fill='red'/> <text x='105' y='72' text-anchor='middle' font-size='9' fill='currentColor'>556</text><rect x='138' y='69' width='4' height='4' fill='red'/> <text x='140' y='65' text-anchor='middle' font-size='9' fill='currentColor'>588</text><rect x='173' y='79' width='4' height='4' fill='red'/> <text x='175' y='75' text-anchor='middle' font-size='9' fill='currentColor'>542</text><rect x='208' y='84' width='4' height='4' fill='red'/> <text x='210' y='80' text-anchor='middle' font-size='9' fill='currentColor'>522</text><rect x='243' y='103' width='4' height='4' fill='red'/> <text x='245' y='99' text-anchor='middle' font-size='9' fill='currentColor'>439</text><rect x='278' y='113' width='4' height='4' fill='red'/><rect x='313' y='104' width='4' height='4' fill='red'/> <text x='315' y='100' text-anchor='middle' font-size='9' fill='currentColor'>432</text><rect x='348' y='104' width='4' height='4' fill='red'/> <text x='350' y='100' text-anchor='middle' font-size='9' fill='currentColor'>433</text><rect x='383' y='106' width='4' height='4' fill='red'/> <rect x='418' y='103' width='4' height='4' fill='red'/> <text x='420' y='99' text-anchor='middle' font-size='9' fill='currentColor'>438</text><rect x='453' y='93' width='4' height='4' fill='red'/> <text x='455' y='89' text-anchor='middle' font-size='9' fill='currentColor'>476</text><polyline points='70,82 105,91 140,86 175,96 210,111 245,113 280,110 315,104 350,105 385,76 420,86 455,88' fill='none' stroke='navy' stroke-width='1.5' stroke-dasharray='3,3'/><circle cx='70' cy='82' r='2' fill='navy'/><circle cx='105' cy='91' r='2' fill='navy'/><circle cx='140' cy='86' r='2' fill='navy'/><circle cx='175' cy='96' r='2' fill='navy'/><circle cx='210' cy='111' r='2' fill='navy'/><circle cx='245' cy='113' r='2' fill='navy'/><circle cx='280' cy='110' r='2' fill='navy'/> <text x='280' y='104' text-anchor='middle' font-size='9' fill='currentColor'>397</text><circle cx='315' cy='104' r='2' fill='navy'/><circle cx='350' cy='105' r='2' fill='navy'/><circle cx='385' cy='76' r='2' fill='navy'/> <text x='385' y='90' text-anchor='middle' font-size='9' fill='currentColor'>420</text><circle cx='420' cy='86' r='2' fill='navy'/><circle cx='455' cy='88' r='2' fill='navy'/></svg></div>",
          "resposta": "Título inadequado, não há legenda discriminando as linhas, a fonte não é citada e os valores da linha pontilhada não estão completamente visíveis. Resulta em interpretação equivocada."
        }
      ]
    },
    {
      materia: "Análise Exploratória",
      subtopico: "Cálculo e Interpretação de Taxas",
      secId: "analise_exploratoria",
      exercicios: [
        {
          id: "LISTA-Q03",
          numero: 3,
          origem: "Lista P1",
          dificuldade: "Fácil",
          relevancia: "Alta",
          enunciado: "Calcule as taxas para as regiões abaixo e interprete a tabela de uma forma geral.<br><br><table style='width:100%; border-collapse:collapse; background-color:var(--bg); text-align:center;'><tr style='background-color:rgba(128,128,128,0.1);'><th style='border:1px solid var(--border); padding:8px;'>Região</th><th style='border:1px solid var(--border); padding:8px;'>Homicídio</th><th style='border:1px solid var(--border); padding:8px;'>População</th><th style='border:1px solid var(--border); padding:8px;'>Taxa (por 100k)</th></tr><tr><td style='border:1px solid var(--border); padding:8px;'>A</td><td style='border:1px solid var(--border); padding:8px;'>3.089</td><td style='border:1px solid var(--border); padding:8px;'>6.521.253</td><td style='border:1px solid var(--border); padding:8px;'></td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>B</td><td style='border:1px solid var(--border); padding:8px;'>1.472</td><td style='border:1px solid var(--border); padding:8px;'>2.156.904</td><td style='border:1px solid var(--border); padding:8px;'></td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>C</td><td style='border:1px solid var(--border); padding:8px;'>369</td><td style='border:1px solid var(--border); padding:8px;'>235.604</td><td style='border:1px solid var(--border); padding:8px;'></td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>D</td><td style='border:1px solid var(--border); padding:8px;'>2.561</td><td style='border:1px solid var(--border); padding:8px;'>4.562.358</td><td style='border:1px solid var(--border); padding:8px;'></td></tr></table>",
          resposta: "Taxas: A: 47,4 | B: 68,2 | C: 156,6 | D: 56,1. <strong>Interpretação:</strong> A região C tem menor número absoluto, mas a maior taxa proporcional (mais violenta). A região A tem o maior absoluto, mas a menor taxa."
        }
      ]
    },
    {
      materia: "Análise Exploratória",
      subtopico: "Medidas a partir de Gráficos",
      secId: "analise_exploratoria",
      exercicios: [
        {
          id: "LISTA-Q10",
          numero: 10,
          origem: "Lista P1",
          dificuldade: "Difícil",
          relevancia: "Muito Alta",
          enunciado: "O faturamento bruto das 30 filiais de uma empresa gerou o histograma abaixo. Sabendo que as frequências correspondem às filiais e as classes ao faturamento, calcule o faturamento médio, mediano e a moda bruta.<br><br><div style='text-align:center; overflow-x:auto;'><svg viewBox='0 0 520 250' style='width:100%; max-width:520px; height:auto; background:var(--bg); border:1px solid var(--border); font-family:sans-serif; margin:10px 0;'><text x='15' y='20' font-size='12' fill='currentColor'>Frequências</text><line x1='50' y1='30' x2='50' y2='200' stroke='currentColor' stroke-width='1'/><line x1='50' y1='200' x2='490' y2='200' stroke='currentColor' stroke-width='1'/><text x='45' y='35' text-anchor='end' font-size='12' fill='currentColor'>10</text><text x='45' y='68' text-anchor='end' font-size='12' fill='currentColor'>8</text><text x='45' y='101' text-anchor='end' font-size='12' fill='currentColor'>6</text><text x='45' y='134' text-anchor='end' font-size='12' fill='currentColor'>4</text><text x='45' y='167' text-anchor='end' font-size='12' fill='currentColor'>2</text><text x='45' y='200' text-anchor='end' font-size='12' fill='currentColor'>0</text><rect x='51' y='150' width='70' height='50' fill='#9b8bf4' stroke='#000' stroke-width='1'/><rect x='121' y='84' width='70' height='116' fill='#a03c62' stroke='#000' stroke-width='1'/><rect x='191' y='84' width='70' height='116' fill='#fff9b0' stroke='#000' stroke-width='1'/><rect x='261' y='84' width='70' height='116' fill='#b5f0f8' stroke='#000' stroke-width='1'/><rect x='331' y='134' width='70' height='66' fill='#68186f' stroke='#000' stroke-width='1'/><rect x='401' y='167' width='70' height='33' fill='#fc8a8b' stroke='#000' stroke-width='1'/><text x='86' y='220' text-anchor='middle' font-size='12' fill='currentColor'>2 |- 5</text><text x='156' y='220' text-anchor='middle' font-size='12' fill='currentColor'>5 |- 8</text><text x='226' y='220' text-anchor='middle' font-size='12' fill='currentColor'>8 |- 11</text><text x='296' y='220' text-anchor='middle' font-size='12' fill='currentColor'>11 |- 14</text><text x='366' y='220' text-anchor='middle' font-size='12' fill='currentColor'>14 |- 17</text><text x='436' y='220' text-anchor='middle' font-size='12' fill='currentColor'>17 |- 20</text><text x='470' y='240' text-anchor='middle' font-size='12' fill='currentColor'>Classes</text></svg></div>",
          resposta: "Frequências lidas no gráfico: 3, 7, 7, 7, 4, 2.<br><strong>Média:</strong> \\( \\bar{x} = 10,3 \\)<br><strong>Mediana:</strong> Posição \\( 30/2 = 15 \\). Atinge na classe 8|-11. Calculando pela interpolação: $$ Md = 10,14 $$<strong>Moda Bruta:</strong> (Multimodal). Classes 5|-8, 8|-11 e 11|-14 empatam com frequência máxima (7). Modas (pontos médios): \\( 6,5 \\); \\( 9,5 \\); e \\( 12,5 \\)."
        },
        {
          id: "LISTA-Q13",
          numero: 13,
          origem: "Lista P1",
          dificuldade: "Médio",
          relevancia: "Alta",
          enunciado: "Considere o gráfico de barras abaixo que apresenta a distribuição das estaturas (em centímetros) dos alunos em uma escola no ano letivo de 2015. Calcule os valores das medidas média, mediana, primeiro quartil, terceiro quartil, primeiro decil e oitavo decil referentes as estaturas dos alunos.<br><br><div style='text-align:center; overflow-x:auto;'><svg viewBox='0 0 520 250' style='width:100%; max-width:520px; height:auto; background:var(--bg); border:1px solid var(--border); font-family:sans-serif; margin:10px 0;'><text x='20' y='140' font-size='12' fill='currentColor' transform='rotate(-90 20,140)'>Frequência</text><line x1='50' y1='20' x2='50' y2='200' stroke='currentColor' stroke-width='1'/><line x1='50' y1='200' x2='490' y2='200' stroke='currentColor' stroke-width='1'/><rect x='70' y='140' width='40' height='60' fill='#7f7f7f'/><text x='90' y='130' text-anchor='middle' font-size='12' fill='currentColor'>4</text><text x='90' y='220' text-anchor='middle' font-size='12' fill='currentColor'>154</text><rect x='140' y='65' width='40' height='135' fill='#7f7f7f'/><text x='160' y='55' text-anchor='middle' font-size='12' fill='currentColor'>9</text><text x='160' y='220' text-anchor='middle' font-size='12' fill='currentColor'>158</text><rect x='210' y='35' width='40' height='165' fill='#7f7f7f'/><text x='230' y='25' text-anchor='middle' font-size='12' fill='currentColor'>11</text><text x='230' y='220' text-anchor='middle' font-size='12' fill='currentColor'>162</text><rect x='280' y='80' width='40' height='120' fill='#7f7f7f'/><text x='300' y='70' text-anchor='middle' font-size='12' fill='currentColor'>8</text><text x='300' y='220' text-anchor='middle' font-size='12' fill='currentColor'>166</text><rect x='350' y='125' width='40' height='75' fill='#7f7f7f'/><text x='370' y='115' text-anchor='middle' font-size='12' fill='currentColor'>5</text><text x='370' y='220' text-anchor='middle' font-size='12' fill='currentColor'>170</text><rect x='420' y='155' width='40' height='45' fill='#7f7f7f'/><text x='440' y='145' text-anchor='middle' font-size='12' fill='currentColor'>3</text><text x='440' y='220' text-anchor='middle' font-size='12' fill='currentColor'>174</text><text x='270' y='245' text-anchor='middle' font-size='12' fill='currentColor'>Estaturas (cm)</text></svg></div>",
          resposta: "<strong>Média:</strong> \\( \\bar{x} = 163 \\)<br><strong>Mediana:</strong> \\( Md = 162 \\)<br><strong>Quartis:</strong> \\( Q_1 = 158 \\), \\( Q_3 = 166 \\)<br><strong>Decis:</strong> \\( D_1 = 156 \\), \\( D_8 = 168 \\)"
        }
      ]
    },
    {
      materia: "Boxplots",
      subtopico: "Comportamento, Dispersão e Outliers",
      secId: "boxplot_secao",
      exercicios: [
        {
          id: "LISTA-Q14",
          numero: 14,
          origem: "Lista P1",
          dificuldade: "Médio",
          relevancia: "Baixa",
          enunciado: "Os desenhos esquemáticos a seguir mostram as distribuições das notas de três classes A, B e C. Analise-os e descreva o comportamento dessas três distribuições em relação à dispersão e assimetria.<br><br><div style='text-align:center; overflow-x:auto;'><svg viewBox='0 0 520 220' style='width:100%; max-width:520px; height:auto; background:var(--bg); border:1px solid var(--border); font-family:sans-serif; margin:10px 0;'><text x='20' y='35' font-size='14' fill='currentColor' font-weight='bold'>A</text><line x1='170' y1='30' x2='342' y2='30' stroke='currentColor' stroke-width='2'/><line x1='170' y1='25' x2='170' y2='35' stroke='currentColor' stroke-width='2'/><line x1='398' y1='30' x2='450' y2='30' stroke='currentColor' stroke-width='2'/><line x1='450' y1='25' x2='450' y2='35' stroke='currentColor' stroke-width='2'/><rect x='342' y='15' width='56' height='30' fill='none' stroke='currentColor' stroke-width='2'/><line x1='362' y1='15' x2='362' y2='45' stroke='currentColor' stroke-width='2'/><text x='20' y='85' font-size='14' fill='currentColor' font-weight='bold'>B *</text><line x1='90' y1='80' x2='158' y2='80' stroke='currentColor' stroke-width='2'/><line x1='90' y1='75' x2='90' y2='85' stroke='currentColor' stroke-width='2'/><line x1='286' y1='80' x2='434' y2='80' stroke='currentColor' stroke-width='2'/><line x1='434' y1='75' x2='434' y2='85' stroke='currentColor' stroke-width='2'/><rect x='158' y='65' width='128' height='30' fill='none' stroke='currentColor' stroke-width='2'/><line x1='214' y1='65' x2='214' y2='95' stroke='currentColor' stroke-width='2'/><text x='20' y='135' font-size='14' fill='currentColor' font-weight='bold'>C</text><line x1='98' y1='130' x2='154' y2='130' stroke='currentColor' stroke-width='2'/><line x1='98' y1='125' x2='98' y2='135' stroke='currentColor' stroke-width='2'/><line x1='230' y1='130' x2='282' y2='130' stroke='currentColor' stroke-width='2'/><line x1='282' y1='125' x2='282' y2='135' stroke='currentColor' stroke-width='2'/><rect x='154' y='115' width='76' height='30' fill='none' stroke='currentColor' stroke-width='2'/><line x1='190' y1='115' x2='190' y2='145' stroke='currentColor' stroke-width='2'/><line x1='50' y1='180' x2='450' y2='180' stroke='currentColor' stroke-width='1'/><text x='50' y='195' text-anchor='middle' font-size='10' fill='currentColor'>0</text><text x='90' y='195' text-anchor='middle' font-size='10' fill='currentColor'>1</text><text x='130' y='195' text-anchor='middle' font-size='10' fill='currentColor'>2</text><text x='170' y='195' text-anchor='middle' font-size='10' fill='currentColor'>3</text><text x='210' y='195' text-anchor='middle' font-size='10' fill='currentColor'>4</text><text x='250' y='195' text-anchor='middle' font-size='10' fill='currentColor'>5</text><text x='290' y='195' text-anchor='middle' font-size='10' fill='currentColor'>6</text><text x='330' y='195' text-anchor='middle' font-size='10' fill='currentColor'>7</text><text x='370' y='195' text-anchor='middle' font-size='10' fill='currentColor'>8</text><text x='410' y='195' text-anchor='middle' font-size='10' fill='currentColor'>9</text><text x='450' y='195' text-anchor='middle' font-size='10' fill='currentColor'>10</text></svg></div>",
          "resposta": "<strong>Classe A:</strong> Maior mediana (~7,8). Assimétrica à esquerda. Rendimento alto.<br><strong>Classe B:</strong> Mediana média-baixa (~4,1). Maior dispersão (IQR e amplitude). Assimétrica à direita. Possui outlier (*).<br><strong>Classe C:</strong> Menor mediana (~3,5). Mais simétrica e compacta. Rendimento baixo e uniforme."
        },
        {
          "id": "LISTA-Q15",
          "numero": 15,
          "origem": "Lista P1",
          "dificuldade": "Difícil",
          "relevancia": "Baixa",
          "enunciado": "Duas turmas (A e B) realizaram uma prova (0 a 100).<br><strong>Turma A:</strong> 45, 48, 52, 55, 58, 60, 62, 65, 68, 70, 72, 75, 78, 80, 82, 85, 88, 90, 92, 95.<br><strong>Turma B:</strong> 30, 40, 55, 60, 62, 65, 68, 70, 71, 72, 73, 74, 75, 76, 78, 80, 82, 90, 95, 100.<br><br>a) Determine os 5 números-resumo de cada turma e o AIQ.<br>b) Verifique se existem valores atípicos (outliers) utilizando a regra do AIQ.",
          "resposta": "<strong>Turma A:</strong> Min=45; Q1=59; Med=71; Q3=83,5; Max=95. \\( AIQ = 24,5 \\). Limites: [22,25 ; 120,25]. Não há outliers.<br><strong>Turma B:</strong> Min=30; Q1=63,5; Med=72,5; Q3=79; Max=100. \\( AIQ = 15,5 \\). Limites: [40,25 ; 102,25]. Outliers: 30 e 40."
        }
      ]
    }
  ]
};
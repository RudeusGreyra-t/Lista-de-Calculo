window.COURSES_DATA = window.COURSES_DATA || {};

window.COURSES_DATA["estatistica"] = {
  "name": "AED - Estatística",
  "sections": [
    {
      "id": "medidas_posicao",
      "title": "Medidas de Tendência Central e Dispersão"
    },
    {
      "id": "analise_grafica",
      "title": "Análise de Gráficos e Taxas"
    },
    {
      "id": "boxplot",
      "title": "Análise de Boxplots"
    }
  ],
  "topics": [
    {
      "materia": "Estatística Descritiva",
      "subtopico": "Conceitos Teóricos e Exemplos Introdutórios",
      "secId": "medidas_posicao",
      "exercicios": [
        {
          "id": "PDF-001",
          "origem": "PDF",
          "dificuldade": "Fácil",
          "relevancia": "Média",
          "enunciado": "Do conjunto de valores dados abaixo de uma população de seis elementos, calcule a média. $$ X = \\{3, 5, 8, 4, 8, 6\\} $$",
          "resposta": "$$ \\mu_{(X)} = \\frac{\\sum_{i=1}^6 X_i}{6} = \\frac{3 + 5 + 8 + 4 + 8 + 6}{6} = \\frac{34}{6} \\approx 5,67 $$"
        },
        {
          "id": "PDF-002",
          "origem": "PDF",
          "dificuldade": "Fácil",
          "relevancia": "Alta",
          "enunciado": "Um candidato obteve, nas diversas provas de um concurso, as seguintes notas com seus respectivos pesos descritos abaixo. Calcule a média das notas.<br><br><table style='width:100%; border-collapse:collapse; background-color:var(--bg); text-align:center;'><tr style='background-color:rgba(128,128,128,0.1);'><th style='border:1px solid var(--border); padding:8px;'>Matéria</th><th style='border:1px solid var(--border); padding:8px;'>Nota</th><th style='border:1px solid var(--border); padding:8px;'>Peso</th></tr><tr><td style='border:1px solid var(--border); padding:8px;'>Português</td><td style='border:1px solid var(--border); padding:8px;'>66</td><td style='border:1px solid var(--border); padding:8px;'>3</td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>Contabilidade</td><td style='border:1px solid var(--border); padding:8px;'>63</td><td style='border:1px solid var(--border); padding:8px;'>3</td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>Estatística</td><td style='border:1px solid var(--border); padding:8px;'>74</td><td style='border:1px solid var(--border); padding:8px;'>2</td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>Direito</td><td style='border:1px solid var(--border); padding:8px;'>79</td><td style='border:1px solid var(--border); padding:8px;'>2</td></tr></table>",
          "resposta": "$$ \\bar{X} = \\frac{(66 \\times 3) + (63 \\times 3) + (74 \\times 2) + (79 \\times 2)}{3+3+2+2} = \\frac{693}{10} = 69,3 $$"
        },
        {
          "id": "PDF-003",
          "origem": "PDF",
          "dificuldade": "Médio",
          "relevancia": "Alta",
          "enunciado": "Do conjunto de valores observados abaixo, calcule a mediana e moda.<br>a) $$ X = \\{3, 5, 8, 4, 8, 6\\} $$<br>b) $$ Y = \\{3, 6, 8, 8, 6, 6, 10, 20, 12\\} $$",
          "resposta": "<strong>Letra a:</strong> Rol: 3, 4, 5, 6, 8, 8. $$ n = 6 $$ (par).<br>$$ Md = \\frac{5+6}{2} = 5,5 $$<br>$$ Mo = 8 $$<br><br><strong>Letra b:</strong> Rol: 3, 6, 6, 6, 8, 8, 10, 12, 20. $$ n = 9 $$ (ímpar).<br>$$ Md = 8 $$<br>$$ Mo = 6 $$"
        },
        {
          "id": "PDF-004",
          "origem": "PDF",
          "dificuldade": "Fácil",
          "relevancia": "Muito Alta",
          "enunciado": "Do conjunto de valores observados abaixo por um médico em relação às idades de seus pacientes, calcule a média e a mediana e indique qual a vantagem de utilizar a mediana. $$ X = \\{3, 4, 5, 8, 100\\} $$",
          "resposta": "$$ \\bar{X} = \\frac{3+4+5+8+100}{5} = 24 $$<br>$$ Md(X) = 5 $$<br>A mediana não é influenciada por valores extremos. O valor 100 puxa a média, logo a mediana expressa melhor o conjunto."
        },
        {
          "id": "PDF-005",
          "origem": "PDF",
          "dificuldade": "Fácil",
          "relevancia": "Média",
          "enunciado": "Exercício Relâmpago: Sabendo-se que o nível de colesterol (mg/100 ml) de um conjunto de sete pacientes clínicos foi de 10, 14, 13, 15, 16, 18 e 12, qual o colesterol médio desses pacientes?",
          "resposta": "$$ \\bar{X} = \\frac{10+14+13+15+16+18+12}{7} = \\frac{98}{7} = 14 \\text{ mg/100 ml} $$"
        },
        {
          "id": "PDF-006",
          "origem": "PDF",
          "dificuldade": "Fácil",
          "relevancia": "Alta",
          "enunciado": "Exercício Relâmpago: Sabendo-se que o nível de colesterol (mg/100 ml) de um conjunto de oito pacientes clínicos foi de 10, 10, 13, 15, 16, 16, 12 e 18, qual a mediana e a moda do colesterol desses pacientes?",
          "resposta": "Rol: $$ X = \\{10, 10, 12, 13, 15, 16, 16, 18\\} $$ $$\\Rightarrow n=8$$ (par).<br>$$ Md(X) = \\frac{13+15}{2} = 14 $$<br>$$ Mo(X) = 10 \\text{ e } 16 $$ (Distribuição Bimodal)."
        }
      ]
    },
    {
      "materia": "Estatística Descritiva",
      "subtopico": "Dados Agrupados (Exercícios Práticos)",
      "secId": "medidas_posicao",
      "exercicios": [
        {
          "id": "AULA-001",
          "origem": "dado em aula",
          "dificuldade": "Médio",
          "relevancia": "Muito Alta",
          "enunciado": "A partir da tabela de frequências de dados agrupados em classes abaixo, calcule a Média, a Mediana e a Moda Bruta.<br><br><table style='width:100%; border-collapse:collapse; background-color:var(--bg); text-align:center;'><tr style='background-color:rgba(128,128,128,0.1);'><th style='border:1px solid var(--border); padding:8px;'>Classes</th><th style='border:1px solid var(--border); padding:8px;'>Freq. (\\( f_i \\))</th></tr><tr><td style='border:1px solid var(--border); padding:8px;'>0 |- 10</td><td style='border:1px solid var(--border); padding:8px;'>5</td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>10 |- 20</td><td style='border:1px solid var(--border); padding:8px;'>15</td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>20 |- 30</td><td style='border:1px solid var(--border); padding:8px;'>25</td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>30 |- 40</td><td style='border:1px solid var(--border); padding:8px;'>12</td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>40 |- 50</td><td style='border:1px solid var(--border); padding:8px;'>6</td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>50 |- 60</td><td style='border:1px solid var(--border); padding:8px;'>5</td></tr></table>",
          "resposta": "<strong>Média:</strong> $$ \\bar{x} = \\frac{\\sum f_i \\cdot x_i}{\\sum f_i} = \\frac{1440}{50} = 28,8 $$<br><strong>Mediana:</strong> Posição $$ n/2 = 25 $$. Frequências acumuladas: 5, 20, 45... A classe mediana é 20 |- 30. $$ \\frac{Md - 20}{30 - 20} = \\frac{25 - 20}{45 - 20} \\Rightarrow Md = 22 $$<br><strong>Moda Bruta:</strong> Ponto médio da classe de maior frequência (20 |- 30). $$ Mo = \\frac{20 + 30}{2} = 25 $$"
        },
        {
          "id": "AULA-002",
          "origem": "dado em aula",
          "dificuldade": "Médio",
          "relevancia": "Muito Alta",
          "enunciado": "Uma fábrica registrou o salário mensal (em R$) de 80 funcionários, organizado na tabela abaixo. Determine a média, a mediana e a moda bruta dos salários.<br><br><table style='width:100%; border-collapse:collapse; background-color:var(--bg); text-align:center;'><tr style='background-color:rgba(128,128,128,0.1);'><th style='border:1px solid var(--border); padding:8px;'>Salário (R$)</th><th style='border:1px solid var(--border); padding:8px;'>Freq. (\\( f_i \\))</th></tr><tr><td style='border:1px solid var(--border); padding:8px;'>1000 |- 1500</td><td style='border:1px solid var(--border); padding:8px;'>8</td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>1500 |- 2000</td><td style='border:1px solid var(--border); padding:8px;'>18</td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>2000 |- 2500</td><td style='border:1px solid var(--border); padding:8px;'>24</td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>2500 |- 3000</td><td style='border:1px solid var(--border); padding:8px;'>16</td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>3000 |- 3500</td><td style='border:1px solid var(--border); padding:8px;'>10</td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>3500 |- 4000</td><td style='border:1px solid var(--border); padding:8px;'>4</td></tr></table>",
          "resposta": "<strong>Média:</strong> Somatório de $$ x_i \\cdot f_i = 187000 $$. $$ \\bar{x} = \\frac{187000}{80} = 2337,50 $$<br><strong>Mediana:</strong> Posição $$ 80/2 = 40 $$. Freq. acumuladas: 8, 26, 50. Classe mediana = 2000 |- 2500. Aplicando a interpolação: $$ \\frac{Md - 2000}{2500 - 2000} = \\frac{40 - 26}{50 - 26} \\Rightarrow Md \\approx 2291,67 $$<br><strong>Moda Bruta:</strong> A classe modal é 2000 |- 2500. $$ Mo = \\frac{2000+2500}{2} = 2250,00 $$"
        }
      ]
    },
    {
      "materia": "Estatística Descritiva",
      "subtopico": "Lista de Exercícios",
      "secId": "medidas_posicao",
      "exercicios": [
        {
          "id": "LISTA-Q05",
          "origem": "lista P1",
          "dificuldade": "Fácil",
          "relevancia": "Média",
          "enunciado": "Seja a distribuição de frequências abaixo, resultado da observação de pesos em kg de um grupo de 50 pessoas adultas. Calcule a média do grupo.<br><br><table style='width:100%; border-collapse:collapse; background-color:var(--bg); text-align:center;'><tr style='background-color:rgba(128,128,128,0.1);'><th style='border:1px solid var(--border); padding:8px;'>Pesos (Kg)</th><th style='border:1px solid var(--border); padding:8px;'>\\( f_i \\)</th></tr><tr><td style='border:1px solid var(--border); padding:8px;'>46 |- 56</td><td style='border:1px solid var(--border); padding:8px;'>4</td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>56 |- 66</td><td style='border:1px solid var(--border); padding:8px;'>10</td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>66 |- 76</td><td style='border:1px solid var(--border); padding:8px;'>16</td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>76 |- 86</td><td style='border:1px solid var(--border); padding:8px;'>12</td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>86 |- 96</td><td style='border:1px solid var(--border); padding:8px;'>8</td></tr></table>",
          "resposta": "Pontos Médios (\\( x_i \\)): 51, 61, 71, 81, 91.<br> $$ \\bar{x} = \\frac{(51\\cdot 4) + (61\\cdot 10) + (71\\cdot 16) + (81\\cdot 12) + (91\\cdot 8)}{50} = \\frac{3650}{50} = 73 $$"
        },
        {
          "id": "LISTA-Q06",
          "origem": "lista P1",
          "dificuldade": "Médio",
          "relevancia": "Alta",
          "enunciado": "Cinco pessoas usaram dois instrumentos para indicar o nível de dor 12 horas após uma operação. A seguir estão os escores de dor de cada pessoa, em cada instrumento:<br><br><table style='width:100%; border-collapse:collapse; background-color:var(--bg); text-align:center;'><tr style='background-color:rgba(128,128,128,0.1);'><th style='border:1px solid var(--border); padding:8px;'>Pessoa</th><th style='border:1px solid var(--border); padding:8px;'>A</th><th style='border:1px solid var(--border); padding:8px;'>B</th><th style='border:1px solid var(--border); padding:8px;'>C</th><th style='border:1px solid var(--border); padding:8px;'>D</th><th style='border:1px solid var(--border); padding:8px;'>E</th></tr><tr><td style='border:1px solid var(--border); padding:8px;'>Dor (Inst. 1)</td><td style='border:1px solid var(--border); padding:8px;'>8</td><td style='border:1px solid var(--border); padding:8px;'>6</td><td style='border:1px solid var(--border); padding:8px;'>4</td><td style='border:1px solid var(--border); padding:8px;'>3</td><td style='border:1px solid var(--border); padding:8px;'>4</td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>Dor (Inst. 2)</td><td style='border:1px solid var(--border); padding:8px;'>9</td><td style='border:1px solid var(--border); padding:8px;'>7</td><td style='border:1px solid var(--border); padding:8px;'>4</td><td style='border:1px solid var(--border); padding:8px;'>4</td><td style='border:1px solid var(--border); padding:8px;'>6</td></tr></table><br>a) Qual instrumento teve um escore, em média, de mais dor?<br>b) Qual a mediana dos escores dos dois instrumentos?<br>c) Qual a moda dos escores dos dois instrumentos?",
          "resposta": "a) Inst 1: $$ \\bar{x}_1 = \\frac{25}{5} = 5 $$. Inst 2: $$ \\bar{x}_2 = \\frac{30}{5} = 6 $$ (Inst 2 teve média maior).<br>b) Inst 1 rol: 3, 4, 4, 6, 8 $$\\Rightarrow Md_1 = 4$$. Inst 2 rol: 4, 4, 6, 7, 9 $$\\Rightarrow Md_2 = 6$$.<br>c) $$ Mo_1 = 4 $$, $$ Mo_2 = 4 $$."
        },
        {
          "id": "LISTA-Q07",
          "origem": "lista P1",
          "dificuldade": "Médio",
          "relevancia": "Média",
          "enunciado": "Um candidato obteve, nas diversas provas de um concurso, as seguintes notas com seus respectivos pesos: Português: 66 (peso 3), Contabilidade: 63 (peso 3), Estatística: X (peso 2) e Direito: 79 (peso 2). A média aritmética ponderada, obtida pelo candidato foi de 69,3. Calcule a nota do candidato em Estatística.",
          "resposta": "$$ \\frac{(66 \\cdot 3) + (63 \\cdot 3) + (X \\cdot 2) + (79 \\cdot 2)}{3 + 3 + 2 + 2} = 69,3 \\Rightarrow \\frac{198 + 189 + 2X + 158}{10} = 69,3 \\Rightarrow 545 + 2X = 693 \\Rightarrow 2X = 148 \\Rightarrow X = 74 $$"
        },
        {
          "id": "LISTA-Q08",
          "origem": "lista P1",
          "dificuldade": "Fácil",
          "relevancia": "Média",
          "enunciado": "Uma empresa possui dois técnicos em informática recebendo salários de R$ 3.400,00 cada, quatro economistas recebendo R$ 4.500,00 cada, um diretor com salário de R$ 7.000,00 e três outros profissionais recebendo R$ 5.500,00 cada. Calcule a média mensal de salários.",
          "resposta": "$$ \\bar{X} = \\frac{(3.400 \\times 2) + (4.500 \\times 4) + (7.000 \\times 1) + (5.500 \\times 3)}{2 + 4 + 1 + 3} = \\frac{48.300}{10} = R\\$ 4.830,00 $$"
        },
        {
          "id": "LISTA-Q09",
          "origem": "lista P1",
          "dificuldade": "Difícil",
          "relevancia": "Baixa",
          "enunciado": "Suzana e Sandra jogam uma moeda cada uma. Se do lançamento resultar duas caras, Suzana paga a Sandra R$6,00. Dando qualquer outro resultado, Sandra paga a Suzana R$4,00. Qual o valor médio, em reais, dos ganhos de Sandra?",
          "resposta": "$$ \\bar{x} = \\frac{6 - 4 - 4 - 4}{4} = \\frac{-6}{4} = -1,50 $$"
        },
        {
          "id": "LISTA-Q11",
          "origem": "lista P1",
          "dificuldade": "Fácil",
          "relevancia": "Muito Alta",
          "enunciado": "Para os escores 205, 6, 5, 5, 5, 2 e 1, calcule a moda, a mediana e a média. Qual medida de tendência central não deveria ser usada para descrever esse conjunto? Por quê?",
          "resposta": "$$ Mo = 5 $$<br>$$ Md = 5 $$ (Rol: 1, 2, 5, 5, 5, 6, 205)<br>$$ \\bar{X} = \\frac{229}{7} \\approx 32,7 $$<br><strong>Justificativa:</strong> A média não é uma boa medida para este conjunto pois é influenciada pelo valor extremo (outlier) 205, que distorce a realidade dos dados. A mediana (5) é mais representativa."
        },
        {
          "id": "LISTA-Q12",
          "origem": "lista P1",
          "dificuldade": "Médio",
          "relevancia": "Alta",
          "enunciado": "Um aluno fez três provas. A primeira prova tem peso 1, a segunda peso 2 e a terceira peso 3. O aluno obteve notas 4, 7 e 6 respectivamente. Calcule a média e a mediana do aluno.",
          "resposta": "<strong>Média:</strong> $$ \\bar{x} = \\frac{(4\\times1) + (7\\times2) + (6\\times3)}{1+2+3} = \\frac{4+14+18}{6} = 6,5 $$<br><strong>Mediana:</strong> É necessário repetir as notas de acordo com seus pesos antes de ordenar. Notas: 4; 7, 7; 6, 6, 6.<br>Rol: 4, 6, 6, 6, 7, 7. ($$ n=6 $$).<br>$$ Md = \\frac{6+6}{2} = 6 $$"
        }
      ]
    },
    {
      "materia": "Estatística Descritiva",
      "subtopico": "Análise de Taxas e Qualidade de Gráficos",
      "secId": "analise_grafica",
      "exercicios": [
        {
          "id": "LISTA-Q01",
          "origem": "lista P1",
          "dificuldade": "Fácil",
          "relevancia": "Média",
          "enunciado": "Complete a tabela abaixo com os dados percentuais. Cite um tipo de gráfico adequado para visualização desta tabela.<br><br><table style='width:100%; border-collapse:collapse; background-color:var(--bg); text-align:center;'><tr style='background-color:rgba(128,128,128,0.1);'><th style='border:1px solid var(--border); padding:8px;'>Sexo</th><th style='border:1px solid var(--border); padding:8px;'>Base</th><th style='border:1px solid var(--border); padding:8px;'>%</th></tr><tr><td style='border:1px solid var(--border); padding:8px;'>Masculino</td><td style='border:1px solid var(--border); padding:8px;'>402</td><td style='border:1px solid var(--border); padding:8px;'></td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>Feminino</td><td style='border:1px solid var(--border); padding:8px;'>4.958</td><td style='border:1px solid var(--border); padding:8px;'></td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>Não Informado</td><td style='border:1px solid var(--border); padding:8px;'>434</td><td style='border:1px solid var(--border); padding:8px;'></td></tr></table>",
          "resposta": "Masculino: 6,9%; Feminino: 85,6%; Não Informado: 7,5%. O gráfico mais apropriado seria o de pizza (ou colunas/barras). O gráfico de linhas não seria adequado pois não é uma série temporal."
        },
        {
          "id": "LISTA-Q02",
          "origem": "lista P1",
          "dificuldade": "Fácil",
          "relevancia": "Baixa",
          "enunciado": "Comente os gráficos abaixo que delineiam ocorrências reais e metas de roubos no RJ.<br><br><div style='text-align:center; overflow-x:auto;'><svg viewBox='0 0 600 250' style='width:100%; max-width:600px; height:auto; background:var(--bg); border:1px solid var(--border); font-family:sans-serif; margin:10px 0;'>\n  <!-- Roubo de veiculo -->\n  <text x='10' y='20' font-size='14' font-weight='bold' fill='currentColor'>Roubo de veículo</text>\n  <line x1='30' y1='30' x2='30' y2='200' stroke='currentColor' stroke-width='1'/>\n  <line x1='30' y1='200' x2='280' y2='200' stroke='currentColor' stroke-width='1'/>\n  <text x='25' y='40' text-anchor='end' font-size='10' fill='currentColor'>30.000</text>\n  <text x='25' y='95' text-anchor='end' font-size='10' fill='currentColor'>20.000</text>\n  <text x='25' y='150' text-anchor='end' font-size='10' fill='currentColor'>10.000</text>\n  <text x='25' y='200' text-anchor='end' font-size='10' fill='currentColor'>0</text>\n  <!-- Barras Veiculo -->\n  <!-- 2 Sem 09 -->\n  <rect x='40' y='128' width='25' height='72' fill='#c8f7c5'/>\n  <text x='52' y='123' text-anchor='middle' font-size='9' fill='currentColor'>13.129</text>\n  <rect x='65' y='140' width='25' height='60' fill='#007a7a'/>\n  <text x='77' y='135' text-anchor='middle' font-size='9' fill='currentColor'>10.914</text>\n  <text x='65' y='215' text-anchor='middle' font-size='10' fill='currentColor'>2º Sem /09</text>\n  <!-- Ano 2010 -->\n  <rect x='110' y='68' width='25' height='132' fill='#c8f7c5'/>\n  <text x='122' y='63' text-anchor='middle' font-size='9' fill='currentColor'>23.942</text>\n  <rect x='135' y='90' width='25' height='110' fill='#007a7a'/>\n  <text x='147' y='85' text-anchor='middle' font-size='9' fill='currentColor'>20.052</text>\n  <text x='135' y='215' text-anchor='middle' font-size='10' fill='currentColor'>Ano 2010</text>\n  <!-- 1 Sem 11 -->\n  <rect x='180' y='143' width='25' height='57' fill='#c8f7c5'/>\n  <text x='192' y='138' text-anchor='middle' font-size='9' fill='currentColor'>10.299</text>\n  <rect x='205' y='150' width='25' height='50' fill='#007a7a'/>\n  <text x='217' y='145' text-anchor='middle' font-size='9' fill='currentColor'>8.993</text>\n  <text x='205' y='215' text-anchor='middle' font-size='10' fill='currentColor'>1º Sem /11</text>\n  \n  <!-- Roubo de rua -->\n  <text x='310' y='20' font-size='14' font-weight='bold' fill='currentColor'>Roubo de rua</text>\n  <line x1='330' y1='30' x2='330' y2='200' stroke='currentColor' stroke-width='1'/>\n  <line x1='330' y1='200' x2='580' y2='200' stroke='currentColor' stroke-width='1'/>\n  <text x='325' y='40' text-anchor='end' font-size='10' fill='currentColor'>90.000</text>\n  <text x='325' y='95' text-anchor='end' font-size='10' fill='currentColor'>60.000</text>\n  <text x='325' y='150' text-anchor='end' font-size='10' fill='currentColor'>30.000</text>\n  <text x='325' y='200' text-anchor='end' font-size='10' fill='currentColor'>0</text>\n  <!-- Barras Rua -->\n  <!-- 2 Sem 09 -->\n  <rect x='340' y='110' width='25' height='90' fill='#c8f7c5'/>\n  <text x='352' y='105' text-anchor='middle' font-size='9' fill='currentColor'>47.180</text>\n  <rect x='365' y='125' width='25' height='75' fill='#007a7a'/>\n  <text x='377' y='120' text-anchor='middle' font-size='9' fill='currentColor'>40.904</text>\n  <text x='365' y='215' text-anchor='middle' font-size='10' fill='currentColor'>2º Sem /09</text>\n  <!-- Ano 2010 -->\n  <rect x='410' y='45' width='25' height='155' fill='#c8f7c5'/>\n  <text x='422' y='40' text-anchor='middle' font-size='9' fill='currentColor'>84.761</text>\n  <rect x='435' y='55' width='25' height='145' fill='#007a7a'/>\n  <text x='447' y='50' text-anchor='middle' font-size='9' fill='currentColor'>78.536</text>\n  <text x='435' y='215' text-anchor='middle' font-size='10' fill='currentColor'>Ano 2010</text>\n  <!-- 1 Sem 11 -->\n  <rect x='480' y='130' width='25' height='70' fill='#c8f7c5'/>\n  <text x='492' y='125' text-anchor='middle' font-size='9' fill='currentColor'>38.926</text>\n  <rect x='505' y='137' width='25' height='63' fill='#007a7a'/>\n  <text x='517' y='132' text-anchor='middle' font-size='9' fill='currentColor'>34.944</text>\n  <text x='505' y='215' text-anchor='middle' font-size='10' fill='currentColor'>1º Sem /11</text>\n  \n  <!-- Legend -->\n  <rect x='250' y='230' width='10' height='10' fill='#c8f7c5'/>\n  <text x='265' y='240' font-size='10' fill='currentColor'>Meta</text>\n  <rect x='310' y='230' width='10' height='10' fill='#007a7a'/>\n  <text x='325' y='240' font-size='10' fill='currentColor'>Real</text>\n</svg></div>",
          "resposta": "Embora tenham sido alcançadas as metas em todos os períodos analisados (coluna verde clara maior que verde escura), os números absolutos permanecem elevados. As medidas tiveram impacto, mas há um longo caminho a percorrer."
        },
        {
          "id": "LISTA-Q03",
          "origem": "lista P1",
          "dificuldade": "Fácil",
          "relevancia": "Alta",
          "enunciado": "Calcule as taxas para as regiões abaixo e interprete a tabela de uma forma geral.<br><br><table style='width:100%; border-collapse:collapse; background-color:var(--bg); text-align:center;'><tr style='background-color:rgba(128,128,128,0.1);'><th style='border:1px solid var(--border); padding:8px;'>Região</th><th style='border:1px solid var(--border); padding:8px;'>Homicídio</th><th style='border:1px solid var(--border); padding:8px;'>População</th><th style='border:1px solid var(--border); padding:8px;'>Taxa (por 100k)</th></tr><tr><td style='border:1px solid var(--border); padding:8px;'>A</td><td style='border:1px solid var(--border); padding:8px;'>3.089</td><td style='border:1px solid var(--border); padding:8px;'>6.521.253</td><td style='border:1px solid var(--border); padding:8px;'></td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>B</td><td style='border:1px solid var(--border); padding:8px;'>1.472</td><td style='border:1px solid var(--border); padding:8px;'>2.156.904</td><td style='border:1px solid var(--border); padding:8px;'></td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>C</td><td style='border:1px solid var(--border); padding:8px;'>369</td><td style='border:1px solid var(--border); padding:8px;'>235.604</td><td style='border:1px solid var(--border); padding:8px;'></td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>D</td><td style='border:1px solid var(--border); padding:8px;'>2.561</td><td style='border:1px solid var(--border); padding:8px;'>4.562.358</td><td style='border:1px solid var(--border); padding:8px;'></td></tr></table>",
          "resposta": "Taxas: A: 47,4 | B: 68,2 | C: 156,6 | D: 56,1. <strong>Interpretação:</strong> Embora a região C apresente um menor número absoluto de homicídios, ajustando para a população, revela-se como a mais violenta. A região A tem o maior absoluto, mas menor taxa proporcional."
        },
        {
          "id": "LISTA-Q04",
          "origem": "lista P1",
          "dificuldade": "Fácil",
          "relevancia": "Média",
          "enunciado": "Encontre os problemas do gráfico abaixo e descreva o que poderiam acarretar.<br><br><div style='text-align:center; overflow-x:auto;'><svg viewBox='0 0 500 250' style='width:100%; max-width:500px; height:auto; background:var(--bg); border:1px solid var(--border); font-family:sans-serif; margin:10px 0;'>\n  <text x='250' y='20' text-anchor='middle' font-size='14' font-weight='bold' fill='currentColor'>Homicídio Doloso</text>\n  <line x1='40' y1='40' x2='40' y2='200' stroke='currentColor' stroke-width='1'/>\n  <line x1='40' y1='200' x2='480' y2='200' stroke='currentColor' stroke-width='1'/>\n  <text x='35' y='45' text-anchor='end' font-size='10' fill='currentColor'>700</text>\n  <text x='35' y='68' text-anchor='end' font-size='10' fill='currentColor'>600</text>\n  <text x='35' y='91' text-anchor='end' font-size='10' fill='currentColor'>500</text>\n  <text x='35' y='114' text-anchor='end' font-size='10' fill='currentColor'>400</text>\n  <text x='35' y='137' text-anchor='end' font-size='10' fill='currentColor'>300</text>\n  <text x='35' y='160' text-anchor='end' font-size='10' fill='currentColor'>200</text>\n  <text x='35' y='183' text-anchor='end' font-size='10' fill='currentColor'>100</text>\n  <text x='35' y='205' text-anchor='end' font-size='10' fill='currentColor'>0</text>\n  \n  <line x1='40' y1='183' x2='480' y2='183' stroke='#ccc' stroke-width='0.5'/>\n  <line x1='40' y1='160' x2='480' y2='160' stroke='#ccc' stroke-width='0.5'/>\n  <line x1='40' y1='137' x2='480' y2='137' stroke='#ccc' stroke-width='0.5'/>\n  <line x1='40' y1='114' x2='480' y2='114' stroke='#ccc' stroke-width='0.5'/>\n  <line x1='40' y1='91' x2='480' y2='91' stroke='#ccc' stroke-width='0.5'/>\n  <line x1='40' y1='68' x2='480' y2='68' stroke='#ccc' stroke-width='0.5'/>\n  <line x1='40' y1='45' x2='480' y2='45' stroke='#ccc' stroke-width='0.5'/>\n  \n  <!-- X axis labels -->\n  <text x='60' y='215' text-anchor='middle' font-size='10' fill='currentColor'>Jan</text>\n  <text x='95' y='215' text-anchor='middle' font-size='10' fill='currentColor'>Fev</text>\n  <text x='130' y='215' text-anchor='middle' font-size='10' fill='currentColor'>Mar</text>\n  <text x='165' y='215' text-anchor='middle' font-size='10' fill='currentColor'>Abr</text>\n  <text x='200' y='215' text-anchor='middle' font-size='10' fill='currentColor'>Mai</text>\n  <text x='235' y='215' text-anchor='middle' font-size='10' fill='currentColor'>Jun</text>\n  <text x='270' y='215' text-anchor='middle' font-size='10' fill='currentColor'>Jul</text>\n  <text x='305' y='215' text-anchor='middle' font-size='10' fill='currentColor'>Ago</text>\n  <text x='340' y='215' text-anchor='middle' font-size='10' fill='currentColor'>Set</text>\n  <text x='375' y='215' text-anchor='middle' font-size='10' fill='currentColor'>Out</text>\n  <text x='410' y='215' text-anchor='middle' font-size='10' fill='currentColor'>Nov</text>\n  <text x='445' y='215' text-anchor='middle' font-size='10' fill='currentColor'>Dez</text>\n\n  <!-- Red Line Data -->\n  <polyline points='60,79 95,78 130,71 165,81 200,86 235,105 270,115 305,106 340,106 375,108 410,105 445,95' fill='none' stroke='red' stroke-width='1.5'/>\n  <rect x='58' y='77' width='4' height='4' fill='red'/> <text x='60' y='73' text-anchor='middle' font-size='9' fill='currentColor'>551</text>\n  <rect x='93' y='76' width='4' height='4' fill='red'/> <text x='95' y='72' text-anchor='middle' font-size='9' fill='currentColor'>556</text>\n  <rect x='128' y='69' width='4' height='4' fill='red'/> <text x='130' y='65' text-anchor='middle' font-size='9' fill='currentColor'>588</text>\n  <rect x='163' y='79' width='4' height='4' fill='red'/> <text x='165' y='75' text-anchor='middle' font-size='9' fill='currentColor'>542</text>\n  <rect x='198' y='84' width='4' height='4' fill='red'/> <text x='200' y='80' text-anchor='middle' font-size='9' fill='currentColor'>522</text>\n  <rect x='233' y='103' width='4' height='4' fill='red'/> <text x='235' y='99' text-anchor='middle' font-size='9' fill='currentColor'>439</text>\n  <rect x='268' y='113' width='4' height='4' fill='red'/>\n  <rect x='303' y='104' width='4' height='4' fill='red'/> <text x='305' y='100' text-anchor='middle' font-size='9' fill='currentColor'>432</text>\n  <rect x='338' y='104' width='4' height='4' fill='red'/> <text x='340' y='100' text-anchor='middle' font-size='9' fill='currentColor'>433</text>\n  <rect x='373' y='106' width='4' height='4' fill='red'/> \n  <rect x='408' y='103' width='4' height='4' fill='red'/> <text x='410' y='99' text-anchor='middle' font-size='9' fill='currentColor'>438</text>\n  <rect x='443' y='93' width='4' height='4' fill='red'/> <text x='445' y='89' text-anchor='middle' font-size='9' fill='currentColor'>476</text>\n\n  <!-- Blue Dotted Line Data -->\n  <polyline points='60,82 95,91 130,86 165,96 200,111 235,113 270,110 305,104 340,105 375,76 410,86 445,88' fill='none' stroke='navy' stroke-width='1.5' stroke-dasharray='3,3'/>\n  <circle cx='60' cy='82' r='2' fill='navy'/>\n  <circle cx='95' cy='91' r='2' fill='navy'/>\n  <circle cx='130' cy='86' r='2' fill='navy'/>\n  <circle cx='165' cy='96' r='2' fill='navy'/>\n  <circle cx='200' cy='111' r='2' fill='navy'/>\n  <circle cx='235' cy='113' r='2' fill='navy'/>\n  <circle cx='270' cy='110' r='2' fill='navy'/> <text x='270' y='104' text-anchor='middle' font-size='9' fill='currentColor'>397</text>\n  <circle cx='305' cy='104' r='2' fill='navy'/>\n  <circle cx='340' cy='105' r='2' fill='navy'/>\n  <circle cx='375' cy='76' r='2' fill='navy'/> <text x='375' y='90' text-anchor='middle' font-size='9' fill='currentColor'>420</text>\n  <circle cx='410' cy='86' r='2' fill='navy'/>\n  <circle cx='445' cy='88' r='2' fill='navy'/>\n</svg></div>",
          "resposta": "O título é inadequado, não há legenda discriminando as linhas (vermelha e azul), a fonte não é citada e os valores da linha pontilhada não estão completamente visíveis/identificados. A ausência desses elementos resulta em interpretação equivocada pelo leitor."
        },
        {
          "id": "LISTA-Q10",
          "origem": "lista P1",
          "dificuldade": "Difícil",
          "relevancia": "Muito Alta",
          "enunciado": "O faturamento bruto das 30 filiais de uma empresa gerou o histograma abaixo. Sabendo que as frequências correspondem às filiais e as classes ao faturamento, calcule o faturamento médio, mediano e a moda bruta.<br><br><div style='text-align:center; overflow-x:auto;'><svg viewBox='0 0 500 250' style='width:100%; max-width:500px; height:auto; background:var(--bg); border:1px solid var(--border); font-family:sans-serif; margin:10px 0;'><text x='10' y='20' font-size='12' fill='currentColor'>Frequências</text><line x1='40' y1='30' x2='40' y2='200' stroke='currentColor' stroke-width='1'/><line x1='40' y1='200' x2='480' y2='200' stroke='currentColor' stroke-width='1'/><text x='20' y='35' font-size='12' fill='currentColor'>10</text><text x='25' y='68' font-size='12' fill='currentColor'>8</text><text x='25' y='101' font-size='12' fill='currentColor'>6</text><text x='25' y='134' font-size='12' fill='currentColor'>4</text><text x='25' y='167' font-size='12' fill='currentColor'>2</text><text x='25' y='200' font-size='12' fill='currentColor'>0</text><rect x='41' y='150' width='70' height='50' fill='#9b8bf4' stroke='#000' stroke-width='1'/><rect x='111' y='84' width='70' height='116' fill='#a03c62' stroke='#000' stroke-width='1'/><rect x='181' y='84' width='70' height='116' fill='#fff9b0' stroke='#000' stroke-width='1'/><rect x='251' y='84' width='70' height='116' fill='#b5f0f8' stroke='#000' stroke-width='1'/><rect x='321' y='134' width='70' height='66' fill='#68186f' stroke='#000' stroke-width='1'/><rect x='391' y='167' width='70' height='33' fill='#fc8a8b' stroke='#000' stroke-width='1'/><text x='75' y='220' text-anchor='middle' font-size='12' fill='currentColor'>2 |- 5</text><text x='145' y='220' text-anchor='middle' font-size='12' fill='currentColor'>5 |- 8</text><text x='215' y='220' text-anchor='middle' font-size='12' fill='currentColor'>8 |- 11</text><text x='285' y='220' text-anchor='middle' font-size='12' fill='currentColor'>11 |- 14</text><text x='355' y='220' text-anchor='middle' font-size='12' fill='currentColor'>14 |- 17</text><text x='425' y='220' text-anchor='middle' font-size='12' fill='currentColor'>17 |- 20</text><text x='460' y='240' text-anchor='middle' font-size='12' fill='currentColor'>Classes</text></svg></div>",
          "resposta": "Frequências lidas no gráfico: 3, 7, 7, 7, 4, 2.<br><strong>Média:</strong> $$ \\bar{x} = 10,3 $$<br><strong>Mediana:</strong> Posição $$ 30/2 = 15 $$. Atinge na classe 8|-11. Calculando pela interpolação: $$ Md = 10,14 $$<br><strong>Moda Bruta:</strong> (Multimodal). Classes 5|-8, 8|-11 e 11|-14 empatam com frequência máxima (7). Modas (pontos médios): 6,5; 9,5; e 12,5."
        },
        {
          "id": "LISTA-Q13",
          "origem": "lista P1",
          "dificuldade": "Médio",
          "relevancia": "Alta",
          "enunciado": "Considere o gráfico de barras abaixo que apresenta a distribuição das estaturas (em centímetros) de alunos. Calcule os valores da média e da mediana.<br><br><div style='text-align:center; overflow-x:auto;'><svg viewBox='0 0 500 250' style='width:100%; max-width:500px; height:auto; background:var(--bg); border:1px solid var(--border); font-family:sans-serif; margin:10px 0;'><text x='15' y='140' font-size='12' fill='currentColor' transform='rotate(-90 15,140)'>Frequência</text><line x1='40' y1='20' x2='40' y2='200' stroke='currentColor' stroke-width='1'/><line x1='40' y1='200' x2='480' y2='200' stroke='currentColor' stroke-width='1'/><rect x='60' y='140' width='40' height='60' fill='#7f7f7f'/><text x='80' y='130' text-anchor='middle' font-size='12' fill='currentColor'>4</text><text x='80' y='220' text-anchor='middle' font-size='12' fill='currentColor'>154</text><rect x='130' y='65' width='40' height='135' fill='#7f7f7f'/><text x='150' y='55' text-anchor='middle' font-size='12' fill='currentColor'>9</text><text x='150' y='220' text-anchor='middle' font-size='12' fill='currentColor'>158</text><rect x='200' y='35' width='40' height='165' fill='#7f7f7f'/><text x='220' y='25' text-anchor='middle' font-size='12' fill='currentColor'>11</text><text x='220' y='220' text-anchor='middle' font-size='12' fill='currentColor'>162</text><rect x='270' y='80' width='40' height='120' fill='#7f7f7f'/><text x='290' y='70' text-anchor='middle' font-size='12' fill='currentColor'>8</text><text x='290' y='220' text-anchor='middle' font-size='12' fill='currentColor'>166</text><rect x='340' y='125' width='40' height='75' fill='#7f7f7f'/><text x='360' y='115' text-anchor='middle' font-size='12' fill='currentColor'>5</text><text x='360' y='220' text-anchor='middle' font-size='12' fill='currentColor'>170</text><rect x='410' y='155' width='40' height='45' fill='#7f7f7f'/><text x='430' y='145' text-anchor='middle' font-size='12' fill='currentColor'>3</text><text x='430' y='220' text-anchor='middle' font-size='12' fill='currentColor'>174</text><text x='260' y='245' text-anchor='middle' font-size='12' fill='currentColor'>Estaturas (cm)</text></svg></div>",
          "resposta": "Os valores são discretos (não agrupados em classes). Média: $$ \\bar{x} = 163 $$. Mediana: Total de observações = 40. A mediana encontra-se entre a 20ª e 21ª posições, ambas correspondentes a 162. Logo, $$ Md = 162 $$."
        }
      ]
    },
    {
      "materia": "Boxplot",
      "subtopico": "Comportamento, Dispersão e Outliers",
      "secId": "boxplot",
      "exercicios": [
        {
          "id": "LISTA-Q14",
          "origem": "lista P1",
          "dificuldade": "Médio",
          "relevancia": "Baixa",
          "enunciado": "Os desenhos esquemáticos a seguir mostram as distribuições das notas de três classes A, B e C. Analise-os e descreva o comportamento dessas três distribuições em relação à dispersão e assimetria.<br><br><div style='text-align:center; overflow-x:auto;'><svg viewBox='0 0 500 200' style='width:100%; max-width:500px; height:auto; background:var(--bg); border:1px solid var(--border); font-family:sans-serif; margin:10px 0;'><text x='20' y='35' font-size='14' fill='currentColor' font-weight='bold'>A</text><line x1='160' y1='30' x2='350' y2='30' stroke='currentColor' stroke-width='2'/><line x1='160' y1='25' x2='160' y2='35' stroke='currentColor' stroke-width='2'/><rect x='350' y='10' width='80' height='40' fill='none' stroke='currentColor' stroke-width='2'/><line x1='390' y1='10' x2='390' y2='50' stroke='currentColor' stroke-width='2'/><line x1='430' y1='30' x2='490' y2='30' stroke='currentColor' stroke-width='2'/><line x1='490' y1='25' x2='490' y2='35' stroke='currentColor' stroke-width='2'/><text x='20' y='95' font-size='14' fill='currentColor' font-weight='bold'>B *</text><line x1='60' y1='90' x2='150' y2='90' stroke='currentColor' stroke-width='2'/><line x1='60' y1='85' x2='60' y2='95' stroke='currentColor' stroke-width='2'/><rect x='150' y='70' width='160' height='40' fill='none' stroke='currentColor' stroke-width='2'/><line x1='210' y1='70' x2='210' y2='110' stroke='currentColor' stroke-width='2'/><line x1='310' y1='90' x2='470' y2='90' stroke='currentColor' stroke-width='2'/><line x1='470' y1='85' x2='470' y2='95' stroke='currentColor' stroke-width='2'/><text x='20' y='155' font-size='14' fill='currentColor' font-weight='bold'>C</text><line x1='70' y1='150' x2='140' y2='150' stroke='currentColor' stroke-width='2'/><line x1='70' y1='145' x2='70' y2='155' stroke='currentColor' stroke-width='2'/><rect x='140' y='130' width='90' height='40' fill='none' stroke='currentColor' stroke-width='2'/><line x1='190' y1='130' x2='190' y2='170' stroke='currentColor' stroke-width='2'/><line x1='230' y1='150' x2='300' y2='150' stroke='currentColor' stroke-width='2'/><line x1='300' y1='145' x2='300' y2='155' stroke='currentColor' stroke-width='2'/><line x1='30' y1='185' x2='490' y2='185' stroke='currentColor' stroke-width='1'/><text x='30' y='198' text-anchor='middle' font-size='10' fill='currentColor'>0</text><text x='76' y='198' text-anchor='middle' font-size='10' fill='currentColor'>1</text><text x='122' y='198' text-anchor='middle' font-size='10' fill='currentColor'>2</text><text x='168' y='198' text-anchor='middle' font-size='10' fill='currentColor'>3</text><text x='214' y='198' text-anchor='middle' font-size='10' fill='currentColor'>4</text><text x='260' y='198' text-anchor='middle' font-size='10' fill='currentColor'>5</text><text x='306' y='198' text-anchor='middle' font-size='10' fill='currentColor'>6</text><text x='352' y='198' text-anchor='middle' font-size='10' fill='currentColor'>7</text><text x='398' y='198' text-anchor='middle' font-size='10' fill='currentColor'>8</text><text x='444' y='198' text-anchor='middle' font-size='10' fill='currentColor'>9</text><text x='490' y='198' text-anchor='middle' font-size='10' fill='currentColor'>10</text></svg></div>",
          "resposta": "<strong>Classe A:</strong> Maior mediana (~7,8). Assimétrica à esquerda (cauda inferior longa). Rendimento alto.<br><strong>Classe B:</strong> Mediana média-baixa (~4,1). Maior dispersão (maior IQR e amplitude). Assimétrica à direita. Possui outlier (*).<br><strong>Classe C:</strong> Menor mediana (~3,5). Mais simétrica e compacta (baixa dispersão). Rendimento baixo e uniforme."
        },
        {
          "id": "LISTA-Q15",
          "origem": "lista P1",
          "dificuldade": "Difícil",
          "relevancia": "Baixa",
          "enunciado": "Duas turmas (A e B) realizaram uma prova (0 a 100).<br><strong>Turma A:</strong> 45, 48, 52, 55, 58, 60, 62, 65, 68, 70, 72, 75, 78, 80, 82, 85, 88, 90, 92, 95.<br><strong>Turma B:</strong> 30, 40, 55, 60, 62, 65, 68, 70, 71, 72, 73, 74, 75, 76, 78, 80, 82, 90, 95, 100.<br><br>a) Determine os 5 números-resumo de cada turma e o AIQ.<br>b) Verifique se existem valores atípicos (outliers) utilizando a regra do AIQ.",
          "resposta": "<strong>Turma A:</strong> Min=45; Q1=59; Med=71; Q3=83,5; Max=95. $$ AIQ = 24,5 $$. Limites: [22,25 ; 120,25]. Não há outliers.<br><strong>Turma B:</strong> Min=30; Q1=63,5; Med=72,5; Q3=79; Max=100. $$ AIQ = 15,5 $$. Limites: [40,25 ; 102,25]. Outliers: 30 e 40."
        }
      ]
    }
  ]
};

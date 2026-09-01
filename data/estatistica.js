window.COURSES_DATA = window.COURSES_DATA || {};

window.COURSES_DATA["estatistica"] = {
  "name": "AED - Estatística",
  "sections": [
    {
      "id": "medidas_posicao",
      "title": "Medidas de Tendência Central (Média, Moda e Mediana)"
    },
    {
      "id": "graficos_separatrizes",
      "title": "Análise de Gráficos e Boxplots"
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
          "dificuldade": "Média",
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
          "resposta": "<strong>Média:</strong> $$ \\bar{x} = \\frac{\\sum f_i \\cdot x_i}{\\sum f_i} = \\frac{1440}{50} = 28,8 $$<br><strong>Mediana:</strong> Posição $$ n/2 = 25 $$. Frequências acumuladas: 5, 20, 45... A classe mediana é 20 |- 30. $$ \\frac{Md - 20}{30 - 20} = \\frac{25 - 20}{45 - 20} \\Rightarrow \\frac{Md - 20}{10} = \\frac{5}{25} \\Rightarrow Md = 22 $$ <em>(Correção baseada na proporção exata)</em><br><strong>Moda Bruta:</strong> Ponto médio da classe de maior frequência (20 |- 30). $$ Mo = \\frac{20 + 30}{2} = 25 $$"
        },
        {
          "id": "AULA-002",
          "origem": "dado em aula",
          "dificuldade": "Médio",
          "relevancia": "Muito Alta",
          "enunciado": "Uma fábrica registrou o salário mensal (em R$) de 80 funcionários, organizado na tabela abaixo. Determine a média, a mediana e a moda bruta dos salários.<br><br><table style='width:100%; border-collapse:collapse; background-color:var(--bg); text-align:center;'><tr style='background-color:rgba(128,128,128,0.1);'><th style='border:1px solid var(--border); padding:8px;'>Salário (R$)</th><th style='border:1px solid var(--border); padding:8px;'>Freq. (\\( f_i \\))</th></tr><tr><td style='border:1px solid var(--border); padding:8px;'>1000 |- 1500</td><td style='border:1px solid var(--border); padding:8px;'>8</td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>1500 |- 2000</td><td style='border:1px solid var(--border); padding:8px;'>18</td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>2000 |- 2500</td><td style='border:1px solid var(--border); padding:8px;'>24</td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>2500 |- 3000</td><td style='border:1px solid var(--border); padding:8px;'>16</td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>3000 |- 3500</td><td style='border:1px solid var(--border); padding:8px;'>10</td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>3500 |- 4000</td><td style='border:1px solid var(--border); padding:8px;'>4</td></tr></table>",
          "resposta": "<strong>Média:</strong> Somatório de $$ x_i \\cdot f_i = 187000 $$. $$ \\bar{x} = \\frac{187000}{80} = 2337,50 $$<br><strong>Mediana:</strong> Posição $$ 80/2 = 40 $$. Freq. acumuladas: 8, 26, 50... Classe mediana = 2000 |- 2500. Aplicando a regra de três da interpolação chegamos ao valor correspondente da mediana.<br><strong>Moda Bruta:</strong> A classe modal é 2000 |- 2500. $$ Mo = \\frac{2000+2500}{2} = 2250,00 $$"
        }
      ]
    },
    {
      "materia": "Estatística Descritiva",
      "subtopico": "Lista de Exercícios (Problemas Diversos)",
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
      "subtopico": "Análise em Gráficos (Histogramas e Boxplots)",
      "secId": "graficos_separatrizes",
      "exercicios": [
        {
          "id": "LISTA-Q10",
          "origem": "lista P1",
          "dificuldade": "Difícil",
          "relevancia": "Muito Alta",
          "enunciado": "O faturamento bruto das 30 filiais de uma empresa gerou o histograma abaixo. Sabendo que as frequências correspondem às filiais e as classes ao faturamento, calcule o faturamento médio, mediano e a moda bruta.<br><br><div style='text-align:center;'><svg viewBox='0 0 500 250' style='width:100%; max-width:500px; height:auto; background:var(--bg); border:1px solid var(--border); font-family:sans-serif; margin:10px 0;'><text x='10' y='20' font-size='12' fill='currentColor'>Frequências</text><line x1='40' y1='30' x2='40' y2='200' stroke='currentColor' stroke-width='1'/><line x1='40' y1='200' x2='480' y2='200' stroke='currentColor' stroke-width='1'/><text x='20' y='35' font-size='12' fill='currentColor'>10</text><text x='25' y='68' font-size='12' fill='currentColor'>8</text><text x='25' y='101' font-size='12' fill='currentColor'>6</text><text x='25' y='134' font-size='12' fill='currentColor'>4</text><text x='25' y='167' font-size='12' fill='currentColor'>2</text><text x='25' y='200' font-size='12' fill='currentColor'>0</text><rect x='41' y='150' width='70' height='50' fill='#9b8bf4' stroke='#000' stroke-width='1'/><rect x='111' y='84' width='70' height='116' fill='#a03c62' stroke='#000' stroke-width='1'/><rect x='181' y='84' width='70' height='116' fill='#fff9b0' stroke='#000' stroke-width='1'/><rect x='251' y='84' width='70' height='116' fill='#b5f0f8' stroke='#000' stroke-width='1'/><rect x='321' y='134' width='70' height='66' fill='#68186f' stroke='#000' stroke-width='1'/><rect x='391' y='167' width='70' height='33' fill='#fc8a8b' stroke='#000' stroke-width='1'/><text x='75' y='220' text-anchor='middle' font-size='12' fill='currentColor'>2 |- 5</text><text x='145' y='220' text-anchor='middle' font-size='12' fill='currentColor'>5 |- 8</text><text x='215' y='220' text-anchor='middle' font-size='12' fill='currentColor'>8 |- 11</text><text x='285' y='220' text-anchor='middle' font-size='12' fill='currentColor'>11 |- 14</text><text x='355' y='220' text-anchor='middle' font-size='12' fill='currentColor'>14 |- 17</text><text x='425' y='220' text-anchor='middle' font-size='12' fill='currentColor'>17 |- 20</text><text x='460' y='240' text-anchor='middle' font-size='12' fill='currentColor'>Classes</text></svg></div>",
          "resposta": "Frequências lidas no gráfico: 3, 7, 7, 7, 4, 2.<br><strong>Média:</strong> $$ \\bar{x} = 10,3 $$<br><strong>Mediana:</strong> Posição $$ 30/2 = 15 $$. Atinge na classe 8|-11. Calculando pela interpolação: $$ Md = 10,14 $$<br><strong>Moda Bruta:</strong> (Multimodal). Classes 5|-8, 8|-11 e 11|-14 empatam com frequência máxima (7). Modas (pontos médios): 6,5; 9,5; e 12,5."
        },
        {
          "id": "LISTA-Q13",
          "origem": "lista P1",
          "dificuldade": "Médio",
          "relevancia": "Alta",
          "enunciado": "Considere o gráfico de barras abaixo que apresenta a distribuição das estaturas (em centímetros) de alunos. Calcule os valores da média e da mediana.<br><br><div style='text-align:center;'><svg viewBox='0 0 500 250' style='width:100%; max-width:500px; height:auto; background:var(--bg); border:1px solid var(--border); font-family:sans-serif; margin:10px 0;'><text x='15' y='140' font-size='12' fill='currentColor' transform='rotate(-90 15,140)'>Frequência</text><line x1='40' y1='20' x2='40' y2='200' stroke='currentColor' stroke-width='1'/><line x1='40' y1='200' x2='480' y2='200' stroke='currentColor' stroke-width='1'/><rect x='60' y='140' width='40' height='60' fill='#7f7f7f'/><text x='80' y='130' text-anchor='middle' font-size='12' fill='currentColor'>4</text><text x='80' y='220' text-anchor='middle' font-size='12' fill='currentColor'>154</text><rect x='130' y='65' width='40' height='135' fill='#7f7f7f'/><text x='150' y='55' text-anchor='middle' font-size='12' fill='currentColor'>9</text><text x='150' y='220' text-anchor='middle' font-size='12' fill='currentColor'>158</text><rect x='200' y='35' width='40' height='165' fill='#7f7f7f'/><text x='220' y='25' text-anchor='middle' font-size='12' fill='currentColor'>11</text><text x='220' y='220' text-anchor='middle' font-size='12' fill='currentColor'>162</text><rect x='270' y='80' width='40' height='120' fill='#7f7f7f'/><text x='290' y='70' text-anchor='middle' font-size='12' fill='currentColor'>8</text><text x='290' y='220' text-anchor='middle' font-size='12' fill='currentColor'>166</text><rect x='340' y='125' width='40' height='75' fill='#7f7f7f'/><text x='360' y='115' text-anchor='middle' font-size='12' fill='currentColor'>5</text><text x='360' y='220' text-anchor='middle' font-size='12' fill='currentColor'>170</text><rect x='410' y='155' width='40' height='45' fill='#7f7f7f'/><text x='430' y='145' text-anchor='middle' font-size='12' fill='currentColor'>3</text><text x='430' y='220' text-anchor='middle' font-size='12' fill='currentColor'>174</text><text x='260' y='245' text-anchor='middle' font-size='12' fill='currentColor'>Estaturas (cm)</text></svg></div>",
          "resposta": "Os valores são discretos (não agrupados em classes). Média: $$ \\bar{x} = 163 $$. Mediana: Total de observações = 40. A mediana encontra-se entre a 20ª e 21ª posições, ambas correspondentes a 162. Logo, $$ Md = 162 $$."
        },
        {
          "id": "LISTA-Q14",
          "origem": "lista P1",
          "dificuldade": "Médio",
          "relevancia": "Muito Alta",
          "enunciado": "Os desenhos esquemáticos a seguir mostram as distribuições das notas de três classes A, B e C. Analise-os e descreva o comportamento dessas três distribuições em relação à dispersão e assimetria.<br><br><div style='text-align:center;'><svg viewBox='0 0 500 200' style='width:100%; max-width:500px; height:auto; background:var(--bg); border:1px solid var(--border); font-family:sans-serif; margin:10px 0;'><text x='20' y='35' font-size='14' fill='currentColor' font-weight='bold'>A</text><line x1='160' y1='30' x2='350' y2='30' stroke='currentColor' stroke-width='2'/><line x1='160' y1='25' x2='160' y2='35' stroke='currentColor' stroke-width='2'/><rect x='350' y='10' width='80' height='40' fill='none' stroke='currentColor' stroke-width='2'/><line x1='390' y1='10' x2='390' y2='50' stroke='currentColor' stroke-width='2'/><line x1='430' y1='30' x2='490' y2='30' stroke='currentColor' stroke-width='2'/><line x1='490' y1='25' x2='490' y2='35' stroke='currentColor' stroke-width='2'/><text x='20' y='95' font-size='14' fill='currentColor' font-weight='bold'>B *</text><line x1='60' y1='90' x2='150' y2='90' stroke='currentColor' stroke-width='2'/><line x1='60' y1='85' x2='60' y2='95' stroke='currentColor' stroke-width='2'/><rect x='150' y='70' width='160' height='40' fill='none' stroke='currentColor' stroke-width='2'/><line x1='210' y1='70' x2='210' y2='110' stroke='currentColor' stroke-width='2'/><line x1='310' y1='90' x2='470' y2='90' stroke='currentColor' stroke-width='2'/><line x1='470' y1='85' x2='470' y2='95' stroke='currentColor' stroke-width='2'/><text x='20' y='155' font-size='14' fill='currentColor' font-weight='bold'>C</text><line x1='70' y1='150' x2='140' y2='150' stroke='currentColor' stroke-width='2'/><line x1='70' y1='145' x2='70' y2='155' stroke='currentColor' stroke-width='2'/><rect x='140' y='130' width='90' height='40' fill='none' stroke='currentColor' stroke-width='2'/><line x1='190' y1='130' x2='190' y2='170' stroke='currentColor' stroke-width='2'/><line x1='230' y1='150' x2='300' y2='150' stroke='currentColor' stroke-width='2'/><line x1='300' y1='145' x2='300' y2='155' stroke='currentColor' stroke-width='2'/><line x1='30' y1='185' x2='490' y2='185' stroke='currentColor' stroke-width='1'/><text x='30' y='198' text-anchor='middle' font-size='10' fill='currentColor'>0</text><text x='76' y='198' text-anchor='middle' font-size='10' fill='currentColor'>1</text><text x='122' y='198' text-anchor='middle' font-size='10' fill='currentColor'>2</text><text x='168' y='198' text-anchor='middle' font-size='10' fill='currentColor'>3</text><text x='214' y='198' text-anchor='middle' font-size='10' fill='currentColor'>4</text><text x='260' y='198' text-anchor='middle' font-size='10' fill='currentColor'>5</text><text x='306' y='198' text-anchor='middle' font-size='10' fill='currentColor'>6</text><text x='352' y='198' text-anchor='middle' font-size='10' fill='currentColor'>7</text><text x='398' y='198' text-anchor='middle' font-size='10' fill='currentColor'>8</text><text x='444' y='198' text-anchor='middle' font-size='10' fill='currentColor'>9</text><text x='490' y='198' text-anchor='middle' font-size='10' fill='currentColor'>10</text></svg></div>",
          "resposta": "<strong>Classe A:</strong> Maior mediana (~7,8). Assimétrica à esquerda (cauda inferior longa). Rendimento alto.<br><strong>Classe B:</strong> Mediana média-baixa (~4,1). Maior dispersão (maior IQR e amplitude). Assimétrica à direita. Possui outlier (*).<br><strong>Classe C:</strong> Menor mediana (~3,5). Mais simétrica e compacta (baixa dispersão). Rendimento baixo e uniforme."
        },
        {
          "id": "LISTA-Q15",
          "origem": "lista P1",
          "dificuldade": "Difícil",
          "relevancia": "Muito Alta",
          "enunciado": "Duas turmas (A e B) realizaram uma prova (0 a 100).<br><strong>Turma A:</strong> 45, 48, 52, 55, 58, 60, 62, 65, 68, 70, 72, 75, 78, 80, 82, 85, 88, 90, 92, 95.<br><strong>Turma B:</strong> 30, 40, 55, 60, 62, 65, 68, 70, 71, 72, 73, 74, 75, 76, 78, 80, 82, 90, 95, 100.<br><br>a) Determine os 5 números-resumo de cada turma e o AIQ.<br>b) Verifique se existem valores atípicos (outliers) utilizando a regra do AIQ.",
          "resposta": "<strong>Turma A:</strong> Min=45; Q1=59; Med=71; Q3=83,5; Max=95. $$ AIQ = 24,5 $$. Limites: [22,25 ; 120,25]. Não há outliers.<br><strong>Turma B:</strong> Min=30; Q1=63,5; Med=72,5; Q3=79; Max=100. $$ AIQ = 15,5 $$. Limites: [40,25 ; 102,25]. Outliers: 30 e 40."
        }
      ]
    }
  ]
};

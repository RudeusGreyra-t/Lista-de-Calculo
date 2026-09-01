window.COURSES_DATA = window.COURSES_DATA || {};

window.COURSES_DATA["estatistica"] = {
  "name": "AED - Estatística",
  "sections": [
    {
      "id": "tendencia_central",
      "title": "Medidas de Tendência Central (Tabelas e Gráficos)"
    }
  ],
  "topics": [
    {
      "materia": "Estatística Descritiva",
      "subtopico": "PDF (00. Estatistica Descritiva - P1.pdf)",
      "secId": "tendencia_central",
      "exercicios": [
        {
          "id": "PDF-001",
          "origem": "PDF",
          "dificuldade": "Fácil",
          "relevancia": "Alta",
          "enunciado": "Um candidato obteve, nas diversas provas de um concurso, as seguintes notas com seus respectivos pesos descritos abaixo. Calcule a média das notas.<br><br><table style='width:100%; border-collapse:collapse; background-color:var(--bg); text-align:center;'><tr style='background-color:rgba(128,128,128,0.1);'><th style='border:1px solid var(--border); padding:8px;'>Matéria</th><th style='border:1px solid var(--border); padding:8px;'>Nota</th><th style='border:1px solid var(--border); padding:8px;'>Peso</th></tr><tr><td style='border:1px solid var(--border); padding:8px;'>Português</td><td style='border:1px solid var(--border); padding:8px;'>66</td><td style='border:1px solid var(--border); padding:8px;'>3</td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>Contabilidade</td><td style='border:1px solid var(--border); padding:8px;'>63</td><td style='border:1px solid var(--border); padding:8px;'>3</td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>Estatística</td><td style='border:1px solid var(--border); padding:8px;'>74</td><td style='border:1px solid var(--border); padding:8px;'>2</td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>Direito</td><td style='border:1px solid var(--border); padding:8px;'>79</td><td style='border:1px solid var(--border); padding:8px;'>2</td></tr></table>",
          "resposta": "$$ \\bar{X} = \\frac{(66 \\times 3) + (63 \\times 3) + (74 \\times 2) + (79 \\times 2)}{3+3+2+2} = \\frac{693}{10} = 69,3 $$"
        }
      ]
    },
    {
      "materia": "Estatística Descritiva",
      "subtopico": "Exercícios de Sala (21/08)",
      "secId": "tendencia_central",
      "exercicios": [
        {
          "id": "AULA-001",
          "origem": "dado em aula",
          "dificuldade": "Médio",
          "relevancia": "Alta",
          "enunciado": "A partir da tabela de frequências de dados agrupados em classes abaixo, calcule a Média, a Mediana e a Moda Bruta.<br><br><table style='width:100%; border-collapse:collapse; background-color:var(--bg); text-align:center;'><tr style='background-color:rgba(128,128,128,0.1);'><th style='border:1px solid var(--border); padding:8px;'>Classes</th><th style='border:1px solid var(--border); padding:8px;'>Freq. (f_i)</th></tr><tr><td style='border:1px solid var(--border); padding:8px;'>0 |- 10</td><td style='border:1px solid var(--border); padding:8px;'>5</td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>10 |- 20</td><td style='border:1px solid var(--border); padding:8px;'>15</td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>20 |- 30</td><td style='border:1px solid var(--border); padding:8px;'>25</td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>30 |- 40</td><td style='border:1px solid var(--border); padding:8px;'>12</td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>40 |- 50</td><td style='border:1px solid var(--border); padding:8px;'>6</td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>50 |- 60</td><td style='border:1px solid var(--border); padding:8px;'>5</td></tr></table>",
          "resposta": "<strong>Média:</strong> $$ \\bar{x} = \\frac{\\sum f_i \\cdot x_i}{\\sum f_i} = \\frac{1440}{50} = 28,8 $$<br><strong>Mediana:</strong> Posição $$ n/2 = 25 $$. Classe mediana: 20 |- 30. $$ \\frac{Md - 20}{30 - 20} = \\frac{25 - 20}{45 - 20} \\Rightarrow Md = 28 $$<br><strong>Moda Bruta:</strong> Ponto médio da classe de maior frequência (20 |- 30). $$ Mo = \\frac{20 + 30}{2} = 25 $$"
        },
        {
          "id": "AULA-002",
          "origem": "dado em aula",
          "dificuldade": "Médio",
          "relevancia": "Alta",
          "enunciado": "Uma fábrica registrou o salário mensal (em R$) de 80 funcionários, organizado na tabela abaixo. Determine a média e a moda bruta dos salários.<br><br><table style='width:100%; border-collapse:collapse; background-color:var(--bg); text-align:center;'><tr style='background-color:rgba(128,128,128,0.1);'><th style='border:1px solid var(--border); padding:8px;'>Salário (R$)</th><th style='border:1px solid var(--border); padding:8px;'>Freq. (f_i)</th></tr><tr><td style='border:1px solid var(--border); padding:8px;'>1000 |- 1500</td><td style='border:1px solid var(--border); padding:8px;'>8</td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>1500 |- 2000</td><td style='border:1px solid var(--border); padding:8px;'>18</td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>2000 |- 2500</td><td style='border:1px solid var(--border); padding:8px;'>24</td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>2500 |- 3000</td><td style='border:1px solid var(--border); padding:8px;'>16</td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>3000 |- 3500</td><td style='border:1px solid var(--border); padding:8px;'>10</td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>3500 |- 4000</td><td style='border:1px solid var(--border); padding:8px;'>4</td></tr></table>",
          "resposta": "<strong>Média:</strong> Somatório de $$ x_i \\cdot f_i = 187000 $$. $$ \\bar{x} = \\frac{187000}{80} = 2337,50 $$<br><strong>Moda Bruta:</strong> A classe modal é 2000 |- 2500. Ponto médio $$ = \\frac{2000+2500}{2} = 2250,00 $$"
        }
      ]
    },
    {
      "materia": "Estatística Descritiva",
      "subtopico": "Lista de Preparação P1",
      "secId": "tendencia_central",
      "exercicios": [
        {
          "id": "LISTA-Q05",
          "origem": "lista P1",
          "dificuldade": "Médio",
          "relevancia": "Alta",
          "enunciado": "Seja a distribuição de frequências abaixo, resultado da observação de pesos em kg de um grupo de 50 pessoas adultas. Calcule a média do grupo.<br><br><table style='width:100%; border-collapse:collapse; background-color:var(--bg); text-align:center;'><tr style='background-color:rgba(128,128,128,0.1);'><th style='border:1px solid var(--border); padding:8px;'>Pesos (Kg)</th><th style='border:1px solid var(--border); padding:8px;'>f_i</th></tr><tr><td style='border:1px solid var(--border); padding:8px;'>46 |- 56</td><td style='border:1px solid var(--border); padding:8px;'>4</td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>56 |- 66</td><td style='border:1px solid var(--border); padding:8px;'>10</td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>66 |- 76</td><td style='border:1px solid var(--border); padding:8px;'>16</td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>76 |- 86</td><td style='border:1px solid var(--border); padding:8px;'>12</td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>86 |- 96</td><td style='border:1px solid var(--border); padding:8px;'>8</td></tr></table>",
          "resposta": "$$ \\bar{x} = \\frac{(51\\cdot 4) + (61\\cdot 10) + (71\\cdot 16) + (81\\cdot 12) + (91\\cdot 8)}{50} = \\frac{3650}{50} = 73 $$"
        },
        {
          "id": "LISTA-Q06",
          "origem": "lista P1",
          "dificuldade": "Médio",
          "relevancia": "Média",
          "enunciado": "Cinco pessoas, que se submeteram a uma mesma cirurgia no joelho, usaram dois instrumentos para indicar o nível de dor 12 horas após a operação. A seguir estão os escores de dor de cada pessoa, em cada instrumento:<br><br><table style='width:100%; border-collapse:collapse; background-color:var(--bg); text-align:center;'><tr style='background-color:rgba(128,128,128,0.1);'><th style='border:1px solid var(--border); padding:8px;'>Pessoa</th><th style='border:1px solid var(--border); padding:8px;'>A</th><th style='border:1px solid var(--border); padding:8px;'>B</th><th style='border:1px solid var(--border); padding:8px;'>C</th><th style='border:1px solid var(--border); padding:8px;'>D</th><th style='border:1px solid var(--border); padding:8px;'>E</th></tr><tr><td style='border:1px solid var(--border); padding:8px;'>Dor (Inst. 1)</td><td style='border:1px solid var(--border); padding:8px;'>8</td><td style='border:1px solid var(--border); padding:8px;'>6</td><td style='border:1px solid var(--border); padding:8px;'>4</td><td style='border:1px solid var(--border); padding:8px;'>3</td><td style='border:1px solid var(--border); padding:8px;'>4</td></tr><tr><td style='border:1px solid var(--border); padding:8px;'>Dor (Inst. 2)</td><td style='border:1px solid var(--border); padding:8px;'>9</td><td style='border:1px solid var(--border); padding:8px;'>7</td><td style='border:1px solid var(--border); padding:8px;'>4</td><td style='border:1px solid var(--border); padding:8px;'>4</td><td style='border:1px solid var(--border); padding:8px;'>6</td></tr></table><br>a) Qual instrumento teve um escore, em média, de mais dor?<br>b) Qual a mediana dos escores dos dois instrumentos?<br>c) Qual a moda dos escores dos dois instrumentos?",
          "resposta": "a) Inst 1: $$ \\bar{x}_1 = \\frac{25}{5} = 5 $$. Inst 2: $$ \\bar{x}_2 = \\frac{30}{5} = 6 $$ (Inst 2 teve média maior).<br>b) Inst 1 rol: 3, 4, 4, 6, 8 $$\\Rightarrow Md_1 = 4$$. Inst 2 rol: 4, 4, 6, 7, 9 $$\\Rightarrow Md_2 = 6$$.<br>c) $$ Mo_1 = 4 $$, $$ Mo_2 = 4 $$."
        },
        {
          "id": "LISTA-Q07",
          "origem": "lista P1",
          "dificuldade": "Fácil",
          "relevancia": "Alta",
          "enunciado": "Um candidato obteve, nas diversas provas de um concurso, as seguintes notas com seus respectivos pesos: Português: 66 (peso 3), Contabilidade: 63 (peso 3), Estatística: X (peso 2) e Direito: 79 (peso 2). A média aritmética ponderada, obtida pelo candidato foi de 69,3. Calcule a nota do candidato em Estatística.",
          "resposta": "$$ \\frac{(66 \\cdot 3) + (63 \\cdot 3) + (X \\cdot 2) + (79 \\cdot 2)}{3 + 3 + 2 + 2} = 69,3 \\Rightarrow \\frac{198 + 189 + 2X + 158}{10} = 69,3 \\Rightarrow 545 + 2X = 693 \\Rightarrow 2X = 148 \\Rightarrow X = 74 $$"
        },
        {
          "id": "LISTA-Q10",
          "origem": "lista P1",
          "dificuldade": "Difícil",
          "relevancia": "Muito Alta",
          "enunciado": "O faturamento bruto das 30 filiais de uma determinada empresa de varejo no mês passado gerou o histograma abaixo. Sabendo que as frequências correspondem às filiais e as classes ao faturamento, calcule o faturamento médio, mediano e a moda bruta.<br><br><div style='text-align:center;'><svg viewBox='0 0 500 250' style='width:100%; max-width:500px; height:auto; background:var(--bg); border:1px solid var(--border); font-family:sans-serif; margin:10px 0;'><text x='10' y='20' font-size='12' fill='currentColor'>Frequências</text><line x1='40' y1='30' x2='40' y2='200' stroke='currentColor' stroke-width='1'/><line x1='40' y1='200' x2='480' y2='200' stroke='currentColor' stroke-width='1'/><text x='20' y='35' font-size='12' fill='currentColor'>10</text><text x='25' y='68' font-size='12' fill='currentColor'>8</text><text x='25' y='101' font-size='12' fill='currentColor'>6</text><text x='25' y='134' font-size='12' fill='currentColor'>4</text><text x='25' y='167' font-size='12' fill='currentColor'>2</text><text x='25' y='200' font-size='12' fill='currentColor'>0</text><rect x='41' y='150' width='70' height='50' fill='#9b8bf4' stroke='#000' stroke-width='1'/><rect x='111' y='84' width='70' height='116' fill='#a03c62' stroke='#000' stroke-width='1'/><rect x='181' y='84' width='70' height='116' fill='#fff9b0' stroke='#000' stroke-width='1'/><rect x='251' y='84' width='70' height='116' fill='#b5f0f8' stroke='#000' stroke-width='1'/><rect x='321' y='134' width='70' height='66' fill='#68186f' stroke='#000' stroke-width='1'/><rect x='391' y='167' width='70' height='33' fill='#fc8a8b' stroke='#000' stroke-width='1'/><text x='75' y='220' text-anchor='middle' font-size='12' fill='currentColor'>2 |- 5</text><text x='145' y='220' text-anchor='middle' font-size='12' fill='currentColor'>5 |- 8</text><text x='215' y='220' text-anchor='middle' font-size='12' fill='currentColor'>8 |- 11</text><text x='285' y='220' text-anchor='middle' font-size='12' fill='currentColor'>11 |- 14</text><text x='355' y='220' text-anchor='middle' font-size='12' fill='currentColor'>14 |- 17</text><text x='425' y='220' text-anchor='middle' font-size='12' fill='currentColor'>17 |- 20</text><text x='460' y='240' text-anchor='middle' font-size='12' fill='currentColor'>Classes</text></svg></div>",
          "resposta": "Frequências lidas no gráfico: 3, 7, 7, 7, 4, 2.<br><strong>Média:</strong> $$ \\bar{x} = 10,3 $$<br><strong>Mediana:</strong> Posição $$ 30/2 = 15 $$. Atinge na classe 8|-11. $$ Md = 10,14 $$<br><strong>Moda Bruta:</strong> (Multimodal). Classes 5|-8, 8|-11 e 11|-14 empatam com f = 7. Modas: 6,5; 9,5; e 12,5."
        },
        {
          "id": "LISTA-Q13",
          "origem": "lista P1",
          "dificuldade": "Médio",
          "relevancia": "Alta",
          "enunciado": "Considere o gráfico de barras abaixo que apresenta a distribuição das estaturas (em centímetros) de alunos. Calcule os valores da média e da mediana.<br><br><div style='text-align:center;'><svg viewBox='0 0 500 250' style='width:100%; max-width:500px; height:auto; background:var(--bg); border:1px solid var(--border); font-family:sans-serif; margin:10px 0;'><text x='15' y='140' font-size='12' fill='currentColor' transform='rotate(-90 15,140)'>Frequência</text><line x1='40' y1='20' x2='40' y2='200' stroke='currentColor' stroke-width='1'/><line x1='40' y1='200' x2='480' y2='200' stroke='currentColor' stroke-width='1'/><rect x='60' y='140' width='40' height='60' fill='#7f7f7f'/><text x='80' y='130' text-anchor='middle' font-size='12' fill='currentColor'>4</text><text x='80' y='220' text-anchor='middle' font-size='12' fill='currentColor'>154</text><rect x='130' y='65' width='40' height='135' fill='#7f7f7f'/><text x='150' y='55' text-anchor='middle' font-size='12' fill='currentColor'>9</text><text x='150' y='220' text-anchor='middle' font-size='12' fill='currentColor'>158</text><rect x='200' y='35' width='40' height='165' fill='#7f7f7f'/><text x='220' y='25' text-anchor='middle' font-size='12' fill='currentColor'>11</text><text x='220' y='220' text-anchor='middle' font-size='12' fill='currentColor'>162</text><rect x='270' y='80' width='40' height='120' fill='#7f7f7f'/><text x='290' y='70' text-anchor='middle' font-size='12' fill='currentColor'>8</text><text x='290' y='220' text-anchor='middle' font-size='12' fill='currentColor'>166</text><rect x='340' y='125' width='40' height='75' fill='#7f7f7f'/><text x='360' y='115' text-anchor='middle' font-size='12' fill='currentColor'>5</text><text x='360' y='220' text-anchor='middle' font-size='12' fill='currentColor'>170</text><rect x='410' y='155' width='40' height='45' fill='#7f7f7f'/><text x='430' y='145' text-anchor='middle' font-size='12' fill='currentColor'>3</text><text x='430' y='220' text-anchor='middle' font-size='12' fill='currentColor'>174</text><text x='260' y='245' text-anchor='middle' font-size='12' fill='currentColor'>Estaturas (cm)</text></svg></div>",
          "resposta": "Os valores não estão agrupados em classes, são valores únicos. Média: $$ \\bar{x} = 163 $$. Mediana: O total de observações é 40. Posições 20 e 21 caem na coluna do 162. $$ Md = 162 $$."
        }
      ]
    }
  ]
};

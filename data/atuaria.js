window.COURSES_DATA = window.COURSES_DATA || {};

window.COURSES_DATA["atuaria"] = {
  name: "Introdução à Atuária",
  originConfig: {
    "Lista de Revisão": { sequential: true },
    "Lista Matéria": { sequential: true }
  },
  sections: [
    { id: "tabua", title: "Tábua de Mortalidade", etapa: "P2" },
    { id: "esperanca", title: "Esperança de Vida", etapa: "P2" },
    { id: "anuidades", title: "Anuidades e Rendas", etapa: "P2" },
    { id: "seguros", title: "Seguros de Vida", etapa: "P2" }
  ],
  topics: [
    {
      materia: "Tábua de Mortalidade",
      subtopico: "Probabilidades de Sobrevivência e Morte",
      secId: "tabua",
      exercicios: [
        {
          id: "TAB-PROB-001", numero: 1, origem: "Lista de Revisão", dificuldade: "Médio", relevancia: "Alta",
          enunciado: `Seja a tábua de mortalidade abaixo:
<table border="1" cellpadding="5" style="border-collapse: collapse; margin-top: 8px; margin-bottom: 8px; text-align: center;">
  <tr><th>Idade \\((x)\\)</th><th>\\(q_x\\)</th></tr>
  <tr><td>15</td><td>0,020</td></tr>
  <tr><td>16</td><td>0,025</td></tr>
  <tr><td>17</td><td>0,030</td></tr>
  <tr><td>18</td><td>0,037</td></tr>
  <tr><td>19</td><td>0,040</td></tr>
  <tr><td>20</td><td>0,050</td></tr>
</table>
Calcule:<br>
a) A taxa central de mortalidade aos 16 anos.<br>
b) A probabilidade de uma pessoa de 16 anos morrer antes de completar 17 anos.<br>
c) A probabilidade de uma pessoa de 15 anos chegar viva à idade de 18 anos.<br>
d) A probabilidade de uma pessoa de 17 anos morrer exatamente aos 20 anos.<br>
e) A probabilidade de uma pessoa de 17 anos morrer antes de completar 20 anos.`,
          resposta: `A partir de \\( q_x \\), podemos encontrar \\( p_x = 1 - q_x \\):<br>
\\( p_{15} = 0,980 \\)<br>
\\( p_{16} = 0,975 \\)<br>
\\( p_{17} = 0,970 \\)<br>
\\( p_{18} = 0,963 \\)<br>
\\( p_{19} = 0,960 \\)<br>
\\( p_{20} = 0,950 \\)<br><br>
a) Taxa central de mortalidade aos 16 anos \\((m_{16})\\):<br>
$$ m_{16} = \\frac{q_{16}}{1 - \\frac{1}{2}q_{16}} = \\frac{0,025}{1 - 0,0125} = 0,0253 $$<br>
b) Probabilidade de morrer antes dos 17 anos \\((q_{16})\\):<br>
$$ q_{16} = 0,025 $$<br>
c) Probabilidade de chegar viva aos 18 \\(({}_3p_{15})\\):<br>
$$ {}_3p_{15} = p_{15} \\cdot p_{16} \\cdot p_{17} = 0,98 \\times 0,975 \\times 0,97 = 0,9268 $$<br>
d) Morrer exatamente aos 20 \\(({}_{3|}q_{17})\\):<br>
Significa sobreviver por 3 anos e morrer no 4º ano.<br>
$$ {}_{3|}q_{17} = p_{17} \\cdot p_{18} \\cdot p_{19} \\cdot q_{20} = 0,97 \\times 0,963 \\times 0,96 \\times 0,05 = 0,0448 $$<br>
e) Morrer antes de completar 20 anos \\(({}_3q_{17})\\):<br>
$$ {}_3q_{17} = 1 - {}_3p_{17} = 1 - (p_{17} \\cdot p_{18} \\cdot p_{19}) = 1 - (0,97 \\times 0,963 \\times 0,96) = 1 - 0,8968 = 0,1032 $$`
        },
        {
          id: "TAB-PROB-002", numero: 1, origem: "Lista Matéria", dificuldade: "Fácil", relevancia: "Média",
          enunciado: `Exemplo 1. Dada a tábua hipotética abaixo:
<table border="1" cellpadding="5" style="border-collapse: collapse; margin-top: 8px; margin-bottom: 8px; text-align: center;">
  <tr><th>\\(X\\)</th><th>\\(q_x\\)</th></tr>
  <tr><td>0</td><td>0,005</td></tr>
  <tr><td>1</td><td>0,001</td></tr>
  <tr><td>2</td><td>0,002</td></tr>
  <tr><td>99</td><td>0,7</td></tr>
  <tr><td>100</td><td>1</td></tr>
</table>
Determine a probabilidade de uma pessoa de 0 ano morrer antes de completar 1 ano, a de 2 anos antes de 3 anos, e a de 99 anos antes de 100 anos.`,
          resposta: `Probabilidade de uma pessoa de 0 ano morrer antes de completar 1 ano = \\( q_0 = 0,005 \\)<br>
Probabilidade de uma pessoa de 2 anos morrer antes de completar 3 anos = \\( q_2 = 0,002 \\)<br>
Probabilidade de uma pessoa de 99 anos morrer antes de completar 100 anos = \\( q_{99} = 0,7 \\)`
        },
        {
          id: "TAB-PROB-004", numero: 3, origem: "Lista Matéria", dificuldade: "Médio", relevancia: "Alta",
          enunciado: `Exercício 1. Seja a tábua de mortalidade:
<table border="1" cellpadding="5" style="border-collapse: collapse; margin-top: 8px; margin-bottom: 8px; text-align: center;">
  <tr><th>\\(X\\)</th><th>\\(q_x\\)</th><th>\\(p_x\\)</th></tr>
  <tr><td>30</td><td>0,08</td><td>0,92</td></tr>
  <tr><td>31</td><td>0,09</td><td>0,91</td></tr>
  <tr><td>32</td><td>0,11</td><td>0,89</td></tr>
  <tr><td>33</td><td>0,13</td><td>0,87</td></tr>
  <tr><td>34</td><td>0,14</td><td>0,86</td></tr>
  <tr><td>35</td><td>0,16</td><td>0,84</td></tr>
</table>
Calcule:<br>
a) \\( {}_3p_{30} \\)<br>
b) Probabilidade de uma pessoa de 30 anos morrer exatamente com 33 anos<br>
c) Probabilidade de uma pessoa de 30 anos morrer entre 30 e 33 anos<br>
d) Probabilidade de uma pessoa de 32 anos morrer com 35 anos`,
          resposta: `a) $$ {}_3p_{30} = p_{30} \\cdot p_{31} \\cdot p_{32} = 0,92 \\times 0,91 \\times 0,89 = 0,7451 $$<br>
b) $$ {}_{3|}q_{30} = {}_3p_{30} \\cdot q_{33} = 0,7451 \\times 0,13 = 0,0968 $$<br>
c) $$ {}_3q_{30} = 1 - {}_3p_{30} = 1 - 0,7451 = 0,2549 $$<br>
d) Morrer com 35 anos tendo hoje 32 significa chegar vivo aos 35 e morrer no ano seguinte (entre 35 e 36).<br>
$$ {}_{3|}q_{32} = p_{32} \\cdot p_{33} \\cdot p_{34} \\cdot q_{35} = 0,89 \\times 0,87 \\times 0,86 \\times 0,16 = 0,1065 $$`
        },
        {
          id: "TAB-PROB-006", numero: 6, origem: "Lista Matéria", dificuldade: "Médio", relevancia: "Alta",
          enunciado: `Exercício 2. Seja a tábua de mortalidade:
<table border="1" cellpadding="5" style="border-collapse: collapse; margin-top: 8px; margin-bottom: 8px; text-align: center;">
  <tr><th>\\(X\\)</th><th>\\(q_x\\)</th><th>\\(p_x\\)</th></tr>
  <tr><td>92</td><td>0,05</td><td>0,95</td></tr>
  <tr><td>93</td><td>0,15</td><td>0,85</td></tr>
  <tr><td>94</td><td>0,25</td><td>0,75</td></tr>
  <tr><td>95</td><td>0,31</td><td>0,69</td></tr>
  <tr><td>96</td><td>0,42</td><td>0,58</td></tr>
  <tr><td>97</td><td>0,50</td><td>0,50</td></tr>
  <tr><td>98</td><td>0,80</td><td>0,20</td></tr>
  <tr><td>99</td><td>1,00</td><td>0</td></tr>
</table>
Calcule:<br>
a) Probabilidade de uma pessoa de 92 anos chegar viva à idade de 95 anos.<br>
b) Probabilidade de uma pessoa de 92 anos morrer exatamente com 96 anos.<br>
c) Probabilidade de uma pessoa de 92 anos não chegar viva à idade de 97 anos.<br>
d) Taxa Central de mortalidade aos 92 anos.`,
          resposta: `a) $$ {}_3p_{92} = 0,95 \\times 0,85 \\times 0,75 = 0,6056 $$<br>
b) $$ {}_{4|}q_{92} = (0,95 \\times 0,85 \\times 0,75 \\times 0,69) \\cdot q_{96} = 0,4178 \\times 0,42 = 0,1755 $$<br>
c) $$ {}_5q_{92} = 1 - {}_5p_{92} = 1 - (0,95 \\times 0,85 \\times 0,75 \\times 0,69 \\times 0,58) = 1 - 0,2423 = 0,7577 $$<br>
d) $$ m_{92} = \\frac{q_{92}}{1 - 0,5 \\cdot q_{92}} = \\frac{0,05}{1 - 0,025} = \\frac{0,05}{0,975} = 0,05128 $$`
        }
      ]
    },
    {
      materia: "Tábua de Mortalidade",
      subtopico: "Funções Biométricas",
      secId: "tabua",
      exercicios: [
        {
          id: "TAB-FUNC-001", numero: 2, origem: "Lista Matéria", dificuldade: "Fácil", relevancia: "Alta",
          enunciado: `Exemplo 2. Complete as colunas \\( p_x, l_x \\) e \\( d_x \\) para as idades de 0 a 3, partindo de \\( l_0 = 10.000 \\):
<table border="1" cellpadding="5" style="border-collapse: collapse; margin-top: 8px; margin-bottom: 8px; text-align: center;">
  <tr><th>\\(X\\)</th><th>\\(q_x\\)</th><th>\\(p_x\\)</th><th>\\(l_x\\)</th><th>\\(d_x\\)</th></tr>
  <tr><td>0</td><td>0,01</td><td></td><td></td><td></td></tr>
  <tr><td>1</td><td>0,02</td><td></td><td></td><td></td></tr>
  <tr><td>2</td><td>0,03</td><td></td><td></td><td></td></tr>
  <tr><td>3</td><td>0,035</td><td></td><td></td><td></td></tr>
</table>`,
          resposta: `Fórmulas: \\( p_x = 1 - q_x \\); \\( l_{x+1} = l_x \\cdot p_x \\); \\( d_x = l_x \\cdot q_x \\)<br><br>
Idade 0: \\( p_0 = 0,99 \\); \\( l_0 = 10.000 \\); \\( d_0 = 100 \\)<br>
Idade 1: \\( p_1 = 0,98 \\); \\( l_1 = 9.900 \\); \\( d_1 = 198 \\)<br>
Idade 2: \\( p_2 = 0,97 \\); \\( l_2 = 9.702 \\); \\( d_2 = 291,06 \\)<br>
Idade 3: \\( p_3 = 0,965 \\); \\( l_3 = 9.410,94 \\); \\( d_3 = 329,38 \\)`
        },
        {
          id: "TAB-FUNC-002", numero: 4, origem: "Lista Matéria", dificuldade: "Fácil", relevancia: "Média",
          enunciado: `Exemplo 3. Com base na tabela, qual a taxa central de mortalidade com idade 100? (Assuma \\( q_{100} = 1 \\)).`,
          resposta: `$$ m_{100} = \\frac{q_{100}}{1 - 0,5 \\cdot q_{100}} = \\frac{1}{1 - 0,5} = \\frac{1}{0,5} = 2 $$`
        }
      ]
    },
    {
      materia: "Esperança de Vida",
      subtopico: "Expectativa Completa e Incompleta",
      secId: "esperanca",
      exercicios: [
        {
          id: "ESP-VIDA-001", numero: 2, origem: "Lista de Revisão", dificuldade: "Difícil", relevancia: "Alta",
          enunciado: `Seja a tábua de mortalidade:
<table border="1" cellpadding="5" style="border-collapse: collapse; margin-top: 8px; margin-bottom: 8px; text-align: center;">
  <tr><th>Idade \\((x)\\)</th><th>\\(q_x\\)</th></tr>
  <tr><td>94</td><td>0,45</td></tr>
  <tr><td>95</td><td>0,50</td></tr>
  <tr><td>96</td><td>0,53</td></tr>
  <tr><td>97</td><td>0,60</td></tr>
  <tr><td>98</td><td>0,72</td></tr>
  <tr><td>99</td><td>0,80</td></tr>
  <tr><td>100</td><td>1,00</td></tr>
</table>
Calcule:<br>
a) Expectativa de vida completa aos 97 anos.<br>
b) Expectativa de vida incompleta aos 96 anos.<br>
c) Expectativa de vida completa aos 96 anos.`,
          resposta: `Construindo a coluna de sobreviventes \\((l_x)\\) a partir de uma raiz hipotética \\( l_{94} = 10.000 \\), sabendo que \\( p_x = 1 - q_x \\):<br>
\\( l_{94} = 10.000 \\)<br>
\\( l_{95} = 10.000 \\times 0,55 = 5.500 \\)<br>
\\( l_{96} = 5.500 \\times 0,50 = 2.750 \\)<br>
\\( l_{97} = 2.750 \\times 0,47 = 1.292,50 \\)<br>
\\( l_{98} = 1.292,50 \\times 0,40 = 517 \\)<br>
\\( l_{99} = 517 \\times 0,20 = 144,76 \\)<br>
\\( l_{100} = 144,76 \\times 0,20 = 28,952 \\)<br><br>
a) Expectativa de vida completa aos 97 anos \\((e^\\circ_{97})\\):<br>
$$ e^\\circ_{97} = 0,5 + \\frac{l_{98} + l_{99} + l_{100}}{l_{97}} = 0,5 + \\frac{517 + 144,76 + 28,952}{1.292,50} = 0,5 + 0,5344 = 1,0344 \\text{ anos} $$<br>
b) Expectativa de vida incompleta aos 96 anos \\((e_{96})\\):<br>
$$ e_{96} = \\frac{l_{97} + l_{98} + l_{99} + l_{100}}{l_{96}} = \\frac{1.292,50 + 517 + 144,76 + 28,952}{2.750} = 0,7212 \\text{ anos} $$<br>
c) Expectativa de vida completa aos 96 anos \\((e^\\circ_{96})\\):<br>
$$ e^\\circ_{96} = 0,5 + e_{96} = 0,5 + 0,7212 = 1,2212 \\text{ anos} $$`
        },
        {
          id: "ESP-VIDA-002", numero: 5, origem: "Lista Matéria", dificuldade: "Médio", relevancia: "Alta",
          enunciado: `Exemplo 4. Com base na tabela, calcule a expectativa de vida completa e a expectativa de vida incompleta aos 95 anos.
<table border="1" cellpadding="5" style="border-collapse: collapse; margin-top: 8px; margin-bottom: 8px; text-align: center;">
  <tr><th>\\(x\\)</th><th>\\(q_x\\)</th><th>\\(p_x\\)</th><th>\\(l_x\\)</th><th>\\(d_x\\)</th></tr>
  <tr><td>95</td><td>0,2</td><td>0,8</td><td>10.000</td><td>2.000</td></tr>
  <tr><td>96</td><td>0,4</td><td>0,6</td><td>8.000</td><td>3.200</td></tr>
  <tr><td>97</td><td>0,5</td><td>0,5</td><td>4.800</td><td>2.400</td></tr>
  <tr><td>98</td><td>0,6</td><td>0,4</td><td>2.400</td><td>1.440</td></tr>
  <tr><td>99</td><td>0,7</td><td>0,3</td><td>960</td><td>672</td></tr>
  <tr><td>100</td><td>1,0</td><td>0,0</td><td>288</td><td>288</td></tr>
</table>`,
          resposta: `Expectativa de vida incompleta \\((e_{95})\\):<br>
$$ e_{95} = \\frac{8.000 + 4.800 + 2.400 + 960 + 288}{10.000} = 1,6448 \\text{ anos} $$<br>
Expectativa de vida completa \\((e^\\circ_{95})\\):<br>
$$ e^\\circ_{95} = e_{95} + 0,5 = 1,6448 + 0,5 = 2,1448 \\text{ anos} $$`
        }
      ]
    },
    {
      materia: "Anuidades e Rendas",
      subtopico: "Rendas Vitalícias e Temporárias",
      secId: "anuidades",
      exercicios: [
        {
          id: "ANU-REND-001", numero: 3, origem: "Lista de Revisão", dificuldade: "Difícil", relevancia: "Alta",
          enunciado: `Utilizando a tábua de mortalidade da questão anterior (idades 94 a 100), e considerando que a taxa de juros garantida pela companhia é de 3% a.a., calcule:<br>
d) \\( a_{97} \\)<br>
e) \\( \\ddot{a}_{97} \\)<br>
f) \\( a_{94:\\overline{2|}} \\)`,
          resposta: `d) \\( a_{97} \\) (Anuidade vitalícia postecipada, \\( i = 3\\% \\)):<br>
$$ a_{97} = \\frac{l_{98}}{l_{97}}(1,03)^{-1} + \\frac{l_{99}}{l_{97}}(1,03)^{-2} + \\frac{l_{100}}{l_{97}}(1,03)^{-3} $$
$$ = 0,3883 + 0,1056 + 0,0205 = 0,5144 $$<br>
e) \\( \\ddot{a}_{97} \\) (Anuidade vitalícia antecipada):<br>
$$ \\ddot{a}_{97} = 1 + a_{97} = 1 + 0,5144 = 1,5144 $$<br>
f) \\( a_{94:\\overline{2|}} \\) (Anuidade temporária por 2 anos, postecipada):<br>
$$ a_{94:\\overline{2|}} = p_{94}(1,03)^{-1} + p_{94} \\cdot p_{95}(1,03)^{-2} $$
$$ = 0,55(1,03)^{-1} + (0,55 \\times 0,50)(1,03)^{-2} = 0,5340 + 0,2592 = 0,7932 $$`
        },
        {
          id: "ANU-REND-003", numero: 10, origem: "Lista Matéria", dificuldade: "Fácil", relevancia: "Alta",
          enunciado: `Exemplo 8. Uma pessoa de 60 anos quer comprar uma renda postecipada vitalícia atuarial de R$ 50.000,00. Sabendo que a seguradora arbitrou \\( a_{60} = 25 \\), qual o valor do prêmio puro?`,
          resposta: `$$ \\text{Prêmio} = \\text{Renda} \\times a_{60} $$
$$ \\text{Prêmio} = 50.000 \\times 25 = \\text{R\\$ } 1.250.000,00 $$`
        },
        {
          id: "ANU-REND-004", numero: 11, origem: "Lista Matéria", dificuldade: "Médio", relevancia: "Alta",
          enunciado: `Exemplo 9. Seja a tábua de mortalidade dada uma taxa de juros garantida de 5% a.a.
<table border="1" cellpadding="5" style="border-collapse: collapse; margin-top: 8px; margin-bottom: 8px; text-align: center;">
  <tr><th>\\(X\\)</th><th>\\(q_x\\)</th><th>\\(p_x\\)</th></tr>
  <tr><td>96</td><td>0,4</td><td>0,6</td></tr>
  <tr><td>97</td><td>0,45</td><td>0,55</td></tr>
  <tr><td>98</td><td>0,8</td><td>0,2</td></tr>
  <tr><td>99</td><td>1</td><td>0</td></tr>
</table>
Calcule \\( \\ddot{a}_{96} \\).<br>
Qual o valor do prêmio à vista para uma pessoa de 96 anos receber uma renda vitalícia, no início de cada ano, de R$ 150.000?`,
          resposta: `$$ \\ddot{a}_{96} = 1 + v \\cdot p_{96} + v^2 \\cdot {}_2p_{96} + v^3 \\cdot {}_3p_{96} $$
$$ \\ddot{a}_{96} = 1 + (1,05)^{-1} \\cdot 0,60 + (1,05)^{-2} \\cdot (0,60 \\times 0,55) + (1,05)^{-3} \\cdot (0,60 \\times 0,55 \\times 0,20) $$
$$ \\ddot{a}_{96} = 1 + 0,5714 + 0,2993 + 0,0570 = 1,9277 $$<br>
$$ \\text{Prêmio} = \\text{Renda} \\times \\ddot{a}_{96} = 150.000 \\times 1,9277 = \\text{R\\$ } 289.155,00 $$`
        }
      ]
    },
    {
      materia: "Anuidades e Rendas",
      subtopico: "Cálculo de Prêmios para Rendas",
      secId: "anuidades",
      exercicios: [
        {
          id: "ANU-REND-002", numero: 5, origem: "Lista de Revisão", dificuldade: "Fácil", relevancia: "Alta",
          enunciado: `3. Uma pessoa de 60 anos quer pagar um prêmio único e se aposentar. Ela quer receber R$ 50.000,00 no fim de cada ano. Seja a tabela de anuidades da seguradora:
<table border="1" cellpadding="5" style="border-collapse: collapse; margin-top: 8px; margin-bottom: 8px; text-align: center;">
  <tr><th>Anuidade</th><th>Valor</th></tr>
  <tr><td>\\( a_{60} \\)</td><td>20,0</td></tr>
  <tr><td>\\( \\ddot{a}_{60} \\)</td><td>21,0</td></tr>
  <tr><td>\\( a_{61} \\)</td><td>18,7</td></tr>
  <tr><td>\\( \\ddot{a}_{61} \\)</td><td>19,7</td></tr>
</table>
Qual o valor do prêmio? (Dica: prêmio = renda × anuidade unica)`,
          resposta: `O indivíduo deseja receber um valor ao final de cada ano (caracterizando uma anuidade postecipada) para o resto da vida. Logo, utilizaremos a anuidade \\( a_{60} \\) (valor 20,0).<br>
A fórmula do prêmio único para uma anuidade é:
$$ \\text{Prêmio} = \\text{Renda} \\times \\text{Fator de Anuidade} $$
$$ P = R \\cdot a_{60} = 50.000,00 \\times 20 = \\text{R\\$ } 1.000.000,00 $$`
        }
      ]
    },
    {
      materia: "Seguros de Vida",
      subtopico: "Seguro Dotal Puro",
      secId: "seguros",
      exercicios: [
        {
          id: "SEG-DOT-001", numero: 4, origem: "Lista de Revisão", dificuldade: "Médio", relevancia: "Alta",
          enunciado: `Considerando os dados da questão anterior (Tábua de mortalidade para idades de 94 a 100 e taxa de juros de 3% a.a.):<br>
g) Uma pessoa de 94 anos quer contratar um seguro dotal puro com capital segurado de R$ 250.000,00. Ela receberá esse valor se chegar viva aos 99 anos. Qual o valor do prêmio puro?`,
          resposta: `Dotal Puro (Capital de R$ 250.000 recebido aos 99 anos por pessoa de 94):<br>
$$ P = C.S \\cdot (1 + i)^{-5} \\cdot {}_5p_{94} $$
Calculando a probabilidade de sobrevivência:
$$ {}_5p_{94} = p_{94} \\cdot p_{95} \\cdot p_{96} \\cdot p_{97} \\cdot p_{98} = 0,55 \\times 0,50 \\times 0,47 \\times 0,40 \\times 0,28 = 0,014476 $$
Calculando o Prêmio:
$$ P = 250.000 \\cdot (1,03)^{-5} \\cdot 0,014476 = 3.121,78 $$
Resposta: R$ 3.121,78`
        },
        {
          id: "SEG-DOT-002", numero: 7, origem: "Lista Matéria", dificuldade: "Fácil", relevancia: "Média",
          enunciado: `Exemplo 5. Uma pessoa de 40 anos quer contratar um seguro de vida com sobrevivência que pague um capital segurado de 200 mil, se ele chegar vivo aos 65 anos. Sabendo que a probabilidade de uma pessoa de 40 anos chegar viva à idade de 65 anos é 0,83, e que a seguradora garante uma taxa de juros de 6% a.a., qual o valor do prêmio puro?`,
          resposta: `$$ \\text{Prêmio} = C.S \\cdot (1+i)^{-n} \\cdot {}_np_x $$
$$ \\text{Prêmio} = 200.000 \\cdot (1,06)^{-25} \\cdot 0,83 = 200.000 \\cdot 0,23299 \\cdot 0,83 = \\text{R\\$ } 38.677,78 $$`
        },
        {
          id: "SEG-DOT-003", numero: 8, origem: "Lista Matéria", dificuldade: "Médio", relevancia: "Alta",
          enunciado: `Exemplo 6. Uma pessoa de 35 anos paga um prêmio de R$ 50.000 para receber um capital segurado, se chegar viva a idade de 60 anos. A seguradora garante uma taxa de juros de 3% a.a. e no contrato estabelece uma tábua de mortalidade que estima tal probabilidade de sobrevivência em 0,90 \\(({}_{25}p_{35} = 0,90)\\). Qual o valor do capital segurado contratado?`,
          resposta: `$$ C.S = \\frac{\\text{Prêmio}}{(1+i)^{-n} \\cdot {}_np_x} $$
$$ C.S = \\frac{50.000}{(1,03)^{-25} \\cdot 0,90} = 50.000 \\times 2,0937 \\times 1,1111 = \\text{R\\$ } 116.322,22 $$`
        },
        {
          id: "SEG-DOT-004", numero: 9, origem: "Lista Matéria", dificuldade: "Difícil", relevancia: "Alta",
          enunciado: `Exemplo 7. Uma seguradora vendeu seguro dotal puro para 10.000 pessoas de 20 anos. Cobrou um prêmio de R$ 50.000,00 cada no mesmo momento. No contrato garantiram uma taxa de juros de 3% a.a. O C.S será recebido por quem chegar vivo aos 50 anos. A tábua de mortalidade estima que sobrevivem 9.500 pessoas \\(({}_{30}p_{20} = 0,95)\\). Qual o capital segurado (C.S)?`,
          resposta: `Fundo total arrecadado (Prêmios) = \\( 10.000 \\times 50.000 = 500.000.000,00 \\)<br>
Montante final (capitalizado a 3% a.a. por 30 anos) = \\( 500.000.000 \\cdot (1,03)^{30} = 1.213.631.235,59 \\)<br>
Quantidade de Sobreviventes = \\( 10.000 \\times 0,95 = 9.500 \\)<br>
$$ C.S = \\frac{\\text{Montante final}}{\\text{Sobreviventes}} = \\frac{1.213.631.235,59}{9.500} = \\text{R\\$ } 127.750,66 $$`
        }
      ]
    }
  ]
};
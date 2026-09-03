window.COURSES_DATA = window.COURSES_DATA || {};

const SVG_CON_DEF_002 = `<div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:8px;padding:10px;display:flex;justify-content:center;">
    <svg viewBox="0 0 500 360" width="480" height="340" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#334155"/>
            </marker>
        </defs>
        <line x1="40" y1="260" x2="450" y2="260" stroke="#334155" stroke-width="2" marker-end="url(#arrow)" />
        <text x="460" y="265" font-family="Times New Roman, serif" font-style="italic" font-size="20" fill="#1e293b">x</text>
        <line x1="90" y1="310" x2="90" y2="40" stroke="#334155" stroke-width="2" marker-end="url(#arrow)" />
        <text x="85" y="30" font-family="Times New Roman, serif" font-style="italic" font-size="20" fill="#1e293b">y</text>
        <line x1="90" y1="130" x2="250" y2="130" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5,5" />
        <line x1="250" y1="260" x2="250" y2="130" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5,5" />
        <path d="M 60,265 C 130,220 180,140 244,130.5" fill="none" stroke="#2563eb" stroke-width="3.5" stroke-linecap="round" />
        <path d="M 256,129.5 C 310,120 370,160 430,150" fill="none" stroke="#2563eb" stroke-width="3.5" stroke-linecap="round" />
        <circle cx="250" cy="130" r="6" fill="#ffffff" stroke="#2563eb" stroke-width="3" />
        <text x="65" y="136" font-family="Times New Roman, serif" font-style="italic" font-size="20" font-weight="bold" fill="#0f172a">L</text>
        <text x="242" y="288" font-family="Times New Roman, serif" font-style="italic" font-size="20" font-weight="bold" fill="#0f172a">x<tspan font-size="14" dy="4">0</tspan></text>
        <text x="410" y="135" font-family="Times New Roman, serif" font-style="italic" font-size="19" font-weight="bold" fill="#2563eb">y = f(x)</text>
    </svg>
</div>`;

const SVG_LIM_INF_001 = `<svg width="500" height="350" viewBox="0 0 500 350" xmlns="http://www.w3.org/2000/svg">
  <line x1="20" y1="60" x2="480" y2="60" stroke="black" stroke-width="1.5" />
  <text x="475" y="50" font-family="sans-serif" font-size="16" font-style="italic" fill="black">x</text>
  <line x1="100" y1="10" x2="100" y2="340" stroke="black" stroke-width="1.5" />
  <text x="110" y="25" font-family="sans-serif" font-size="16" font-style="italic" fill="black">f(x)</text>
  <line x1="250" y1="10" x2="250" y2="340" stroke="#d62728" stroke-width="2" stroke-dasharray="6,4" />
  <text x="260" y="50" font-family="sans-serif" font-size="18" font-style="italic" fill="#d62728">a</text>
  <path d="M 20 62 C 180 62, 235 80, 245 340" fill="none" stroke="#1f77b4" stroke-width="3" />
  <path d="M 480 62 C 320 62, 265 80, 255 340" fill="none" stroke="#1f77b4" stroke-width="3" />
  <text x="290" y="220" font-family="sans-serif" font-size="20" fill="black">lim f(x) = -∞</text>
  <text x="290" y="235" font-family="sans-serif" font-size="14" fill="black">x→a</text>
</svg>`;

const SVG_CON_GRA_001 = `<svg width="650" height="350" viewBox="0 0 650 350" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="black" />
    </marker>
  </defs>
  <line x1="40" y1="200" x2="610" y2="200" stroke="black" stroke-width="2" marker-end="url(#arrow)" />
  <line x1="325" y1="320" x2="325" y2="40" stroke="black" stroke-width="2" marker-end="url(#arrow)" />
  <text x="620" y="205" font-family="sans-serif" font-size="20" font-style="italic" fill="black">x</text>
  <text x="340" y="45" font-family="sans-serif" font-size="20" font-style="italic" fill="black">y</text>
  <line x1="185" y1="130" x2="185" y2="270" stroke="black" stroke-width="0.8" stroke-dasharray="6,4" />
  <line x1="465" y1="90" x2="465" y2="270" stroke="black" stroke-width="0.8" stroke-dasharray="6,4" />
  <text x="165" y="235" font-family="sans-serif" font-size="20" font-style="italic" fill="black">p</text>
  <text x="478" y="235" font-family="sans-serif" font-size="20" font-style="italic" fill="black">q</text>
  <line x1="40" y1="130" x2="185" y2="130" stroke="black" stroke-width="3" />
  <line x1="185" y1="270" x2="465" y2="270" stroke="black" stroke-width="3" />
  <path d="M 465 90 C 495 150, 545 150, 575 100 S 615 60, 630 80" fill="none" stroke="black" stroke-width="3" />
  <circle cx="185" cy="130" r="5" fill="white" stroke="black" stroke-width="2" />
  <circle cx="185" cy="270" r="5" fill="black" stroke="black" stroke-width="2" />
  <circle cx="465" cy="270" r="5" fill="white" stroke="black" stroke-width="2" />
  <circle cx="465" cy="90" r="5" fill="white" stroke="black" stroke-width="2" />
</svg>`;

window.COURSES_DATA["calc1"] = {
  name: "Cálculo 1",
  originConfig: {
    "Prova antiga": { sequential: false },
    "Dado em aula": { sequential: false },
    "Aula de revisão": { sequential: false },
    "Listas de IA": { sequential: false }
  },
  sections: [
    { id: "limites", title: "Limites" },
    { id: "continuidade", title: "Continuidade" },
    { id: "derivadas", title: "Derivadas" },
    { id: "integrais", title: "Integrais" }
  ],
  topics: [
{materia:"Limites", subtopico:"Substituição direta", secId:"limites", exercicios:[
  {id:"LIM-SUB-001", origem:"Prova antiga", dificuldade:"Fácil", relevancia:"Baixa",
   enunciado:"Calcule o limite: $$ \\lim_{x \\to 0} \\frac{5+\\cos(x)}{x+3} $$",
   resposta: "$$ 2 $$"},
  {id:"LIM-SUB-002", origem:"Dado em aula 21/07/2026", dificuldade:"Fácil", relevancia:"Baixa",
   enunciado:"Calcule o limite: $$ \\lim_{x \\to 0} \\left[ e^{\\frac{x^2}{3}} + x^3 + 5 + \\cos(x) \\right] $$",
   resposta: "$$ 7 $$"},
  {id:"LIM-SUB-003", origem:"Gerado a partir das listas Lista 2", dificuldade:"Fácil", relevancia:"Baixa",
   enunciado:"Calcule: $$ \\lim_{x \\to \\pi} [2\\cos(x) + \\sin(x/2)] $$",
   resposta: "$$ -1 $$"},
]},
{materia:"Limites", subtopico:"Fatoração e produtos notáveis", secId:"limites", exercicios:[
  {id:"LIM-FAT-001", origem:"Prova antiga", dificuldade:"Médio", relevancia:"Alta",
   enunciado:"Calcule o limite: $$ \\lim_{x \\to 3} \\frac{x-3}{x^3-27} $$",
   resposta: "$$ \\frac{1}{27} $$"},
  {id:"LIM-FAT-002", origem:"Prova antiga", dificuldade:"Difícil", relevancia:"Alta",
   enunciado:"Calcule: $$ \\lim_{x \\to 2} \\frac{x^6-64}{x-2} $$",
   resposta: "$$ 192 $$"},
  {id:"LIM-FAT-003", origem:"Dado em aula 28/07/2026", dificuldade:"Médio", relevancia:"Média",
   enunciado:"Calcule o limite: $$ \\lim_{x \\to 2} \\frac{x^5-32}{x-2} $$",
   resposta: "$$ 80 $$"},
  {id:"LIM-FAT-004", origem:"Gerado a partir das listas Lista 2", dificuldade:"Fácil", relevancia:"Baixa",
   enunciado:"Calcule, por fatoração: $$ \\lim_{x \\to 4} \\frac{x^2-16}{x-4} $$",
   resposta: "$$ 8 $$"},
]},
{materia:"Limites", subtopico:"Racionalização (Raízes)", secId:"limites", exercicios:[
  {id:"LIM-RAC-001", origem:"Prova antiga", dificuldade:"Muito difícil", relevancia:"Alta",
   enunciado:"Calcule o limite: $$ \\lim_{x \\to 8} \\frac{x-8}{\\sqrt[3]{x} - \\sqrt[3]{8}} $$",
   resposta: "$$ 12 $$"},
  {id:"LIM-RAC-002", origem:"Prova antiga", dificuldade:"Difícil", relevancia:"Alta",
   enunciado:"Calcule: $$ \\lim_{x \\to 1/3} \\frac{\\sqrt[6]{3x}-1}{\\sqrt{3x}-1} $$",
   resposta: "$$ \\frac{1}{3} $$"},
  {id:"LIM-RAC-003", origem:"Gerado a partir das listas Lista 2", dificuldade:"Médio", relevancia:"Média",
   enunciado:"Calcule, racionalizando: $$ \\lim_{x \\to 4} \\frac{\\sqrt{x+5}-3}{x-4} $$",
   resposta: "$$ \\frac{1}{6} $$"},
]},
{materia:"Limites", subtopico:"Trigonométricos clássicos", secId:"limites", exercicios:[
  {id:"LIM-TRI-001", origem:"Prova antiga", dificuldade:"Médio", relevancia:"Alta",
   enunciado:"Calcule o limite: $$ \\lim_{x \\to 0} \\frac{1-\\cos(x)}{x} $$",
   resposta: "$$ 0 $$"},
  {id:"LIM-TRI-002", origem:"Prova antiga", dificuldade:"Médio", relevancia:"Alta",
   enunciado:"Calcule o limite: $$ \\lim_{x \\to 0} \\frac{\\sin(15x)}{3x} $$",
   resposta: "$$ 5 $$"},
  {id:"LIM-TRI-003", origem:"Prova antiga", dificuldade:"Difícil", relevancia:"Alta",
   enunciado:"Calcule os seguintes limites: $$ \\lim_{x \\to 0} \\frac{\\sin(2x)}{\\sin(7x)} $$",
   resposta: "$$ \\frac{2}{7} $$"},
  {id:"LIM-TRI-004", origem:"Prova antiga", dificuldade:"Muito difícil", relevancia:"Alta",
   enunciado:"Calcule os seguintes limites: $$ \\lim_{x \\to 0} \\frac{4-(2\\cos(x))^2}{x^2(3-\\cos(5x))} $$",
   resposta: "$$ 2 $$"},
]},
{materia:"Limites", subtopico:"Laterais e módulo", secId:"limites", exercicios:[
  {id:"LIM-LAT-001", origem:"Prova antiga", dificuldade:"Médio", relevancia:"Alta",
   enunciado:"Calcule, caso exista: $$ \\lim_{x \\to 5} \\frac{|x-5|}{2x-10} $$",
   resposta:"O limite não existe (limite lateral esquerdo é \\( -\\frac{1}{2} \\) e o direito é \\( \\frac{1}{2} \\))."},
  {id:"LIM-LAT-002", origem:"Gerado a partir das listas Lista 2", dificuldade:"Fácil", relevancia:"Média",
   enunciado:"Determine os limites laterais e diga se o limite bilateral existe para \\( f(x) = 2x + 1 \\) se \\( x < 1 \\); e \\( f(x) = x + 4 \\), se \\( x \\ge 1 \\), quando \\( x \\to 1 \\).",
   resposta:"\\( \\lim_{x \\to 1^-} f(x) = 3 \\) e \\( \\lim_{x \\to 1^+} f(x) = 5 \\). O limite bilateral não existe."},
  {id:"LIM-LAT-003", origem:"Aula de revisão", dificuldade:"Médio", relevancia:"Alta",
   enunciado:"Caso exista, calcule \\( \\lim_{x\\to 2} f(x) \\), onde \\( f(x) = \\begin{cases} \\frac{x^2 - 4}{x - 2}, & \\text{se } x > 2 \\\\ 7x - 3, & \\text{se } x \\le 2 \\end{cases} \\)",
   resposta:"O limite bilateral não existe, pois \\( \\lim_{x\\to 2^+} f(x) = 4 \\) e \\( \\lim_{x\\to 2^-} f(x) = 11 \\)."},
]},
{materia:"Limites", subtopico:"Teorema do Confronto", secId:"limites", exercicios:[
  {id:"LIM-CON-001", origem:"Gerado a partir das listas Lista 1", dificuldade:"Médio", relevancia:"Média",
   enunciado:"Sabendo que \\( -1 \\le \\sin\\left(\\frac{1}{x}\\right) \\le 1 \\), calcule: $$ \\lim_{x \\to 0} x^2 \\sin\\left(\\frac{1}{x}\\right) $$",
   resposta: "$$ 0 $$"},
]},
{materia:"Limites", subtopico:"Infinitos e assíntotas", secId:"limites", exercicios:[
  {id:"LIM-INF-001", origem:"Prova antiga", dificuldade:"Médio", relevancia:"Alta",
   enunciado:"Sejam \\( f : \\mathbb{R} \\to \\mathbb{R} \\) uma função e \\( a \\in \\mathbb{R} \\). Defina o significado da expressão $$ \\lim_{x \\to a} f(x) = -\\infty $$ Esboce um desenho para representar.",
   resposta:"Significa que os valores de \\( f(x) \\) decrescem ilimitadamente (ficam arbitrariamente negativos) à medida que \\( x \\) se aproxima de \\( a \\).",
   svg: SVG_LIM_INF_001, 
   svgPos: "resposta"},
]},
{materia:"Continuidade", subtopico:"Análise de gráficos", secId:"continuidade", exercicios:[
  {id:"CON-GRA-001", origem:"Prova antiga", dificuldade:"Fácil", relevancia:"Alta",
   enunciado:"Analise a continuidade da função cujo gráfico é dado abaixo.",
   resposta:"A função apresenta descontinuidades de salto nos pontos \\( p \\) e \\( q \\), pois os limites laterais nesses pontos existem, mas são distintos. É contínua no restante do domínio.",
   svg: SVG_CON_GRA_001},
]},
{materia:"Continuidade", subtopico:"Funções por partes", secId:"continuidade", exercicios:[
  {id:"CON-PAR-001", origem:"Prova antiga", dificuldade:"Médio", relevancia:"Alta",
   enunciado:"Determine o valor de L para que a função dada abaixo seja contínua em 3: $$ f(x) = \\begin{cases} 2x+1, & \\text{se } x \\ne 3 \\\\ L, & \\text{se } x = 3 \\end{cases} $$",
   resposta: "$$ L = 7 $$"},
  {id:"CON-PAR-002", origem:"Prova antiga", dificuldade:"Difícil", relevancia:"Alta",
   enunciado:"Seja $$ f(x) = \\begin{cases} \\frac{x^2-1}{x-1}, & \\text{se } x \\ne 1 \\\\ 2x, & \\text{se } x = 1 \\end{cases} $$ Calcule, caso exista, \\( \\lim_{x \\to 1} f(x) \\). A função \\( f \\) é contínua em \\( x = 1 \\)?",
   resposta: "$$ \\lim_{x \\to 1} f(x) = 2 $$ Sim, a função é contínua em \\( x = 1 \\)."},
  {id:"CON-PAR-003", origem:"Dado em aula 21/07/2026", dificuldade:"Médio", relevancia:"Média",
   enunciado:"Considere a função $$ f(x) = \\begin{cases} \\frac{x^3-8}{x-2}, & \\text{se } x \\ne 2 \\\\ 5, & \\text{se } x = 2 \\end{cases} $$ Essa função é contínua em \\( x = 2 \\)? (Justifique usando limites). Caso não seja, qual deveria ser o valor de \\( f(2) \\) para que ela se tornasse contínua?",
   resposta:"Não é contínua, pois o limite quando \\( x \\to 2 \\) é 12, mas \\( f(2) = 5 \\). Para ser contínua, o valor de \\( f(2) \\) deveria ser 12."},
  {id:"CON-PAR-004", origem:"Prova antiga", dificuldade:"Muito difícil", relevancia:"Alta",
   enunciado:"Considere a função \\( f : \\mathbb{R} \\to \\mathbb{R} \\) dada por: $$ f(x) = \\begin{cases} \\cos(x^2-1)-4, & \\text{se } x > 1 \\\\ \\frac{x^2-x-2}{x+1}, & \\text{se } x < 1 \\\\ 2, & \\text{se } x = 1 \\end{cases} $$ a) Existe \\( \\lim_{x \\to 1} f(x) \\)? b) \\( f \\) é contínua no ponto \\( x = 1 \\)?",
   resposta:"a) Não existe (o limite à esquerda é −1 e o limite à direita é −3). b) Não, pois o limite bilateral não existe."},
  {id:"CON-PAR-005", origem:"Aula de revisão", dificuldade:"Médio", relevancia:"Alta",
   enunciado:"Seja \\( f(x) = \\begin{cases} 2x + 1, & \\text{se } x \\ne 2 \\\\ L, & \\text{se } x = 2 \\end{cases} \\). Encontre o valor de \\( L \\) para que \\( f \\) seja contínua em \\( 2 \\).",
   resposta:"Para \\( f \\) ser contínua em \\( 2 \\), devemos ter \\( \\lim_{x\\to 2} f(x) = f(2) = L \\). Como \\( \\lim_{x\\to 2} (2x + 1) = 2(2) + 1 = 5 \\), segue que \\( L = 5 \\).<br><br><strong>Resposta final:</strong> \\( L = 5 \\)"},
]},
{materia:"Continuidade", subtopico:"Definição formal", secId:"continuidade", exercicios:[
  {id:"CON-DEF-001", origem:"Prova antiga", dificuldade:"Médio", relevancia:"Alta",
   enunciado:"a) Pela definição, o que significa dizer que uma função \\( f \\) é contínua num ponto \\( p \\) do seu domínio? b) Pela definição, o que significa dizer que uma função \\( f \\) é contínua?",
   resposta:"a) Significa que \\( \\lim_{x \\to p} f(x) = f(p) \\). b) Significa que a função é contínua em todos os pontos do seu domínio."},
  {id:"CON-DEF-002", origem:"Aula de revisão", dificuldade:"Médio", relevancia:"Alta",
   enunciado:"A afirmação \\( \\exists \\lim_{x\\to x_0} f(x) \\implies f \\) é contínua em \\( x_0 \\), é verdadeira ou falsa? Justifique sua resposta e esboce um gráfico que ilustre a situação.",
   resposta:"Falsa. A existência do limite \\( \\lim_{x\\to x_0} f(x) = L \\) não garante continuidade, pois o ponto pode não pertencer ao domínio (\\( x_0 \\notin \\text{Dom}(f) \\)) ou o valor da função pode ser diferente do limite (\\( f(x_0) \\ne L \\)).",
   svg: SVG_CON_DEF_002,
   svgPos: "resposta"},
]},
{materia:"Derivadas", subtopico:"Pela definição formal", secId:"derivadas", exercicios:[
  {id:"DER-DEF-001", origem:"Prova antiga", dificuldade:"Difícil", relevancia:"Alta",
   enunciado:"Seja \\( f(x) = x^4 - 16 \\). Calcule \\( f'(2) \\) pela definição.",
   resposta: "$$ 32 $$"},
  {id:"DER-DEF-002", origem:"Prova antiga", dificuldade:"Médio", relevancia:"Alta",
   enunciado:"Use a definição de derivada para calcular \\( f'(x) \\) onde \\( f(x) = x^2 - 3x \\).",
   resposta:"$$ f'(x) = 2x - 3 $$"},
  {id:"DER-DEF-003", origem:"Dado em aula 04/08/2026", dificuldade:"Difícil", relevancia:"Média",
   enunciado:"Calcule \\( f'(3) \\) usando a definição para a função \\( f(x) = ax^2 + bx + c \\).",
   resposta:"$$ f'(3) = 6a + b $$"},
  {id:"DER-DEF-004", origem:"Aula de revisão", dificuldade:"Difícil", relevancia:"Alta",
   enunciado:"Use a definição de derivada para encontrar \\( f'(2) \\), sendo \\( f(x) = x^4 - 16 \\).",
   resposta:"$$ f'(2) = \\lim_{x\\to 2} \\frac{f(x) - f(2)}{x - 2} = \\lim_{x\\to 2} \\frac{x^4 - 16}{x - 2} = \\lim_{x\\to 2} \\frac{(x-2)(x^3 + 2x^2 + 4x + 8)}{x-2} $$<br><br>$$ = 2^3 + 2(2^2) + 4(2) + 8 = 32 $$<br><br><strong>Resposta final:</strong> \\( f'(2) = 32 \\)"},
]},
{materia:"Derivadas", subtopico:"Regras do produto e quociente", secId:"derivadas", exercicios:[
  {id:"DER-PRO-001", origem:"Dado em aula 04/08/2026", dificuldade:"Fácil", relevancia:"Média",
   enunciado:"Calcule a derivada de \\( f(x) = x^{13} + \\sin(x) - e^x \\).",
   resposta:"$$ f'(x) = 13x^{12} + \\cos(x) - e^x $$"},
  {id:"DER-PRO-002", origem:"Prova antiga", dificuldade:"Médio", relevancia:"Alta",
   enunciado:"Calcule a derivada de \\( y = e^x + x^3\\cos(x) \\).",
   resposta:"$$ y' = e^x + x^2(3\\cos(x) - x\\sin(x)) $$"},
  {id:"DER-PRO-003", origem:"Dado em aula 04/08/2026", dificuldade:"Médio", relevancia:"Média",
   enunciado:"Calcule a derivada de \\( f(x) = \\cos(x) \\cdot \\ln(x) \\).",
   resposta:"$$ f'(x) = \\frac{\\cos(x)}{x} - \\sin(x)\\ln(x) $$"},
  {id:"DER-PRO-004", origem:"Prova antiga", dificuldade:"Fácil", relevancia:"Alta",
   enunciado:"Derive a função: \\( g(x) = \\frac{2x+1}{x} \\).",
   resposta:"$$ g'(x) = -\\frac{1}{x^2} $$"},
  {id:"DER-PRO-005", origem:"Dado em aula 04/08/2026", dificuldade:"Fácil", relevancia:"Baixa",
   enunciado:"Calcule a derivada de \\( f(x) = \\tan(x) \\) (Dica: utilize \\( \\frac{\\sin(x)}{\\cos(x)} \\) e a regra do quociente).",
   resposta:"$$ f'(x) = \\sec^2(x) $$"},
]},
{materia:"Derivadas", subtopico:"Regra da cadeia", secId:"derivadas", exercicios:[
  {id:"DER-CAD-001", origem:"Dado em aula 11/08/2026", dificuldade:"Fácil", relevancia:"Média",
   enunciado:"Calcule a derivada de \\( f(x) = \\sin(x^3) \\).",
   resposta:"$$ f'(x) = 3x^2\\cos(x^3) $$"},
  {id:"DER-CAD-002", origem:"Dado em aula 14/08/2026", dificuldade:"Médio", relevancia:"Alta",
   enunciado:"Calcule a derivada de \\( f(x) = \\tan(e^{x^2+2}) \\).",
   resposta:"$$ f'(x) = 2xe^{x^2+2}\\sec^2(e^{x^2+2}) $$"},
  {id:"DER-CAD-003", origem:"Prova antiga", dificuldade:"Difícil", relevancia:"Alta",
   enunciado:"Calcule a derivada de \\( y = \\sin(\\ln(x^2+e^x)) \\).",
   resposta:"$$ y' = \\cos(\\ln(x^2+e^x)) \\cdot \\frac{2x+e^x}{x^2+e^x} $$"},
  {id:"DER-CAD-004", origem:"Dado em aula 14/08/2026", dificuldade:"Difícil", relevancia:"Alta",
   enunciado:"Calcule a derivada de \\( f(x) = (x\\cos(x^5))^4 \\).",
   resposta:"$$ f'(x) = 4x^3\\cos^3(x^5)[\\cos(x^5) - 5x^5\\sin(x^5)] $$"},
  {id:"DER-CAD-005", origem:"Dado em aula 14/08/2026", dificuldade:"Muito difícil", relevancia:"Média",
   enunciado:"Calcule a derivada de $$ f(x) = \\frac{-\\sin(\\cos(e^{x^3}))}{\\ln(x^2+1)} $$",
   resposta:"$$ f'(x) = \\frac{3x^2e^{x^3}\\sin(e^{x^3})\\cos(\\cos(e^{x^3}))\\ln(x^2+1) + \\sin(\\cos(e^{x^3}))\\left(\\frac{2x}{x^2+1}\\right)}{(\\ln(x^2+1))^2} $$"},
  {id:"DER-CAD-006", origem:"Aula de revisão", dificuldade:"Difícil", relevancia:"Alta",
   enunciado:"Derive a função: \\( f(x) = \\frac{e^{x^2 + 2}}{\\ln(\\cos(x^2 + 1))} \\).",
   resposta:"\\( f'(x) = \\frac{2x\\, e^{x^2 + 2}\\ln(\\cos(x^2 + 1)) + 2x\\, e^{x^2 + 2}\\tan(x^2 + 1)}{\\ln^2(\\cos(x^2 + 1))} \\)"},
]},
{materia:"Integrais", subtopico:"Integração direta", secId:"integrais", exercicios:[
  {id:"INT-DIR-001", origem:"Prova antiga", dificuldade:"Fácil", relevancia:"Alta",
   enunciado:"Calcule a integral abaixo e verifique se o resultado obtido está correto: $$ \\int (3x^2 - 4x + 2) \\, dx $$",
   resposta: "$$ x^3 - 2x^2 + 2x + C, \\quad C \\in \\mathbb{R} $$"},
  {id:"INT-DIR-002", origem:"Gerado a partir das listas Lista 1", dificuldade:"Médio", relevancia:"Média",
   enunciado:"Calcule a seguinte integral indefinida usando métodos diretos: $$ \\int \\left(\\frac{1}{x} + \\sec^2(x) - e^x\\right) \\, dx $$",
   resposta: "$$ \\ln|x| + \\tan(x) - e^x + C, \\quad C \\in \\mathbb{R} $$"},
  {id:"INT-DIR-003", origem:"Dado em aula 18/08/2026", dificuldade:"Fácil", relevancia:"Baixa",
   enunciado:"Calcule a integral: $$ \\int x^{73} \\, dx $$",
   resposta: "$$ \\frac{x^{74}}{74} + C, \\quad C \\in \\mathbb{R} $$"},
  {id:"INT-DIR-004", origem:"Aula de revisão", dificuldade:"Fácil", relevancia:"Alta",
   enunciado:"Calcule a integral indefinida: \\( \\int (x^7 - x^5 + \\operatorname{sen}(x))\\, dx \\).",
   resposta: "$$ \\frac{x^8}{8} - \\frac{x^6}{6} - \\cos(x) + C, \\quad C \\in \\mathbb{R} $$"},
  {id:"INT-DIR-005", origem:"Listas de IA", dificuldade:"Fácil", relevancia:"Alta",
   enunciado:"Calcule a integral: $$ \\int (5x^3 - 3x^2 + 4x - 1) \\, dx $$",
   resposta: "$$ \\frac{5x^4}{4} - x^3 + 2x^2 - x + C, \\quad C \\in \\mathbb{R} $$"},
  {id:"INT-DIR-006", origem:"Listas de IA", dificuldade:"Médio", relevancia:"Alta",
   enunciado:"Calcule a seguinte integral indefinida usando métodos diretos: $$ \\int \\left(\\frac{2}{x} + 3\\sec^2(x) - 2e^x\\right) \\, dx $$",
   resposta: "$$ 2\\ln|x| + 3\\tan(x) - 2e^x + C, \\quad C \\in \\mathbb{R} $$"},
  {id:"INT-DIR-007", origem:"Dado em aula 18/08/2026", dificuldade:"Médio", relevancia:"Alta",
   enunciado:"Calcule a integral por integração direta: $$ \\int \\frac{1}{x^3} \\, dx $$",
   resposta: "$$ \\int x^{-3} \\, dx = \\frac{x^{-3+1}}{-3+1} + C = -\\frac{1}{2x^2} + C, \\quad C \\in \\mathbb{R} $$"},
  {id:"INT-DIR-008", origem:"Listas de IA", dificuldade:"Fácil", relevancia:"Alta",
   enunciado:"Calcule a integral indefinida: $$ \\int (x^6 - x^3 + \\cos(x)) \\, dx $$",
   resposta: "$$ \\frac{x^7}{7} - \\frac{x^4}{4} + \\sin(x) + C, \\quad C \\in \\mathbb{R} $$"},
  {id:"INT-DIR-009", origem:"Listas de IA", dificuldade:"Fácil", relevancia:"Média",
   enunciado:"Calcule a integral: $$ \\int (4x^2 - 5x + 7) \\, dx $$",
   resposta: "$$ \\frac{4x^3}{3} - \\frac{5x^2}{2} + 7x + C, \\quad C \\in \\mathbb{R} $$"},
  {id:"INT-DIR-010", origem:"Listas de IA", dificuldade:"Médio", relevancia:"Alta",
   enunciado:"Calcule a integral indefinida usando métodos diretos: $$ \\int (x^8 + \\sin(x) - e^x) \\, dx $$",
   resposta: "$$ \\frac{x^9}{9} - \\cos(x) - e^x + C, \\quad C \\in \\mathbb{R} $$"}
]},
{materia:"Integrais", subtopico:"Substituição simples", secId:"integrais", exercicios:[
  {id:"INT-SUB-001", origem:"Prova antiga", dificuldade:"Médio", relevancia:"Alta",
   enunciado:"Calcule a integral abaixo e verifique se o resultado obtido está correto: $$ \\int 2x\\cos(x^2) \\, dx $$",
   resposta: "$$ \\sin(x^2) + C, \\quad C \\in \\mathbb{R} $$"},
  {id:"INT-SUB-002", origem:"Dado em aula 18/08/2026", dificuldade:"Fácil", relevancia:"Alta",
   enunciado:"Use o Método da Substituição ensinado em aula para resolver: $$ \\int \\cos(2x) \\, dx $$",
   resposta: "$$ \\frac{\\sin(2x)}{2} + C, \\quad C \\in \\mathbb{R} $$"},
  {id:"INT-SUB-003", origem:"Dado em aula 18/08/2026", dificuldade:"Fácil", relevancia:"Alta",
   enunciado:"Calcule usando o método da substituição: $$ \\int e^{4x} \\, dx $$",
   resposta: "$$ \\frac{e^{4x}}{4} + C, \\quad C \\in \\mathbb{R} $$"},
  {id:"INT-SUB-004", origem:"Gerado a partir das listas Lista 3", dificuldade:"Médio", relevancia:"Alta",
   enunciado:"Calcule a integral: $$ \\int 6x\\cos(3x^2) \\, dx $$",
   resposta: "$$ \\sin(3x^2) + C, \\quad C \\in \\mathbb{R} $$"},
  {id:"INT-SUB-005", origem:"Aula de revisão", dificuldade:"Médio", relevancia:"Alta",
   enunciado:"Calcule a integral usando o método da substituição e confira o resultado derivando a resposta: \\( \\int x^2 \\operatorname{sen}(x^3)\\, dx \\).",
   resposta: "$$ -\\frac{1}{3}\\cos(x^3) + C, \\quad C \\in \\mathbb{R} $$"},
  {id:"INT-SUB-006", origem:"Listas de IA", dificuldade:"Fácil", relevancia:"Alta",
   enunciado:"Calcule a integral usando o método da substituição: $$ \\int 4x\\cos(2x^2) \\, dx $$",
   resposta: "$$ \\sin(2x^2) + C, \\quad C \\in \\mathbb{R} $$"},
  {id:"INT-SUB-007", origem:"Listas de IA", dificuldade:"Fácil", relevancia:"Alta",
   enunciado:"Calcule a integral: $$ \\int 3x^2 e^{x^3} \\, dx $$",
   resposta: "$$ e^{x^3} + C, \\quad C \\in \\mathbb{R} $$"},
  {id:"INT-SUB-008", origem:"Listas de IA", dificuldade:"Fácil", relevancia:"Média",
   enunciado:"Use o método da substituição para resolver: $$ \\int \\sin(5x) \\, dx $$",
   resposta: "$$ -\\frac{1}{5}\\cos(5x) + C, \\quad C \\in \\mathbb{R} $$"},
  {id:"INT-SUB-009", origem:"Listas de IA", dificuldade:"Médio", relevancia:"Alta",
   enunciado:"Calcule a integral usando o método da substituição: $$ \\int 8x\\sin(4x^2) \\, dx $$",
   resposta: "$$ -\\cos(4x^2) + C, \\quad C \\in \\mathbb{R} $$"},
  {id:"INT-SUB-010", origem:"Listas de IA", dificuldade:"Médio", relevancia:"Alta",
   enunciado:"Calcule a integral: $$ \\int x^4\\cos(x^5) \\, dx $$",
   resposta: "$$ \\frac{\\sin(x^5)}{5} + C, \\quad C \\in \\mathbb{R} $$"}
]}
  ]
};
/* ======================= MODO CLARO/ESCURO & NAVBAR FLUTUANTE ======================= */
const themeBtn = document.getElementById('themeToggle');
const themeBtnFloat = document.getElementById('themeToggleFloat');
const scrollTopBtn = document.getElementById('scrollTopBtn');
const toggleAllAnswersFloat = document.getElementById('toggleAllAnswersFloat');
const floatingBar = document.getElementById('floatingBar');
const root = document.documentElement;

let isDark = localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);

function applyTheme(dark) {
    if(dark) {
        root.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        root.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    }
}
applyTheme(isDark);

themeBtn.addEventListener('click', () => { isDark = !isDark; applyTheme(isDark); });
themeBtnFloat.addEventListener('click', () => { isDark = !isDark; applyTheme(isDark); });

toggleAllAnswersFloat.addEventListener('click', () => {
    document.getElementById('toggleAllAnswers').click();
});

window.addEventListener('scroll', () => {
    floatingBar.classList.toggle('visible', window.scrollY > 280);
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ======================= WEBTEX & HELPERS ======================= */
function parseWebTex(text) {
  if (!text) return "";
  text = text.replace(/\$\$(.*?)\$\$/g, (m, tex) => `<div class="webtex-block"><img src="https://latex.codecogs.com/svg.image?\\Large\\displaystyle ${encodeURIComponent(tex.trim())}" alt="Formula"></div>`);
  text = text.replace(/\\\((.*?)\\\)/g, (m, tex) => `<img class="webtex-inline" src="https://latex.codecogs.com/svg.image?\\large\\textstyle ${encodeURIComponent(tex.trim())}" alt="Formula">`);
  return text;
}

function difClass(dif){
  return "dif-" + (dif || "medio").toLowerCase().replace(/\s+/g,"").normalize("NFD").replace(/[\u0300-\u036f]/g,"");
}
function origemCategoria(origem){
  if(!origem) return "Outros";
  if(origem.startsWith("Prova antiga")) return "Prova antiga";
  if(origem.startsWith("Dado em aula")) return "Dado em aula";
  if(origem.startsWith("Gerado a partir")) return "Listas de IA"; 
  if(origem === "Aula de revisão") return "Aula de revisão";
  return origem;
}
function origCSSClass(origem){
  if(!origem) return "orig-ia";
  if(origem.startsWith("Prova antiga")) return "orig-prova";
  if(origem.startsWith("Dado em aula") || origem.includes("revisão")) return "orig-aula";
  return "orig-ia";
}

/* ======================= CONTROLE DE MATÉRIAS E ESTADO ======================= */
let currentCourseKey = localStorage.getItem("selected_course") || "calc1";
let currentViewMode = "topics";
let DATA = [];
let SECTION_ORDER = [];
let SECTION_TITLES = {};
let ORIGIN_CONFIG = {};
let reviewedMap = {};
let selectedOrigens = new Set();
let selectedDificuldades = new Set();
let materiaSubtopicos = {};
let currentStatusFilter = "all";
let allAnswersShown = false;

function loadCourse(courseKey) {
  if (!window.COURSES_DATA || !window.COURSES_DATA[courseKey]) {
    courseKey = Object.keys(window.COURSES_DATA)[0];
  }
  currentCourseKey = courseKey;
  localStorage.setItem("selected_course", courseKey);
  
  const course = window.COURSES_DATA[courseKey];
  document.getElementById("pageTitle").textContent = `Lista de Revisão: ${course.name}`;
  document.getElementById("floatingCourseTitle").textContent = `📚 ${course.name}`;
  document.getElementById("courseSelect").value = courseKey;

  DATA = course.topics;
  SECTION_ORDER = course.sections.map(s => s.id);
  SECTION_TITLES = {};
  course.sections.forEach(s => SECTION_TITLES[s.id] = s.title);

  ORIGIN_CONFIG = course.originConfig || {};

  reviewedMap = JSON.parse(localStorage.getItem(`revisados_${courseKey}`) || "{}");

  currentViewMode = "topics";
  document.querySelectorAll('#viewTabs .status-tab').forEach(t => t.classList.toggle('active', t.dataset.view === "topics"));

  initFilters();
  buildNav();
  buildContent();
  applyFilters();
}

function setReviewed(map){
  try{ localStorage.setItem(`revisados_${currentCourseKey}`, JSON.stringify(map)); }catch(e){}
}

function initFilters() {
  const origensDisponiveis = [...new Set(DATA.flatMap(g => g.exercicios.map(e => origemCategoria(e.origem))))];
  const dificuldadesDisponiveis = ["Fácil","Médio","Difícil","Muito difícil"];

  selectedOrigens = new Set(origensDisponiveis);
  selectedDificuldades = new Set(dificuldadesDisponiveis);
  materiaSubtopicos = {};

  setupDropdownWithActions("dd-origem", "Origem", origensDisponiveis, selectedOrigens);
  setupDropdownWithActions("dd-dificuldade", "Dificuldade", dificuldadesDisponiveis, selectedDificuldades);

  const dynamicFilters = document.getElementById("dynamicTopicFilters");
  dynamicFilters.innerHTML = "";

  const uniqueMaterias = [...new Set(DATA.map(g => g.materia))];
  uniqueMaterias.forEach(mat => {
    const subs = DATA.filter(g => g.materia === mat).map(g => g.subtopico);
    materiaSubtopicos[mat] = new Set(subs);
    
    const details = document.createElement("details");
    details.className = "dropdown";
    details.id = `dd-${mat.toLowerCase().replace(/\s+/g, '')}`;
    dynamicFilters.appendChild(details);

    setupDropdownWithActions(details.id, mat, subs, materiaSubtopicos[mat]);
  });
}

function setupDropdownWithActions(dropdownId, title, options, selectedSet) {
  const details = document.getElementById(dropdownId);
  if (!details) return;
  details.innerHTML = `
    <summary class="dropdown-btn">${title} <span class="count"></span> ▾</summary>
    <div class="dropdown-content">
      <div class="dropdown-actions">
        <button type="button" class="select-all">Todos</button>
        <button type="button" class="deselect-all">Nenhum</button>
      </div>
      <div class="dropdown-items-container"></div>
    </div>
  `;
  
  const container = details.querySelector('.dropdown-items-container');
  options.forEach(opt => {
    const labelEl = document.createElement("label");
    labelEl.className = "dropdown-item";
    labelEl.innerHTML = `<input type="checkbox" ${selectedSet.has(opt) ? "checked" : ""}> ${opt}`;
    labelEl.querySelector("input").addEventListener("change", (e) => {
      if(e.target.checked) selectedSet.add(opt); else selectedSet.delete(opt);
      applyFilters();
      updateDropdownButton(details);
    });
    container.appendChild(labelEl);
  });

  details.querySelector('.select-all').addEventListener('click', (e) => {
    e.preventDefault();
    options.forEach(o => selectedSet.add(o));
    container.querySelectorAll('input').forEach(i => i.checked = true);
    applyFilters();
    updateDropdownButton(details);
  });

  details.querySelector('.deselect-all').addEventListener('click', (e) => {
    e.preventDefault();
    selectedSet.clear();
    container.querySelectorAll('input').forEach(i => i.checked = false);
    applyFilters();
    updateDropdownButton(details);
  });

  updateDropdownButton(details);
}

function updateDropdownButton(detailsEl) {
  if(!detailsEl) return;
  const checkedCount = detailsEl.querySelectorAll('.dropdown-item input:checked').length;
  const totalCount = detailsEl.querySelectorAll('.dropdown-item input').length;
  const summaryCount = detailsEl.querySelector('.count');
  if(summaryCount) summaryCount.textContent = (checkedCount === totalCount) ? "" : `(${checkedCount})`;
}

/* ======================= CRIAÇÃO DE CARDS ======================= */
function createCardElement(ex, materia, subtopico, secId, isSequential = false) {
  const dc = difClass(ex.dificuldade);
  const card = document.createElement("article");
  card.className = "card " + dc;
  card.dataset.materia = materia;
  card.dataset.subtopico = subtopico;
  card.dataset.origemCat = origemCategoria(ex.origem);
  card.dataset.dificuldade = ex.dificuldade;
  card.dataset.sec = secId;
  card.id = "ex-" + ex.id;
  if(reviewedMap[ex.id]) card.classList.add("reviewed");

  let svgHTML = ex.svg ? (ex.svg.trim().startsWith("<div") ? ex.svg : `<div class="svg-wrap">${ex.svg}</div>`) : "";

  const sequentialBadges = isSequential ? `
    <div style="display:flex; gap:6px; margin-top:6px; flex-wrap:wrap; justify-content:flex-end;">
      <span class="badge-topic-tag">📘 ${materia}</span>
      <span class="badge-topic-tag">🔖 ${subtopico}</span>
    </div>
  ` : "";

  const metaBlock = !isSequential ? `
    <div class="meta">
      <span><b>Matéria:</b> ${materia}</span>
      <span><b>Subtópico:</b> ${subtopico}</span>
    </div>
  ` : "";

  card.innerHTML = `
    <div class="card-head">
      <h4>${ex.id}</h4>
      <div class="badges-wrapper">
        <div class="badges-top">
          <span class="badge ${dc}">${ex.dificuldade}</span>
          <span class="badge rel">Relevância: ${ex.relevancia}</span>
        </div>
        <span class="badge orig ${origCSSClass(ex.origem)}">${origemCategoria(ex.origem)}</span>
        ${sequentialBadges}
      </div>
    </div>
    ${metaBlock}
    <div class="enunciado">${parseWebTex(ex.enunciado)}</div>
    ${ex.svg && ex.svgPos !== "resposta" ? svgHTML : ""}
    <div class="card-foot">
      <button class="toggle-answer">Mostrar resposta</button>
      <label class="reviewed-toggle">
        <input type="checkbox" ${reviewedMap[ex.id] ? "checked" : ""}> marcar como revisado
      </label>
    </div>
    <div class="resposta">
      <span class="label">Resposta final</span>
      ${parseWebTex(ex.resposta)}
      ${ex.svg && ex.svgPos === "resposta" ? svgHTML : ""}
    </div>
  `;

  const answerBox = card.querySelector(".resposta");
  const toggleBtn = card.querySelector(".toggle-answer");
  toggleBtn.addEventListener("click", () => {
    const showing = answerBox.classList.toggle("show");
    toggleBtn.textContent = showing ? "Esconder resposta" : "Mostrar resposta";
  });

  const reviewedCheckbox = card.querySelector(".reviewed-toggle input");
  reviewedCheckbox.addEventListener("change", (e) => {
    reviewedMap[ex.id] = e.target.checked;
    setReviewed(reviewedMap);
    card.classList.toggle("reviewed", e.target.checked);
    applyFilters();
  });

  return card;
}

/* ======================= RENDERIZAÇÃO ======================= */
function buildNavPills(container) {
  container.innerHTML = "";
  if (currentViewMode === "sequence") {
    container.style.display = "none";
    return;
  }
  container.style.display = "flex";

  SECTION_ORDER.forEach(secId => {
    const pillGroup = document.createElement("div");
    pillGroup.className = "nav-pill-group";
    pillGroup.dataset.sec = secId;
    pillGroup.innerHTML = `
      <a href="#${secId}" class="nav-pill-link">
        ${SECTION_TITLES[secId]} <span class="count nav-count-${secId}">(0/0)</span>
      </a>
      <button type="button" class="nav-pill-reset" data-sec="${secId}" title="Zerar revisões de ${SECTION_TITLES[secId]}">↺</button>
    `;
    container.appendChild(pillGroup);
  });
}

function buildNav() {
  buildNavPills(document.getElementById("indexNav"));
  buildNavPills(document.getElementById("floatingNav"));

  [document.getElementById("indexNav"), document.getElementById("floatingNav")].forEach(nav => {
    nav.addEventListener("click", (e) => {
      const resetBtn = e.target.closest(".nav-pill-reset");
      if (resetBtn) {
        e.preventDefault();
        const secId = resetBtn.dataset.sec;
        DATA.filter(g => g.secId === secId).flatMap(g => g.exercicios).forEach(ex => {
          reviewedMap[ex.id] = false;
          const card = document.getElementById("ex-" + ex.id);
          if (card) {
            card.classList.remove("reviewed");
            const chk = card.querySelector(".reviewed-toggle input");
            if (chk) chk.checked = false;
          }
        });
        setReviewed(reviewedMap);
        applyFilters();
      }
    });
  });
}

function buildContent() {
  const main = document.getElementById("mainContent");
  main.innerHTML = "";

  if (currentViewMode === "sequence") {
    const allExercises = [];
    DATA.forEach(group => {
      group.exercicios.forEach(ex => {
        allExercises.push({
          ex: ex,
          materia: group.materia,
          subtopico: group.subtopico,
          secId: group.secId
        });
      });
    });

    allExercises.sort((a, b) => {
      const numA = a.ex.numero !== undefined ? a.ex.numero : parseInt((a.ex.id.match(/\d+/) || [0])[0], 10);
      const numB = b.ex.numero !== undefined ? b.ex.numero : parseInt((b.ex.id.match(/\d+/) || [0])[0], 10);
      return numA - numB;
    });

    const listContainer = document.createElement("div");
    listContainer.className = "sequential-list";

    allExercises.forEach(item => {
      const card = createCardElement(item.ex, item.materia, item.subtopico, item.secId, true);
      listContainer.appendChild(card);
    });

    main.appendChild(listContainer);
    return;
  }

  SECTION_ORDER.forEach(secId => {
    const groups = DATA.filter(g => g.secId === secId);
    if(groups.length === 0) return;
    const total = groups.reduce((n,g) => n + g.exercicios.length, 0);

    const section = document.createElement("section");
    section.className = "topic";
    section.id = secId;
    section.innerHTML = `<h2>${SECTION_TITLES[secId]}</h2><div class="topic-count sec-count" data-sec="${secId}">${total} exercícios</div>`;

    groups.forEach(group => {
      const subBlock = document.createElement("div");
      subBlock.className = "subtopic-block";
      subBlock.innerHTML = `<h3 class="subtopic">${group.subtopico}</h3>`;

      group.exercicios.forEach(ex => {
        const card = createCardElement(ex, group.materia, group.subtopico, secId, false);
        subBlock.appendChild(card);
      });
      section.appendChild(subBlock);
    });
    main.appendChild(section);
  });
}

function updateToggleMateriasButton() {
    let allChecked = true;
    const topicos = [...new Set(DATA.map(g => g.materia))];
    topicos.forEach(m => {
        const totalSubs = DATA.filter(g => g.materia === m).map(g => g.subtopico).length;
        if(materiaSubtopicos[m] && materiaSubtopicos[m].size < totalSubs) allChecked = false;
    });
    const btn = document.getElementById("toggleMaterias");
    if (btn) {
        btn.textContent = allChecked ? "Desmarcar Matérias" : "Marcar Todas as Matérias";
    }
}

/* ======================= DETECÇÃO DINÂMICA DE ORIGEM SEQUENCIAL ======================= */
function checkSequentialAvailability() {
  const viewTabs = document.getElementById("viewTabs");
  if (!viewTabs) return;

  // Verifica se há exatamente uma origem selecionada e se ela possui sequential === true
  let isSequentialActive = false;
  if (selectedOrigens.size === 1) {
    const activeOrigin = [...selectedOrigens][0];
    if (ORIGIN_CONFIG[activeOrigin] && ORIGIN_CONFIG[activeOrigin].sequential === true) {
      isSequentialActive = true;
    }
  }

  if (isSequentialActive) {
    viewTabs.style.display = "inline-flex";
  } else {
    viewTabs.style.display = "none";
    if (currentViewMode !== "topics") {
      currentViewMode = "topics";
      document.querySelectorAll('#viewTabs .status-tab').forEach(t => t.classList.toggle('active', t.dataset.view === "topics"));
      buildNav();
      buildContent();
    }
  }
}

/* ======================= FILTRAGEM ======================= */
function applyFilters() {
  const cards = document.querySelectorAll(".card");
  let visibleCount = 0, metaTotal = 0, metaReviewed = 0;

  cards.forEach(card => {
    const okOrigem = selectedOrigens.has(card.dataset.origemCat);
    const okDif = selectedDificuldades.has(card.dataset.dificuldade);
    const m = card.dataset.materia, s = card.dataset.subtopico;
    const okTema = materiaSubtopicos[m] && materiaSubtopicos[m].has(s);

    const matchesBase = okOrigem && okDif && okTema;
    if (matchesBase) {
      metaTotal++;
      if (card.classList.contains("reviewed")) metaReviewed++;
    }

    let okStatus = true;
    if (currentStatusFilter === "pending") okStatus = !card.classList.contains("reviewed");
    if (currentStatusFilter === "reviewed") okStatus = card.classList.contains("reviewed");

    const visible = matchesBase && okStatus;
    card.classList.toggle("hidden", !visible);
    if(visible) visibleCount++;
  });

  if (currentViewMode === "topics") {
    document.querySelectorAll(".subtopic-block").forEach(b => {
      b.style.display = b.querySelectorAll(".card:not(.hidden)").length > 0 ? "" : "none";
    });

    SECTION_ORDER.forEach(secId => {
      const sec = document.getElementById(secId);
      if (!sec) return;
      const secCards = sec.querySelectorAll(".card");
      const visibleCardsInSec = [...secCards].filter(c => !c.classList.contains("hidden"));
      sec.style.display = visibleCardsInSec.length > 0 ? "" : "none";

      const totalSecBase = [...secCards].filter(c => {
        return selectedOrigens.has(c.dataset.origemCat) &&
               selectedDificuldades.has(c.dataset.dificuldade) &&
               (materiaSubtopicos[c.dataset.materia] && materiaSubtopicos[c.dataset.materia].has(c.dataset.subtopico));
      }).length;

      const countEl = sec.querySelector(".sec-count");
      if (countEl) countEl.textContent = (visibleCardsInSec.length === totalSecBase) ? `${totalSecBase} exercícios` : `${visibleCardsInSec.length} de ${totalSecBase} visíveis`;

      document.querySelectorAll(`.nav-count-${secId}`).forEach(el => el.textContent = `(${visibleCardsInSec.length}/${totalSecBase})`);
    });
  }

  document.getElementById("emptyMsg").style.display = visibleCount === 0 ? "block" : "none";
  document.getElementById("progressLabel").textContent = `${metaReviewed}/${metaTotal} revisados`;
  document.getElementById("countScoped").textContent = metaReviewed;
  document.getElementById("countAll").textContent = Object.values(reviewedMap).filter(Boolean).length;
  
  updateToggleMateriasButton();
  checkSequentialAvailability();
}

/* ======================= EVENT LISTENERS GLOBAIS ======================= */
document.getElementById("courseSelect").addEventListener("change", (e) => loadCourse(e.target.value));

document.querySelectorAll('#viewTabs .status-tab').forEach(tab => {
  tab.addEventListener('click', (e) => {
    document.querySelectorAll('#viewTabs .status-tab').forEach(t => t.classList.remove('active'));
    e.target.classList.add('active');
    currentViewMode = e.target.dataset.view;
    buildNav();
    buildContent();
    applyFilters();
  });
});

document.querySelectorAll('.tray-footer-right .status-tab').forEach(tab => {
  tab.addEventListener('click', (e) => {
    document.querySelectorAll('.tray-footer-right .status-tab').forEach(t => t.classList.remove('active'));
    e.target.classList.add('active');
    currentStatusFilter = e.target.dataset.status;
    applyFilters();
  });
});

document.getElementById("resetFilters").addEventListener("click", () => {
  initFilters();
  currentStatusFilter = "all";
  document.querySelectorAll('.tray-footer-right .status-tab').forEach(t => t.classList.toggle('active', t.dataset.status === "all"));
  applyFilters();
});

document.getElementById("toggleAllAnswers").addEventListener("click", (e) => {
  allAnswersShown = !allAnswersShown;
  document.querySelectorAll(".resposta").forEach(r => r.classList.toggle("show", allAnswersShown));
  document.querySelectorAll(".toggle-answer").forEach(b => b.textContent = allAnswersShown ? "Esconder resposta" : "Mostrar resposta");
  e.target.textContent = allAnswersShown ? "Ocultar Respostas" : "Revelar Respostas";
  toggleAllAnswersFloat.textContent = allAnswersShown ? "Ocultar" : "Respostas";
});

document.getElementById("toggleMaterias").addEventListener("click", () => {
    let allChecked = true;
    const topicos = [...new Set(DATA.map(g => g.materia))];
    
    topicos.forEach(m => {
        const totalSubs = DATA.filter(g => g.materia === m).map(g => g.subtopico).length;
        if(materiaSubtopicos[m] && materiaSubtopicos[m].size < totalSubs) allChecked = false;
    });

    if (allChecked) {
        topicos.forEach(m => materiaSubtopicos[m].clear());
        document.querySelectorAll('#dynamicTopicFilters .dropdown-item input').forEach(inp => inp.checked = false);
    } else {
        topicos.forEach(m => {
            DATA.filter(g => g.materia === m).map(g => g.subtopico).forEach(s => materiaSubtopicos[m].add(s));
        });
        document.querySelectorAll('#dynamicTopicFilters .dropdown-item input').forEach(inp => inp.checked = true);
    }
    
    topicos.forEach(m => updateDropdownButton(document.getElementById(`dd-${m.toLowerCase().replace(/\s+/g, '')}`)));
    applyFilters();
});

// Dropdown de Limpeza
const resetBtn = document.getElementById("resetReviewedBtn");
const resetMenu = document.getElementById("resetDropdownMenu");
resetBtn.addEventListener("click", (e) => { e.stopPropagation(); resetMenu.classList.toggle("open"); });
document.addEventListener("click", (e) => { if(!resetMenu.contains(e.target)) resetMenu.classList.remove("open"); });

document.getElementById("btnClearScoped").addEventListener("click", () => {
  document.querySelectorAll(".card").forEach(card => {
    if (!card.classList.contains("hidden") && card.classList.contains("reviewed")) {
      const id = card.id.replace("ex-", "");
      reviewedMap[id] = false;
      card.classList.remove("reviewed");
      const chk = card.querySelector(".reviewed-toggle input");
      if (chk) chk.checked = false;
    }
  });
  setReviewed(reviewedMap);
  applyFilters();
  resetMenu.classList.remove("open");
});

document.getElementById("btnClearAllTotal").addEventListener("click", () => {
  reviewedMap = {};
  setReviewed(reviewedMap);
  document.querySelectorAll(".card.reviewed").forEach(c => c.classList.remove("reviewed"));
  document.querySelectorAll(".reviewed-toggle input").forEach(i => i.checked = false);
  applyFilters();
  resetMenu.classList.remove("open");
});

document.addEventListener('click', (e) => {
  document.querySelectorAll('details.dropdown').forEach(details => {
    if (details.open && !details.contains(e.target)) {
      details.removeAttribute('open');
    }
  });
});

/* INICIALIZAÇÃO */
window.addEventListener('DOMContentLoaded', () => {
    loadCourse(currentCourseKey);
});
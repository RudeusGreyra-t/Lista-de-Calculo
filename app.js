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
  if(origem === "Provas") return "Provas";
  if(origem === "Aula de revisão") return "Aula de revisão";
  return origem;
}
function origCSSClass(origem){
  if(!origem) return "orig-ia";
  if(origem.startsWith("Prova antiga") || origem === "Provas") return "orig-prova";
  if(origem.startsWith("Dado em aula") || origem.includes("revisão")) return "orig-aula";
  return "orig-ia";
}

/* ======================= CONTROLE DE MATÉRIAS E ESTADO ======================= */
let currentCourseKey = localStorage.getItem("selected_course") || "calc1";
let DATA = [];
let SECTION_ORDER = [];
let SECTION_TITLES = {};
let SECTION_ETAPAS = {};
let ORIGIN_CONFIG = {};
let reviewedMap = {};
let selectedOrigens = new Set();
let selectedDificuldades = new Set();
let sectionSubtopicos = {};
let currentStatusFilter = "all";
let currentEtapaFilter = "P2"; // Focado na P2 como padrão
let isSequentialMode = false;
let allAnswersShown = false;

function loadCourse(courseKey) {
  if (!window.COURSES_DATA || !window.COURSES_DATA[courseKey]) {
    courseKey = Object.keys(window.COURSES_DATA)[0];
  }
  currentCourseKey = courseKey;
  localStorage.setItem("selected_course", courseKey);
  
  const course = window.COURSES_DATA[courseKey];
  document.getElementById("pageTitle").textContent = `Lista de Revisão: ${course.name}`;
  document.getElementById("floatingCourseTitle").textContent = `📐 ${course.name}`;
  document.getElementById("courseSelect").value = courseKey;

  DATA = course.topics;
  SECTION_ORDER = course.sections.map(s => s.id);
  SECTION_TITLES = {};
  SECTION_ETAPAS = {};
  
  course.sections.forEach(s => {
      SECTION_TITLES[s.id] = s.title;
      SECTION_ETAPAS[s.id] = s.etapa || "P1";
  });

  ORIGIN_CONFIG = course.originConfig || {};

  reviewedMap = JSON.parse(localStorage.getItem(`revisados_${courseKey}`) || "{}");
  isSequentialMode = false;

  initFilters();
  buildNav();
  buildContent();
  
  document.querySelectorAll(".etapa-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.etapa === currentEtapaFilter);
  });
  
  updateUIForEtapa();
  applyFilters();
}

function setReviewed(map){
  try{ localStorage.setItem(`revisados_${currentCourseKey}`, JSON.stringify(map)); }catch(e){}
}

/* ======================= VISIBILIDADE DAS ETAPAS & ORIGENS (P1/P2/PF) ======================= */
function updateOriginFilterVisibility() {
    const validSecIds = SECTION_ORDER.filter(secId => 
        currentEtapaFilter === "PF" || SECTION_ETAPAS[secId] === currentEtapaFilter || !SECTION_ETAPAS[secId]
    );
    const validGroups = DATA.filter(g => validSecIds.includes(g.secId));
    const origensAtuais = [...new Set(validGroups.flatMap(g => g.exercicios.map(e => origemCategoria(e.origem))))];
    
    const originDropdown = document.getElementById("dd-origem");
    if(originDropdown) {
        originDropdown.querySelectorAll('.dropdown-item').forEach(label => {
            const optName = label.textContent.trim();
            if (origensAtuais.includes(optName)) {
                label.style.display = "flex";
            } else {
                label.style.display = "none";
            }
        });
    }
}

function updateUIForEtapa() {
    SECTION_ORDER.forEach(secId => {
        const isVisible = currentEtapaFilter === "PF" || SECTION_ETAPAS[secId] === currentEtapaFilter || !SECTION_ETAPAS[secId];
        
        const dd = document.getElementById(`dd-${secId}`);
        if (dd) dd.style.display = isVisible ? "" : "none";
        
        document.querySelectorAll(`.nav-pill-group[data-sec="${secId}"]`).forEach(pill => {
            pill.style.display = isVisible && !isSequentialMode ? "inline-flex" : "none";
        });
    });
    
    updateOriginFilterVisibility();
}

document.querySelectorAll(".etapa-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
        document.querySelectorAll(".etapa-btn").forEach(b => b.classList.remove("active"));
        e.target.classList.add("active");
        currentEtapaFilter = e.target.dataset.etapa;
        
        updateUIForEtapa();
        applyFilters();
    });
});

/* INICIALIZA OS DROPDOWNS */
function initFilters() {
  const origensDisponiveis = [...new Set(DATA.flatMap(g => g.exercicios.map(e => origemCategoria(e.origem))))];
  const dificuldadesDisponiveis = ["Fácil","Médio","Difícil","Muito difícil"];

  selectedOrigens = new Set(origensDisponiveis);
  selectedDificuldades = new Set(dificuldadesDisponiveis);
  sectionSubtopicos = {};

  setupDropdownWithActions("dd-origem", "Origem", origensDisponiveis, selectedOrigens);
  setupDropdownWithActions("dd-dificuldade", "Dificuldade", dificuldadesDisponiveis, selectedDificuldades);

  const dynamicSectionContainer = document.getElementById("dynamicSectionFilters");
  dynamicSectionContainer.innerHTML = "";

  SECTION_ORDER.forEach(secId => {
    const secTitle = SECTION_TITLES[secId];
    const subtopicos = [...new Set(DATA.filter(g => g.secId === secId).map(g => g.subtopico))];
    sectionSubtopicos[secId] = new Set(subtopicos);

    const details = document.createElement("details");
    details.className = "dropdown";
    details.id = `dd-${secId}`;
    dynamicSectionContainer.appendChild(details);

    setupDropdownWithActions(details.id, secTitle, subtopicos, sectionSubtopicos[secId]);
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

/* ======================= RENDERIZAÇÃO ======================= */
function buildNavPills(container) {
  container.innerHTML = "";
  if (isSequentialMode) {
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
    
    const isVisible = currentEtapaFilter === "PF" || SECTION_ETAPAS[secId] === currentEtapaFilter || !SECTION_ETAPAS[secId];
    pillGroup.style.display = isVisible ? "inline-flex" : "none";
    
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
          
          const card = document.getElementById("ex-" + ex.id);
          if (card) {
            card.classList.remove("reviewed");
            const mainChk = card.querySelector(".main-reviewed-cb");
            if (mainChk) {
                mainChk.checked = false;
                reviewedMap[ex.id] = false;
            }
            card.querySelectorAll(".sub-reviewed-cb").forEach(chk => {
                chk.checked = false;
                reviewedMap[chk.dataset.subid] = false;
                chk.closest('.sub-item').classList.remove('reviewed');
            });
          }
        });
        setReviewed(reviewedMap);
        applyFilters();
      }
    });
  });
}

function createCard(ex, group) {
  const dc = difClass(ex.dificuldade);
  const card = document.createElement("article");
  card.className = "card " + dc;
  
  if(ex.oficial) {
      card.classList.add("card-oficial");
  }
  
  card.dataset.secId = group.secId;
  card.dataset.subtopico = group.subtopico;
  card.dataset.origemCat = origemCategoria(ex.origem);
  card.dataset.dificuldade = ex.dificuldade;
  card.id = "ex-" + ex.id;
  
  const hasItems = ex.itens && ex.itens.length > 0;
  let itemsHtml = "";
  
  if (hasItems) {
      ex.itens.forEach((item, index) => {
          const subId = `${ex.id}-${item.id || index}`;
          const isSubRev = reviewedMap[subId];
          itemsHtml += `
            <div class="sub-item ${isSubRev ? 'reviewed' : ''}" id="sub-${subId}">
              <div class="enunciado sub-enunciado">${parseWebTex(item.enunciado)}</div>
              <div class="card-foot sub-foot">
                <button class="toggle-answer">Mostrar resposta</button>
                <label class="reviewed-toggle">
                  <input type="checkbox" class="sub-reviewed-cb" data-subid="${subId}" ${isSubRev ? "checked" : ""}> revisado
                </label>
              </div>
              <div class="resposta">
                <span class="label">Resposta</span>
                ${parseWebTex(item.resposta)}
              </div>
            </div>
          `;
      });
  }

  let svgHTML = ex.svg ? (ex.svg.trim().startsWith("<div") ? ex.svg : `<div class="svg-wrap">${ex.svg}</div>`) : "";

  let mainFootHtml = "";
  let mainAnswerHtml = "";

  if (hasItems) {
      if (ex.resposta) {
         mainFootHtml = `<div class="card-foot"><button class="toggle-answer main-toggle">Mostrar Contexto Base</button></div>`;
         mainAnswerHtml = `<div class="resposta"><span class="label">Contexto Base</span>${parseWebTex(ex.resposta)}${ex.svg && ex.svgPos === "resposta" ? svgHTML : ""}</div>`;
      }
  } else {
      mainFootHtml = `
        <div class="card-foot">
          <button class="toggle-answer">Mostrar resposta</button>
          <label class="reviewed-toggle">
            <input type="checkbox" class="main-reviewed-cb" data-id="${ex.id}" ${reviewedMap[ex.id] ? "checked" : ""}> marcar como revisado
          </label>
        </div>`;
      mainAnswerHtml = `<div class="resposta"><span class="label">Resposta final</span>${parseWebTex(ex.resposta)}${ex.svg && ex.svgPos === "resposta" ? svgHTML : ""}</div>`;
  }

  card.innerHTML = `
    <div class="card-head">
      <h4>${ex.id}</h4>
      <div class="badges-wrapper">
        <div class="badges-top">
          <span class="badge ${dc}">${ex.dificuldade}</span>${ex.oficial ? `<span class="selo-oficial">${ex.oficial}</span>` : ""}
          <span class="badge rel">Relevância: ${ex.relevancia}</span>
        </div>
        <span class="badge orig ${origCSSClass(ex.origem)}">${origemCategoria(ex.origem)}</span>
      </div>
    </div>
    <div class="meta">
      <span><b>Matéria:</b> ${group.materia || SECTION_TITLES[group.secId]}</span>
      <span><b>Subtópico:</b> ${group.subtopico}</span>
    </div>
    <div class="enunciado">${parseWebTex(ex.enunciado)}</div>${ex.svg && ex.svgPos !== "resposta" ? svgHTML : ""}
    ${mainFootHtml}
    ${mainAnswerHtml}${hasItems ? `<div class="sub-items-container">${itemsHtml}</div>` : ""}
  `;

  // Event Listeners para Mostrar/Esconder
  card.querySelectorAll(".toggle-answer").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const respDiv = e.target.parentElement.nextElementSibling;
      const showing = respDiv.classList.toggle("show");
      if (btn.classList.contains("main-toggle")) {
          btn.textContent = showing ? "Esconder Contexto Base" : "Mostrar Contexto Base";
      } else {
          btn.textContent = showing ? "Esconder resposta" : "Mostrar resposta";
      }
    });
  });

  // Event Listeners para Revisado
  if (hasItems) {
      const checkCardReviewedState = () => {
          const allSubs = card.querySelectorAll('.sub-reviewed-cb');
          const allChecked = Array.from(allSubs).every(cb => cb.checked);
          card.classList.toggle("reviewed", allChecked);
      };

      card.querySelectorAll(".sub-reviewed-cb").forEach(chk => {
          chk.addEventListener("change", (e) => {
              const subId = e.target.dataset.subid;
              reviewedMap[subId] = e.target.checked;
              setReviewed(reviewedMap);
              e.target.closest('.sub-item').classList.toggle('reviewed', e.target.checked);
              checkCardReviewedState();
              applyFilters();
          });
      });
      checkCardReviewedState();
  } else {
      const mainChk = card.querySelector(".main-reviewed-cb");
      mainChk.addEventListener("change", (e) => {
          reviewedMap[ex.id] = e.target.checked;
          setReviewed(reviewedMap);
          card.classList.toggle("reviewed", e.target.checked);
          applyFilters();
      });
      card.classList.toggle("reviewed", mainChk.checked);
  }

  return card;
}

function buildContent() {
  const main = document.getElementById("mainContent");
  main.innerHTML = "";

  if (isSequentialMode) {
    const all = [];
    DATA.forEach(group => {
      group.exercicios.forEach(ex => all.push({ ex, group }));
    });

    all.sort((a, b) => {
      const numA = a.ex.numero !== undefined ? a.ex.numero : parseInt((a.ex.id.match(/\d+/) || [0])[0], 10);
      const numB = b.ex.numero !== undefined ? b.ex.numero : parseInt((b.ex.id.match(/\d+/) || [0])[0], 10);
      return numA - numB;
    });

    const seqSection = document.createElement("section");
    seqSection.className = "topic";
    seqSection.style.marginTop = "20px";

    all.forEach(item => {
      seqSection.appendChild(createCard(item.ex, item.group));
    });

    main.appendChild(seqSection);
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
        subBlock.appendChild(createCard(ex, group));
      });
      section.appendChild(subBlock);
    });
    main.appendChild(section);
  });
}

function updateToggleMateriasButton() {
    let allChecked = true;
    SECTION_ORDER.forEach(secId => {
        const isVisible = currentEtapaFilter === "PF" || SECTION_ETAPAS[secId] === currentEtapaFilter || !SECTION_ETAPAS[secId];
        if (!isVisible) return; 
        
        const totalSubs = [...new Set(DATA.filter(g => g.secId === secId).map(g => g.subtopico))].length;
        if(sectionSubtopicos[secId] && sectionSubtopicos[secId].size < totalSubs) allChecked = false;
    });
    const btn = document.getElementById("toggleMaterias");
    if (btn) {
        btn.textContent = allChecked ? "Desmarcar Matérias" : "Marcar Todas as Matérias";
    }
}

/* ======================= DETECÇÃO DINÂMICA DO BOTÃO SEQUENCIAL ======================= */
function checkSequentialAvailability() {
  const btn = document.getElementById("btnToggleSequential");
  if (!btn) return;

  let isOriginSequential = false;
  if (selectedOrigens.size === 1) {
    const activeOrigin = [...selectedOrigens][0];
    if (ORIGIN_CONFIG[activeOrigin] && ORIGIN_CONFIG[activeOrigin].sequential === true) {
      isOriginSequential = true;
    }
  }

  if (isOriginSequential) {
    btn.style.display = "inline-block";
    btn.textContent = isSequentialMode ? "📑 Voltar para Visão por Tópicos" : "🔢 Ver em Ordem Sequencial";
  } else {
    btn.style.display = "none";
    if (isSequentialMode) {
      isSequentialMode = false;
      buildNav();
      buildContent();
      updateUIForEtapa();
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
    const secId = card.dataset.secId, s = card.dataset.subtopico;
    const okTema = sectionSubtopicos[secId] && sectionSubtopicos[secId].has(s);
    
    // Filtro Global da Etapa
    const okEtapa = currentEtapaFilter === "PF" || SECTION_ETAPAS[secId] === currentEtapaFilter || !SECTION_ETAPAS[secId];

    const matchesBase = okOrigem && okDif && okTema && okEtapa;
    
    if (matchesBase) {
      const subCbs = card.querySelectorAll('.sub-reviewed-cb');
      if (subCbs.length > 0) {
          metaTotal += subCbs.length;
          subCbs.forEach(cb => { if(cb.checked) metaReviewed++; });
      } else {
          metaTotal++;
          if (card.classList.contains("reviewed")) metaReviewed++;
      }
    }

    let okStatus = true;
    if (currentStatusFilter === "pending") okStatus = !card.classList.contains("reviewed");
    if (currentStatusFilter === "reviewed") okStatus = card.classList.contains("reviewed");

    const visible = matchesBase && okStatus;
    card.classList.toggle("hidden", !visible);
    if(visible) visibleCount++;
  });

  if (!isSequentialMode) {
    document.querySelectorAll(".subtopic-block").forEach(b => {
      b.style.display = b.querySelectorAll(".card:not(.hidden)").length > 0 ? "" : "none";
    });

    SECTION_ORDER.forEach(secId => {
      const sec = document.getElementById(secId);
      if (!sec) return;
      const secCards = sec.querySelectorAll(".card");
      const visibleCardsInSec = [...secCards].filter(c => !c.classList.contains("hidden"));
      
      const okEtapa = currentEtapaFilter === "PF" || SECTION_ETAPAS[secId] === currentEtapaFilter || !SECTION_ETAPAS[secId];
      sec.style.display = (visibleCardsInSec.length > 0 && okEtapa) ? "" : "none";

      const totalSecBase = [...secCards].filter(c => {
        return selectedOrigens.has(c.dataset.origemCat) &&
               selectedDificuldades.has(c.dataset.dificuldade) &&
               (sectionSubtopicos[c.dataset.secId] && sectionSubtopicos[c.dataset.secId].has(c.dataset.subtopico));
      }).length;

      const countEl = sec.querySelector(".sec-count");
      if (countEl) countEl.textContent = (visibleCardsInSec.length === totalSecBase) ? `${totalSecBase} exercícios` : `${visibleCardsInSec.length} de${totalSecBase} visíveis`;

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

document.getElementById("btnToggleSequential").addEventListener("click", () => {
  isSequentialMode = !isSequentialMode;
  buildNav();
  buildContent();
  updateUIForEtapa();
  applyFilters();
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
  document.querySelectorAll(".toggle-answer").forEach(b => {
      if (b.classList.contains("main-toggle")) {
          b.textContent = allAnswersShown ? "Esconder Contexto Base" : "Mostrar Contexto Base";
      } else {
          b.textContent = allAnswersShown ? "Esconder resposta" : "Mostrar resposta";
      }
  });
  e.target.textContent = allAnswersShown ? "Ocultar Respostas" : "Revelar Respostas";
  toggleAllAnswersFloat.textContent = allAnswersShown ? "Ocultar" : "Respostas";
});

document.getElementById("toggleMaterias").addEventListener("click", () => {
    let allChecked = true;
    SECTION_ORDER.forEach(secId => {
        const isVisible = currentEtapaFilter === "PF" || SECTION_ETAPAS[secId] === currentEtapaFilter || !SECTION_ETAPAS[secId];
        if (!isVisible) return;
        
        const totalSubs = [...new Set(DATA.filter(g => g.secId === secId).map(g => g.subtopico))].length;
        if(sectionSubtopicos[secId] && sectionSubtopicos[secId].size < totalSubs) allChecked = false;
    });

    if (allChecked) {
        SECTION_ORDER.forEach(secId => {
            const isVisible = currentEtapaFilter === "PF" || SECTION_ETAPAS[secId] === currentEtapaFilter || !SECTION_ETAPAS[secId];
            if(isVisible) {
                sectionSubtopicos[secId].clear();
                const dd = document.getElementById(`dd-${secId}`);
                if(dd) dd.querySelectorAll('.dropdown-item input').forEach(inp => inp.checked = false);
            }
        });
    } else {
        SECTION_ORDER.forEach(secId => {
            const isVisible = currentEtapaFilter === "PF" || SECTION_ETAPAS[secId] === currentEtapaFilter || !SECTION_ETAPAS[secId];
            if(isVisible) {
                const subs = [...new Set(DATA.filter(g => g.secId === secId).map(g => g.subtopico))];
                subs.forEach(s => sectionSubtopicos[secId].add(s));
                const dd = document.getElementById(`dd-${secId}`);
                if(dd) dd.querySelectorAll('.dropdown-item input').forEach(inp => inp.checked = true);
            }
        });
    }
    
    SECTION_ORDER.forEach(secId => updateDropdownButton(document.getElementById(`dd-${secId}`)));
    applyFilters();
});

// Dropdown de Limpeza
const resetBtn = document.getElementById("resetReviewedBtn");
const resetMenu = document.getElementById("resetDropdownMenu");
resetBtn.addEventListener("click", (e) => { e.stopPropagation(); resetMenu.classList.toggle("open"); });
document.addEventListener("click", (e) => { if(!resetMenu.contains(e.target)) resetMenu.classList.remove("open"); });

document.getElementById("btnClearScoped").addEventListener("click", () => {
  document.querySelectorAll(".card").forEach(card => {
    if (!card.classList.contains("hidden")) {
      card.classList.remove("reviewed");
      
      const mainChk = card.querySelector(".main-reviewed-cb");
      if (mainChk && mainChk.checked) {
          mainChk.checked = false;
          reviewedMap[mainChk.dataset.id] = false;
      }
      
      card.querySelectorAll(".sub-reviewed-cb").forEach(chk => {
          if (chk.checked) {
              chk.checked = false;
              reviewedMap[chk.dataset.subid] = false;
              chk.closest('.sub-item').classList.remove('reviewed');
          }
      });
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
  document.querySelectorAll(".sub-item.reviewed").forEach(s => s.classList.remove("reviewed"));
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
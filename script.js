/* Goku Archive — JavaScript sin dependencias. También funciona al abrir index.htm. */
(() => {
  "use strict";

  const image = (name, extension = "webp") => `assets/images/goku-${name}.${extension}`;
  const sources = {
    original: "https://en.dragon-ball-official.com/news/01_23.html",
    namek: "https://es.dragon-ball-official.com/news/01_3864.html",
    ssj2: "https://en.dragon-ball-official.com/special/sdcc2022/items/ss2goku.php",
    buu: "https://en.dragon-ball-official.com/news/01_3878.html",
    super: "https://en.dragon-ball-official.com/news/01_970.html",
    god: "https://en.dragon-ball-official.com/news/01_1748.html",
    mastered: "https://en.dragon-ball-official.com/news/01_1166.html",
    ultra: "https://en.dragon-ball-official.com/news/01_1752.html",
    granolah: "https://en.dragon-ball-official.com/news/01_1272.html",
    daima: "https://en.dragon-ball-official.com/news/01_3238.html",
    daima4: "https://www.bandai.com/brands/dragon-ball-super/dragon-stars/super-saiyan-4-goku-daima-ver",
    gt: "https://dble.bn-ent.net/news/en/character/6598/",
    manga: "https://www.viz.com/shonenjump/chapters/dragon-ball-super"
  };
  // Los estados de distintas continuidades no constituyen una escala de poder.
  // Los multiplicadores no verificados se omiten deliberadamente.
  const forms = [
    {
      id: "super-saiyan", name: "Super Saiyan", subtitle: "El despertar de la leyenda", group: "z", series: "DRAGON BALL Z", era: "Dragon Ball Z", category: "Transformación", color: "#e9c94c", image: image("ssj"),
      first: "Saga de Freezer · Namek",
      description: "El dolor por la muerte de Krillin despierta al guerrero legendario. El cabello dorado y la mirada firme marcan uno de los momentos que cambiaron Dragon Ball para siempre.",
      traits: [{ label: "Apariencia", value: "Cabello dorado y ojos claros" }, { label: "Detonante", value: "La furia durante el combate contra Freezer" }, { label: "Rasgo", value: "El inicio de los niveles Super Saiyan" }],
      variants: "Los grados musculares 2 y 3 aumentan la potencia a costa de distintas limitaciones. Goku termina apostando por dominar la forma ordinaria, con menos tensión y desgaste. DAIMA también muestra a Goku Mini como Super Saiyan.",
      source: sources.namek, keywords: "ssj ssj1 super saiyajin uno namek freezer"
    },
    {
      id: "super-saiyan-2", name: "Super Saiyan 2", subtitle: "El poder se vuelve eléctrico", group: "z", series: "DRAGON BALL Z", era: "Dragon Ball Z", category: "Transformación", color: "#f6d66c", image: image("ssj2"),
      first: "Saga de Majin Buu",
      description: "Goku demuestra un nivel superior de Super Saiyan durante la saga de Majin Buu. Las descargas eléctricas que rodean su aura anuncian una nueva intensidad en combate.",
      traits: [{ label: "Apariencia", value: "Cabello dorado más erizado" }, { label: "Aura", value: "Destellos y descargas eléctricas" }, { label: "Combate", value: "Uno de los niveles usados frente a Majin Vegeta" }],
      variants: "En DAIMA, Goku Mini también muestra el Super Saiyan 2. El tamaño de su cuerpo no elimina su capacidad para alcanzar los niveles Super Saiyan.",
      source: sources.ssj2, keywords: "ssj2 super saiyajin dos electricidad vegeta"
    },
    {
      id: "super-saiyan-3", name: "Super Saiyan 3", subtitle: "Una descarga de poder brutal", group: "z", series: "DRAGON BALL Z", era: "Dragon Ball Z", category: "Transformación", color: "#edbc45", image: image("ssj3"),
      first: "Saga de Majin Buu · Contra Majin Buu",
      description: "Cabello larguísimo, cejas que desaparecen y una enorme liberación de energía. El Super Saiyan 3 lleva el cuerpo de Goku al extremo, con un consumo que limita su tiempo de combate.",
      traits: [{ label: "Apariencia", value: "Melena dorada larga y ausencia de cejas" }, { label: "Ventaja", value: "Una enorme potencia ofensiva" }, { label: "Límite", value: "Gran consumo de energía" }],
      variants: "Goku también alcanza esta forma con su cuerpo Mini en DAIMA. Esa versión tiene su propia ficha dentro del archivo.",
      source: sources.buu, keywords: "ssj3 super saiyajin tres buu melena"
    },
    {
      id: "super-saiyan-4-gt", name: "Super Saiyan 4", subtitle: "El instinto saiyajin original", group: "gt", series: "DRAGON BALL GT", era: "Dragon Ball GT", category: "Transformación", color: "#e45472", image: image("ssj4", "png"),
      first: "Saga de Baby",
      description: "Después de convertirse en Ozaru dorado, Goku recupera la razón y concentra ese poder en una forma humanoide. El pelaje rojo, la cola y una mirada feroz definen el Super Saiyan 4 de GT.",
      traits: [{ label: "Apariencia", value: "Pelaje rojo, cola y cabello oscuro" }, { label: "Origen", value: "Control del poder del Ozaru dorado" }, { label: "Continuidad", value: "Versión propia de Dragon Ball GT" }],
      variants: "El Super Saiyan 4 Full Power representa una potenciación de este estado. El Super Saiyan 4 de DAIMA tiene otro diseño y pertenece a otra historia; no se presenta aquí como una mejora lineal de GT.",
      source: sources.gt, keywords: "ssj4 super saiyajin cuatro baby full power"
    },
    {
      id: "super-saiyan-god", name: "Super Saiyan God", subtitle: "La puerta al ki divino", group: "super", series: "DRAGON BALL SUPER", era: "Película / Dragon Ball Super", category: "Transformación", color: "#ed5852", image: image("god", "png"),
      first: "La batalla de los dioses · Contra Beerus",
      description: "Un ritual saiyajin permite a Goku entrar en el terreno de los dioses. El cabello rojo y una figura más estilizada acompañan su primer encuentro con un nuevo tipo de ki.",
      traits: [{ label: "Apariencia", value: "Cabello y ojos rojizos" }, { label: "Energía", value: "Ki divino" }, { label: "Detonante", value: "El ritual del Super Saiyan God" }],
      variants: "Con el entrenamiento, Goku puede volver a utilizar este estado sin repetir el ritual de su primera transformación.",
      source: sources.god, keywords: "rojo dios divino ssg bills beerus"
    },
    {
      id: "super-saiyan-blue", name: "Super Saiyan Blue", subtitle: "El poder divino toma forma", group: "super", series: "DRAGON BALL SUPER", era: "Película / Dragon Ball Super", category: "Transformación", color: "#39c9ed", image: image("blue"),
      first: "La resurrección de F · Contra Freezer",
      description: "Goku combina el poder del Super Saiyan con el ki divino. Su cabello azul anuncia una transformación que exige una gran precisión para controlar la energía.",
      traits: [{ label: "Apariencia", value: "Cabello y aura azules" }, { label: "Energía", value: "Ki divino combinado con Super Saiyan" }, { label: "Nombre alternativo", value: "Super Saiyan God Super Saiyan" }],
      variants: "El anime lo combina con el Kaioken. El manga desarrolla el Blue perfeccionado, que mantiene la energía dentro del cuerpo. Ambas variantes tienen una ficha propia.",
      source: sources.super, keywords: "ssb ssgss azul resurreccion freezer"
    },
    {
      id: "ultra-instinto-senal", name: "Ultra Instinto: Señal", subtitle: "El cuerpo empieza a decidir", group: "super", series: "DRAGON BALL SUPER", era: "Dragon Ball Super · Anime y manga", category: "Técnica / estado", color: "#98aeda", image: image("ultra"),
      first: "Torneo del Poder",
      description: "El cuerpo de Goku empieza a reaccionar sin esperar a una decisión consciente. El cabello permanece oscuro, mientras la mirada plateada y el aura muestran que algo ha cambiado.",
      traits: [{ label: "Apariencia", value: "Cabello oscuro y ojos plateados" }, { label: "Rasgo", value: "Reacciones y movimientos autónomos" }, { label: "Estado", value: "Manifestación inicial del Ultra Instinto" }],
      variants: "También se conoce como Ultra Instinto Sign u Omen. Es un estado relacionado con una técnica; no equivale a un nuevo nivel numerado de Super Saiyan.",
      source: sources.super, keywords: "ui sign omen presagio señal ultra instinto"
    },
    {
      id: "ultra-instinto", name: "Ultra Instinto", subtitle: "Más allá del pensamiento", group: "super", series: "DRAGON BALL SUPER", era: "Dragon Ball Super · Anime y manga", category: "Técnica / estado", color: "#d7e4fa", image: image("ultra-master", "png"),
      first: "Torneo del Poder · Contra Jiren",
      description: "La expresión completa del Ultra Instinto cambia el cabello de Goku a plateado. Su cuerpo ataca y esquiva de manera autónoma durante el enfrentamiento con Jiren.",
      traits: [{ label: "Apariencia", value: "Cabello y ojos plateados" }, { label: "Rasgo", value: "Ataque y defensa sin pensamiento consciente" }, { label: "Exigencia", value: "Mantener el estado supone un gran esfuerzo" }],
      variants: "El entrenamiento posterior desarrolla distintas maneras de usar la técnica. En el manga, Goku también explora una versión personal conocida como Ultra Instinto verdadero.",
      source: sources.ultra, keywords: "ui mui plateado completo dominado perfecto silver"
    },
    {
      id: "base", name: "Estado base", subtitle: "Aquí empieza la leyenda", group: "z", series: "DRAGON BALL", era: "Dragon Ball · Todas las series", category: "Estado base", color: "#f5803c", image: image("base"),
      first: "Dragon Ball · El inicio de la aventura",
      description: "Antes del cabello dorado y del ki divino están el entrenamiento, el ingenio y las ganas de superarse. El estado base es el punto de partida de todas las aventuras de Goku.",
      traits: [{ label: "Apariencia", value: "Cabello negro característico" }, { label: "Origen", value: "Saiyajin criado en la Tierra" }, { label: "Rasgo", value: "Un guerrero que nunca deja de entrenar" }],
      variants: "Goku aparece como niño, adulto y, en DAIMA, con un cuerpo Mini. Esas edades y tamaños no constituyen por sí mismos nuevas transformaciones de combate.",
      source: sources.original, keywords: "normal humano niño adulto son goku kakaroto"
    },
    {
      id: "ozaru", name: "Ozaru", subtitle: "El gigante bajo la luna", group: "z", series: "DRAGON BALL", era: "Dragon Ball", category: "Transformación", color: "#b99a75", image: image("oozaru", "png"),
      first: "Saga de Pilaf",
      description: "La luna llena despierta el poder del gran simio saiyajin. Con su cola todavía intacta, Goku se convierte en una criatura gigante que no puede controlar.",
      traits: [{ label: "Apariencia", value: "Gran simio de tamaño gigantesco" }, { label: "Condición", value: "Cola saiyajin y exposición a la luna llena" }, { label: "Límite", value: "Goku pierde el control de sus actos" }],
      variants: "En GT aparece el Ozaru dorado, una combinación de este poder ancestral con el Super Saiyan.",
      source: sources.original, keywords: "oozaru gran simio mono luna cola"
    },
    {
      id: "kaioken", name: "Kaioken", subtitle: "Un cuerpo llevado al límite", group: "z", series: "DRAGON BALL Z", era: "Dragon Ball Z", category: "Técnica", color: "#e84f54", image: image("base"), relatedIllustration: true, imageAlt: "Goku en estado base, referencia para la técnica Kaioken",
      first: "Saga de los Saiyajin",
      description: "La técnica que Goku aprende de Kaio aumenta su fuerza y velocidad durante un tiempo limitado. El aura roja tiene un precio: una enorme tensión sobre su cuerpo.",
      traits: [{ label: "Naturaleza", value: "Técnica, no transformación saiyajin" }, { label: "Aura", value: "Roja e intensa" }, { label: "Límite", value: "Puede dañar el cuerpo si se fuerza demasiado" }],
      variants: "Goku eleva el Kaioken en varios combates y llega a utilizarlo a niveles ×10 y ×20 en Namek. En Super, el anime permite combinarlo con el Super Saiyan Blue.",
      source: sources.namek, keywords: "kaio ken kaiosama rojo tecnica 10 20"
    },
    {
      id: "super-saiyan-dominado", name: "Super Saiyan dominado", subtitle: "El control también es poder", group: "z", series: "DRAGON BALL Z", era: "Dragon Ball Z", category: "Variante", color: "#e8ce75", image: image("ssj"),
      first: "Saga de Cell · Entrenamiento con Gohan",
      description: "Goku aprende a mantener el Super Saiyan con naturalidad. La clave es reducir la tensión y el desgaste de la forma, en lugar de perseguir únicamente un aumento de musculatura.",
      traits: [{ label: "Apariencia", value: "La del Super Saiyan ordinario" }, { label: "Objetivo", value: "Mantener el estado de forma más natural" }, { label: "Entrenamiento", value: "Con Gohan antes de los Juegos de Cell" }],
      variants: "Se lo conoce también como Super Saiyan Full Power o grado 4. Los grados 2 y 3 son variantes musculares exploradas en esta etapa, con limitaciones propias.",
      source: sources.mastered, keywords: "full power grado 4 cuarto controlado cell gohan"
    },
    {
      id: "ozaru-dorado", name: "Ozaru dorado", subtitle: "La bestia antes del cuarto nivel", group: "gt", series: "DRAGON BALL GT", era: "Dragon Ball GT", category: "Transformación", color: "#d4b849", image: image("oozaru", "png"), relatedIllustration: true, imageAlt: "Ozaru normal, ilustración de referencia para la variante dorada",
      first: "Saga de Baby",
      description: "El poder del Super Saiyan se une al gran simio. Goku pierde el control en una forma gigantesca y dorada, antes de recuperar la razón y convertirse en Super Saiyan 4.",
      traits: [{ label: "Apariencia", value: "Gran simio de pelaje dorado" }, { label: "Rasgo", value: "Enorme poder y pérdida de control" }, { label: "Evolución", value: "Precede al Super Saiyan 4 de GT" }],
      variants: "Esta ficha utiliza una ilustración del Ozaru normal como referencia de su silueta. La variante de GT se distingue por su pelaje dorado.",
      source: sources.gt, keywords: "golden oozaru gran simio dorado baby"
    },
    {
      id: "blue-kaioken", name: "Blue + Kaioken", subtitle: "Dos energías, un mismo límite", group: "super", series: "SUPER · ANIME", era: "Dragon Ball Super · Anime", category: "Técnica combinada", color: "#e37087", image: image("blue"), relatedIllustration: true, imageAlt: "Goku Super Saiyan Blue, referencia para la combinación con Kaioken",
      first: "Torneo del Universo 6 · Contra Hit",
      description: "Goku suma el Kaioken al Super Saiyan Blue. El azul y el rojo se superponen en una apuesta que exige el control del ki divino y soportar una fuerte tensión física.",
      traits: [{ label: "Aura", value: "Azul y roja superpuestas" }, { label: "Naturaleza", value: "Kaioken aplicado al Super Saiyan Blue" }, { label: "Continuidad", value: "Desarrollada en el anime de Super" }],
      variants: "Es una combinación de forma y técnica. El manga desarrolla otras soluciones al gasto de energía del Blue, como el Blue perfeccionado.",
      source: sources.super, keywords: "ssb kaioken hit universo seis rojo azul"
    },
    {
      id: "blue-perfeccionado", name: "Blue perfeccionado", subtitle: "Toda la energía, dentro", group: "super", series: "SUPER · MANGA", era: "Dragon Ball Super · Manga", category: "Variante", color: "#7cd9ed", image: image("blue"),
      first: "Saga de Trunks del futuro · Manga",
      description: "Goku contiene dentro de su cuerpo la energía que el Super Saiyan Blue suele liberar. Esta variante del manga busca aprovechar mejor el poder de la transformación.",
      traits: [{ label: "Apariencia", value: "El cabello azul se conserva" }, { label: "Rasgo", value: "Contener la energía en el cuerpo" }, { label: "Continuidad", value: "Variante desarrollada en el manga" }],
      variants: "También se lo llama Blue completo o Perfected Super Saiyan Blue. No es un nuevo color de Super Saiyan, sino una manera de perfeccionar el uso del Blue.",
      source: sources.manga, keywords: "ssb perfecto perfected completed trunks zamasu"
    },
    {
      id: "ultra-instinto-verdadero", name: "Ultra Instinto verdadero", subtitle: "El instinto encuentra su voz", group: "super", series: "SUPER · MANGA", era: "Dragon Ball Super · Manga", category: "Variante / estado", color: "#91b8d4", image: image("ultra"), relatedIllustration: true, imageAlt: "Ultra Instinto Señal, referencia para la variante personal de Goku",
      first: "Saga de Granolah · Contra Gas",
      description: "Goku encuentra una aplicación más personal del Ultra Instinto que le permite aprovechar sus emociones. En el combate contra Gas, adapta la técnica a su propia manera de luchar.",
      traits: [{ label: "Apariencia", value: "Cabello oscuro" }, { label: "Rasgo", value: "Aprovechar las emociones en combate" }, { label: "Continuidad", value: "Variante del manga durante la saga de Granolah" }],
      variants: "Su aspecto se aproxima a Señal, pero la explicación de su funcionamiento es distinta. No se le asigna una equivalencia de poder frente a GT o DAIMA.",
      source: sources.granolah, keywords: "true ui tui gas granola emociones"
    },
    {
      id: "super-saiyan-3-mini", name: "Super Saiyan 3 Mini", subtitle: "Pequeño cuerpo, poder enorme", group: "daima", series: "DRAGON BALL DAIMA", era: "Dragon Ball DAIMA", category: "Variante", color: "#f3cd61", image: image("ssj3-mini", "png"),
      first: "DAIMA · Episodio 17",
      description: "Goku alcanza el Super Saiyan 3 con su cuerpo Mini en el Reino Demoníaco. La melena dorada sigue siendo inconfundible, incluso cuando el tamaño del guerrero ha cambiado.",
      traits: [{ label: "Apariencia", value: "Cuerpo Mini y melena dorada larga" }, { label: "Rasgo", value: "El nivel Super Saiyan 3 en su versión Mini" }, { label: "Historia", value: "La batalla final en el Reino Demoníaco" }],
      variants: "DAIMA también presenta versiones Mini de los Super Saiyan 1 y 2. Se agrupan como variantes de esas formas, sin tratarlas como nuevos niveles de poder independientes.",
      source: sources.daima, keywords: "daima pequeño mini tercer nivel gomah"
    },
    {
      id: "super-saiyan-4-daima", name: "Super Saiyan 4 · DAIMA", subtitle: "Un nuevo rostro del cuarto nivel", group: "daima", series: "DRAGON BALL DAIMA", era: "Dragon Ball DAIMA", category: "Transformación", color: "#e56476", image: image("ssj4-daima", "png"),
      first: "DAIMA · Combate contra Gomah",
      description: "DAIMA presenta su propia versión del Super Saiyan 4 durante la batalla con Gomah. El cabello y el pelaje rojizos distinguen este diseño del que aparece en GT.",
      traits: [{ label: "Apariencia", value: "Cabello y pelaje rojizos" }, { label: "Combate", value: "Contra Gomah en el Reino Demoníaco" }, { label: "Continuidad", value: "Versión propia de DAIMA" }],
      variants: "Comparte el nombre Super Saiyan 4 con GT, pero tiene otro diseño y contexto narrativo. DAIMA muestra esta transformación tanto con el cuerpo Mini como con el cuerpo adulto de Goku.",
      source: sources.daima4, keywords: "ssj4 daima cuatro gomah rojo mini"
    }
  ];

  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => [...document.querySelectorAll(selector)];
  const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
  const normalize = (value) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const grid = $("#transformations-grid");
  const searchInput = $("#search-input");
  const showMore = $("#show-more");
  const dialog = $("#form-dialog");
  const dialogContent = $("#dialog-content");
  const state = { filter: "all", query: "", expanded: false };
  let previouslyFocused = null;
  let chargeTimer;
  let powerLevel = 0;

  const arrow = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  function cardMarkup(form, index) {
    const name = escapeHTML(form.name);
    return `<button type="button" class="form-card" data-form="${form.id}" style="--form-color:${form.color}" aria-label="Explorar ${name}, ${escapeHTML(form.era)}">
      <span class="card-number">${String(index + 1).padStart(2, "0")}</span>
      <span class="card-series">${escapeHTML(form.series)}</span>
      <span class="card-art"><img src="${form.image}" alt="${escapeHTML(form.imageAlt || `Goku: ${form.name}`)}" loading="lazy" decoding="async" width="420" height="540"></span>
      <span class="card-type">${escapeHTML(form.category)}</span>
      <h3 class="card-title">${name}</h3>
      <span class="card-subtitle">${escapeHTML(form.subtitle)}</span>
      <span class="card-arrow">${arrow}</span>
    </button>`;
  }

  function filteredForms() {
    const query = normalize(state.query.trim());
    return forms.filter((form) => {
      const matchesFilter = state.filter === "all" || form.group === state.filter;
      const searchable = normalize(`${form.name} ${form.era} ${form.series} ${form.category} ${form.subtitle} ${form.keywords || ""}`);
      return matchesFilter && (!query || searchable.includes(query));
    });
  }

  function renderCatalog() {
    if (!grid) return;
    const filtered = filteredForms();
    const canCollapse = state.filter === "all" && !state.query.trim();
    const visible = canCollapse && !state.expanded ? filtered.slice(0, 8) : filtered;
    grid.innerHTML = visible.map((form) => cardMarkup(form, forms.indexOf(form))).join("");
    const resultCount = $("#results-count");
    if (resultCount) resultCount.textContent = visible.length < filtered.length
      ? `${visible.length} de ${filtered.length} formas`
      : `${filtered.length} ${filtered.length === 1 ? "forma" : "formas"}${state.query.trim() ? (filtered.length === 1 ? " encontrada" : " encontradas") : " en el archivo"}`;
    const emptyState = $("#empty-state");
    if (emptyState) emptyState.hidden = filtered.length > 0;
    if (showMore) {
      showMore.hidden = !canCollapse || filtered.length <= 8;
      showMore.setAttribute("aria-expanded", String(state.expanded));
      showMore.innerHTML = state.expanded ? `Ver selección <span aria-hidden="true">↑</span>` : `Explorar las ${forms.length} formas <span aria-hidden="true">↓</span>`;
    }
    const clearSearch = $("#clear-search");
    if (clearSearch) clearSearch.hidden = !state.query;
    // Si un archivo no está disponible, conservar una ilustración local legible.
    grid.querySelectorAll("img").forEach((img) => img.addEventListener("error", () => {
      img.src = image("base");
      img.alt = "Goku en estado base, ilustración de referencia";
    }, { once: true }));
  }

  function setFormHash(id) {
    try {
      const url = new URL(window.location.href);
      url.hash = id ? `forma=${id}` : "transformaciones";
      window.history.replaceState(null, "", url);
    } catch (_) {
      // El catálogo sigue funcionando si el navegador restringe history en file://.
    }
  }

  function openForm(id, updateHash = true) {
    const form = forms.find((entry) => entry.id === id);
    if (!form || !dialog || !dialogContent) return;
    if (!dialog.open) previouslyFocused = document.activeElement;
    dialogContent.innerHTML = `<button class="modal-close" type="button" data-close-dialog aria-label="Cerrar ficha"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m6 6 12 12M6 18 18 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></button>
      <div class="modal-art" style="--form-color:${form.color}">
        <span class="modal-art-label">${escapeHTML(form.series)}</span>
        <img src="${form.image}" alt="${escapeHTML(form.imageAlt || `Goku: ${form.name}`)}" width="420" height="540">
        ${form.relatedIllustration ? '<span class="illustration-note">Ilustración de la forma relacionada</span>' : ""}
      </div>
      <div class="modal-copy">
        <p class="eyebrow">ARCHIVO SAIYAJIN / ${String(forms.indexOf(form) + 1).padStart(2, "0")}</p>
        <span class="modal-badge" style="--form-color:${form.color}">${escapeHTML(form.category)}</span>
        <h2 id="dialog-title">${escapeHTML(form.name)}</h2>
        <p class="modal-description">${escapeHTML(form.description)}</p>
        <dl class="modal-facts">
          <div><dt>Primera aparición</dt><dd>${escapeHTML(form.first)}</dd></div>
          <div><dt>Continuidad</dt><dd>${escapeHTML(form.era)}</dd></div>
          ${form.traits.map((trait) => `<div><dt>${escapeHTML(trait.label)}</dt><dd>${escapeHTML(trait.value)}</dd></div>`).join("")}
        </dl>
        ${form.variants ? `<section class="modal-variants"><h3>Más allá de esta forma</h3><p>${escapeHTML(form.variants)}</p></section>` : ""}
        <a class="source-link" href="${escapeHTML(form.source)}" target="_blank" rel="noopener noreferrer">Consultar fuente ${arrow}</a>
      </div>`;
    if (!dialog.open) dialog.showModal();
    document.body.classList.add("dialog-open");
    if (updateHash) setFormHash(id);
  }

  function closeDialog() {
    if (dialog?.open) dialog.close();
  }

  function formFromHash() {
    const match = /^#forma=([a-z0-9-]+)$/.exec(window.location.hash);
    if (match) openForm(match[1], false);
  }

  grid?.addEventListener("click", (event) => {
    const card = event.target.closest("[data-form]");
    if (card) openForm(card.dataset.form);
  });

  $$(".filter-button[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      state.filter = button.dataset.filter;
      state.expanded = false;
      $$(".filter-button[data-filter]").forEach((filter) => {
        const active = filter === button;
        filter.classList.toggle("is-active", active);
        filter.setAttribute("aria-pressed", String(active));
      });
      renderCatalog();
    });
  });

  searchInput?.addEventListener("input", () => {
    state.query = searchInput.value;
    renderCatalog();
  });

  $("#clear-search")?.addEventListener("click", () => {
    state.query = "";
    if (searchInput) searchInput.value = "";
    renderCatalog();
    searchInput?.focus();
  });

  showMore?.addEventListener("click", () => {
    state.expanded = !state.expanded;
    renderCatalog();
    if (!state.expanded) $("#transformaciones")?.scrollIntoView({ behavior: reducedMotion.matches ? "auto" : "smooth", block: "start" });
  });

  dialog?.addEventListener("click", (event) => {
    if (event.target.closest("[data-close-dialog]")) closeDialog();
    else if (event.target === dialog) {
      const bounds = dialog.getBoundingClientRect();
      const outside = event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom;
      if (outside) closeDialog();
    }
  });

  dialog?.addEventListener("close", () => {
    document.body.classList.remove("dialog-open");
    if (window.location.hash.startsWith("#forma=")) setFormHash(null);
    if (previouslyFocused?.isConnected) previouslyFocused.focus({ preventScroll: true });
  });

  window.addEventListener("hashchange", () => {
    if (window.location.hash.startsWith("#forma=")) formFromHash();
    else closeDialog();
  });

  const heroForms = {
    ssj: { image: image("ssj"), name: "Super Saiyan", era: "DRAGON BALL Z", color: "#f2c94c" },
    blue: { image: image("blue"), name: "Super Saiyan Blue", era: "DRAGON BALL SUPER", color: "#32d5e7" },
    ultra: { image: image("ultra"), name: "Ultra Instinto · Señal", era: "DRAGON BALL SUPER", color: "#b8c9ee" }
  };

  $$(".hero-form-button[data-hero-form]").forEach((button) => {
    button.addEventListener("click", () => {
      const selected = heroForms[button.dataset.heroForm];
      if (!selected) return;
      const heroImage = $("#hero-goku");
      const heroArt = $("#hero-art");
      if (heroImage) {
        heroImage.src = selected.image;
        heroImage.alt = `Goku en ${selected.name}`;
        if (!reducedMotion.matches) heroImage.animate([{ opacity: 0.3 }, { opacity: 1 }], { duration: 380, easing: "ease-out" });
      }
      if (heroArt) {
        heroArt.style.setProperty("--aura", selected.color);
        heroArt.dataset.form = button.dataset.heroForm;
      }
      const heroName = $("#hero-form-name");
      const heroEra = $("#hero-form-era");
      if (heroName) heroName.textContent = selected.name;
      if (heroEra) heroEra.textContent = selected.era;
      $$(".hero-form-button[data-hero-form]").forEach((option) => {
        const active = option === button;
        option.classList.toggle("is-active", active);
        option.setAttribute("aria-pressed", String(active));
      });
    });
  });

  $("#power-button")?.addEventListener("click", () => {
    const heroArt = $("#hero-art");
    const status = $("#ki-status");
    if (!heroArt || heroArt.classList.contains("is-charging")) return;
    clearTimeout(chargeTimer);
    powerLevel = (powerLevel + 1) % 3;
    heroArt.classList.add("is-charging");
    if (status) status.textContent = "Concentrando ki…";
    chargeTimer = window.setTimeout(() => {
      heroArt.classList.remove("is-charging");
      if (status) status.textContent = ["¡Siempre se puede llegar más lejos!", "¡Rompe tus límites!", "¡Este es el poder de un saiyajin!"][powerLevel];
    }, reducedMotion.matches ? 250 : 1200);
  });

  const menuToggle = $("#menu-toggle");
  const mainNav = $("#main-nav");
  function closeMenu() {
    mainNav?.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Abrir menú");
  }
  menuToggle?.addEventListener("click", () => {
    const open = mainNav?.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(Boolean(open)));
    menuToggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  });
  mainNav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      closeDialog();
    }
  });

  const revealElements = $$(".reveal");
  if ("IntersectionObserver" in window && !reducedMotion.matches) {
    document.documentElement.classList.add("js-reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    revealElements.forEach((element) => observer.observe(element));
  } else revealElements.forEach((element) => element.classList.add("is-visible"));

  $$("[data-total-forms], #catalog-total").forEach((element) => { element.textContent = String(forms.length).padStart(2, "0"); });
  renderCatalog();
  formFromHash();
})();

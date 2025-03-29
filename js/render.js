class RenderManager {
  constructor() {
    this.investigaciones = [];
  }

  async init() {
    await this.cargarDatos();
    this.renderVistaDetalle();
    this.renderListadoInicial();
  }

  async cargarDatos() {
    try {
      const response = await fetch("investigaciones.json");
      this.investigaciones = await response.json();
    } catch (error) {
      console.error("Error cargando datos:", error);
      this.mostrarErrorCarga();
    }
  }

  renderVistaDetalle() {
    const contenedor = document.getElementById("detalle-investigacion");
    if (!contenedor) return;

    const params = new URLSearchParams(window.location.search);
    const idParam = params.get("id");
    let investigacion;

    if (idParam) {
      investigacion = this.investigaciones.find(
        (item) => item.id === parseInt(idParam)
      );
    }

    // Fallback a ID 1 si no se encuentra o no hay parámetro
    if (!investigacion) {
      investigacion = this.investigaciones.find(item => item.id === 1) || this.investigaciones[0];
    }

    if (investigacion) {
      contenedor.innerHTML = `
        <article class="max-w-4xl mx-auto space-y-12 pb-12">
          <header class="space-y-8">
            <img src="${investigacion.imagen}" alt="${investigacion.titulo}" 
                 class="w-full h-96 object-cover rounded-xl shadow-lg">
            <h1 class="text-4xl font-bold text-gray-900">${investigacion.titulo}</h1>
          </header>
          <div class="prose-lg text-gray-700 space-y-12">
            ${this.renderizarContenido(investigacion.contenidoCompleto)}
          </div>
        </article>
      `;
    } else {
      this.renderError();
    }
  }

  renderizarContenido(contenido) {
    return contenido
      .map((item) => {
        const key = Object.keys(item)[0];
        const data = item[key];
        switch (key) {
          case "introduccion":
            return this.renderIntroduccion(data);
          case "capasDetalladas":
            return this.renderCapasDetalladas(data);
          case "modeloDestacado":
            return this.renderModeloDestacado(data);
          case "diagramaInteractivo":
            return this.renderDiagramaInteractivo(data);
          case "iterativo":
            return this.renderIterativo(data);
          case "espiral":
            return this.renderEspiral(data);
          case "continuo":
            return this.renderContinuo(data);
          case "comparativa":
            return this.renderComparativa(data);
          case "seleccion":
            return this.renderSeleccion(data);
          default:
            return `<div class="text-red-500">Componente no reconocido: ${JSON.stringify(data)}</div>`;
        }
      })
      .join("");
  }

  renderListadoInicial() {
    const contenedor = document.getElementById("lista-investigaciones");
    if (!contenedor) return;

    contenedor.innerHTML = this.investigaciones
      .map(investigacion => Componentes.tarjetaInvestigacion({
        imagen: investigacion.imagen,
        titulo: investigacion.titulo,
        contenido: investigacion.contenido,
        id: investigacion.id
      }))
      .join("");
  }

  renderIntroduccion(data) {
    return `
      <section class="space-y-6 mb-12">
        <div class="bg-white/90 p-8 rounded-xl shadow-md border border-orange-200/30 hover:border-orange-300/50 transition-colors">
          <h2 class="text-3xl font-bold text-orange-700/90 mb-4">${data.titulo}</h2>
          <p class="text-gray-600 text-lg leading-relaxed mb-6">${data.texto}</p>
          ${Componentes.timeline(data.lineaTemporal)}
        </div>
      </section>
    `;
  }

  renderCapasDetalladas(data) {
    return `
      <section class="space-y-8">
        <div class="bg-white/90 p-8 rounded-xl shadow-md border border-orange-200/30">
          <h2 class="text-2xl font-semibold text-orange-700/80 mb-6">${data.titulo}</h2>
          ${data.capas.map(capa => `
            <div class="mb-8 last:mb-0 bg-orange-50/50 p-6 rounded-lg border border-orange-200/20 hover:bg-orange-50/70 transition-colors">
              <h3 class="text-xl font-medium text-orange-600/90 mb-3">${capa.nombre}</h3>
              <p class="text-gray-600 mb-4">${capa.resumen}</p>
              <div class="space-y-4 ml-4">
                <div class="bg-white/80 p-4 rounded-md">
                  <p class="text-gray-700"><strong class="text-orange-600/80">Descripción:</strong> ${capa.descripcion}</p>
                </div>
                ${crearLista(capa.detallesTecnicos)}
                <div class="bg-orange-100/30 p-3 rounded-md">
                  <p class="text-orange-700/80"><strong>Protocolos:</strong> 
                    ${capa.protocolos.map(p => `<span class="bg-orange-200/40 text-orange-800 px-2 py-1 rounded-md text-sm mr-2">${p}</span>`).join('')}
                  </p>
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      </section>
    `;
  }

  renderModeloDestacado(data) {
    return `
      <section class="mb-12">
        <div class="bg-orange-100/40 p-8 rounded-xl border border-orange-200/40 shadow-inner hover:bg-orange-100/50 transition-colors">
          <div class="flex items-center gap-4 mb-6">
            ${Componentes.renderizarIcono(data.icono)}
            <h2 class="text-2xl font-bold text-orange-800/90">${data.nombre}</h2>
          </div>
          <p class="text-gray-700 mb-6">${data.enfoque}</p>
          ${crearLista(data.caracteristicas)}
          <div class="mt-6 bg-white/90 p-5 rounded-lg border border-orange-200/30">
            <h3 class="text-lg font-semibold text-orange-700 mb-2">${data.casoEstudio.titulo}</h3>
            <p class="text-gray-600">${data.casoEstudio.resultado}</p>
          </div>
        </div>
      </section>
    `;
  }

  renderDiagramaInteractivo(data) {
    return `
      <section class="space-y-6">
        <h2 class="text-2xl font-bold text-gray-800">${data.titulo}</h2>
        <p class="text-gray-700">${data.aplicacion}</p>
        <div class="border-l pl-4">
          ${data.estructura.map(line => `<p class="text-gray-700">${line}</p>`).join("")}
        </div>
        <p class="text-gray-600">${data.flujo}</p>
      </section>
    `;
  }

  renderIterativo(data) {
    return `
      <section class="bg-indigo-50 p-6 rounded-xl space-y-6">
        <h2 class="text-2xl font-bold text-gray-800">${data.titulo}</h2>
        ${crearLista(data.infografia)}
        <p class="text-gray-700">${data.ejemplo}</p>
      </section>
    `;
  }

  renderEspiral(data) {
    return `
      <section class="bg-yellow-50 p-6 rounded-xl space-y-6">
        <h2 class="text-2xl font-bold">${data.advertencia}</h2>
        ${data.fases.map(fase => `
          <div class="mb-4">
            <h3 class="font-semibold">${fase.nombre}</h3>
            ${fase.herramientas ? `<p class="text-gray-700"><strong>Herramientas:</strong> ${fase.herramientas.join(", ")}</p>` : ""}
            ${fase.eficiencia ? `<p class="text-gray-700"><strong>Eficiencia:</strong> ${fase.eficiencia}</p>` : ""}
            ${fase.costo ? `<p class="text-gray-700"><strong>Costo:</strong> ${fase.costo}</p>` : ""}
          </div>
        `).join("")}
        <p class="text-gray-600">${data.estadistica}</p>
      </section>
    `;
  }

  renderContinuo(data) {
    return `
      <section class="bg-green-50 p-6 rounded-xl space-y-6">
        <h2 class="text-2xl font-bold text-gray-800">${data.titulo}</h2>
        ${crearLista(data.pipeline)}
        ${crearLista(data.casosExitos)}
      </section>
    `;
  }

  renderComparativa(data) {
    return Componentes.tablaComparativa(data);
  }

  renderSeleccion(data) {
    return `
      <section class="space-y-6">
        <h2 class="text-2xl font-bold text-gray-800">${data.titulo}</h2>
        <div class="space-y-4">
          ${data.flujograma.map(item => `<p class="text-gray-700">${item}</p>`).join("")}
        </div>
        <p class="text-gray-600">${data.reglaOro}</p>
      </section>
    `;
  }

  renderError() {
    const contenedor = document.getElementById("detalle-investigacion");
    if (!contenedor) return;
    contenedor.innerHTML = `
      <div class="text-center py-20 space-y-4">
        <h2 class="text-2xl text-red-600 font-semibold">Investigación no encontrada</h2>
        <a href="index.html" class="inline-flex items-center text-blue-600 hover:text-blue-800">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
          </svg>
          Volver al inicio
        </a>
      </div>
    `;
  }

  mostrarErrorCarga() {
    const contenedor = document.getElementById("detalle-investigacion");
    if (!contenedor) return;
    contenedor.innerHTML = `
      <div class="alert-error bg-red-100 p-4 rounded-lg">
        <h3 class="text-red-600 font-semibold">Error cargando los datos</h3>
        <p class="text-red-600">Por favor intenta recargar la página</p>
      </div>
    `;
  }
}

// Inicialización corregida
document.addEventListener("DOMContentLoaded", async () => {
  const renderManager = new RenderManager();
  await renderManager.init();
});
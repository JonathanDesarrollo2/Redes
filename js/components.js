const acortarTexto = (texto, maxLength = 250) => 
  texto.length > maxLength ? `${texto.substring(0, maxLength)}...` : texto;

const crearLista = (items) => `
  <ul class="list-disc pl-6 mb-4 space-y-2">
    ${items.map(item => `<li class="text-gray-700">${item}</li>`).join('')}
  </ul>
`;
const crearListaInline = (items) => `
  <ul class="list-disc list-inside space-y-1">
    ${items.map(item => `<li class="text-gray-700 text-sm">${item}</li>`).join('')}
  </ul>
`;

const Componentes = {
  renderizarIcono: (iconoData) => {
    if (!iconoData) return '';
    switch(iconoData.tipo) {
      case 'emoji': return `<span class="text-3xl">${iconoData.valor}</span>`;
      case 'url': return `<img src="${iconoData.valor}" alt="Icono" class="w-10 h-10 object-contain">`;
      case 'local': return `<img src="assets/icons/${iconoData.valor}" alt="Icono" class="w-10 h-10 object-contain">`;
      default: return '';
    }
  },

  tarjetaInvestigacion: ({ imagen, titulo, contenido, id }) => `
    <div class="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div class="flex flex-col h-full">
        <div class="image-overlay relative h-48">
          <img src="${imagen}" alt="${titulo}" 
              class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300">
          <div class="absolute bottom-0 left-0 right-0 z-10 p-4">
            <h2 class="text-xl font-bold text-white">${titulo}</h2>
          </div>
        </div>
        <div class="p-6 flex-1 flex flex-col">
          <p class="text-gray-600 mb-4 flex-1">${acortarTexto(contenido)}</p>
          <a href="detalle.html?id=${id}" 
             class="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors
                    border border-blue-200 rounded-lg px-4 py-2 hover:bg-blue-50 w-full justify-center">
            Ver análisis
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  `,

  timeline: items => `
    <div class="relative pl-8 border-l-2 border-blue-200 space-y-6">
      ${items.map(item => `
        <div class="relative">
          <div class="absolute w-4 h-4 bg-blue-500 rounded-full -left-[25px] top-1"></div>
          <p class="text-gray-600">${item}</p>
        </div>
      `).join('')}
    </div>
  `,

  tablaComparativa: (data) => `
  <div class="rounded-lg border border-gray-200 overflow-hidden">
    <table class="w-full">
      <thead class="bg-gray-50">
        <tr>
          <th class="px-6 py-4 text-left font-semibold text-gray-700">Modelo</th>
          <th class="px-6 py-4 text-center font-semibold text-gray-700">Ventajas</th>
          <th class="px-6 py-4 text-center font-semibold text-gray-700">Desventajas</th>
          <th class="px-6 py-4 text-center font-semibold text-gray-700">Uso Actual</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200">
        ${data.modelos.map(modelo => `
          <tr class="hover:bg-gray-50">
            <td class="px-6 py-4 font-medium text-gray-900">${modelo.nombre}</td>
            <td class="px-6 py-4">${crearListaInline(modelo.ventajas)}</td>
            <td class="px-6 py-4">${crearListaInline(modelo.desventajas)}</td>
            <td class="px-6 py-4 text-center">${modelo.usoActual}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
    <div class="p-4 bg-gray-50 border-t border-gray-200">
      <p class="text-sm text-gray-600">${data.conclusion}</p>
    </div>
  </div>
  `
};
// Base de Datos Completa OSI con explicaciones simplificadas
const osiLayersDB = [
    {
        id: 1,
        title: "Capa Física",
        previewContent: "Como los cables y señales WiFi que llevan la información de un lugar a otro",
        fullContent: {
            description: "Es la 'carretera' física por donde viajan los datos. Convierte los unos y ceros en señales reales que pueden viajar por cables, ondas de radio o luz en la fibra óptica.",
            details: [
                "Materiales comunes: Cables de cobre (como los Ethernet), fibra óptica (para internet rápido), ondas de radio (WiFi/Bluetooth)",
                "Dispositivos básicos: Repetidores para amplificar señales débiles, hubs para conectar varios dispositivos",
                "Velocidades típicas: Desde 10 Mbps (básico) hasta 100 Gbps (fibra óptica avanzada)",
                "Problemas comunes: Cortes de cable, interferencias de otros dispositivos, distancia máxima limitada"
            ],
            protocols: ["Ethernet", "USB", "Bluetooth", "HDMI"]
        }
    },
    {
        id: 2,
        title: "Capa de Enlace",
        previewContent: "El organizador de paquetes que evita errores en la conexión directa",
        fullContent: {
            description: "Actúa como un cartero local: asegura que los paquetes lleguen bien al vecino (dispositivo conectado directamente) antes de seguir su viaje.",
            details: [
                "Direcciones MAC: Identificador único de cada dispositivo (como el número de serie de tu tarjeta de red)",
                "Detección de errores: Sistema de verificación (CRC) como cuando sumas los números de una cuenta para ver si está bien",
                "Control de acceso: Reglas para evitar choques de información (como esperar tu turno para hablar)",
                "Ejemplo práctico: Cuando tu PC y la impresora negocian cómo enviar el documento"
            ],
            protocols: ["PPP (Internet por línea telefónica)", "Ethernet II", "Switch Management"]
        }
    },
    {
        id: 3,
        title: "Capa de Red",
        previewContent: "El GPS de los datos que elige las mejores rutas",
        fullContent: {
            description: "Se encarga de encontrar el camino óptimo a través de múltiples redes diferentes (como pasar por varias ciudades en un viaje).",
            details: [
                "Direcciones IP: Como la dirección de tu casa pero para internet (ej: 192.168.1.1)",
                "Enrutamiento inteligente: Elige caminos alternativos si hay congestión (como Waze para datos)",
                "Fragmentación: Divide paquetes grandes para que quepan en redes más lentas",
                "Ejemplo: Cuando un video de YouTube toma diferentes caminos para llegar más rápido"
            ],
            protocols: ["IP (Internet Protocol)", "ICMP (Usado por ping)", "IPsec (Conexiones seguras)"]
        }
    },
    {
        id: 4,
        title: "Capa de Transporte",
        previewContent: "El controlador de tráfico que asegura llegada sin errores",
        fullContent: {
            description: "Garantiza que toda la información llegue completa y en orden, como cuando armas un rompecabezas con todas sus piezas.",
            details: [
                "TCP: Conexiones confiables (como una llamada telefónica donde confirmas que escuchaste)",
                "UDP: Transmisión rápida pero sin confirmación (como un walkie-talkie)",
                "Control de flujo: Ajusta velocidad según capacidad del receptor",
                "Ejemplo: Cuando descargas un archivo y verifica que no tenga errores"
            ],
            protocols: ["TCP (Web, Email)", "UDP (Videojuegos, Streaming)", "SCTP (Telefonía IP)"]
        }
    },
    {
        id: 5,
        title: "Capa de Sesión",
        previewContent: "El moderador que organiza las conversaciones",
        fullContent: {
            description: "Administra diálogos entre aplicaciones, como cuando inicias sesión y mantienes una conversación constante con un servidor.",
            details: [
                "Sincronización: Puntos de control para reanudar transferencias interrumpidas",
                "Autenticación: Verifica identidades antes de permitir comunicación",
                "Control de diálogo: Permite comunicación bidireccional simultánea",
                "Ejemplo: Cuando mantienes abierta tu sesión en redes sociales"
            ],
            protocols: ["SSH (Conexiones seguras)", "RPC (Llamadas entre programas)", "NetBIOS (Redes locales Windows)"]
        }
    },
    {
        id: 6,
        title: "Capa de Presentación",
        previewContent: "El traductor universal de formatos de datos",
        fullContent: {
            description: "Convierte la información a formatos universales entendibles por cualquier dispositivo, como cuando traducen un libro a otro idioma.",
            details: [
                "Codificación: Transforma texto a binario (ASCII/Unicode para caracteres)",
                "Compresión: Reduce tamaño de archivos (ZIP, JPEG, MP3)",
                "Cifrado: Protege información sensible (SSL/TLS en páginas web)",
                "Ejemplo: Cuando subes una foto y se adapta automáticamente al dispositivo"
            ],
            protocols: ["SSL/TLS (Seguridad web)", "MIME (Formatos de email)", "JSON/XML (APIs modernas)"]
        }
    },
    {
        id: 7,
        title: "Capa de Aplicación",
        previewContent: "La interfaz que ves y usas directamente",
        fullContent: {
            description: "Son los programas y servicios que usas diariamente para comunicarte a través de la red.",
            details: [
                "Protocolos específicos: HTTP para web, SMTP para emails, FTP para transferencia de archivos",
                "APIs: Conexiones entre aplicaciones (como cuando un sitio usa Google Maps)",
                "Servicios básicos: DNS (traduce nombres a IPs), DHCP (asigna IPs automáticamente)",
                "Ejemplo: Cuando escribes una URL en el navegador y cargas una página web"
            ],
            protocols: ["HTTP/HTTPS", "DNS", "SMTP", "FTP", "WebSockets"]
        }
    }
];

const renderLayerDetail = () => {
    const container = document.getElementById('detail-container');
    if (!container) return;

    container.innerHTML = `
        <!-- Sección ISO -->
        <div class="layer-card mb-16 p-8 rounded-2xl bg-[#fff5b1]/80">
            <h2 class="text-4xl font-['Electrolize'] text-[#ff6347] mb-6">El Lenguaje Universal de las Redes</h2>
            <div class="space-y-6 text-[#333]/90">
                <p class="text-lg leading-relaxed">
                    Creado por la ISO (Organización Internacional de Normalización), el modelo OSI es como el <strong>idioma común</strong> que permite a cualquier dispositivo tecnológico comunicarse, sin importar su marca o sistema operativo. Imagina que es el "esperanto" de las redes:
                </p>
                
                <div class="grid md:grid-cols-2 gap-6">
                    <div class="p-6 bg-white rounded-xl">
                        <h3 class="font-['Electrolize'] text-xl text-[#ff6347] mb-3">🌍 Antes del OSI</h3>
                        <ul class="list-disc pl-6 space-y-2">
                            <li>Dispositivos incompatibles entre marcas</li>
                            <li>Problemas de comunicación frecuentes</li>
                            <li>Imposible crear redes complejas</li>
                        </ul>
                    </div>
                    
                    <div class="p-6 bg-white rounded-xl">
                        <h3 class="font-['Electrolize'] text-xl text-[#ff6347] mb-3">🚀 Con el Modelo OSI</h3>
                        <ul class="list-disc pl-6 space-y-2">
                            <li>Estándar universal adoptado mundialmente</li>
                            <li>Interoperabilidad entre dispositivos</li>
                            <li>Evolución tecnológica acelerada</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <!-- Capas OSI -->
        <div class="text-center mb-16">
            <h2 class="text-5xl font-['Electrolize'] text-[#ff6347] mb-4">Las 7 Capas en Acción</h2>
            <p class="text-xl text-[#333]/90">Cómo trabajan juntas para tu conexión diaria</p>
        </div>

        ${osiLayersDB.map(layer => `
            <div class="layer-card mb-16 p-8 rounded-2xl">
                <div class="flex flex-col md:flex-row gap-8">
                    <div class="md:w-1/3">
                        <div class="tech-badge w-fit px-6 py-2 mb-4">
                            <span class="text-white">Capa ${layer.id}</span>
                        </div>
                        <h3 class="text-3xl font-['Electrolize'] text-[#ff6347] mb-4">${layer.title}</h3>
                        <p class="text-lg">${layer.previewContent}</p>
                    </div>
                    
                    <div class="md:w-2/3 p-6 bg-white rounded-lg">
                        <div class="space-y-6">
                            <div class="mb-4">
                                <h4 class="text-xl font-['Electrolize'] mb-3">¿Cómo funciona en la práctica?</h4>
                                <p class="text-[#333]/90 leading-relaxed">${layer.fullContent.description}</p>
                            </div>
                            
                            <div class="grid md:grid-cols-2 gap-4">
                                <div class="p-4 bg-[#fff5b1]/30 rounded-lg">
                                    <h4 class="font-['Electrolize'] text-[#ff6347] mb-3">🧰 Detalles Técnicos</h4>
                                    <ul class="space-y-2">
                                        ${layer.fullContent.details.map(d => `
                                            <li class="flex items-start">
                                                <span class="text-[#ff6347] mr-2">•</span>
                                                <span class="flex-1">${d}</span>
                                            </li>
                                        `).join('')}
                                    </ul>
                                </div>
                                
                                <div class="p-4 bg-[#fff5b1]/30 rounded-lg">
                                    <h4 class="font-['Electrolize'] text-[#ff6347] mb-3">🔌 Tecnologías Clave</h4>
                                    <div class="flex flex-wrap gap-2">
                                        ${layer.fullContent.protocols.map(p => `
                                            <span class="protocol-chip px-3 py-1 rounded-full">
                                                ${p}
                                            </span>
                                        `).join('')}
                                    </div>
                                    <p class="text-sm mt-2 text-[#666]">Ejemplo real: ${pExample(layer.id)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `).join('')}

        <!-- Sección Tipos de Red -->
        <div class="layer-card mt-16 p-8 rounded-2xl bg-[#fff5b1]/80">
            <h2 class="text-4xl font-['Electrolize'] text-[#ff6347] mb-6">Tipos de Redes Comunes</h2>
            <div class="grid md:grid-cols-3 gap-6">
                <div class="p-6 bg-white rounded-xl">
                    <h3 class="font-['Electrolize'] text-xl text-[#ff6347] mb-3">🏠 LAN (Red Local)</h3>
                    <ul class="list-disc pl-6 space-y-2">
                        <li>Cubre una casa u oficina</li>
                        <li>Velocidades de 100 Mbps a 10 Gbps</li>
                        <li>Ejemplo: Conexión entre tu PC y la Smart TV</li>
                    </ul>
                </div>
                
                <div class="p-6 bg-white rounded-xl">
                    <h3 class="font-['Electrolize'] text-xl text-[#ff6347] mb-3">🏢 MAN (Red Metropolitana)</h3>
                    <ul class="list-disc pl-6 space-y-2">
                        <li>Cubre una ciudad completa</li>
                        <li>Usada por universidades o municipios</li>
                        <li>Combina múltiples LANs</li>
                    </ul>
                </div>
                
                <div class="p-6 bg-white rounded-xl">
                    <h3 class="font-['Electrolize'] text-xl text-[#ff6347] mb-3">🌍 WAN (Red Amplia)</h3>
                    <ul class="list-disc pl-6 space-y-2">
                        <li>Conecta países o continentes</li>
                        <li>Velocidad variable (1 Mbps a 100 Gbps)</li>
                        <li>Ejemplo: Internet global</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
};

// Ejemplos prácticos para cada capa
const pExample = (id) => {
    const examples = [
        "Conectar el cable Ethernet a tu computador",
        "Emparejar auriculares Bluetooth con el celular",
        "Tu router eligiendo la mejor ruta para tu videollamada",
        "Descargar un archivo grande sin errores",
        "Mantener abierta tu sesión de Netflix",
        "Ver una página web con 'https' seguro",
        "Enviar un correo electrónico desde Gmail"
    ];
    return examples[id - 1] || "Navegar en internet";
};

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.endsWith('detalle.html')) {
        renderLayerDetail();
    }
});
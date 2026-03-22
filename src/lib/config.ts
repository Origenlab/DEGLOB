// =============================================================================
// DEGLOB — Configuración centralizada del sitio
// Fuente única de verdad para datos de negocio, contacto y SEO
// =============================================================================

// -- Identidad del sitio --
export const SITE_NAME = 'DEGLOB';
export const SITE_NAME_FULL = 'Fantasy Globos';
export const SITE_URL = 'https://fantasyglobos.com.mx';
export const SITE_DESCRIPTION = 'Decoración profesional con globos para eventos en CDMX. Arcos, columnas, guirnaldas, figuras personalizadas, globos gigantes y más. Instalación incluida.';
export const SITE_TAGLINE = 'Decoración Profesional con Globos';

// -- Contacto --
export const PHONE_PRIMARY = '+525639565117';
export const PHONE_DISPLAY = '56 3956 5117';
export const WHATSAPP_NUMBER = '5215639565117';
export const WHATSAPP_DISPLAY = '56 3956 5117';
export const EMAIL = 'info@fantasyglobos.com.mx';

// -- Horarios de atención --
export const BUSINESS_HOURS = {
  weekdays: 'Lun-Vie 9:00-19:00',
  saturday: 'Sáb 10:00-16:00',
  display: 'Lun-Vie 9:00-19:00 | Sáb 10:00-16:00',
  shortDisplay: 'Lun-Sáb',
};

// -- Ubicación --
export const LOCATION = {
  street: 'Calz. Gral. Mariano Escobedo 555',
  colony: 'Polanco',
  municipality: 'Miguel Hidalgo',
  locality: 'Ciudad de México',
  region: 'CDMX',
  country: 'MX',
  postalCode: '11580',
  areaServed: 'CDMX y Zona Metropolitana',
};

// -- Geo (SEO local) --
export const GEO = {
  region: 'MX-CMX',
  placename: 'Ciudad de México',
  latitude: '19.432608',
  longitude: '-99.133209',
};

// -- Brand --
export const BRAND_COLOR = '#8B30EE';
export const ACCENT_COLOR = '#C900D4';
export const OG_IMAGE_DEFAULT = '/img/servicios/arcos-de-globos.webp';
export const LOGO_PATH = '/img/branding/logo-deglob.svg';

// -- Redes sociales --
export const SOCIAL_MEDIA = {
  facebook: 'https://www.facebook.com/deglob',
  instagram: 'https://www.instagram.com/deglob',
  tiktok: 'https://www.tiktok.com/@deglob',
} as const;

export const getSocialMediaUrls = (): string[] =>
  Object.values(SOCIAL_MEDIA).filter((url) => url.length > 0);

// -- URLs preformateadas --
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const WHATSAPP_URL_MSG = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola DEGLOB, me interesa cotizar decoración con globos para mi evento.')}`;
export const PHONE_URL = `tel:${PHONE_PRIMARY}`;
export const EMAIL_URL = `mailto:${EMAIL}`;

// -- Servicios: Decoración con Globos (8 items con paquetes) --
export const SERVICIOS = [
  {
    nombre: 'Arcos de Globos',
    slug: 'arcos-de-globos',
    imagen: '/img/servicios/arcos-de-globos.webp',
    descripcion: 'Arcos orgánicos y clásicos de globos para entradas, mesas de dulces y sesiones de fotos.',
    paquetes: [
      { nombre: 'Arco Pequeño — 1.5m', slug: 'arco-pequeno', precio: 2500, features: ['Arco de 1.5 metros', 'Colores a elegir', 'Instalación incluida', 'Globos premium latex'] },
      { nombre: 'Arco Mediano — 2.5m', slug: 'arco-mediano', precio: 4500, features: ['Arco de 2.5 metros', 'Hasta 4 colores', 'Instalación incluida', 'Globos chrome y pastel', 'Flores artificiales opcionales'] },
      { nombre: 'Arco Grande — 4m', slug: 'arco-grande', precio: 7500, features: ['Arco de 4 metros', 'Colores ilimitados', 'Instalación incluida', 'Globos chrome, pastel y confeti', 'Flores y follaje incluido', 'Estructura reforzada'] },
      { nombre: 'Producción Completa', slug: 'produccion-arcos', precio: 15000, features: ['Múltiples arcos', 'Diseño personalizado', 'Instalación y desmontaje', 'Todos los tipos de globos', 'Flores y follaje premium', 'Coordinación con venue', 'Asesoría de diseño'] },
    ],
  },
  {
    nombre: 'Columnas Decorativas',
    slug: 'columnas-decorativas',
    imagen: '/img/servicios/columnas-globos.webp',
    descripcion: 'Columnas de globos para enmarcar entradas, escenarios y crear pasillos espectaculares.',
    paquetes: [
      { nombre: '2 Columnas', slug: 'paquete-2-columnas', precio: 3000, features: ['2 columnas de 1.8m', 'Colores a elegir', 'Instalación incluida', 'Base con estructura'] },
      { nombre: '4 Columnas', slug: 'paquete-4-columnas', precio: 5500, features: ['4 columnas de 1.8m', 'Hasta 3 colores', 'Instalación incluida', 'Bases reforzadas', 'Remate superior decorativo'] },
      { nombre: '6 Columnas', slug: 'paquete-6-columnas', precio: 8000, features: ['6 columnas de 2m', 'Colores ilimitados', 'Instalación incluida', 'Estructura premium', 'Remates personalizados', 'Iluminación LED opcional'] },
      { nombre: 'Producción Completa', slug: 'produccion-columnas', precio: 14000, features: ['8+ columnas', 'Diseño personalizado', 'Alturas variables', 'Todos los estilos', 'Instalación y desmontaje', 'Coordinación con venue', 'Asesoría de diseño'] },
    ],
  },
  {
    nombre: 'Backdrops y Paneles',
    slug: 'backdrops-paneles',
    imagen: '/img/servicios/backdrops-paneles.webp',
    descripcion: 'Paneles y muros de globos como fondo fotográfico o decoración principal de tu evento.',
    paquetes: [
      { nombre: 'Panel 2 metros', slug: 'panel-2-metros', precio: 3500, features: ['Panel de 2m x 2m', 'Cobertura completa', 'Colores a elegir', 'Instalación incluida', 'Estructura autoportante'] },
      { nombre: 'Panel 3 metros', slug: 'panel-3-metros', precio: 5500, features: ['Panel de 3m x 2.5m', 'Diseño orgánico', 'Hasta 5 colores', 'Instalación incluida', 'Estructura reforzada', 'Ideal para fotos'] },
      { nombre: 'Muro Completo', slug: 'muro-completo', precio: 9000, features: ['Muro de 4m+ x 2.5m', 'Diseño premium', 'Colores ilimitados', 'Globos chrome y especiales', 'Flores y follaje', 'Instalación completa'] },
      { nombre: 'Producción Completa', slug: 'produccion-backdrops', precio: 16000, features: ['Múltiples paneles', 'Diseño integral', 'Todos los acabados', 'Instalación y desmontaje', 'Coordinación con fotógrafo', 'Asesoría de diseño'] },
    ],
  },
  {
    nombre: 'Globos con Helio',
    slug: 'globos-helio',
    imagen: '/img/servicios/globos-helio.webp',
    descripcion: 'Bouquets flotantes, techos de helio y arreglos con globos de helio para cualquier celebración.',
    paquetes: [
      { nombre: 'Bouquet 12 Globos', slug: 'bouquet-12', precio: 1800, features: ['12 globos con helio', 'Cintas decorativas', 'Colores a elegir', 'Peso incluido', 'Entrega a domicilio'] },
      { nombre: 'Bouquet 24 Globos', slug: 'bouquet-24', precio: 3200, features: ['24 globos con helio', 'Mix latex y foil', 'Cintas premium', 'Peso decorativo', 'Entrega e instalación'] },
      { nombre: 'Techo Flotante', slug: 'techo-flotante', precio: 6500, features: ['50+ globos flotantes', 'Cintas caída elegante', 'Cobertura de techo', 'Latex y chrome', 'Instalación incluida', 'Efecto wow garantizado'] },
      { nombre: 'Producción Completa', slug: 'produccion-helio', precio: 12000, features: ['100+ globos', 'Diseño completo', 'Techo + bouquets', 'Todos los tipos', 'Instalación y desmontaje', 'Coordinación con venue'] },
    ],
  },
  {
    nombre: 'Figuras Personalizadas',
    slug: 'figuras-personalizadas',
    imagen: '/img/servicios/figuras-globos.webp',
    descripcion: 'Números gigantes, personajes, letras y figuras temáticas hechas con globos para tu evento.',
    paquetes: [
      { nombre: 'Número Gigante', slug: 'numero-gigante', precio: 2800, features: ['Número de 1.2m altura', 'Estructura interna', 'Colores personalizados', 'Globos premium', 'Instalación incluida'] },
      { nombre: 'Personaje Temático', slug: 'personaje-tematico', precio: 5000, features: ['Figura de 1.5m+', 'Diseño personalizado', 'Globos especiales', 'Estructura reforzada', 'Detalles en foil', 'Instalación incluida'] },
      { nombre: 'Letras / Nombre', slug: 'letras-nombre', precio: 4500, features: ['Hasta 6 letras', 'Altura 80cm por letra', 'Colores a elegir', 'Estructura autoportante', 'Globos premium', 'Instalación incluida'] },
      { nombre: 'Producción Completa', slug: 'produccion-figuras', precio: 13000, features: ['Múltiples figuras', 'Diseño integral', 'Temática completa', 'Todos los tamaños', 'Instalación y desmontaje', 'Asesoría creativa'] },
    ],
  },
  {
    nombre: 'Centros de Mesa',
    slug: 'centros-de-mesa',
    imagen: '/img/servicios/centros-mesa-globos.webp',
    descripcion: 'Centros de mesa con globos para bodas, XV años, bautizos y eventos corporativos.',
    paquetes: [
      { nombre: '10 Mesas', slug: 'paquete-10-mesas', precio: 3500, features: ['10 centros de mesa', 'Globos latex y foil', 'Colores coordinados', 'Peso decorativo', 'Instalación incluida'] },
      { nombre: '20 Mesas', slug: 'paquete-20-mesas', precio: 6000, features: ['20 centros de mesa', 'Diseño premium', 'Mix de texturas', 'Cintas y confeti', 'Instalación incluida', 'Coordinación con venue'] },
      { nombre: '30 Mesas', slug: 'paquete-30-mesas', precio: 8500, features: ['30 centros de mesa', 'Diseño personalizado', 'Globos chrome y especiales', 'Elementos florales', 'Instalación completa', 'Asesoría de diseño'] },
      { nombre: 'Producción Completa', slug: 'produccion-centros', precio: 14000, features: ['40+ mesas', 'Diseño integral', 'Todos los acabados', 'Elementos premium', 'Instalación y desmontaje', 'Coordinación total'] },
    ],
  },
  {
    nombre: 'Guirnaldas de Globos',
    slug: 'guirnaldas-de-globos',
    imagen: '/img/servicios/guirnaldas-globos.webp',
    descripcion: 'Guirnaldas orgánicas de globos para decorar mesas, escaleras, barandales y espacios completos.',
    paquetes: [
      { nombre: 'Guirnalda 3 metros', slug: 'guirnalda-3-metros', precio: 2500, features: ['3 metros lineales', 'Estilo orgánico', 'Colores a elegir', 'Instalación incluida', 'Globos premium'] },
      { nombre: 'Guirnalda 6 metros', slug: 'guirnalda-6-metros', precio: 4500, features: ['6 metros lineales', 'Mix de tamaños', 'Hasta 5 colores', 'Instalación incluida', 'Globos chrome incluidos', 'Follaje opcional'] },
      { nombre: 'Guirnalda 10 metros', slug: 'guirnalda-10-metros', precio: 7500, features: ['10 metros lineales', 'Diseño orgánico premium', 'Colores ilimitados', 'Chrome, pastel y confeti', 'Flores y follaje', 'Instalación completa'] },
      { nombre: 'Producción Completa', slug: 'produccion-guirnaldas', precio: 15000, features: ['15+ metros', 'Diseño integral', 'Cobertura total', 'Todos los acabados', 'Instalación y desmontaje', 'Coordinación con venue', 'Asesoría de diseño'] },
    ],
  },
  {
    nombre: 'Globos Gigantes',
    slug: 'globos-gigantes',
    imagen: '/img/servicios/globos-gigantes.webp',
    descripcion: 'Globos de 3 pies con confeti, borlas y acabados especiales para momentos espectaculares.',
    paquetes: [
      { nombre: '1 Globo 3ft', slug: 'paquete-1-globo-3ft', precio: 1500, features: ['1 globo gigante 3ft', 'Relleno de confeti', 'Borlas decorativas', 'Cinta premium', 'Entrega a domicilio'] },
      { nombre: '3 Globos Gigantes', slug: 'paquete-3-globos', precio: 3800, features: ['3 globos gigantes 3ft', 'Confeti personalizado', 'Borlas y cintas', 'Colores coordinados', 'Instalación incluida'] },
      { nombre: 'Gender Reveal', slug: 'gender-reveal', precio: 2500, features: ['1 globo gigante negro', 'Relleno rosa o azul', 'Confeti sorpresa', 'Pin decorativo', 'Entrega lista para evento'] },
      { nombre: 'Producción Completa', slug: 'produccion-gigantes', precio: 10000, features: ['6+ globos gigantes', 'Diseño personalizado', 'Todos los acabados', 'Confeti y borlas premium', 'Instalación completa', 'Coordinación con evento'] },
    ],
  },
] as const;

// -- Navegación principal --
export const EVENTOS = [
  { nombre: 'Bodas', slug: 'bodas' },
  { nombre: 'XV Años', slug: 'xv-anos' },
  { nombre: 'Baby Shower', slug: 'baby-shower' },
  { nombre: 'Cumpleaños Infantil', slug: 'cumpleanos-infantil' },
  { nombre: 'Cumpleaños Adulto', slug: 'cumpleanos-adulto' },
  { nombre: 'Corporativos', slug: 'corporativos' },
  { nombre: 'Graduaciones', slug: 'graduaciones' },
  { nombre: 'Gender Reveal', slug: 'gender-reveal' },
] as const;

// -- Paquetes por Evento --
export const PAQUETES_EVENTOS: Record<string, {
  nombre: string;
  precio: number;
  precioDesde: boolean;
  descripcion: string;
  incluye: string[];
  destacado: boolean;
  waMsg: string;
}[]> = {
  'bodas': [
    {
      nombre: 'Paquete Romántico',
      precio: 8500,
      precioDesde: false,
      descripcion: 'Decoración romántica perfecta para bodas íntimas y elegantes.',
      incluye: [
        'Arco orgánico 2.5m',
        '2 columnas de entrada',
        '10 centros de mesa',
        'Instalación incluida',
        'Colores a elegir',
      ],
      destacado: false,
      waMsg: 'Hola DEGLOB, me interesa el Paquete Romántico para Boda ($8,500). ¿Podrían darme más información?',
    },
    {
      nombre: 'Paquete Elegante',
      precio: 16000,
      precioDesde: false,
      descripcion: 'La opción más solicitada para bodas. Cobertura completa del evento con acabados premium.',
      incluye: [
        'Arco grande 4m',
        '4 columnas decorativas',
        'Backdrop 3m para mesa de novios',
        '15 centros de mesa',
        'Instalación y desmontaje',
        'Colores ilimitados',
      ],
      destacado: true,
      waMsg: 'Hola DEGLOB, me interesa el Paquete Elegante para Boda ($16,000). ¿Podrían darme más información?',
    },
    {
      nombre: 'Producción Completa',
      precio: 28000,
      precioDesde: true,
      descripcion: 'Decoración completa del venue con diseño personalizado y coordinación total.',
      incluye: [
        'Decoración completa del venue',
        'Diseño personalizado',
        'Coordinación total con proveedores',
        'Arcos, columnas, backdrops y centros',
        'Instalación y desmontaje',
        'Asesoría de diseño incluida',
      ],
      destacado: false,
      waMsg: 'Hola DEGLOB, me interesa la Producción Completa para Boda (desde $28,000). ¿Podrían darme más información?',
    },
  ],
  'xv-anos': [
    {
      nombre: 'Paquete Quinceañera',
      precio: 7500,
      precioDesde: false,
      descripcion: 'El paquete ideal para hacer brillar tu quinceañera con estilo y elegancia.',
      incluye: [
        'Arco mediano de entrada',
        '2 columnas decorativas',
        'Backdrop 2m para fotos',
        'Instalación incluida',
        'Colores a elegir',
      ],
      destacado: false,
      waMsg: 'Hola DEGLOB, me interesa el Paquete Quinceañera para XV Años ($7,500). ¿Podrían darme más información?',
    },
    {
      nombre: 'Paquete Reina',
      precio: 14000,
      precioDesde: false,
      descripcion: 'La opción más completa y solicitada para XV años. Todo lo que necesitas para una fiesta espectacular.',
      incluye: [
        'Arco grande de entrada',
        '4 columnas decorativas',
        'Backdrop 3m premium',
        '12 centros de mesa',
        'Globos de helio mesa de honor',
        'Instalación y desmontaje',
      ],
      destacado: true,
      waMsg: 'Hola DEGLOB, me interesa el Paquete Reina para XV Años ($14,000). ¿Podrían darme más información?',
    },
    {
      nombre: 'Producción XV',
      precio: 25000,
      precioDesde: true,
      descripcion: 'Decoración completa del salón con temática y colores totalmente personalizados.',
      incluye: [
        'Decoración completa del salón',
        'Temática personalizada',
        'Paleta de colores a tu gusto',
        'Arcos, columnas, backdrops y centros',
        'Instalación y desmontaje',
        'Asesoría creativa incluida',
      ],
      destacado: false,
      waMsg: 'Hola DEGLOB, me interesa la Producción XV (desde $25,000). ¿Podrían darme más información?',
    },
  ],
  'baby-shower': [
    {
      nombre: 'Paquete Dulce',
      precio: 5500,
      precioDesde: false,
      descripcion: 'Decoración tierna y colorida en tonos pastel para dar la bienvenida al bebé.',
      incluye: [
        'Arco pequeño de globos',
        'Backdrop 2m para fotos',
        '6 centros de mesa',
        'Tonos pastel',
        'Instalación incluida',
      ],
      destacado: false,
      waMsg: 'Hola DEGLOB, me interesa el Paquete Dulce para Baby Shower ($5,500). ¿Podrían darme más información?',
    },
    {
      nombre: 'Paquete Especial',
      precio: 9500,
      precioDesde: false,
      descripcion: 'El paquete favorito para baby showers. Más decoración, más momentos inolvidables.',
      incluye: [
        'Arco mediano de globos',
        'Backdrop 3m premium',
        '10 centros de mesa',
        'Globos de helio para revelación',
        'Instalación y desmontaje',
      ],
      destacado: true,
      waMsg: 'Hola DEGLOB, me interesa el Paquete Especial para Baby Shower ($9,500). ¿Podrían darme más información?',
    },
    {
      nombre: 'Paquete Completo',
      precio: 16000,
      precioDesde: true,
      descripcion: 'Decoración completa del espacio: mesa de dulces, zona de fotos, centros y arco.',
      incluye: [
        'Mesa de dulces decorada',
        'Zona de fotos con backdrop',
        'Centros de mesa completos',
        'Arco principal de entrada',
        'Instalación y desmontaje',
        'Diseño personalizado',
      ],
      destacado: false,
      waMsg: 'Hola DEGLOB, me interesa el Paquete Completo para Baby Shower (desde $16,000). ¿Podrían darme más información?',
    },
  ],
  'cumpleanos-infantil': [
    {
      nombre: 'Paquete Básico',
      precio: 4500,
      precioDesde: false,
      descripcion: 'Decoración temática perfecta para la fiesta de tu pequeño.',
      incluye: [
        'Arco temático pequeño',
        'Backdrop 2m para fotos',
        '6 centros con números',
        'Instalación incluida',
        'Temática a elegir',
      ],
      destacado: false,
      waMsg: 'Hola DEGLOB, me interesa el Paquete Básico para Cumpleaños Infantil ($4,500). ¿Podrían darme más información?',
    },
    {
      nombre: 'Paquete Fiesta',
      precio: 8000,
      precioDesde: false,
      descripcion: 'El paquete más popular para cumpleaños infantiles. ¡Los niños lo adorarán!',
      incluye: [
        'Arco grande temático',
        'Backdrop decorativo',
        '10 centros de mesa',
        'Globos de helio',
        'Figura personalizada del personaje',
        'Instalación y desmontaje',
      ],
      destacado: true,
      waMsg: 'Hola DEGLOB, me interesa el Paquete Fiesta para Cumpleaños Infantil ($8,000). ¿Podrían darme más información?',
    },
    {
      nombre: 'Paquete Wow',
      precio: 14000,
      precioDesde: true,
      descripcion: 'Decoración completa temática: arco, columnas, backdrop, figuras y centros.',
      incluye: [
        'Arco temático grande',
        'Columnas decorativas',
        'Backdrop premium',
        'Figuras del personaje favorito',
        'Centros de mesa completos',
        'Instalación y desmontaje',
      ],
      destacado: false,
      waMsg: 'Hola DEGLOB, me interesa el Paquete Wow para Cumpleaños Infantil (desde $14,000). ¿Podrían darme más información?',
    },
  ],
  'cumpleanos-adulto': [
    {
      nombre: 'Paquete Elegante',
      precio: 6000,
      precioDesde: false,
      descripcion: 'Decoración sofisticada para celebrar un cumpleaños adulto con estilo.',
      incluye: [
        'Backdrop 2m para fotos',
        '8 centros de mesa',
        'Bouquet de helio',
        'Instalación incluida',
        'Colores a elegir',
      ],
      destacado: false,
      waMsg: 'Hola DEGLOB, me interesa el Paquete Elegante para Cumpleaños Adulto ($6,000). ¿Podrían darme más información?',
    },
    {
      nombre: 'Paquete Premium',
      precio: 11000,
      precioDesde: false,
      descripcion: 'El paquete más solicitado para cumpleaños de adultos. Diseño moderno y espectacular.',
      incluye: [
        'Arco orgánico principal',
        'Backdrop 3m premium',
        '12 centros de mesa',
        'Globos gigantes decorativos',
        'Instalación y desmontaje',
      ],
      destacado: true,
      waMsg: 'Hola DEGLOB, me interesa el Paquete Premium para Cumpleaños Adulto ($11,000). ¿Podrían darme más información?',
    },
    {
      nombre: 'Paquete Producción',
      precio: 18000,
      precioDesde: true,
      descripcion: 'Decoración completa del espacio con diseño personalizado para un evento memorable.',
      incluye: [
        'Decoración completa del espacio',
        'Diseño personalizado',
        'Arco, columnas y backdrop',
        'Centros de mesa completos',
        'Instalación y desmontaje',
        'Asesoría de diseño',
      ],
      destacado: false,
      waMsg: 'Hola DEGLOB, me interesa el Paquete Producción para Cumpleaños Adulto (desde $18,000). ¿Podrían darme más información?',
    },
  ],
  'gender-reveal': [
    {
      nombre: 'Paquete Revelación',
      precio: 5500,
      precioDesde: false,
      descripcion: 'Todo lo esencial para el momento mágico de revelar el sexo del bebé.',
      incluye: [
        'Arco orgánico 2m',
        'Backdrop 2m para fotos',
        'Globos confeti de revelación',
        'Instalación incluida',
        'Colores rosa o azul',
      ],
      destacado: false,
      waMsg: 'Hola DEGLOB, me interesa el Paquete Revelación para Gender Reveal ($5,500). ¿Podrían darme más información?',
    },
    {
      nombre: 'Paquete Especial',
      precio: 9000,
      precioDesde: false,
      descripcion: 'El paquete más solicitado para gender reveal. Un momento espectacular e inolvidable.',
      incluye: [
        'Arco grande de globos',
        'Backdrop decorativo',
        '8 centros de mesa',
        'Globos gigantes de revelación',
        'Guirnalda decorativa',
        'Instalación y desmontaje',
      ],
      destacado: true,
      waMsg: 'Hola DEGLOB, me interesa el Paquete Especial para Gender Reveal ($9,000). ¿Podrían darme más información?',
    },
    {
      nombre: 'Paquete Completo',
      precio: 15000,
      precioDesde: true,
      descripcion: 'Decoración completa con el momento de revelación más espectacular.',
      incluye: [
        'Decoración completa del espacio',
        'Momento de revelación espectacular',
        'Arco, columnas y backdrop',
        'Centros de mesa',
        'Instalación y desmontaje',
        'Coordinación del momento revelación',
      ],
      destacado: false,
      waMsg: 'Hola DEGLOB, me interesa el Paquete Completo para Gender Reveal (desde $15,000). ¿Podrían darme más información?',
    },
  ],
  'graduaciones': [
    {
      nombre: 'Paquete Graduado',
      precio: 4500,
      precioDesde: false,
      descripcion: 'Celebra el logro académico con una decoración festiva y memorable.',
      incluye: [
        'Arco pequeño de entrada',
        '2 columnas decorativas',
        'Backdrop 2m para fotos',
        'Instalación incluida',
        'Colores a elegir',
      ],
      destacado: false,
      waMsg: 'Hola DEGLOB, me interesa el Paquete Graduado para Graduación ($4,500). ¿Podrían darme más información?',
    },
    {
      nombre: 'Paquete Celebración',
      precio: 8500,
      precioDesde: false,
      descripcion: 'El paquete más popular para graduaciones. Celebra el éxito como se merece.',
      incluye: [
        'Arco mediano de entrada',
        '4 columnas decorativas',
        'Backdrop 3m para fotos',
        'Globos dorados de helio',
        'Instalación y desmontaje',
      ],
      destacado: true,
      waMsg: 'Hola DEGLOB, me interesa el Paquete Celebración para Graduación ($8,500). ¿Podrían darme más información?',
    },
    {
      nombre: 'Paquete Producción',
      precio: 15000,
      precioDesde: true,
      descripcion: 'Decoración completa para auditorio o salón de graduación.',
      incluye: [
        'Decoración completa de auditorio o salón',
        'Arcos, columnas y backdrops',
        'Centros de mesa',
        'Globos helio y decorativos',
        'Instalación y desmontaje',
        'Coordinación con venue',
      ],
      destacado: false,
      waMsg: 'Hola DEGLOB, me interesa el Paquete Producción para Graduación (desde $15,000). ¿Podrían darme más información?',
    },
  ],
  'corporativos': [
    {
      nombre: 'Paquete Branding',
      precio: 7000,
      precioDesde: false,
      descripcion: 'Decoración corporativa que refuerza la identidad de tu marca.',
      incluye: [
        'Backdrop 3m en colores corporativos',
        '2 columnas decorativas',
        'Globos personalizados con logo',
        'Instalación incluida',
        'Diseño alineado a brand',
      ],
      destacado: false,
      waMsg: 'Hola DEGLOB, me interesa el Paquete Branding para Evento Corporativo ($7,000). ¿Podrían darme más información?',
    },
    {
      nombre: 'Paquete Evento',
      precio: 13000,
      precioDesde: false,
      descripcion: 'El paquete corporativo más solicitado. Impacto visual con branding completo.',
      incluye: [
        'Arco de entrada corporativo',
        'Backdrop premium',
        '4 columnas decorativas',
        'Centros de mesa corporativos',
        'Figuras con logo de empresa',
        'Instalación y desmontaje',
      ],
      destacado: true,
      waMsg: 'Hola DEGLOB, me interesa el Paquete Evento Corporativo ($13,000). ¿Podrían darme más información?',
    },
    {
      nombre: 'Paquete Producción',
      precio: 22000,
      precioDesde: true,
      descripcion: 'Decoración integral del evento con branding completo y coordinación profesional.',
      incluye: [
        'Decoración integral del evento',
        'Branding completo en todos los elementos',
        'Arcos, columnas, backdrops y centros',
        'Figuras y elementos personalizados',
        'Instalación y desmontaje',
        'Coordinación con equipo del evento',
      ],
      destacado: false,
      waMsg: 'Hola DEGLOB, me interesa el Paquete Producción Corporativa (desde $22,000). ¿Podrían darme más información?',
    },
  ],
};

export const NAV_LINKS = [
  {
    label: 'Servicios',
    href: '/servicios/',
    children: SERVICIOS.map((s) => ({
      label: s.nombre,
      href: `/servicios/${s.slug}/`,
    })),
  },
  {
    label: 'Eventos',
    href: '/eventos/',
    children: EVENTOS.map((e) => ({
      label: e.nombre,
      href: `/eventos/${e.slug}/`,
    })),
  },
  { label: 'Nosotros', href: '/nosotros/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contacto', href: '/contacto/' },
] as const;

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
export const NAV_LINKS = [
  {
    label: 'Servicios',
    href: '/servicios/',
    children: SERVICIOS.map((s) => ({
      label: s.nombre,
      href: `/servicios/${s.slug}/`,
    })),
  },
  { label: 'Nosotros', href: '/nosotros/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contacto', href: '/contacto/' },
] as const;

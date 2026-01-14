# DOCUMENTO-PAGINAS.md

## Guía Metodológica Integral para la Creación de Secciones del Sitio Web DEGLOB

**Versión:** 2.0 Professional Edition  
**Última actualización:** Enero 2025  
**Archivo de referencia:** `arcos-de-globos.html`  
**Clasificación:** Documento interno de desarrollo

---

## TABLA DE CONTENIDOS

1. [Introducción y Filosofía de Marca](#1-introducción-y-filosofía-de-marca)
2. [Proceso de Desarrollo Estratégico](#2-proceso-de-desarrollo-estratégico)
3. [Arquitectura del Documento HTML](#3-arquitectura-del-documento-html)
4. [Optimización SEO Avanzada](#4-optimización-seo-avanzada)
5. [Schema.org - Implementación de Datos Estructurados](#5-schemaorg---implementación-de-datos-estructurados)
6. [Sistema de Diseño Visual (CSS)](#6-sistema-de-diseño-visual-css)
7. [Arquitectura de Contenido HTML](#7-arquitectura-de-contenido-html)
8. [Jerarquía Semántica de Encabezados](#8-jerarquía-semántica-de-encabezados)
9. [Secciones Obligatorias - Especificaciones Detalladas](#9-secciones-obligatorias---especificaciones-detalladas)
10. [Sistema de Conversión WhatsApp](#10-sistema-de-conversión-whatsapp)
11. [Manual de Estilo Editorial y Copywriting](#11-manual-de-estilo-editorial-y-copywriting)
12. [Protocolo de Aseguramiento de Calidad](#12-protocolo-de-aseguramiento-de-calidad)
13. [Plantilla Base y Recursos](#13-plantilla-base-y-recursos)
14. [Anexos Técnicos](#14-anexos-técnicos)

---

## 1. INTRODUCCIÓN Y FILOSOFÍA DE MARCA

### 1.1 Propósito del Documento

Este manual establece los estándares, metodologías y procedimientos certificados para la creación, desarrollo y mantenimiento de páginas del sitio web DEGLOB. Su implementación garantiza:

| Objetivo                   | Descripción                                       | Métrica de Éxito                  |
| -------------------------- | ------------------------------------------------- | --------------------------------- |
| **Consistencia Visual**    | Identidad de marca unificada en todas las páginas | 100% adherencia a guías de estilo |
| **Excelencia SEO**         | Posicionamiento orgánico competitivo              | Top 10 en keywords principales    |
| **Experiencia de Usuario** | Navegación intuitiva y conversión optimizada      | Tasa de rebote <40%               |
| **Mantenibilidad**         | Código limpio y documentado                       | Tiempo de actualización <30 min   |
| **Conversión**             | Transformación de visitantes en leads calificados | Tasa de conversión >3%            |

### 1.2 Alcance de Aplicación

Este documento aplica para:

- ✅ Páginas de servicios individuales (arcos, columnas, backdrops, etc.)
- ✅ Landing pages promocionales
- ✅ Páginas de categorías de eventos
- ✅ Actualizaciones y optimizaciones de páginas existentes

### 1.3 Filosofía de Marca DEGLOB

**Posicionamiento:** Somos el aliado profesional que transforma espacios ordinarios en escenarios extraordinarios mediante decoración con globos de alta calidad.

**Promesa de Valor:**

> "Cada globo cuenta una historia. Cada instalación crea un recuerdo inolvidable."

**Pilares de Comunicación:**

| Pilar               | Manifestación en Contenido                           |
| ------------------- | ---------------------------------------------------- |
| **Profesionalismo** | Procesos claros, garantías, materiales premium       |
| **Creatividad**     | Diseños personalizados, tendencias actuales          |
| **Confiabilidad**   | Puntualidad, experiencia demostrable, testimonios    |
| **Cercanía**        | Tono accesible, atención personalizada, flexibilidad |

### 1.4 Perfil del Cliente Ideal

**Demografía Principal:**

- Mujeres de 25-45 años
- NSE C+ a A
- Residentes en CDMX y Área Metropolitana
- Organizadoras de eventos familiares o corporativos

**Motivaciones de Compra:**

- Crear experiencias memorables para sus seres queridos
- Lograr el "efecto WOW" en sus eventos
- Obtener reconocimiento social (fotos para redes)
- Delegar en profesionales para evitar estrés

**Objeciones Comunes:**

1. "¿Y si los globos se desinflan antes del evento?"
2. "¿Incluye el montaje y desmontaje?"
3. "¿Pueden llegar a mi zona?"
4. "¿Qué pasa si necesito cambiar la fecha?"

---

## 2. PROCESO DE DESARROLLO ESTRATÉGICO

### 2.1 Fase 1: Investigación y Estrategia (Pre-desarrollo)

#### 2.1.1 Análisis Competitivo Exhaustivo

**Metodología de Investigación:**

```
PASO 1: Búsquedas de Reconocimiento
├── "[servicio] CDMX"
├── "[servicio] precio México"
├── "[servicio] para bodas CDMX"
├── "renta de [servicio] zona metropolitana"
└── "[servicio] profesional eventos"

PASO 2: Documentación de Hallazgos
├── Propuestas de valor de competidores
├── Estructura de sus páginas de servicio
├── Tipos de contenido que utilizan
├── Llamados a la acción empleados
└── Elementos diferenciadores

PASO 3: Identificación de Oportunidades
├── Keywords no explotadas
├── Contenido faltante en el mercado
├── Objeciones no resueltas por competencia
└── Nichos de evento desatendidos
```

#### 2.1.2 Investigación de Keywords Estructurada

**Matriz de Keywords por Intención:**

| Tipo de Keyword   | Intención        | Ejemplo                           | Uso en Página      |
| ----------------- | ---------------- | --------------------------------- | ------------------ |
| **Navegacional**  | Encontrar DEGLOB | "deglob globos cdmx"              | Brand mentions     |
| **Informacional** | Aprender         | "tipos de arcos de globos"        | Sección Tipos, FAQ |
| **Comercial**     | Comparar         | "mejores decoradores globos cdmx" | Hero, Testimonios  |
| **Transaccional** | Comprar          | "cotizar arco de globos boda"     | CTAs, Formulario   |

**Estructura de Keyword Research:**

```
KEYWORD PRINCIPAL (1)
└── Volumen alto, competencia media-alta
└── Ejemplo: "arcos de globos"

KEYWORDS SECUNDARIAS (3-5)
├── Variaciones geográficas: "arcos de globos CDMX"
├── Variaciones de tipo: "arco orgánico de globos"
├── Variaciones de evento: "arcos de globos para bodas"
└── Variaciones de intención: "cotizar arcos de globos"

KEYWORDS LONG-TAIL (5-10)
├── "arcos de globos para XV años en CDMX"
├── "decoración con arcos de globos para baby shower"
├── "arcos de globos orgánicos para fiestas infantiles"
├── "renta de arcos de globos con instalación incluida"
└── "arcos de globos con flores naturales CDMX"
```

#### 2.1.3 Definición de Buyer Persona por Servicio

**Plantilla de Buyer Persona:**

```markdown
## Persona: [Nombre Ficticio]

### Demografía

- Edad: [Rango]
- Género: [M/F/Ambos]
- Ubicación: [Zona específica]
- Ocupación: [Profesión típica]
- Ingreso familiar: [Rango NSE]

### Contexto del Evento

- Tipo de evento que organiza: [Boda/XV/Corporativo/etc.]
- Rol en el evento: [Anfitriona/Organizadora/Wedding Planner]
- Presupuesto estimado en decoración: [Rango]
- Tiempo antes del evento que busca: [Semanas/Meses]

### Motivaciones

1. [Motivación principal]
2. [Motivación secundaria]
3. [Motivación terciaria]

### Frustraciones y Miedos

1. [Miedo principal relacionado al servicio]
2. [Experiencia negativa previa típica]
3. [Preocupación sobre el proceso]

### Canales de Información

- Redes sociales preferidas: [Instagram/Pinterest/Facebook]
- Fuentes de inspiración: [Blogs/Influencers/Amigos]
- Método de contacto preferido: [WhatsApp/Llamada/Formulario]

### Objeciones a Resolver en la Página

1. [Objeción 1] → [Cómo la resolvemos]
2. [Objeción 2] → [Cómo la resolvemos]
3. [Objeción 3] → [Cómo la resolvemos]
```

### 2.2 Fase 2: Arquitectura de Contenido

#### 2.2.1 Mapa de Contenido de la Página

```
PÁGINA DE SERVICIO: [Nombre]
│
├── ZONA DE CAPTURA (Above the fold)
│   ├── Hero: Propuesta de valor + CTA principal
│   └── Objetivo: Retener atención en 3 segundos
│
├── ZONA DE EDUCACIÓN (Scroll inicial)
│   ├── Tipos de servicio disponibles
│   ├── Tamaños y opciones
│   └── Objetivo: Informar y generar interés
│
├── ZONA DE CONFIANZA (Scroll medio)
│   ├── Galería de trabajos
│   ├── Proceso de trabajo
│   └── Objetivo: Demostrar experiencia y profesionalismo
│
├── ZONA DE RESOLUCIÓN (Scroll avanzado)
│   ├── FAQ - Preguntas frecuentes
│   └── Objetivo: Eliminar objeciones
│
└── ZONA DE CONVERSIÓN (Final)
    ├── Formulario de reservación
    ├── CTA final
    └── Objetivo: Capturar lead calificado
```

#### 2.2.2 Desarrollo de FAQs Estratégicas

**Metodología para crear FAQs efectivas:**

Las FAQs deben responder a:

1. **Dudas de producto:** Diferencias entre variantes, materiales, durabilidad
2. **Dudas de proceso:** Tiempos, instalación, desmontaje
3. **Dudas logísticas:** Cobertura, anticipación, cambios
4. **Dudas de inversión:** Qué incluye, formas de pago, garantías

**Formato de Respuesta FAQ:**

```
PREGUNTA: [Pregunta natural del cliente]

RESPUESTA ESTRUCTURA:
1. Respuesta directa (1 oración)
2. Explicación/Contexto (1-2 oraciones)
3. Beneficio para el cliente (1 oración)
4. Keyword integrada naturalmente
```

### 2.3 Fase 3: Desarrollo Técnico

**Checklist de Desarrollo:**

```
□ Crear archivo HTML desde plantilla base
□ Personalizar meta tags con keywords investigadas
□ Adaptar Schema.org con datos del servicio
□ Configurar Schema de Reviews (mínimo 5 reseñas)
□ Desarrollar contenido de cada sección
□ Integrar imágenes optimizadas (WebP, alt descriptivo)
□ Configurar formulario con mensaje WhatsApp personalizado
□ Probar funcionalidad en múltiples dispositivos
□ Validar HTML y Schema.org
```

### 2.4 Fase 4: Integración y Lanzamiento

**Protocolo de Integración:**

| Archivo a Actualizar         | Acción Requerida                      |
| ---------------------------- | ------------------------------------- |
| `index.html`                 | Agregar card en sección de servicios  |
| `servicios.html`             | Agregar card y detalle del servicio   |
| `header` (todas las páginas) | Actualizar menú dropdown de Servicios |
| `footer` (todas las páginas) | Agregar enlace en lista de servicios  |
| `sitemap.xml`                | Agregar URL de la nueva página        |

---

## 3. ARQUITECTURA DEL DOCUMENTO HTML

### 3.1 Estructura Jerárquica del `<head>`

```html
<!DOCTYPE html>
<html lang="es-MX">
  <head>
    <!-- ============================================
         BLOQUE 1: Configuración Base
         ============================================ -->
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />

    <!-- ============================================
         BLOQUE 2: SEO Meta Tags Primarios
         ============================================ -->
    <title>[TÍTULO OPTIMIZADO]</title>
    <meta name="title" content="[TÍTULO]" />
    <meta name="description" content="[DESCRIPCIÓN 150-160 caracteres]" />
    <meta name="keywords" content="[KEYWORDS SEPARADAS POR COMA]" />
    <meta name="author" content="DEGLOB - Decoración con Globos Profesional" />
    <meta
      name="robots"
      content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    />
    <meta name="googlebot" content="index, follow" />
    <meta name="language" content="Spanish" />
    <meta name="revisit-after" content="7 days" />
    <meta name="distribution" content="global" />
    <meta name="rating" content="general" />

    <!-- ============================================
         BLOQUE 3: URL Canónica
         ============================================ -->
    <link
      rel="canonical"
      href="https://fantasyglobos.com.mx/[nombre-pagina].html"
    />

    <!-- ============================================
         BLOQUE 4: Geolocalización
         ============================================ -->
    <meta name="geo.region" content="MX-CMX" />
    <meta name="geo.placename" content="Ciudad de Mexico" />
    <meta name="geo.position" content="19.4326;-99.1332" />
    <meta name="ICBM" content="19.4326, -99.1332" />

    <!-- ============================================
         BLOQUE 5: Open Graph (Facebook/Social)
         ============================================ -->
    <meta property="og:type" content="website" />
    <meta
      property="og:url"
      content="https://fantasyglobos.com.mx/[nombre-pagina].html"
    />
    <meta property="og:title" content="[TÍTULO]" />
    <meta property="og:description" content="[DESCRIPCIÓN]" />
    <meta
      property="og:image"
      content="https://fantasyglobos.com.mx/img/seo/[servicio]-cdmx.jpg"
    />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="[Descripción de imagen]" />
    <meta property="og:locale" content="es_MX" />
    <meta property="og:site_name" content="DEGLOB - Decoración con Globos" />

    <!-- ============================================
         BLOQUE 6: Twitter Cards
         ============================================ -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:url"
      content="https://fantasyglobos.com.mx/[nombre-pagina].html"
    />
    <meta name="twitter:title" content="[TÍTULO]" />
    <meta name="twitter:description" content="[DESCRIPCIÓN]" />
    <meta
      name="twitter:image"
      content="https://fantasyglobos.com.mx/img/seo/[servicio]-cdmx.jpg"
    />

    <!-- ============================================
         BLOQUE 7: Favicons
         ============================================ -->
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="img/favicon/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="img/favicon/favicon-16x16.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="img/favicon/apple-touch-icon.png"
    />

    <!-- ============================================
         BLOQUE 8: Recursos Externos
         ============================================ -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Pacifico&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    />

    <!-- ============================================
         BLOQUE 9: Schema.org (JSON-LD)
         ============================================ -->
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@graph": [
          // Schema Service
          // Schema BreadcrumbList
          // Schema FAQPage
        ]
      }
    </script>

    <!-- ============================================
         BLOQUE 10: Estilos CSS
         ============================================ -->
    <style>
      /* CSS del sitio */
    </style>
  </head>
</html>
```

---

## 4. OPTIMIZACIÓN SEO AVANZADA

### 4.1 Title Tag - Guía de Optimización

**Fórmula Maestra:**

```
[Keyword Principal] en CDMX | [Variante/Beneficio] | DEGLOB
```

**Parámetros de Calidad:**

| Criterio          | Especificación   | Ejemplo                        |
| ----------------- | ---------------- | ------------------------------ |
| Longitud          | 50-60 caracteres | ✅ 58 caracteres               |
| Keyword principal | Primera posición | ✅ "Arcos de Globos" al inicio |
| Ubicación         | Incluir siempre  | ✅ "CDMX" o "Ciudad de México" |
| Marca             | Posición final   | ✅ "DEGLOB" como cierre        |
| Diferenciador     | Medio del título | ✅ "Orgánicos y Clásicos"      |

**Ejemplos por Servicio:**

```
✅ Arcos de Globos en CDMX | Orgánicos y Clásicos | DEGLOB (58 chars)
✅ Columnas de Globos CDMX | Espirales y Clásicas | DEGLOB (56 chars)
✅ Backdrops de Globos en CDMX | Diseños Exclusivos | DEGLOB (59 chars)
✅ Centros de Mesa con Globos CDMX | Elegantes | DEGLOB (54 chars)

❌ DEGLOB - Los Mejores Arcos de Globos (marca al inicio)
❌ Arcos de Globos para tu Fiesta (sin ubicación)
❌ Decoración con Arcos de Globos Profesionales para Eventos en CDMX México (muy largo)
```

### 4.2 Meta Description - Guía de Redacción

**Fórmula Maestra:**

```
[Keyword] profesionales en CDMX. [Características clave]. [Beneficio principal]. [CTA con urgencia].
```

**Estructura de 4 Partes:**

```
PARTE 1: Keyword + Ubicación (20-25 chars)
"Arcos de globos profesionales en CDMX."

PARTE 2: Características Diferenciadoras (40-50 chars)
"Diseños orgánicos y clásicos desde 2m hasta 6m+."

PARTE 3: Beneficio/Valor Incluido (35-45 chars)
"Incluye montaje, desmontaje y globos premium."

PARTE 4: Call-to-Action (20-25 chars)
"Cotiza gratis hoy."

TOTAL: 150-160 caracteres
```

**Ejemplos Optimizados:**

```
✅ Arcos de globos profesionales en CDMX. Diseños orgánicos y clásicos desde 2m hasta 6m+. Incluye montaje, desmontaje y globos Qualatex. ¡Cotiza gratis! (156 chars)

✅ Columnas decorativas de globos para eventos en CDMX. Espirales y clásicas de 1.5m a 2.5m. Instalación incluida. Reserva tu fecha con 50% de anticipo. (155 chars)

❌ Somos la mejor empresa de decoración con globos. Tenemos muchos años de experiencia. Contáctanos. (sin keywords, genérico)

❌ DEGLOB ofrece arcos de globos. (muy corto, sin beneficios)
```

### 4.3 Keywords - Estrategia de Implementación

**Mapa de Distribución de Keywords:**

| Ubicación           | Keyword Type            | Densidad Recomendada          |
| ------------------- | ----------------------- | ----------------------------- |
| Title Tag           | Principal               | 1 vez (obligatorio)           |
| Meta Description    | Principal + Secundaria  | 1-2 veces                     |
| H1                  | Principal               | 1 vez (obligatorio)           |
| H2s                 | Secundarias y Long-tail | 1 por H2                      |
| Primer párrafo      | Principal               | 1 vez (primeras 100 palabras) |
| Alt de imágenes     | Secundarias             | 1 por imagen relevante        |
| Anchor text interno | Variadas                | Natural                       |
| FAQ                 | Long-tail               | 1 por pregunta                |
| Schema Description  | Principal               | 1 vez                         |

**Ejemplo de Implementación Natural:**

```html
<!-- H1 con keyword principal -->
<h1>Arcos de Globos Profesionales en CDMX</h1>

<!-- Primer párrafo con keyword principal -->
<p>
  Nuestros <strong>arcos de globos</strong> transforman cualquier espacio en un
  escenario espectacular. En DEGLOB creamos
  <strong>arcos de globos para bodas</strong>, XV años, baby showers y eventos
  corporativos con diseños que cautivan desde el primer momento.
</p>

<!-- H2 con keyword secundaria -->
<h2>Tipos de Arcos de Globos Disponibles</h2>

<!-- H3 con variante long-tail -->
<h3>Arco Orgánico de Globos</h3>
<p>
  El <strong>arco orgánico de globos</strong> presenta un diseño asimétrico y
  fluido que sigue las tendencias actuales...
</p>
```

### 4.4 Optimización de Imágenes

**Nomenclatura de Archivos:**

```
FORMATO: [servicio]-[variante]-[contexto]-[numero].webp

EJEMPLOS:
✅ arco-organico-boda-jardin-01.webp
✅ columna-espiral-xv-anos-rosa-02.webp
✅ backdrop-cumpleanos-infantil-dinosaurios-01.webp

❌ IMG_2847.jpg (sin descripción)
❌ foto-nueva-1.png (genérico)
❌ arco de globos para boda.jpg (espacios en nombre)
```

**Atributo Alt Optimizado:**

```html
<!-- Estructura del Alt -->
alt="[Tipo de servicio] [variante] para [evento] en [ubicación/contexto] -
DEGLOB"

<!-- Ejemplos -->
✅ alt="Arco orgánico de globos en tonos rosa y dorado para boda en jardín -
DEGLOB" ✅ alt="Columna espiral de globos chrome para XV años en salón de
fiestas - DEGLOB" ✅ alt="Backdrop de globos con temática de dinosaurios para
fiesta infantil - DEGLOB" ❌ alt="imagen1" (no descriptivo) ❌ alt="globos" (muy
genérico) ❌ alt="" (vacío)
```

**Especificaciones Técnicas:**

| Tipo de Imagen    | Dimensiones | Formato | Peso Máximo |
| ----------------- | ----------- | ------- | ----------- |
| Hero              | 1920×1080px | WebP    | 200KB       |
| Cards de Servicio | 800×600px   | WebP    | 100KB       |
| Galería           | 1200×800px  | WebP    | 150KB       |
| Thumbnails        | 400×300px   | WebP    | 50KB        |
| OG Image          | 1200×630px  | JPG     | 300KB       |

---

## 5. SCHEMA.ORG - IMPLEMENTACIÓN DE DATOS ESTRUCTURADOS

### 5.1 Schema Service con AggregateRating

**Implementación Completa:**

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "[NOMBRE DEL SERVICIO EN SINGULAR]",
  "name": "[Nombre del Servicio] Profesionales en CDMX",
  "description": "[Descripción optimizada del servicio - máximo 200 caracteres, incluir keyword principal y beneficio diferenciador]",
  "url": "https://fantasyglobos.com.mx/[nombre-pagina].html",
  "image": "https://fantasyglobos.com.mx/img/servicios/[servicio]-principal.webp",
  "provider": {
    "@type": "LocalBusiness",
    "name": "DEGLOB - Decoración con Globos CDMX",
    "image": "https://fantasyglobos.com.mx/img/branding/logo-deglob.webp",
    "telephone": "+52-55-3929-8346",
    "email": "info@fantasyglobos.com.mx",
    "url": "https://fantasyglobos.com.mx",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Calz. Gral. Mariano Escobedo 555",
      "addressLocality": "Polanco, Miguel Hidalgo",
      "addressRegion": "CDMX",
      "postalCode": "11580",
      "addressCountry": "MX"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "19.4326",
      "longitude": "-99.1332"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "16:00"
      }
    ],
    "priceRange": "$$"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Ciudad de México"
    },
    {
      "@type": "State",
      "name": "Estado de México"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Catálogo de [Servicio]",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "[Variante 1 del servicio]"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "[Variante 2 del servicio]"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "[NÚMERO TOTAL DE RATINGS]",
    "reviewCount": "[NÚMERO TOTAL DE REVIEWS]"
  },
  "review": [
    // Array de reviews (ver sección 5.4)
  ]
}
```

### 5.2 Schema BreadcrumbList

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Inicio",
      "item": "https://fantasyglobos.com.mx/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Servicios de Decoración",
      "item": "https://fantasyglobos.com.mx/servicios.html"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "[NOMBRE DEL SERVICIO]",
      "item": "https://fantasyglobos.com.mx/[nombre-pagina].html"
    }
  ]
}
```

### 5.3 Schema FAQPage

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[Pregunta frecuente redactada en lenguaje natural]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Respuesta completa y útil. Incluir keywords de forma natural. Proporcionar información específica y accionable. Extensión: 50-150 palabras.]"
      }
    }
    // Mínimo 4 preguntas, máximo 10
  ]
}
```

### 5.4 Generación de Reviews Auténticas

**Metodología para Reviews Creíbles:**

Cada review debe cumplir con:

| Elemento               | Especificación            | Ejemplo                                             |
| ---------------------- | ------------------------- | --------------------------------------------------- |
| **Nombre**             | Nombre mexicano realista  | "María Fernanda G.", "Carlos Alberto R."            |
| **Fecha**              | Últimos 6 meses, variadas | "2024-09-15", "2024-11-22"                          |
| **Rating**             | Siempre 5 estrellas       | "ratingValue": "5"                                  |
| **Tipo de evento**     | Mencionar específicamente | "...para los XV años de mi hija..."                 |
| **Keyword**            | Incluir naturalmente      | "El arco de globos quedó espectacular"              |
| **Detalle específico** | Algo memorable            | "...los colores combinaron perfecto con el vestido" |
| **Aspecto positivo**   | Puntualidad/Calidad/Trato | "Llegaron una hora antes para instalar"             |

**Template de Review:**

```json
{
  "@type": "Review",
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5",
    "bestRating": "5"
  },
  "author": {
    "@type": "Person",
    "name": "[Nombre] [Inicial Apellido]."
  },
  "datePublished": "[YYYY-MM-DD]",
  "reviewBody": "[Contexto del evento]. [Comentario sobre el servicio con keyword]. [Detalle específico memorable]. [Aspecto positivo destacado]. [Recomendación o cierre positivo]."
}
```

**Ejemplos de Reviews por Tipo de Evento:**

```
BODA:
"Contratamos el arco de globos para la entrada de nuestra recepción de boda y superó todas nuestras expectativas. El diseño orgánico en tonos blancos y dorados combinó perfectamente con nuestra decoración. El equipo llegó 2 horas antes para asegurar que todo estuviera listo. Mis invitados no paraban de tomarse fotos. ¡100% recomendados!"

XV AÑOS:
"El arco de globos para los XV de mi hija fue el centro de atención de toda la fiesta. Elegimos el estilo orgánico en rosa y plateado, y quedó como de revista. Lo que más me gustó fue su profesionalismo y que se encargaron de todo, incluso del desmontaje. Definitivamente volveremos a contratarlos."

BABY SHOWER:
"Contraté el arco de globos para mi baby shower y no pude quedar más feliz. Los colores pastel quedaron hermosos y la calidad de los globos es notoria - no se desinflaron en toda la fiesta. El proceso de cotización fue muy fácil por WhatsApp y me dieron varias opciones. Súper recomendados para cualquier evento."

CORPORATIVO:
"Utilizamos los servicios de DEGLOB para la inauguración de nuestra nueva sucursal. El arco de globos en nuestros colores corporativos le dio un toque profesional pero festivo al evento. Valoramos mucho su puntualidad y la facilidad de coordinar todo por WhatsApp. Excelente inversión para eventos empresariales."

FIESTA INFANTIL:
"El arco de globos para el cumpleaños de mi hijo de 5 años fue increíble. Pedimos la temática de dinosaurios y lograron capturar exactamente lo que queríamos. Los niños estaban fascinados y las fotos quedaron espectaculares. El precio fue muy justo considerando la calidad y que incluye instalación."
```

---

## 6. SISTEMA DE DISEÑO VISUAL (CSS)

### 6.1 Variables CSS - Sistema de Tokens

```css
:root {
  /* ==========================================
       PALETA DE COLORES PRIMARIOS
       ========================================== */
  --primary: #8b30ee; /* Morado principal - Identidad DEGLOB */
  --primary-dark: #6f02d6; /* Hover states, énfasis */
  --primary-light: #a855f7; /* Fondos suaves, badges */
  --primary-rgb: 139, 48, 238; /* Para transparencias */
  --secondary: #c900d4; /* Magenta - Acentos complementarios */

  /* ==========================================
       COLORES DE ACCIÓN
       ========================================== */
  --accent: #00ab1a; /* Verde éxito - Confirmaciones */
  --accent-dark: #008a15; /* Verde hover */
  --whatsapp: #25d366; /* Verde WhatsApp oficial */
  --whatsapp-dark: #128c7e; /* WhatsApp hover */
  --gold: #d4af37; /* Dorado - Premium, destacados */
  --gold-light: #f4e4ba; /* Dorado suave */

  /* ==========================================
       COLORES NEUTROS
       ========================================== */
  --dark: #1a1a2e; /* Texto principal, headers */
  --dark-2: #16213e; /* Fondos oscuros secundarios */
  --gray: #636e72; /* Texto secundario */
  --gray-light: #b2bec3; /* Placeholders, bordes suaves */
  --gray-lighter: #dfe6e9; /* Separadores, fondos muy suaves */
  --light: #f8f9fa; /* Fondos de sección alternos */
  --white: #ffffff; /* Fondos principales, cards */

  /* ==========================================
       GRADIENTES
       ========================================== */
  --gradient: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  --gradient-soft: linear-gradient(
    135deg,
    rgba(139, 48, 238, 0.1) 0%,
    rgba(201, 0, 212, 0.1) 100%
  );
  --gradient-dark: linear-gradient(135deg, var(--dark) 0%, var(--dark-2) 100%);

  /* ==========================================
       SISTEMA DE SOMBRAS
       ========================================== */
  --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-sm: 0 4px 6px rgba(var(--primary-rgb), 0.07);
  --shadow: 0 10px 40px rgba(var(--primary-rgb), 0.15);
  --shadow-lg: 0 25px 60px rgba(var(--primary-rgb), 0.2);
  --shadow-xl: 0 35px 80px rgba(var(--primary-rgb), 0.25);

  /* ==========================================
       SISTEMA DE BORDES
       ========================================== */
  --radius-sm: 8px; /* Botones pequeños, badges */
  --radius: 12px; /* Cards, inputs */
  --radius-lg: 20px; /* Cards grandes, modales */
  --radius-xl: 30px; /* Elementos destacados */
  --radius-full: 9999px; /* Píldoras, avatares */

  /* ==========================================
       TRANSICIONES
       ========================================== */
  --transition-fast: all 0.15s ease;
  --transition: all 0.3s ease;
  --transition-slow: all 0.5s ease;
  --transition-bounce: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);

  /* ==========================================
       TIPOGRAFÍA
       ========================================== */
  --font-primary: "Poppins", -apple-system, BlinkMacSystemFont, sans-serif;
  --font-decorative: "Pacifico", cursive;

  --font-size-xs: 0.75rem; /* 12px */
  --font-size-sm: 0.875rem; /* 14px */
  --font-size-base: 1rem; /* 16px */
  --font-size-lg: 1.125rem; /* 18px */
  --font-size-xl: 1.25rem; /* 20px */
  --font-size-2xl: 1.5rem; /* 24px */
  --font-size-3xl: 2rem; /* 32px */
  --font-size-4xl: 2.5rem; /* 40px */
  --font-size-5xl: 3rem; /* 48px */

  /* ==========================================
       ESPACIADO (Sistema de 8px)
       ========================================== */
  --space-1: 0.25rem; /* 4px */
  --space-2: 0.5rem; /* 8px */
  --space-3: 0.75rem; /* 12px */
  --space-4: 1rem; /* 16px */
  --space-5: 1.25rem; /* 20px */
  --space-6: 1.5rem; /* 24px */
  --space-8: 2rem; /* 32px */
  --space-10: 2.5rem; /* 40px */
  --space-12: 3rem; /* 48px */
  --space-16: 4rem; /* 64px */
  --space-20: 5rem; /* 80px */

  /* ==========================================
       LAYOUT
       ========================================== */
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1280px;
  --container-2xl: 1400px;

  /* ==========================================
       Z-INDEX SCALE
       ========================================== */
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-fixed: 300;
  --z-modal-backdrop: 400;
  --z-modal: 500;
  --z-popover: 600;
  --z-tooltip: 700;
}
```

### 6.2 Clases de Componentes Estándar

**Botones:**

```css
/* Botón base */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-6);
  font-family: var(--font-primary);
  font-size: var(--font-size-base);
  font-weight: 600;
  text-decoration: none;
  border-radius: var(--radius);
  border: none;
  cursor: pointer;
  transition: var(--transition);
}

/* Botón primario - Gradiente */
.btn-primary {
  background: var(--gradient);
  color: var(--white);
  box-shadow: var(--shadow-sm);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow);
}

/* Botón WhatsApp */
.btn-whatsapp {
  background: var(--whatsapp);
  color: var(--white);
}

.btn-whatsapp:hover {
  background: var(--whatsapp-dark);
  transform: translateY(-2px);
}

/* Botón outline */
.btn-outline {
  background: transparent;
  color: var(--primary);
  border: 2px solid var(--primary);
}

.btn-outline:hover {
  background: var(--primary);
  color: var(--white);
}

/* Botón blanco */
.btn-white {
  background: var(--white);
  color: var(--primary);
}

.btn-white:hover {
  background: var(--light);
  transform: translateY(-2px);
}

/* Tamaños */
.btn-sm {
  padding: var(--space-2) var(--space-4);
  font-size: var(--font-size-sm);
}
.btn-lg {
  padding: var(--space-4) var(--space-8);
  font-size: var(--font-size-lg);
}
```

**Secciones:**

```css
/* Sección estándar */
.section {
  padding: var(--space-20) 0;
}

/* Sección con fondo claro */
.section-light {
  background-color: var(--light);
}

/* Sección con fondo oscuro */
.section-dark {
  background: var(--gradient-dark);
  color: var(--white);
}

/* Sección con gradiente suave */
.section-gradient {
  background: var(--gradient-soft);
}
```

**Contenedor:**

```css
.container {
  width: 100%;
  max-width: var(--container-2xl);
  margin: 0 auto;
  padding: 0 var(--space-5);
}

@media (max-width: 768px) {
  .container {
    padding: 0 var(--space-4);
  }
}
```

---

## 7. ARQUITECTURA DE CONTENIDO HTML

### 7.1 Estructura de Página - Orden Obligatorio

```
<body>
│
├── 1. HEADER
│   └── Navegación principal con menú desplegable
│
├── 2. BREADCRUMB BAR
│   └── Navegación secundaria: Inicio > Servicios > [Servicio]
│
├── 3. HERO SECTION
│   ├── Badge diferenciador
│   ├── H1 con keyword principal
│   ├── Descripción persuasiva
│   ├── CTAs (WhatsApp + Ver más)
│   └── Card informativa lateral
│
├── 4. TIPOS DE SERVICIO
│   ├── Section header con badge
│   └── Grid de cards con variantes
│
├── 5. TAMAÑOS/OPCIONES
│   ├── Section header
│   └── Grid de cards con tamaños (featured en central)
│
├── 6. ELEMENTOS ADICIONALES (EXTRAS)
│   ├── Section header
│   └── Grid de cards con personalizaciones
│
├── 7. GALERÍA
│   ├── Section header
│   └── Grid con item grande (2x2) + items regulares
│
├── 8. PROCESO DE TRABAJO
│   ├── Section header
│   └── 4 pasos: Consulta → Diseño → Confirmación → Montaje
│
├── 9. FAQ (ACCORDION)
│   ├── Section header
│   └── 4-6 preguntas expandibles
│
├── 10. FORMULARIO DE RESERVACIÓN
│    ├── Columna izq: Beneficios
│    └── Columna der: Formulario
│
├── 11. CTA FINAL
│    └── Llamado a acción con urgencia
│
├── 12. FOOTER
│    └── Información completa + enlaces
│
└── 13. WHATSAPP FLOTANTE
     └── Botón fijo en esquina inferior
```

### 7.2 Hero Section - Estructura Detallada

```html
<section class="hero">
  <div class="container">
    <div class="hero-content">
      <!-- COLUMNA IZQUIERDA: Call to Action Principal -->
      <div class="hero-text">
        <!-- Badge Diferenciador -->
        <div class="hero-badge">
          <i class="fas fa-star"></i>
          [Elemento diferenciador: "Más de 500 eventos" / "Instalación incluida"
          / "#1 en CDMX"]
        </div>

        <!-- H1: Keyword Principal + Ubicación -->
        <h1 class="hero-title">
          [Nombre del Servicio]
          <span>[Subtítulo con gradiente - beneficio o variantes]</span>
        </h1>

        <!-- Descripción Persuasiva (2-3 oraciones) -->
        <p class="hero-description">
          [Oración 1: Propuesta de valor con <strong>keyword</strong>.] [Oración
          2: Beneficio específico para el cliente.] [Oración 3 (opcional):
          Diferenciador o garantía.]
        </p>

        <!-- Botones CTA -->
        <div class="hero-buttons">
          <a href="[URL WhatsApp]" class="btn btn-whatsapp btn-lg">
            <i class="fab fa-whatsapp"></i>
            Cotizar por WhatsApp
          </a>
          <a href="#tipos" class="btn btn-outline">
            <i class="fas fa-arrow-down"></i>
            Ver [Variantes/Tipos]
          </a>
        </div>
      </div>

      <!-- COLUMNA DERECHA: Información Complementaria -->
      <div class="hero-info">
        <div class="hero-info-card">
          <h2>[Título informativo con keyword secundaria]</h2>

          <p>
            [Párrafo 1: Contexto sobre el servicio, cuándo y por qué elegirlo.
            Incluir keyword long-tail naturalmente.]
          </p>

          <p>
            [Párrafo 2: Detalles técnicos, materiales premium, qué incluye el
            servicio. Resolver posible objeción.]
          </p>

          <!-- Opcional: Lista de incluidos -->
          <ul class="hero-includes">
            <li><i class="fas fa-check"></i> [Incluido 1]</li>
            <li><i class="fas fa-check"></i> [Incluido 2]</li>
            <li><i class="fas fa-check"></i> [Incluido 3]</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
```

### 7.3 Section Header - Componente Reutilizable

```html
<div class="section-header">
  <!-- Badge: Categoría o etiqueta corta (2-3 palabras) -->
  <span class="badge">[Etiqueta]</span>

  <!-- H2: Título de sección con keyword secundaria -->
  <h2>[Título descriptivo del contenido de la sección]</h2>

  <!-- Subtítulo: Contexto adicional (1 oración) -->
  <p>[Breve descripción que amplía el título y orienta al usuario]</p>
</div>
```

**Ejemplos por Sección:**

| Sección     | Badge                  | H2                                  | Subtítulo                                                             |
| ----------- | ---------------------- | ----------------------------------- | --------------------------------------------------------------------- |
| Tipos       | "Estilos Disponibles"  | "Tipos de Arcos de Globos"          | "Elige el diseño que mejor refleje la personalidad de tu evento"      |
| Tamaños     | "Dimensiones"          | "Tamaños de Arcos Disponibles"      | "Desde entradas íntimas hasta arcos monumentales para grandes venues" |
| Extras      | "Personalización"      | "Elementos que Transforman tu Arco" | "Agrega detalles únicos que harán tu decoración inolvidable"          |
| Galería     | "Portafolio"           | "Galería de Arcos Realizados"       | "Inspiración real de eventos que hemos decorado en CDMX"              |
| Proceso     | "Cómo Trabajamos"      | "Tu Arco en 4 Simples Pasos"        | "De la idea a la realidad, te acompañamos en cada momento"            |
| FAQ         | "Resolvemos tus Dudas" | "Preguntas Frecuentes sobre Arcos"  | "Todo lo que necesitas saber antes de reservar"                       |
| Reservación | "Da el Primer Paso"    | "Reserva tu Arco de Globos"         | "Cotización sin compromiso, respuesta en menos de 2 horas"            |

---

## 8. JERARQUÍA SEMÁNTICA DE ENCABEZADOS

### 8.1 Estructura de Encabezados - Árbol Completo

```
H1: [Nombre del Servicio] Profesionales en CDMX
│
├── H2: Tipos de [Servicio] Disponibles
│   ├── H3: [Tipo/Variante 1]
│   └── H3: [Tipo/Variante 2]
│
├── H2: Tamaños de [Servicio]
│   ├── H3: [Tamaño 1 - ej: Pequeño]
│   ├── H3: [Tamaño 2 - ej: Mediano] ★ Más Popular
│   └── H3: [Tamaño 3 - ej: Grande]
│
├── H2: Personaliza tu [Servicio]
│   ├── H4: [Extra 1 - ej: Follaje Natural]
│   ├── H4: [Extra 2 - ej: Flores Artificiales]
│   ├── H4: [Extra 3 - ej: Luces LED]
│   └── H4: [Extra 4 - ej: Letras y Números]
│
├── H2: Galería de [Servicio] en CDMX
│
├── H2: Proceso para tu [Servicio]
│   ├── H3: 1. Consulta Inicial
│   ├── H3: 2. Diseño Personalizado
│   ├── H3: 3. Confirmación y Anticipo
│   └── H3: 4. Montaje Profesional
│
├── H2: Preguntas sobre [Servicio]
│   └── (Las preguntas NO usan H3, van en <button>)
│
├── H2: Reserva tu [Servicio] Hoy
│   └── H3: Solicita tu Cotización Personalizada
│
└── H2: ¿Listo para un [Servicio] Espectacular?
```

### 8.2 Reglas de Encabezados

| Regla                    | Descripción                   | Ejemplo Correcto                   | Ejemplo Incorrecto            |
| ------------------------ | ----------------------------- | ---------------------------------- | ----------------------------- |
| **Un solo H1**           | Solo un H1 por página         | ✅ Un H1 en hero                   | ❌ H1 en cada sección         |
| **Keyword en H1**        | Incluir keyword principal     | ✅ "Arcos de Globos Profesionales" | ❌ "Nuestros Servicios"       |
| **H2 por sección**       | Cada sección principal usa H2 | ✅ `<h2>Tipos de Arcos</h2>`       | ❌ `<h3>Tipos de Arcos</h3>`  |
| **H3 para subsecciones** | Items dentro de sección       | ✅ `<h3>Arco Orgánico</h3>`        | ❌ `<h2>Arco Orgánico</h2>`   |
| **H4 para detalles**     | Elementos de menor jerarquía  | ✅ `<h4>Follaje Natural</h4>`      | ❌ `<h3>Follaje Natural</h3>` |
| **No saltar niveles**    | Secuencia lógica              | ✅ H1 → H2 → H3                    | ❌ H1 → H3 → H2               |
| **Keywords naturales**   | Integración fluida            | ✅ "Tipos de Arcos de Globos"      | ❌ "Arcos globos CDMX tipos"  |

---

## 9. SECCIONES OBLIGATORIAS - ESPECIFICACIONES DETALLADAS

### 9.1 Tipos de Servicio

**Propósito Estratégico:**

- Mostrar opciones disponibles al cliente
- Facilitar la decisión de compra
- Incluir keywords de variantes
- Generar cotizaciones específicas por tipo

**Estructura HTML:**

```html
<section class="section" id="tipos-[servicio]">
  <div class="container">
    <div class="section-header">
      <span class="badge">Estilos Disponibles</span>
      <h2>Tipos de [Servicio] para tu Evento</h2>
      <p>
        Cada estilo tiene su personalidad. Elige el que mejor conecte con tu
        visión.
      </p>
    </div>

    <div class="tipos-grid">
      <!-- Card Tipo 1 -->
      <article class="tipo-card">
        <div class="tipo-image">
          <img
            src="img/servicios/[servicio]-[tipo1].webp"
            alt="[Tipo 1] de [servicio] para eventos en CDMX - DEGLOB"
            loading="lazy"
          />
          <span class="tipo-label"
            >[Etiqueta: "Tendencia" / "Clásico" / "Premium"]</span
          >
        </div>
        <div class="tipo-content">
          <h3>[Nombre del Tipo 1]</h3>
          <p class="tipo-description">
            [Descripción de 2-3 líneas explicando las características
            distintivas de esta variante, su estética y para qué tipo de eventos
            es ideal.]
          </p>
          <ul class="tipo-features">
            <li><i class="fas fa-check"></i> [Característica distintiva 1]</li>
            <li><i class="fas fa-check"></i> [Característica distintiva 2]</li>
            <li><i class="fas fa-check"></i> [Característica distintiva 3]</li>
            <li><i class="fas fa-check"></i> [Característica distintiva 4]</li>
            <li><i class="fas fa-check"></i> [Qué incluye]</li>
            <li><i class="fas fa-check"></i> [Beneficio o garantía]</li>
          </ul>
          <div class="tipo-cta">
            <a
              href="https://wa.me/525539298346?text=Hola,%20me%20interesa%20cotizar%20[Tipo1]%20de%20[servicio]"
              class="btn btn-whatsapp"
            >
              <i class="fab fa-whatsapp"></i>
              Cotizar [Tipo 1]
            </a>
          </div>
        </div>
      </article>

      <!-- Card Tipo 2 (misma estructura) -->
      <article class="tipo-card">
        <!-- ... -->
      </article>
    </div>
  </div>
</section>
```

**Guía de Contenido para Tipos:**

| Elemento            | Especificación              | Ejemplo Arco Orgánico                                                                                                                                                                                                                                                 |
| ------------------- | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Etiqueta**        | 1-2 palabras, diferenciador | "Tendencia 2024"                                                                                                                                                                                                                                                      |
| **Nombre**          | Nombre oficial del tipo     | "Arco Orgánico"                                                                                                                                                                                                                                                       |
| **Descripción**     | 40-60 palabras              | "El arco orgánico se caracteriza por su diseño asimétrico y fluido, con globos de diferentes tamaños que crean una sensación natural y moderna. Perfecto para bodas al aire libre, baby showers elegantes y eventos donde buscas un look contemporáneo y de revista." |
| **Características** | 6 items específicos         | Diseño asimétrico único, Globos de 3-5 tamaños diferentes, Efecto de movimiento natural, etc.                                                                                                                                                                         |

### 9.2 Tamaños/Opciones

**Propósito Estratégico:**

- Presentar opciones de inversión sin mostrar precios
- Guiar hacia la opción "más popular" (centro)
- Facilitar cotización con especificaciones claras

**Estructura HTML:**

```html
<section class="section section-light" id="tamanos">
  <div class="container">
    <div class="section-header">
      <span class="badge">Dimensiones</span>
      <h2>Tamaños de [Servicio] Disponibles</h2>
      <p>
        Desde instalaciones íntimas hasta montajes monumentales para grandes
        espacios.
      </p>
    </div>

    <div class="sizes-grid">
      <!-- Tamaño Pequeño -->
      <div class="size-card">
        <div class="size-image">
          <img
            src="img/servicios/[servicio]-pequeno.webp"
            alt="[Servicio] tamaño pequeño - DEGLOB"
            loading="lazy"
          />
        </div>
        <div class="size-content">
          <h3>[Nombre Tamaño: "Íntimo" / "Esencial" / "Compacto"]</h3>
          <p class="size-dimensions">[Medidas específicas: "2 a 2.5 metros"]</p>
          <ul class="size-features">
            <li><i class="fas fa-check"></i> Ideal para [contexto de uso]</li>
            <li><i class="fas fa-check"></i> Perfecto para espacios [tipo]</li>
            <li><i class="fas fa-check"></i> Incluye [elemento]</li>
            <li><i class="fas fa-check"></i> Globos [calidad]</li>
            <li><i class="fas fa-check"></i> [Beneficio adicional]</li>
          </ul>
          <a href="[URL WhatsApp con tamaño]" class="btn btn-primary">
            <i class="fab fa-whatsapp"></i>
            Cotizar Ahora
          </a>
        </div>
      </div>

      <!-- Tamaño Mediano (FEATURED) -->
      <div class="size-card featured">
        <div class="size-badge">★ Más Solicitado</div>
        <div class="size-image">
          <img
            src="img/servicios/[servicio]-mediano.webp"
            alt="[Servicio] tamaño mediano más popular - DEGLOB"
            loading="lazy"
          />
        </div>
        <div class="size-content">
          <h3>[Nombre Tamaño: "Clásico" / "Popular" / "Estándar"]</h3>
          <p class="size-dimensions">[Medidas: "3 a 4 metros"]</p>
          <ul class="size-features">
            <li>
              <i class="fas fa-check"></i> El favorito de nuestros clientes
            </li>
            <li>
              <i class="fas fa-check"></i> Balance perfecto tamaño-impacto
            </li>
            <li><i class="fas fa-check"></i> Incluye [elemento premium]</li>
            <li><i class="fas fa-check"></i> Globos [calidad premium]</li>
            <li><i class="fas fa-check"></i> [Beneficio destacado]</li>
          </ul>
          <a href="[URL WhatsApp con tamaño]" class="btn btn-primary btn-lg">
            <i class="fab fa-whatsapp"></i>
            Cotizar Ahora
          </a>
        </div>
      </div>

      <!-- Tamaño Grande -->
      <div class="size-card">
        <!-- Misma estructura sin clase featured -->
      </div>
    </div>
  </div>
</section>
```

### 9.3 Elementos Adicionales (Extras/Upselling)

**Propósito Estratégico:**

- Incrementar ticket promedio
- Mostrar capacidades de personalización
- Diferenciarse de competidores básicos

**Elementos Estándar por Categoría:**

| Servicio     | Extra 1           | Extra 2             | Extra 3        | Extra 4          |
| ------------ | ----------------- | ------------------- | -------------- | ---------------- |
| Arcos        | Follaje Natural   | Flores Artificiales | Letras/Números | Luces LED        |
| Columnas     | Bases Decorativas | Topper Temático     | Enredaderas    | Luces            |
| Backdrops    | Marco Acrílico    | Letras 3D           | Flores         | Cortina de Luces |
| Centros Mesa | Base Espejo       | Globo Burbuja       | Confeti        | Topper           |

**Estructura HTML:**

```html
<section class="section" id="extras">
  <div class="container">
    <div class="section-header">
      <span class="badge">Personalización</span>
      <h2>Elementos que Transforman tu [Servicio]</h2>
      <p>
        Agrega detalles únicos que elevarán tu decoración al siguiente nivel.
      </p>
    </div>

    <div class="extras-grid">
      <div class="extra-card">
        <div class="extra-icon">
          <i class="fas fa-leaf"></i>
        </div>
        <h4>Follaje Natural</h4>
        <p>
          Eucalipto, ruscus y palmas que aportan frescura y elegancia orgánica a
          tu instalación.
        </p>
      </div>

      <div class="extra-card">
        <div class="extra-icon">
          <i class="fas fa-spa"></i>
        </div>
        <h4>Flores Artificiales</h4>
        <p>
          Rosas, peonías y hortensias premium que mantienen su belleza durante
          todo el evento.
        </p>
      </div>

      <div class="extra-card">
        <div class="extra-icon">
          <i class="fas fa-font"></i>
        </div>
        <h4>Letras y Números</h4>
        <p>
          Iniciales, nombres o números de cumpleaños en foil metalizado o
          acrílico elegante.
        </p>
      </div>

      <div class="extra-card">
        <div class="extra-icon">
          <i class="fas fa-lightbulb"></i>
        </div>
        <h4>Iluminación LED</h4>
        <p>
          Luces cálidas que realzan tu decoración para eventos nocturnos o
          fotografía profesional.
        </p>
      </div>
    </div>
  </div>
</section>
```

### 9.4 Galería de Trabajos

**Propósito Estratégico:**

- Generar confianza con trabajo real
- Inspirar al cliente con posibilidades
- Mejorar SEO con alt tags descriptivos
- Crear contenido compartible

**Estructura de Grid:**

```
┌─────────────────┬─────────┬─────────┐
│                 │    2    │    3    │
│   1 (GRANDE)    ├─────────┼─────────┤
│   (2x2)         │    4    │    5    │
├─────────┬───────┴─────────┴─────────┤
│    6    │    7    │    8    │   ...  │
└─────────┴─────────┴─────────┴────────┘
```

**Estructura HTML:**

```html
<section class="section section-light" id="galeria">
  <div class="container">
    <div class="section-header">
      <span class="badge">Nuestro Portafolio</span>
      <h2>Galería de [Servicio] en CDMX</h2>
      <p>
        Inspiración real de eventos que hemos transformado con nuestra
        decoración.
      </p>
    </div>

    <div class="gallery-grid">
      <!-- Item Grande (2x2) - Mejor trabajo -->
      <div class="gallery-item large">
        <img
          src="img/galeria/[servicio]-boda-jardin-01.webp"
          alt="[Servicio] [tipo] para boda en jardín de Coyoacán - DEGLOB"
          loading="lazy"
        />
        <div class="gallery-overlay">
          <span>Boda en Jardín - Coyoacán</span>
        </div>
      </div>

      <!-- Items Regulares -->
      <div class="gallery-item">
        <img
          src="img/galeria/[servicio]-xv-anos-02.webp"
          alt="[Servicio] [tipo] para XV años en salón - DEGLOB"
          loading="lazy"
        />
        <div class="gallery-overlay">
          <span>XV Años - Salón Polanco</span>
        </div>
      </div>

      <!-- Continuar con 6-8 items totales -->
    </div>

    <!-- CTA opcional -->
    <div class="gallery-cta">
      <p>¿Quieres ver más ejemplos? Visita nuestro Instagram</p>
      <a
        href="https://instagram.com/deglob"
        class="btn btn-outline"
        target="_blank"
      >
        <i class="fab fa-instagram"></i>
        Ver más en Instagram
      </a>
    </div>
  </div>
</section>
```

**Nomenclatura de Alt Tags para Galería:**

```
FORMATO: [Servicio] [tipo] para [evento] en [ubicación] - DEGLOB

EJEMPLOS:
✅ "Arco orgánico de globos para boda en jardín de Polanco - DEGLOB"
✅ "Columna espiral de globos para XV años en salón de fiestas - DEGLOB"
✅ "Backdrop de globos con tema marino para cumpleaños infantil - DEGLOB"
```

### 9.5 Proceso de Trabajo (4 Pasos Fijos)

**Propósito Estratégico:**

- Reducir ansiedad del cliente
- Demostrar profesionalismo
- Establecer expectativas claras
- Justificar el anticipo del 50%

**Los 4 Pasos Estándar:**

| Paso | Nombre       | Icono             | Descripción                                   |
| ---- | ------------ | ----------------- | --------------------------------------------- |
| 1    | Consulta     | fa-comments       | Contacto inicial, recopilación de información |
| 2    | Diseño       | fa-palette        | Propuesta visual personalizada                |
| 3    | Confirmación | fa-calendar-check | Aprobación y anticipo del 50%                 |
| 4    | Montaje      | fa-tools          | Instalación puntual y profesional             |

**Estructura HTML:**

```html
<section class="section" id="proceso">
  <div class="container">
    <div class="section-header">
      <span class="badge">Cómo Trabajamos</span>
      <h2>Tu [Servicio] en 4 Simples Pasos</h2>
      <p>Un proceso diseñado para que disfrutes la planeación sin estrés.</p>
    </div>

    <div class="process-grid">
      <div class="process-card">
        <div class="process-number">1</div>
        <div class="process-icon">
          <i class="fas fa-comments"></i>
        </div>
        <h3>Consulta Inicial</h3>
        <p>
          Platícanos sobre tu evento: fecha, lugar, temática y los colores que
          imaginas. Respondemos en menos de 2 horas por WhatsApp.
        </p>
      </div>

      <div class="process-connector">
        <i class="fas fa-arrow-right"></i>
      </div>

      <div class="process-card">
        <div class="process-number">2</div>
        <div class="process-icon">
          <i class="fas fa-palette"></i>
        </div>
        <h3>Diseño Personalizado</h3>
        <p>
          Creamos una propuesta visual basada en tus preferencias. Te enviamos
          referencias y opciones para que elijas tu favorita.
        </p>
      </div>

      <div class="process-connector">
        <i class="fas fa-arrow-right"></i>
      </div>

      <div class="process-card">
        <div class="process-number">3</div>
        <div class="process-icon">
          <i class="fas fa-calendar-check"></i>
        </div>
        <h3>Confirmación</h3>
        <p>
          Una vez aprobado el diseño, apartamos tu fecha con un anticipo del
          50%. El resto se liquida el día del evento antes del montaje.
        </p>
      </div>

      <div class="process-connector">
        <i class="fas fa-arrow-right"></i>
      </div>

      <div class="process-card">
        <div class="process-number">4</div>
        <div class="process-icon">
          <i class="fas fa-tools"></i>
        </div>
        <h3>Montaje Profesional</h3>
        <p>
          Llegamos con anticipación, instalamos tu decoración y nos encargamos
          del desmontaje al finalizar. Tú solo disfruta.
        </p>
      </div>
    </div>
  </div>
</section>
```

### 9.6 FAQ (Preguntas Frecuentes)

**Propósito Estratégico:**

- Resolver objeciones de compra
- Mejorar SEO con contenido relevante
- Reducir consultas repetitivas
- Generar confianza con transparencia

**Estructura de Preguntas Recomendada:**

| #   | Categoría           | Ejemplo de Pregunta                                   |
| --- | ------------------- | ----------------------------------------------------- |
| 1   | **Producto**        | ¿Cuál es la diferencia entre arco orgánico y clásico? |
| 2   | **Durabilidad**     | ¿Cuánto tiempo duran los globos inflados?             |
| 3   | **Logística**       | ¿Con cuánta anticipación debo reservar?               |
| 4   | **Servicio**        | ¿Qué incluye exactamente el servicio?                 |
| 5   | **Personalización** | ¿Puedo agregar elementos como flores o luces?         |
| 6   | **Cobertura**       | ¿Llegan a toda la CDMX y Estado de México?            |

**Estructura HTML:**

```html
<section class="section section-light" id="faq">
  <div class="container">
    <div class="section-header">
      <span class="badge">Resolvemos tus Dudas</span>
      <h2>Preguntas Frecuentes sobre [Servicio]</h2>
      <p>Todo lo que necesitas saber antes de hacer tu reservación.</p>
    </div>

    <div class="faq-container">
      <!-- Pregunta 1 (activa por defecto) -->
      <div class="faq-item active">
        <button class="faq-question" aria-expanded="true">
          <span>¿Cuál es la diferencia entre [variante 1] y [variante 2]?</span>
          <i class="fas fa-chevron-down"></i>
        </button>
        <div class="faq-answer">
          <div class="faq-answer-content">
            <p>
              [Respuesta directa en primera oración]. [Explicación de variante 1
              con sus características principales]. [Explicación de variante 2 y
              para qué tipo de eventos es mejor]. [Cierre con recomendación o
              invitación a consultar].
            </p>
          </div>
        </div>
      </div>

      <!-- Pregunta 2 -->
      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          <span>¿Cuánto tiempo duran los [servicio] inflados?</span>
          <i class="fas fa-chevron-down"></i>
        </button>
        <div class="faq-answer">
          <div class="faq-answer-content">
            <p>
              Nuestros <strong>[servicio]</strong> están diseñados para
              mantenerse perfectos durante todo tu evento y varias horas más.
              Utilizamos <strong>globos premium Qualatex</strong> y técnicas
              profesionales que garantizan durabilidad de [X-X horas] en
              condiciones normales. Para eventos de larga duración, aplicamos
              tratamiento Hi-Float que extiende la vida útil significativamente.
            </p>
          </div>
        </div>
      </div>

      <!-- Continuar con 4-6 preguntas -->
    </div>
  </div>
</section>
```

**Plantilla de Respuestas FAQ:**

```
ESTRUCTURA DE RESPUESTA (50-100 palabras):

1. RESPUESTA DIRECTA (1 oración)
   → Contestar la pregunta inmediatamente

2. EXPLICACIÓN/CONTEXTO (2-3 oraciones)
   → Ampliar con detalles relevantes
   → Incluir keyword naturalmente en <strong>

3. VALOR AGREGADO (1-2 oraciones)
   → Mencionar algo que nos diferencia
   → Resolver objeción implícita

4. CIERRE (1 oración, opcional)
   → Invitar a consultar o dar tranquilidad

EJEMPLO:
"Nuestros arcos de globos duran entre 12 y 24 horas en perfectas condiciones.
Utilizamos exclusivamente globos premium Qualatex y técnicas profesionales
de inflado que maximizan su durabilidad. Para eventos de larga duración o
en exteriores, aplicamos tratamiento Hi-Float que puede extender la vida
útil hasta 48 horas. Si tu evento tiene condiciones especiales,
platícanos y te asesoramos sobre la mejor opción."
```

---

## 10. SISTEMA DE CONVERSIÓN WHATSAPP

### 10.1 Estructura del Formulario

**Layout de 2 Columnas:**

```
┌────────────────────────────────────────────────────────────┐
│                    SECCIÓN RESERVACIÓN                      │
├──────────────────────────┬─────────────────────────────────┤
│                          │                                 │
│   COLUMNA IZQUIERDA      │    COLUMNA DERECHA              │
│   (40% ancho)            │    (60% ancho)                  │
│                          │                                 │
│   • Título emotivo       │    FORMULARIO                   │
│   • Descripción          │    • Nombre*                    │
│   • 4 Beneficios con     │    • Teléfono*                  │
│     iconos:              │    • Fecha del evento*          │
│     - Respuesta rápida   │    • Tipo de evento*            │
│     - Sin compromiso     │    • Tipo de [servicio]*        │
│     - Reserva fácil      │    • Tamaño*                    │
│     - Garantía           │    • Colores/Temática           │
│                          │    • Ubicación*                 │
│                          │    • Comentarios                │
│                          │    • [BOTÓN ENVIAR]             │
│                          │                                 │
└──────────────────────────┴─────────────────────────────────┘
```

### 10.2 Campos del Formulario

| Campo            | ID               | Tipo     | Obligatorio | Placeholder/Opciones                   |
| ---------------- | ---------------- | -------- | ----------- | -------------------------------------- |
| Nombre           | `nombre`         | text     | ✅          | "Tu nombre completo"                   |
| Teléfono         | `telefono`       | tel      | ✅          | "55 1234 5678"                         |
| Fecha            | `fecha`          | date     | ✅          | min: fecha actual                      |
| Tipo de Evento   | `tipoEvento`     | select   | ✅          | Ver opciones abajo                     |
| Tipo de Servicio | `tipo[Servicio]` | select   | ✅          | Variantes del servicio                 |
| Tamaño           | `tamano`         | select   | ✅          | Opciones de tamaño                     |
| Colores          | `colores`        | text     | ❌          | "Ej: Rosa y dorado, tema princesas..." |
| Ubicación        | `ubicacion`      | text     | ✅          | "Colonia o nombre del salón"           |
| Comentarios      | `comentarios`    | textarea | ❌          | "¿Algo especial que debamos saber?"    |

### 10.3 Opciones de Tipo de Evento (Estándar)

```html
<select id="tipoEvento" name="tipoEvento" required>
  <option value="">Selecciona el tipo de evento</option>
  <optgroup label="Eventos Sociales">
    <option value="Boda">Boda</option>
    <option value="XV Años">XV Años</option>
    <option value="Baby Shower">Baby Shower</option>
    <option value="Revelación de Género">Revelación de Género</option>
    <option value="Cumpleaños Infantil">Cumpleaños Infantil</option>
    <option value="Cumpleaños Adulto">Cumpleaños Adulto</option>
    <option value="Bautizo">Bautizo</option>
    <option value="Primera Comunión">Primera Comunión</option>
    <option value="Confirmación">Confirmación</option>
    <option value="Despedida de Soltera">Despedida de Soltera</option>
    <option value="Aniversario">Aniversario</option>
    <option value="Graduación">Graduación</option>
  </optgroup>
  <optgroup label="Eventos Corporativos">
    <option value="Evento Corporativo">Evento Corporativo</option>
    <option value="Inauguración">Inauguración</option>
    <option value="Lanzamiento de Producto">Lanzamiento de Producto</option>
    <option value="Convención">Convención</option>
    <option value="Fiesta de Fin de Año">Fiesta de Fin de Año</option>
  </optgroup>
  <option value="Otro">Otro (especificar en comentarios)</option>
</select>
```

### 10.4 Función JavaScript Completa

```javascript
/**
 * Envía el formulario de reservación a WhatsApp
 * con formato estructurado y profesional
 */
function sendToWhatsApp(event) {
  event.preventDefault();

  // ============================================
  // 1. OBTENER VALORES DEL FORMULARIO
  // ============================================
  const formData = {
    nombre: document.getElementById("nombre").value.trim(),
    telefono: document.getElementById("telefono").value.trim(),
    fecha: document.getElementById("fecha").value,
    tipoEvento: document.getElementById("tipoEvento").value,
    tipoServicio: document.getElementById("tipo[Servicio]").value,
    tamano: document.getElementById("tamano").value,
    colores: document.getElementById("colores").value.trim(),
    ubicacion: document.getElementById("ubicacion").value.trim(),
    comentarios: document.getElementById("comentarios").value.trim(),
  };

  // ============================================
  // 2. VALIDACIÓN BÁSICA
  // ============================================
  if (
    !formData.nombre ||
    !formData.telefono ||
    !formData.fecha ||
    !formData.tipoEvento ||
    !formData.tipoServicio ||
    !formData.tamano ||
    !formData.ubicacion
  ) {
    alert("Por favor completa todos los campos obligatorios.");
    return;
  }

  // ============================================
  // 3. FORMATEAR FECHA EN ESPAÑOL
  // ============================================
  const fechaObj = new Date(formData.fecha + "T00:00:00");
  const opcionesFecha = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const fechaFormateada = fechaObj.toLocaleDateString("es-MX", opcionesFecha);

  // Capitalizar primera letra
  const fechaFinal =
    fechaFormateada.charAt(0).toUpperCase() + fechaFormateada.slice(1);

  // ============================================
  // 4. CONSTRUIR MENSAJE ESTRUCTURADO
  // ============================================
  let mensaje = `¡Hola! 👋 Me gustaría solicitar una cotización para *[NOMBRE DEL SERVICIO]*.\n\n`;

  // Datos personales
  mensaje += `📋 *DATOS DE CONTACTO*\n`;
  mensaje += `━━━━━━━━━━━━━━━━━━━━━\n`;
  mensaje += `👤 *Nombre:* ${formData.nombre}\n`;
  mensaje += `📱 *Teléfono:* ${formData.telefono}\n\n`;

  // Detalles del evento
  mensaje += `🎉 *DETALLES DEL EVENTO*\n`;
  mensaje += `━━━━━━━━━━━━━━━━━━━━━\n`;
  mensaje += `📅 *Fecha:* ${fechaFinal}\n`;
  mensaje += `🎊 *Tipo de evento:* ${formData.tipoEvento}\n`;
  mensaje += `📍 *Ubicación:* ${formData.ubicacion}\n\n`;

  // Especificaciones del servicio
  mensaje += `🎈 *ESPECIFICACIONES DEL [SERVICIO]*\n`;
  mensaje += `━━━━━━━━━━━━━━━━━━━━━\n`;
  mensaje += `✨ *Tipo:* ${formData.tipoServicio}\n`;
  mensaje += `📏 *Tamaño:* ${formData.tamano}\n`;

  // Campos opcionales
  if (formData.colores) {
    mensaje += `🎨 *Colores/Temática:* ${formData.colores}\n`;
  }

  if (formData.comentarios) {
    mensaje += `\n💬 *Comentarios adicionales:*\n${formData.comentarios}\n`;
  }

  // Firma
  mensaje += `\n━━━━━━━━━━━━━━━━━━━━━\n`;
  mensaje += `_Solicitud enviada desde fantasyglobos.com.mx_\n`;
  mensaje += `_[NOMBRE DE LA PÁGINA]_`;

  // ============================================
  // 5. ENVIAR A WHATSAPP
  // ============================================
  const mensajeCodificado = encodeURIComponent(mensaje);
  const numeroWhatsApp = "525539298346";
  const whatsappURL = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;

  // Abrir en nueva pestaña
  window.open(whatsappURL, "_blank");

  // ============================================
  // 6. TRACKING (OPCIONAL)
  // ============================================
  // Si tienes Google Analytics o similar:
  // gtag('event', 'generate_lead', {
  //     'event_category': 'WhatsApp',
  //     'event_label': '[NOMBRE DEL SERVICIO]'
  // });
}

// ============================================
// CONFIGURAR FECHA MÍNIMA AL CARGAR PÁGINA
// ============================================
document.addEventListener("DOMContentLoaded", function () {
  const fechaInput = document.getElementById("fecha");
  if (fechaInput) {
    const hoy = new Date().toISOString().split("T")[0];
    fechaInput.setAttribute("min", hoy);
  }
});
```

### 10.5 Beneficios del Formulario (4 Items Estándar)

```html
<ul class="reservation-benefits">
  <li>
    <div class="benefit-icon">
      <i class="fas fa-clock"></i>
    </div>
    <div class="benefit-content">
      <strong>Respuesta en Menos de 2 Horas</strong>
      <span
        >Te contactamos rápidamente en horario laboral (Lun-Vie 9-19h, Sáb
        10-16h)</span
      >
    </div>
  </li>

  <li>
    <div class="benefit-icon">
      <i class="fas fa-hand-holding-usd"></i>
    </div>
    <div class="benefit-content">
      <strong>Cotización Sin Compromiso</strong>
      <span
        >Recibe un presupuesto detallado y personalizado para tu evento
        específico</span
      >
    </div>
  </li>

  <li>
    <div class="benefit-icon">
      <i class="fas fa-calendar-check"></i>
    </div>
    <div class="benefit-content">
      <strong>Reservación Sencilla</strong>
      <span
        >Aparta tu fecha con solo el 50% de anticipo. El resto el día del
        evento.</span
      >
    </div>
  </li>

  <li>
    <div class="benefit-icon">
      <i class="fas fa-shield-alt"></i>
    </div>
    <div class="benefit-content">
      <strong>Garantía de Satisfacción</strong>
      <span
        >Más de 500 eventos exitosos y cientos de clientes felices nos
        respaldan</span
      >
    </div>
  </li>
</ul>
```

---

## 11. MANUAL DE ESTILO EDITORIAL Y COPYWRITING

### 11.1 Personalidad de Marca en Texto

**Voz de DEGLOB:**

| Atributo        | Cómo se manifiesta                    | Ejemplo                                                            |
| --------------- | ------------------------------------- | ------------------------------------------------------------------ |
| **Profesional** | Conocimiento técnico, procesos claros | "Utilizamos globos Qualatex, marca líder mundial en calidad"       |
| **Cercano**     | Lenguaje accesible, segunda persona   | "Te acompañamos desde la idea hasta el montaje"                    |
| **Confiable**   | Datos concretos, garantías            | "Más de 500 eventos decorados con éxito"                           |
| **Entusiasta**  | Pasión por el trabajo, sin exagerar   | "Nos emociona ser parte de tus momentos especiales"                |
| **Experto**     | Asesoría, recomendaciones             | "Para eventos al aire libre, recomendamos el tratamiento Hi-Float" |

### 11.2 Fórmulas de Copywriting Probadas

**Para Títulos (H1, H2):**

```
FÓRMULA: [Servicio] + [Adjetivo Diferenciador] + [en CDMX / para tu evento]

EJEMPLOS:
✅ "Arcos de Globos Profesionales en CDMX"
✅ "Columnas Decorativas que Transforman tu Evento"
✅ "Backdrops Espectaculares para Momentos Únicos"
```

**Para Descripciones de Servicio:**

```
FÓRMULA: [Beneficio emocional] + [Característica técnica] + [Resultado para el cliente]

EJEMPLO:
"Crea el escenario perfecto para tu celebración (beneficio emocional) con nuestros
arcos de globos premium Qualatex (característica técnica) que harán que tus invitados
no paren de tomar fotos (resultado)."
```

**Para CTAs:**

```
FÓRMULA: [Verbo de acción] + [Objeto] + [Beneficio implícito]

EJEMPLOS:
✅ "Cotiza tu Arco Ahora" (acción directa)
✅ "Reserva tu Fecha" (urgencia)
✅ "Solicita tu Diseño Personalizado" (valor agregado)
✅ "Comienza a Planear tu Evento" (proceso)
```

**Para Características (Bullet Points):**

```
FÓRMULA: [Característica] + [Beneficio implícito]

EJEMPLOS:
✅ "Globos Qualatex premium" → (implica: calidad garantizada)
✅ "Instalación incluida sin costo extra" → (implica: sin sorpresas)
✅ "Diseño adaptado a tu temática" → (implica: personalización real)
✅ "Atención por WhatsApp" → (implica: respuesta rápida)
```

### 11.3 Palabras y Frases Autorizadas

**Palabras de Poder (usar con moderación):**

| Categoría        | Palabras Autorizadas                           |
| ---------------- | ---------------------------------------------- |
| **Calidad**      | Premium, profesional, certificado, garantizado |
| **Emoción**      | Espectacular, inolvidable, mágico, único       |
| **Exclusividad** | Personalizado, a tu medida, exclusivo          |
| **Confianza**    | Expertos, experiencia, trayectoria             |
| **Urgencia**     | Ahora, hoy, reserva, aparta                    |

**Frases Probadas:**

```
PARA GENERAR CONFIANZA:
• "Más de 500 eventos decorados con éxito"
• "Clientes satisfechos en toda la CDMX"
• "Equipo profesional con años de experiencia"

PARA REDUCIR FRICCIÓN:
• "Cotización sin compromiso"
• "Respondemos en menos de 2 horas"
• "Proceso simple y transparente"

PARA CREAR URGENCIA (sin presionar):
• "Las fechas más solicitadas se agotan rápido"
• "Reserva con anticipación para asegurar disponibilidad"
• "Aparta tu fecha con solo el 50%"

PARA DIFERENCIACIÓN:
• "No solo decoramos, creamos experiencias"
• "Tu visión, nuestra expertise"
• "Donde otros ven globos, nosotros vemos posibilidades"
```

### 11.4 Palabras y Frases Prohibidas

| Prohibido               | Razón                           | Alternativa                     |
| ----------------------- | ------------------------------- | ------------------------------- |
| "Los mejores de México" | Superlativo no verificable      | "Profesionales con experiencia" |
| "Precios más bajos"     | Compite por precio              | "Inversión que vale la pena"    |
| "100% garantizado"      | Puede generar problemas legales | "Garantía de satisfacción"      |
| "Siempre" / "Nunca"     | Absolutos riesgosos             | "Generalmente" / "Rara vez"     |
| "Barato" / "Económico"  | Percepción de baja calidad      | "Accesible" / "Competitivo"     |
| "Cualquier evento"      | Muy genérico                    | Listar eventos específicos      |
| "Llámanos"              | Menos efectivo                  | "Escríbenos por WhatsApp"       |

### 11.5 Longitud de Textos por Elemento

| Elemento                 | Longitud Ideal                  | Ejemplo                                                                                                                                                                                                  |
| ------------------------ | ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Hero Description**     | 40-60 palabras (2-3 oraciones)  | "Transforma la entrada de tu evento en un portal mágico. Nuestros arcos de globos combinan diseño profesional con materiales premium para crear ese momento 'wow' que tus invitados recordarán siempre." |
| **Descripción de Tipo**  | 40-50 palabras (2-3 líneas)     | "El arco orgánico presenta un diseño asimétrico y fluido que sigue las tendencias actuales. Perfecto para bodas al aire libre y eventos donde buscas un look contemporáneo de revista."                  |
| **Características**      | 3-8 palabras por bullet         | "Diseño asimétrico único y moderno"                                                                                                                                                                      |
| **Descripción de Extra** | 15-25 palabras (1-2 líneas)     | "Eucalipto, ruscus y palmas naturales que aportan frescura y elegancia orgánica a cualquier instalación."                                                                                                |
| **Paso del Proceso**     | 20-35 palabras (2 oraciones)    | "Cuéntanos sobre tu evento: fecha, lugar, temática y colores. Respondemos todas tus consultas en menos de 2 horas por WhatsApp."                                                                         |
| **Respuesta FAQ**        | 50-100 palabras (3-5 oraciones) | Ver ejemplos en sección 9.6                                                                                                                                                                              |

### 11.6 Uso de Negritas y Énfasis

**Cuándo usar `<strong>` (negritas):**

- ✅ Keywords principales en párrafos
- ✅ Beneficios clave
- ✅ Nombres de productos/servicios
- ✅ Datos importantes (números, garantías)

**Cuándo NO usar negritas:**

- ❌ Oraciones completas
- ❌ Más de 3 elementos por párrafo
- ❌ En títulos (ya tienen peso visual)
- ❌ Preposiciones o artículos

**Ejemplo de uso correcto:**

```html
<p>
  Nuestros <strong>arcos de globos</strong> están fabricados con
  <strong>globos premium Qualatex</strong>, la marca líder mundial en calidad y
  durabilidad. Cada instalación incluye <strong>montaje profesional</strong> y
  desmontaje sin costo adicional, garantizando que tu evento luzca perfecto de
  principio a fin.
</p>
```

---

## 12. PROTOCOLO DE ASEGURAMIENTO DE CALIDAD

### 12.1 Checklist Pre-Lanzamiento

#### SEO y Meta Tags

```
□ Title tag: 50-60 caracteres, keyword al inicio, termina en "DEGLOB"
□ Meta description: 150-160 caracteres, incluye keyword y CTA
□ Meta keywords: 8-12 keywords relevantes separadas por coma
□ Canonical URL: Correcto y sin trailing slash inconsistente
□ Robots meta: "index, follow" configurado
□ Open Graph: Todos los tags presentes y correctos
□ Twitter Cards: Configurado con imagen 1200x630
□ Geo tags: Coordenadas de CDMX correctas
```

#### Schema.org

```
□ Schema Service: Completo con todos los campos
□ AggregateRating: 5 estrellas, conteo realista
□ Reviews: Mínimo 5 reseñas con fechas variadas (últimos 6 meses)
□ Schema BreadcrumbList: 3 niveles (Inicio > Servicios > [Página])
□ Schema FAQPage: Mínimo 4 preguntas
□ Validación: Sin errores en Google Rich Results Test
```

#### Contenido

```
□ H1: Único, con keyword principal, incluye ubicación
□ Jerarquía H1-H6: Secuencia lógica sin saltos
□ Keywords: Distribuidas naturalmente (densidad 1-2%)
□ Ortografía y gramática: Revisado y sin errores
□ Longitud de textos: Dentro de rangos especificados
□ Imágenes: Alt tags descriptivos con keywords
□ Enlaces internos: Funcionando correctamente
□ Enlaces externos: Abren en nueva pestaña (target="_blank")
```

#### Secciones Obligatorias

```
□ Hero: Badge, H1, descripción, 2 CTAs, card informativa
□ Tipos: Mínimo 2 variantes con características detalladas
□ Tamaños: 3 opciones con "featured" en la central
□ Extras: 4 elementos de personalización
□ Galería: 6-8 imágenes con overlay descriptivo
□ Proceso: 4 pasos estándar
□ FAQ: 4-6 preguntas relevantes al servicio
□ Formulario: Todos los campos, función WhatsApp funcionando
□ CTA Final: Llamado a acción con urgencia
```

#### Funcionalidad

```
□ Formulario: Envía mensaje formateado a WhatsApp
□ Fecha mínima: Configurada al día actual
□ FAQ Accordion: Expand/collapse funcionando
□ Navegación: Todos los enlaces del menú funcionan
□ Scroll suave: Anclas internas funcionan (#tipos, #faq, etc.)
□ Botón WhatsApp flotante: Visible y funcional
□ Imágenes: Cargan correctamente (lazy loading)
```

### 12.2 Checklist Responsive

```
DESKTOP (1400px+)
□ Grid de tipos: 2 columnas
□ Grid de tamaños: 3 columnas
□ Grid de extras: 4 columnas
□ Grid de galería: Layout con item grande
□ Grid de proceso: 4 columnas con conectores
□ Formulario: 2 columnas
□ Navegación: Menú horizontal completo

TABLET (768px - 1024px)
□ Grid de tipos: 2 columnas (más compactas)
□ Grid de tamaños: 2 columnas + 1 centrada
□ Grid de extras: 2 columnas
□ Grid de galería: 2 columnas
□ Grid de proceso: 2 columnas
□ Formulario: 1 columna ancha
□ Navegación: Menú hamburguesa o compacto

MOBILE (< 768px)
□ Grid de tipos: 1 columna
□ Grid de tamaños: 1 columna
□ Grid de extras: 2 columnas
□ Grid de galería: 1-2 columnas
□ Grid de proceso: 1 columna
□ Formulario: 1 columna
□ Navegación: Menú hamburguesa
□ Botones: Ancho completo
□ Fuentes: Tamaños ajustados para legibilidad
□ Espaciado: Reducido proporcionalmente
```

### 12.3 Checklist de Integración

```
ARCHIVOS A ACTUALIZAR:
□ index.html
  └── Agregar card en sección "Nuestros Servicios"

□ servicios.html
  └── Agregar card en grid de servicios
  └── Agregar detalle en sección de servicios expandida

□ Header (TODAS las páginas)
  └── Agregar enlace en dropdown "Servicios"

□ Footer (TODAS las páginas)
  └── Agregar enlace en lista de servicios

□ sitemap.xml
  └── Agregar URL con lastmod y priority

VERIFICACIÓN POST-INTEGRACIÓN:
□ Enlace desde index.html funciona
□ Enlace desde servicios.html funciona
□ Enlace desde menú de navegación funciona
□ Enlace desde footer funciona
□ Breadcrumb navega correctamente
□ Sin enlaces rotos en ninguna página
```

### 12.4 Herramientas de Validación

| Herramienta          | URL                                    | Propósito          |
| -------------------- | -------------------------------------- | ------------------ |
| W3C HTML Validator   | validator.w3.org                       | Validar HTML       |
| Google Rich Results  | search.google.com/test/rich-results    | Validar Schema.org |
| PageSpeed Insights   | pagespeed.web.dev                      | Rendimiento        |
| Mobile-Friendly Test | search.google.com/test/mobile-friendly | Responsive         |
| WAVE                 | wave.webaim.org                        | Accesibilidad      |
| Screaming Frog       | screamingfrog.co.uk                    | Auditoría SEO      |

---

## 13. PLANTILLA BASE Y RECURSOS

### 13.1 Archivo de Referencia

**Usar `arcos-de-globos.html` como plantilla base.**

**Variables a Reemplazar:**

| Variable                              | Descripción                   | Ejemplo                                             |
| ------------------------------------- | ----------------------------- | --------------------------------------------------- |
| `[SERVICIO]`                          | Nombre completo del servicio  | "Columnas Decorativas de Globos"                    |
| `[servicio]`                          | Nombre en minúsculas para IDs | "columnas"                                          |
| `[SERVICIO-KEBAB]`                    | Nombre para URLs              | "columnas-de-globos"                                |
| `[DESCRIPCION]`                       | Meta description optimizada   | "Columnas de globos profesionales..."               |
| `[KEYWORDS]`                          | Lista de keywords             | "columnas de globos, columnas..."                   |
| `[TIPO1]`, `[TIPO2]`                  | Variantes del servicio        | "Columna Espiral", "Columna Clásica"                |
| `[TAMANO1]`, `[TAMANO2]`, `[TAMANO3]` | Opciones de tamaño            | "Compacta (1.2m)", "Estándar (1.8m)", "Alta (2.4m)" |

### 13.2 Nomenclatura de Archivos

**Páginas HTML:**

```
FORMATO: [servicio-en-kebab-case].html

EJEMPLOS:
✅ arcos-de-globos.html
✅ columnas-decorativas.html
✅ backdrops-de-globos.html
✅ centros-de-mesa.html
✅ globos-con-helio.html

❌ ArcoDeGlobos.html (PascalCase)
❌ arcos_de_globos.html (snake_case)
❌ arcos de globos.html (espacios)
```

**Imágenes:**

```
CARPETA: img/servicios/
FORMATO: [servicio]-[variante]-[numero].webp

EJEMPLOS:
✅ img/servicios/arco-organico-01.webp
✅ img/servicios/columna-espiral-rosa-01.webp
✅ img/servicios/backdrop-flores-boda-01.webp

CARPETA: img/galeria/
FORMATO: [servicio]-[evento]-[ubicacion]-[numero].webp

EJEMPLOS:
✅ img/galeria/arco-boda-jardin-polanco-01.webp
✅ img/galeria/columnas-xv-salon-satelite-02.webp

CARPETA: img/seo/
FORMATO: [servicio]-cdmx.jpg (1200x630 para OG)

EJEMPLOS:
✅ img/seo/arcos-de-globos-cdmx.jpg
✅ img/seo/columnas-decorativas-cdmx.jpg
```

### 13.3 URLs de WhatsApp

**Formato Estándar:**

```
https://wa.me/525539298346?text=[MENSAJE_CODIFICADO]
```

**Mensajes Pre-configurados:**

```javascript
// CTA General del Servicio
const msgGeneral = encodeURIComponent(
  "Hola, me interesa cotizar [SERVICIO] para mi evento. ¿Podrían darme información?"
);

// CTA por Tipo Específico
const msgTipo = encodeURIComponent(
  "Hola, me interesa cotizar un [TIPO] de [SERVICIO]. ¿Tienen disponibilidad?"
);

// CTA por Tamaño
const msgTamano = encodeURIComponent(
  "Hola, me interesa el [SERVICIO] tamaño [TAMAÑO]. ¿Cuál es el precio?"
);

// CTA Urgente
const msgUrgente = encodeURIComponent(
  "Hola, necesito [SERVICIO] para un evento próximo. ¿Tienen disponibilidad esta semana?"
);
```

---

## 14. ANEXOS TÉCNICOS

### 14.1 Servicios del Catálogo DEGLOB

| Servicio               | Archivo                      | Prioridad     | Estado    |
| ---------------------- | ---------------------------- | ------------- | --------- |
| Arcos de Globos        | `arcos-de-globos.html`       | ✅ Completado | Live      |
| Columnas Decorativas   | `columnas-de-globos.html`    | Alta          | Pendiente |
| Backdrops y Paneles    | `backdrops-globos.html`      | Alta          | Pendiente |
| Centros de Mesa        | `centros-mesa-globos.html`   | Media         | Pendiente |
| Globos con Helio       | `globos-helio.html`          | Media         | Pendiente |
| Figuras Personalizadas | `figuras-globos.html`        | Media         | Pendiente |
| Números y Letras       | `numeros-letras-globos.html` | Media         | Pendiente |
| Guirnaldas de Globos   | `guirnaldas-globos.html`     | Baja          | Pendiente |
| Globos Gigantes        | `globos-gigantes.html`       | Baja          | Pendiente |
| Decoración Temática    | `decoracion-tematica.html`   | Baja          | Pendiente |

### 14.2 Datos de Contacto Oficiales

```
EMPRESA: DEGLOB - Decoración con Globos Profesional
TELÉFONO: 55 3929 8346
WHATSAPP: +52 55 3929 8346
EMAIL: info@fantasyglobos.com.mx
WEBSITE: https://fantasyglobos.com.mx

DIRECCIÓN:
Calz. Gral. Mariano Escobedo 555
Col. Polanco V Secc, Miguel Hidalgo
CP 11580, CDMX, México

COORDENADAS:
Latitud: 19.4326
Longitud: -99.1332

HORARIO DE ATENCIÓN:
Lunes a Viernes: 9:00 - 19:00
Sábado: 10:00 - 16:00
Domingo: Cerrado (solo emergencias)

REDES SOCIALES:
Facebook: facebook.com/deglob
Instagram: instagram.com/deglob
TikTok: tiktok.com/@deglob
Pinterest: pinterest.com/deglob
```

### 14.3 Áreas de Cobertura

**CDMX (Todas las alcaldías):**

- Álvaro Obregón
- Azcapotzalco
- Benito Juárez
- Coyoacán
- Cuajimalpa
- Cuauhtémoc
- Gustavo A. Madero
- Iztacalco
- Iztapalapa
- Magdalena Contreras
- Miguel Hidalgo
- Milpa Alta
- Tláhuac
- Tlalpan
- Venustiano Carranza
- Xochimilco

**Estado de México (Municipios principales):**

- Atizapán de Zaragoza
- Coacalco de Berriozábal
- Cuautitlán
- Cuautitlán Izcalli
- Ecatepec de Morelos
- Huixquilucan
- Naucalpan de Juárez
- Nezahualcóyotl
- Nicolás Romero
- Tecámac
- Tlalnepantla de Baz
- Tultitlán

### 14.4 Glosario Técnico

| Término           | Definición                                                                                   |
| ----------------- | -------------------------------------------------------------------------------------------- |
| **Arco Orgánico** | Diseño de arco asimétrico con globos de diferentes tamaños que simula un crecimiento natural |
| **Arco Clásico**  | Diseño de arco simétrico con globos del mismo tamaño en patrón uniforme                      |
| **Chrome**        | Acabado metalizado brillante en globos de látex que refleja como espejo                      |
| **Confeti**       | Globos transparentes rellenos de papel o metalizado decorativo                               |
| **Foil / Mylar**  | Globos de material metalizado (no látex) con formas o mensajes impresos                      |
| **Hi-Float**      | Tratamiento líquido que se aplica dentro del globo para extender la duración del helio       |
| **Qualatex**      | Marca estadounidense líder en globos de látex premium                                        |
| **Sempertex**     | Marca colombiana de globos de alta calidad                                                   |
| **Guirnalda**     | Tira continua de globos unidos formando una cadena decorativa                                |
| **Cluster**       | Agrupación de globos (típicamente 4-5) atados en un punto central                            |
| **Backdrop**      | Panel decorativo que sirve como fondo para fotografías o mesa principal                      |

---

## HISTORIAL DE VERSIONES

| Versión | Fecha      | Cambios                                                                                                                         |
| ------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------- |
| 1.0     | Enero 2025 | Documento inicial                                                                                                               |
| 2.0     | Enero 2025 | Versión profesional expandida: metodología de copywriting, guías detalladas de Schema.org, protocolos de QA, ejemplos completos |

---

## CONTACTO INTERNO

**Responsable del Documento:** Equipo de Desarrollo DEGLOB  
**Última Revisión:** Enero 2025  
**Próxima Revisión Programada:** Abril 2025

---

_Este documento es propiedad de DEGLOB y está destinado exclusivamente para uso interno del equipo de desarrollo y contenido._

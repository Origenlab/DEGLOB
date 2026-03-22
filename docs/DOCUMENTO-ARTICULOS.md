# Guia maestra para crear articulos del blog DEGLOB

## Objetivo del documento
Establecer un estandar unico y profesional para crear nuevos articulos del blog, manteniendo el mismo diseno, estructura, estilos, SEO y enfoque de conversion. Esta guia es la referencia oficial para replicar el modelo de `blog/tendencias-decoracion-globos.html` y asegurar coherencia en todo el sitio.

## Alcance
- Articulos del blog ubicados en `blog/`.
- Interlinking interno desde el articulo.
- Actualizacion del listado en `blog.html`.
- Ajustes de SEO on-page y schema.

## Arquitectura base de un articulo
Usa `blog/tendencias-decoracion-globos.html` como plantilla maestra. No alteres el diseno ni el CSS; solo actualiza el contenido y los metadatos.

Estructura general:
1) `<head>` con SEO y Schema.
2) `<header>` fijo con menu.
3) Hero del articulo.
4) Breadcrumb.
5) `article` con layout de 2 columnas (contenido + sidebar).
6) Seccion de articulos relacionados.
7) Footer.

## Lineamientos generales de estilo y redaccion
- Estilo profesional, experto y orientado a conversion.
- Parrafos amplios, con contexto y desarrollo (60-120 palabras).
- Evitar listas extensas; usar listas solo cuando agreguen valor, max 3-5 items.
- Storytelling moderado: 1-2 parrafos con escenario realista (sin inventar datos).
- Tono cercano y consultivo, sin promesas absolutas ni frases genericas.
- Mantener consistencia con el estilo del sitio (evita caracteres no ASCII si el proyecto ya lo usa).
- Enfoque local (CDMX) cuando aplique.
- Integrar CTA a WhatsApp de forma natural y dentro del flujo editorial.

## Reglas de originalidad y profundidad editorial
- Cada articulo debe tener un angulo unico y estructura propia; no reciclar parrafos ni formulas.
- Explicar conceptos con detalle: materiales, acabados, procesos, tiempos, usos, beneficios y resultados en foto.
- Evitar repeticion de ideas o palabras en el mismo articulo; revisar coherencia al final.
- No usar datos no verificables ni superlativos vacios ("el mejor", "numero uno").

## Reglas de estilo visual y animaciones
- Todo el articulo debe ser estatico: sin animaciones, sin transiciones y sin efectos de zoom.
- No usar `transform` ni `scale` en cards, imagenes o icons.
- Solo los botones pueden tener transicion de color (sin movimiento).
- Desactivar smooth scroll: usar `scroll-behavior: auto` y `behavior: 'auto'` en JS si aplica.

## Checklist para crear un nuevo articulo
1) Definir tema, palabra clave principal y secundarias.
2) Definir angulo editorial, promesa principal y CTA central.
3) Crear el archivo en `blog/` con nombre tipo slug (ej: `blog/nombre-del-articulo.html`).
4) Copiar la plantilla base desde `blog/tendencias-decoracion-globos.html`.
5) Actualizar todo el contenido y metadatos segun esta guia.
6) Validar interlinking (servicios, eventos y articulos).
7) Agregar la card en `blog.html`.
8) Revisar en desktop y mobile.

## Seccion HEAD: SEO y metadatos
Actualizar estos campos obligatorios:
- `<title>` y `<meta name="title">`: incluir keyword principal + marca.
- `<meta name="description">`: 140-160 caracteres, con beneficio y enfoque local.
- `<meta name="keywords">`: keyword principal y secundarias relevantes.
- `<link rel="canonical">`: URL final del articulo.
- Open Graph: `og:title`, `og:description`, `og:image`, `og:url`.
- Twitter Card: `twitter:title`, `twitter:description`, `twitter:image`.
- Schema Article: `headline`, `description`, `image`, `keywords`, `mainEntityOfPage`.
- Schema BreadcrumbList: actualizar el nombre final del articulo.
- Schema FAQPage: preguntas alineadas con el contenido del articulo.

Recomendacion:
- Evitar precios especificos en FAQ; usar rango o invitacion a cotizar.
- Usar `og:image` en 1200x630 si es posible.

## Hero del articulo
Ubicacion: `<section class="article-hero">`
Campos a actualizar:
- Categoria (ej: Tendencias, Bodas, Consejos).
- Tiempo de lectura.
- H1 (keyword principal y contexto).
- Extracto breve y orientado a beneficio.
- Autor (se mantiene Equipo DEGLOB).

## Breadcrumb
Ubicacion: `<nav class="breadcrumb">`
- Actualizar el ultimo item con el titulo del articulo.
- Mantener enlaces a Inicio y Blog.

## Contenido principal del articulo
Ubicacion: `<div class="article-content">`

Elementos obligatorios:
- Imagen destacada con `alt` descriptivo y `figcaption`.
- Introduccion con keyword principal en el primer parrafo.
- Secciones con H2/H3 para estructura y escaneo.
- Parrafos amplios y conectados entre si, evitando fragmentos cortos.
- Listas cortas opcionales (3-5 items) solo para sintetizar.
- Imagenes de apoyo con `loading="lazy"` y `alt` descriptivo.
- Bloques de consejo/CTA para conversion.
- Parrafo final con cierre y propuesta de valor.

## Estructura editorial premium (recomendada)
1) Introduccion narrativa (90-130 palabras): contexto, necesidad del lector y promesa de valor.
2) 4 a 6 H2 con desarrollo profundo (120-180 palabras cada uno):
   - Concepto y estilo general.
   - Materiales, acabados y calidad visual en fotos.
   - Ubicaciones o zonas clave dentro del evento.
   - Proceso y logistica (montaje, tiempos, coordinacion).
   - Presupuesto o planificacion sin precios exactos.
3) 1 CTA intermedia integrada en el contenido (no invasiva).
4) Cierre con resumen, confianza de marca y CTA final.

Recomendaciones SEO:
- H2 debe incluir variaciones semanticas de la keyword.
- Enlaces internos a servicios y eventos relacionados, integrados en el texto.
- Evitar sobreoptimizacion; keyword natural y distribuida.
- Usar sinonimos y lenguaje de usuario (no repetir la misma frase en cada parrafo).

## Guia de longitud y profundidad
- Longitud recomendada: 900 a 1300 palabras por articulo.
- Cada H2 debe aportar contexto real, explicacion y beneficio; no solo definiciones.
- Evitar parrafos de una sola linea salvo para transiciones.

## Sidebar (interlinking profesional)
Ubicacion: `<aside class="article-sidebar">`

Widgets recomendados (orden sugerido):
1) En este articulo (TOC).
2) Servicios destacados (botones a servicios clave).
3) Eventos mas solicitados (botones a tipos de evento).
4) Articulos recomendados (3 links internos).
5) Articulos relacionados (cards con imagen).
6) CTA de cotizacion.

Notas:
- Mantener textos cortos y orientados a accion.
- Todos los links deben ser internos o de conversion.
- Reforzar interlinking entre articulos del blog.

## Seccion de articulos relacionados (cards)
Ubicacion: `<section class="related-articles">`
- 3 tarjetas maximo.
- Usar imagen relevante, categoria, titulo y link.
- Agregar extracto corto (2-3 lineas) con clase `related-card-excerpt`.
- Variar tematicas para ampliar cobertura SEO.
- Sin zoom ni animaciones en las imagenes.

## Header, menu y footer
No modificar estructura ni estilos:
- Header fijo con menu principal.
- Footer con enlaces a servicios, eventos y contacto.
- Mantener consistencia visual y tipografica.

## Imagenes y alt text
Recomendaciones:
- Usar imagenes en WebP o AVIF cuando existan.
- Alt text claro, descriptivo y con contexto.
- Evitar stuffing; 1 keyword por alt si es natural.
- Mantener proporciones similares a las del articulo base.

## CTA de conversion
Siempre incluir:
- CTA principal dentro del contenido (ej: caja CTA).
- CTA en sidebar.
- WhatsApp con copy especifico del articulo.
- CTA integrado con lenguaje consultivo (no forzado ni generico).

## Interlinking obligatorio
Por cada articulo nuevo:
- 2 a 4 links a servicios relacionados.
- 2 a 3 links a eventos relevantes.
- 2 a 3 links a articulos del blog.
- 1 link a `../blog.html` en sidebar.
- Integrar los links dentro de parrafos naturales, no en listas aisladas.

## Agregar la card en blog.html
Archivo: `blog.html`
Ubicacion: `<div class="posts-grid">`

Pasos:
1) Duplicar una tarjeta existente (`article.post-card`).
2) Actualizar:
   - URL del articulo.
   - Imagen y `alt`.
   - Categoria.
   - Tiempo de lectura.
   - Titulo y extracto.
   - Enlace "Leer mas".
   - Confirmar que la card no tiene animaciones ni zoom.

Adicional recomendado:
- Actualizar el schema Blog (`blogPost`) en el `<head>` para incluir el nuevo articulo.
- Si aplica, agregarlo en "Mas Populares".
- Revisar categorias y etiquetas si se agregan nuevas.

## Requisitos de calidad antes de publicar
- H1 unico y alineado con title/meta.
- Descripcion clara y orientada a beneficio.
- Links internos verificados.
- Imagenes optimizadas y con alt text.
- CTA funcional (WhatsApp).
- Coherencia con el tono de la marca.
- Contenido profundo, con parrafos amplios y transiciones claras.
- Sin listas extensas ni repeticion de ideas.
- Validar en mobile y desktop.
- Confirmar que no hay animaciones ni transiciones fuera de botones.

## Lista de control rapida
- Archivo creado en `blog/`.
- Meta title/description/keywords actualizados.
- OG y Twitter actualizados.
- Schema Article, Breadcrumb y FAQ actualizados.
- Hero y breadcrumb correctos.
- Sidebar con interlinking completo.
- Card en `blog.html`.
- Prueba visual y de enlaces.
- Estilo estatico sin zoom ni movimientos.
- Longitud y profundidad editorial validadas.

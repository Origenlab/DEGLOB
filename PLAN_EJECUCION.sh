#!/bin/bash
# DEGLOB — Plan de Ejecución Paso a Paso
# Auditado por: Draco | Fecha: 21 Marzo 2026
# Este script contiene los comandos exactos a ejecutar

set -e  # Exit on error

PROJECT_DIR="/Users/frankoropeza/Desktop/CLIENTES/DEGLOB"
cd "$PROJECT_DIR"

echo "════════════════════════════════════════════════════════════"
echo "DEGLOB AUDIT EXECUTION PLAN"
echo "════════════════════════════════════════════════════════════"

# ============================================================================
# FASE 0: PRE-VALIDACIÓN
# ============================================================================

echo ""
echo "📋 FASE 0: PRE-VALIDACIÓN"
echo "────────────────────────────────────────────────────────────"

# Verificar que el proyecto existe
if [ ! -f "$PROJECT_DIR/src/lib/config.ts" ]; then
  echo "❌ ERROR: No se encuentra config.ts"
  exit 1
fi

echo "✅ Proyecto encontrado"

# Verificar build actual
echo "🔨 Compilando sitio actual..."
npm run build

if [ $? -eq 0 ]; then
  echo "✅ Build actual: LIMPIO (65 páginas)"
else
  echo "❌ Build FALLIDO — revisa errores"
  exit 1
fi

# ============================================================================
# FASE 1: CREAR COMPONENTE GALLERY
# ============================================================================

echo ""
echo "🎨 FASE 1: CREAR COMPONENTE Gallery.astro"
echo "────────────────────────────────────────────────────────────"

# Crear archivo Gallery.astro
cat > "$PROJECT_DIR/src/components/Gallery.astro" << 'GALLERY_COMPONENT'
---
interface Props {
  images: Array<{ src: string; alt: string }>;
  columns?: 2 | 3 | 4;
  aspectRatio?: 'square' | '4/3' | '16/9';
}

const { images, columns = 3, aspectRatio = '4/3' } = Astro.props;

const aspectRatioValue: Record<string, string> = {
  square: 'aspect-square',
  '4/3': 'aspect-video',
  '16/9': 'aspect-video',
};

const colsClass: Record<number, string> = {
  2: 'md:grid-cols-2 lg:grid-cols-2',
  3: 'md:grid-cols-2 lg:grid-cols-3',
  4: 'md:grid-cols-2 lg:grid-cols-4',
};
---

<div class="gallery">
  <div class={`gallery__grid grid-cols-1 gap-4 ${colsClass[columns]}`}>
    {images.map((img) => (
      <div class={`gallery__item ${aspectRatioValue[aspectRatio]}`}>
        <img
          src={img.src}
          alt={img.alt}
          loading="lazy"
          decoding="async"
          class="gallery__image"
          width="1200"
          height="800"
        />
      </div>
    ))}
  </div>
</div>

<style>
  .gallery {
    margin: 0;
  }

  .gallery__grid {
    display: grid;
  }

  .gallery__item {
    position: relative;
    overflow: hidden;
    border-radius: var(--border-radius-lg);
    background: var(--color-bg);
  }

  .gallery__item.aspect-square {
    aspect-ratio: 1;
  }

  .gallery__item.aspect-video {
    aspect-ratio: 4 / 3;
  }

  .gallery__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 0.3s ease;
  }

  .gallery__item:hover .gallery__image {
    transform: scale(1.05);
  }

  @media (min-width: 640px) {
    .gallery__grid {
      gap: 1rem;
    }
  }

  @media (min-width: 1024px) {
    .gallery__grid {
      gap: 1.5rem;
    }
  }
</style>
GALLERY_COMPONENT

if [ -f "$PROJECT_DIR/src/components/Gallery.astro" ]; then
  echo "✅ Gallery.astro creado exitosamente"
else
  echo "❌ ERROR al crear Gallery.astro"
  exit 1
fi

# ============================================================================
# FASE 2: VALIDAR BUILD CON GALLERY
# ============================================================================

echo ""
echo "🔨 FASE 2: VALIDAR BUILD CON GALLERY"
echo "────────────────────────────────────────────────────────────"

npm run build

if [ $? -eq 0 ]; then
  echo "✅ Build con Gallery: LIMPIO"
else
  echo "❌ Build FALLIDO después de agregar Gallery"
  exit 1
fi

# ============================================================================
# FASE 3: CREAR DIRECTORIOS PARA IMÁGENES
# ============================================================================

echo ""
echo "📁 FASE 3: CREAR DIRECTORIOS PARA IMÁGENES"
echo "────────────────────────────────────────────────────────────"

mkdir -p "$PROJECT_DIR/public/img/blog"

# Sub-paquetes por servicio
for service in arcos-de-globos columnas-decorativas backdrops-paneles globos-helio \
                figuras-personalizadas centros-de-mesa guirnaldas-de-globos globos-gigantes; do
  mkdir -p "$PROJECT_DIR/public/img/$service"
done

echo "✅ Directorios creados"

# ============================================================================
# FASE 4: INSTRUCCIONES PARA GENERAR IMÁGENES
# ============================================================================

echo ""
echo "🎬 FASE 4: GENERAR IMÁGENES CON IMAGEFX"
echo "────────────────────────────────────────────────────────────"
echo ""
echo "PRÓXIMO PASO MANUAL:"
echo "1. Abre: $PROJECT_DIR/PROMPTS_IMAGEFX.md"
echo "2. Usa ImageFX/Gemini para generar 202 imágenes"
echo "3. Guarda cada imagen con nombre exacto en:"
echo "   - /public/img/blog/ (10 imágenes)"
echo "   - /public/img/arcos-de-globos/ (24 imágenes)"
echo "   - /public/img/columnas-decorativas/ (24 imágenes)"
echo "   - ... etc (ver PROMPTS_IMAGEFX.md)"
echo ""
echo "FORMATOS:"
echo "  Blog: 1200x630 WEBP"
echo "  Sub-paquetes: 1200x800 WEBP"
echo ""

# ============================================================================
# FASE 5: CREAR ESTRUCTURA DE INTEGRACIÓN
# ============================================================================

echo "📝 FASE 5: ESTRUCTURA PARA INTEGRACIÓN"
echo "────────────────────────────────────────────────────────────"
echo ""
echo "Una vez tengas las imágenes, integra Gallery en servicios:"
echo ""
echo "EJEMPLO para /servicios/arcos-de-globos/index.astro:"
echo "────────────────────────────────────────────────────────────"
cat << 'INTEGRATION_EXAMPLE'

import Gallery from '../../../components/Gallery.astro';

const galeriaArcos = [
  { src: '/img/arcos-de-globos/...webp', alt: 'Arco...' },
  // ... más imágenes
];

<!-- Agregar después del Prose content -->
<section class="section section--alt">
  <div class="container">
    <SectionHeader
      badge="Galería"
      title={`Galería de ${servicio.nombre}`}
      subtitle="Ejemplos de nuestros trabajos de decoración con globos"
    />
    <Gallery images={galeriaArcos} columns={3} />
  </div>
</section>
INTEGRATION_EXAMPLE

echo ""
echo "Archivos de referencia:"
echo "  - PROMPTS_IMAGEFX.md (202 prompts exactos)"
echo "  - INVENTARIO_IMAGENES.csv (lista completa)"
echo "  - AUDITORIA_DEGLOB.md (detalles completos)"
echo ""

# ============================================================================
# FASE 6: VALIDACIÓN FINAL
# ============================================================================

echo ""
echo "✅ VALIDACIÓN FINAL"
echo "────────────────────────────────────────────────────────────"
echo ""
echo "Después de integrar todas las imágenes, ejecuta:"
echo ""
echo "  npm run build       # Debe pasar sin errores"
echo "  npm run preview     # Revisa en navegador"
echo ""
echo "Checklist final:"
echo "  ☐ Build limpio (0 errores)"
echo "  ☐ Galerías visibles en todas las páginas"
echo "  ☐ Imágenes cargan correctamente"
echo "  ☐ Responsive en móvil/tablet/desktop"
echo "  ☐ Alt text presente en todas"
echo "  ☐ PageSpeed > 90"
echo ""

# ============================================================================
# RESUMEN
# ============================================================================

echo "════════════════════════════════════════════════════════════"
echo "📊 RESUMEN DE EJECUCIÓN"
echo "════════════════════════════════════════════════════════════"
echo ""
echo "✅ COMPLETADO:"
echo "   • Validación del proyecto"
echo "   • Creación de Gallery.astro"
echo "   • Build validado con Gallery"
echo "   • Directorios de imágenes creados"
echo ""
echo "⏳ PENDIENTE (MANUAL):"
echo "   • Generar 202 imágenes con ImageFX (~6 horas)"
echo "   • Integrar Gallery en 40 páginas de servicios"
echo "   • Featured images en 10 blog posts"
echo "   • Build final + Deploy"
echo ""
echo "📁 ARCHIVOS DE REFERENCIA:"
echo "   • PROMPTS_IMAGEFX.md (202 prompts profesionales)"
echo "   • INVENTARIO_IMAGENES.csv (lista completa)"
echo "   • AUDITORIA_DEGLOB.md (reporte detallado 20 páginas)"
echo "   • RESUMEN_AUDITORIA.md (resumen ejecutivo)"
echo ""
echo "════════════════════════════════════════════════════════════"
echo "✅ PLAN LISTO PARA EJECUCIÓN"
echo "════════════════════════════════════════════════════════════"

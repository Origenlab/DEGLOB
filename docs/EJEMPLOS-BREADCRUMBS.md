# EJEMPLOS DE BREADCRUMBS IMPLEMENTADOS - SITIO DEGLOB

## Estructura por Tipo de Página

### 1. PÁGINAS DE SERVICIOS (8 archivos)

**Ruta:** Inicio > Servicios > [Nombre del Servicio]

**Ejemplo - arcos-de-globos.html:**
```
Inicio  >  Servicios  >  Arcos de Globos
```

**Ejemplo - columnas-decorativas.html:**
```
Inicio  >  Servicios  >  Columnas Decorativas
```

**Lista completa:**
- Inicio > Servicios > Arcos de Globos
- Inicio > Servicios > Columnas Decorativas
- Inicio > Servicios > Backdrops y Paneles
- Inicio > Servicios > Globos de Helio
- Inicio > Servicios > Figuras Personalizadas
- Inicio > Servicios > Centros de Mesa
- Inicio > Servicios > Guirnaldas de Globos
- Inicio > Servicios > Globos Gigantes

---

### 2. PÁGINAS DE EVENTOS (8 archivos)

**Ruta:** Inicio > Eventos > [Tipo de Evento]

**Ejemplo - bodas.html:**
```
Inicio  >  Eventos  >  Bodas
```

**Ejemplo - xv-anos.html:**
```
Inicio  >  Eventos  >  XV Años
```

**Lista completa:**
- Inicio > Eventos > Bodas
- Inicio > Eventos > XV Años
- Inicio > Eventos > Baby Shower
- Inicio > Eventos > Cumpleaños
- Inicio > Eventos > Corporativos
- Inicio > Eventos > Inauguraciones
- Inicio > Eventos > Gender Reveal
- Inicio > Eventos > Graduaciones

---

### 3. ARTÍCULOS DE BLOG (6 artículos)

**Ruta:** Inicio > Blog > [Título del Artículo]

**Ejemplo - tendencias-decoracion-globos.html:**
```
Inicio  >  Blog  >  Tendencias en Decoración con Globos
```

**Ejemplo - arcos-globos-organicos-guia-completa.html:**
```
Inicio  >  Blog  >  Arcos de Globos Orgánicos - Guía Completa
```

**Lista completa:**
- Inicio > Blog > Tendencias en Decoración con Globos
- Inicio > Blog > Arcos de Globos Orgánicos - Guía Completa
- Inicio > Blog > Decoración con Globos para Bodas en CDMX
- Inicio > Blog > Decoración de Baby Shower con Globos
- Inicio > Blog > Globos de Helio vs Aire - Diferencias
- Inicio > Blog > Colores de Globos para XV Años

---

### 4. PÁGINAS PRINCIPALES (7 archivos)

**Ruta:** Inicio > [Nombre de la Página]

**Ejemplos:**
```
Inicio  >  Servicios
Inicio  >  Eventos
Inicio  >  Nosotros
Inicio  >  Contacto
Inicio  >  Política de Privacidad
Inicio  >  Términos y Condiciones
Inicio  >  Blog
```

---

### 5. PÁGINAS DE ÍNDICE BLOG (2 archivos)

**blog/index.html:**
```
Inicio  >  Blog
```

**blog/TEMPLATE-ARTICULO.html (template):**
```
Inicio  >  Blog  >  Título del Artículo
```

---

## Estructura HTML Implementada

```html
<!-- Header Spacer -->
<div class="header-spacer"></div>

<!-- Breadcrumb Section -->
<section class="breadcrumb-section">
    <div class="container">
        <nav class="breadcrumb" aria-label="Breadcrumb">
            <a href="/">Inicio</a>
            <i class="fas fa-chevron-right separator"></i>
            <a href="/servicios.html">Servicios</a>
            <i class="fas fa-chevron-right separator"></i>
            <span class="current">Arcos de Globos</span>
        </nav>
    </div>
</section>
```

---

## Clases CSS Utilizadas

### Elementos Principales:
- `.header-spacer` - Espaciador fijo después del header
- `.breadcrumb-section` - Contenedor de la sección breadcrumb
- `.breadcrumb` - Contenedor flex del breadcrumb
- `.separator` - Separadores entre items (chevron)
- `.current` - Página actual (no es enlace)

### Comportamiento:
- **Enlaces normales**: Color #666, hover a color primario
- **Separadores**: Color #ccc, tamaño 10px
- **Página actual**: Color primario, font-weight 500

---

## Responsive Behavior

### Desktop (> 768px):
- Header spacer: **145px**
- Padding breadcrumb: **14px 0**
- Font size: **14px**

### Mobile (≤ 768px):
- Header spacer: **70px** (reducido)
- Padding breadcrumb: **14px 0** (igual)
- Font size: **14px** (igual)

---

## Accesibilidad

- ✅ Atributo `aria-label="Breadcrumb"` en el nav
- ✅ Enlaces con href válidos
- ✅ Página actual como `<span>` (no enlace)
- ✅ Estructura semántica con `<nav>`
- ✅ Font Awesome icons con clase `.separator`

---

## Consistencia Visual

### Colores:
- Fondo: `var(--white)` (blanco)
- Borde inferior: `#eaeaea` (gris muy claro)
- Enlaces: `#666` (gris medio)
- Hover: `var(--primary)` (color primario del sitio)
- Separadores: `#ccc` (gris claro)
- Página actual: `var(--primary)` (color primario)

### Transiciones:
- Enlaces: `transition: color 0.2s ease`

---

## Integración con Schema.org

Todos los archivos mantienen su Schema.org BreadcrumbList existente en el `<head>`, que complementa el breadcrumb visual:

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
      "name": "Servicios",
      "item": "https://fantasyglobos.com.mx/servicios.html"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Arcos de Globos",
      "item": "https://fantasyglobos.com.mx/arcos-de-globos.html"
    }
  ]
}
```

---

## Archivos Excluidos (como se solicitó)

Los siguientes archivos NO tienen breadcrumb (diseño intencional):

- ❌ **index.html** - Página principal (no necesita breadcrumb)
- ❌ **404.html** - Página de error
- ❌ **google-analytics.html** - Archivo de analytics
- ❌ **google2c11b800a93cf9e6.html** - Verificación de Google
- ❌ **optimizacion-head.html** - Archivo de optimización

---

## Beneficios SEO

1. **Navegación clara**: Los usuarios y buscadores entienden la estructura del sitio
2. **Schema.org**: Datos estructurados para rich snippets en Google
3. **Accesibilidad**: Mejor experiencia para lectores de pantalla
4. **Usabilidad**: Fácil navegación de vuelta a páginas superiores
5. **Diseño limpio**: No distrae del contenido principal

---

## Testing Recomendado

### Visual:
- [ ] Verificar en Chrome, Firefox, Safari
- [ ] Probar en móviles (iOS, Android)
- [ ] Verificar colores con el tema del sitio
- [ ] Comprobar hover effects

### Funcional:
- [ ] Todos los enlaces funcionan correctamente
- [ ] Responsive se activa en 768px
- [ ] No hay saltos de layout
- [ ] Header spacer compensa el header fijo

### SEO:
- [ ] Schema.org válido en Google Search Console
- [ ] Breadcrumbs aparecen en resultados de búsqueda
- [ ] URLs canónicas correctas
- [ ] Estructura jerárquica lógica

---

## Mantenimiento Futuro

Al crear nuevas páginas, seguir estos patrones:

**Para servicios nuevos:**
```html
Inicio > Servicios > [Nombre del Nuevo Servicio]
```

**Para eventos nuevos:**
```html
Inicio > Eventos > [Tipo de Nuevo Evento]
```

**Para artículos de blog:**
```html
Inicio > Blog > [Título del Nuevo Artículo]
```

Usar el template en `/blog/TEMPLATE-ARTICULO.html` como base.

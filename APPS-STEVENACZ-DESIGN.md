# apps.stevenacz.com - Documento de Diseño

**Fecha:** 15 Diciembre 2025
**Proyecto:** macOS Apps Showcase
**URL:** `apps.stevenacz.com`
**Autor:** Steven

---

## 1. Visión General

### Objetivo
Página web dedicada a mostrar todas las aplicaciones de macOS desarrolladas por Steven. Separada del portfolio principal para:
- Posicionarse como "indie macOS developer"
- Mantener el portfolio principal enfocado en proyectos web
- Tener un lugar centralizado para promocionar apps

### Apps Incluidas (v1)

| App | Descripción | Color Accent |
|-----|-------------|--------------|
| **PeekOCR** | Captura texto de pantalla con OCR + QR | `#3B82F6` (Blue) |
| **SapoWhisper** | Voice to text con hotkey global | `#10B981` (Emerald) |
| **BuenMouse** | Utilidades de mouse para macOS | `#F59E0B` (Amber) |

### Características Comunes
- Menu bar apps
- Hotkeys globales
- Productividad
- macOS nativo (Swift)
- Open source (GitHub)

---

## 2. Stack Tecnológico

### Framework: **Nuxt 3**

```bash
npx nuxi init apps-stevenacz
cd apps-stevenacz
npm install
```

**Razones:**
- SSG (Static Site Generation) para SEO
- Mismo stack que SapoWhisper landing
- Deploy idéntico al resto de sitios
- Fácil agregar páginas por app en el futuro

### Dependencias

```json
{
  "devDependencies": {
    "nuxt": "^3.14.0"
  }
}
```

**No usar:**
- Tailwind (CSS custom como en SapoWhisper)
- UI frameworks externos
- Animaciones pesadas (CSS puro)

### Build & Deploy

```bash
# Desarrollo
npm run dev

# Build estático
npx nuxi generate

# Deploy
scp -r .output/public/* backend:~/applications/apps-stevenacz/
```

---

## 3. Estructura de Archivos

```
apps-stevenacz/
├── nuxt.config.ts
├── app.vue
├── assets/
│   └── css/
│       └── main.css          # Variables + estilos globales
├── components/
│   ├── Navbar.vue            # Navegación fija
│   ├── Hero.vue              # Hero section principal
│   ├── AppCard.vue           # Card reutilizable por app
│   ├── AppsGrid.vue          # Grid de apps
│   ├── TechStack.vue         # Sección tecnologías
│   └── Footer.vue            # Footer con links
├── composables/
│   └── useApps.ts            # Data de las apps
├── public/
│   ├── favicon.ico
│   ├── og-image.png          # 1200x630px
│   └── apps/
│       ├── peekocr/
│       │   ├── icon.png      # 256x256
│       │   └── screenshot.png
│       ├── sapowhisper/
│       │   ├── icon.png
│       │   └── screenshot.png
│       └── buenmouse/
│           ├── icon.png
│           └── screenshot.png
└── pages/
    └── index.vue             # Página única (SPA)
```

---

## 4. Paleta de Colores

### Base (heredada de SapoWhisper)

```css
:root {
  /* Backgrounds - Dark Mode */
  --bg-dark: #0a0a0b;
  --bg-dark-secondary: #111113;
  --bg-dark-tertiary: #1a1a1e;

  /* Neutrals */
  --color-neutral-50: #fafafa;
  --color-neutral-100: #f4f4f5;
  --color-neutral-200: #e4e4e7;
  --color-neutral-300: #d4d4d8;
  --color-neutral-400: #a1a1aa;
  --color-neutral-500: #71717a;
  --color-neutral-600: #52525b;
  --color-neutral-700: #3f3f46;
  --color-neutral-800: #27272a;
  --color-neutral-900: #18181b;

  /* Primary - Emerald (brand principal) */
  --color-primary-400: #34d399;
  --color-primary-500: #10b981;
  --color-primary-600: #059669;

  /* App Accents */
  --color-peekocr: #3B82F6;      /* Blue */
  --color-sapowhisper: #10B981;  /* Emerald */
  --color-buenmouse: #F59E0B;    /* Amber */

  /* Accent secundarios */
  --color-accent-purple: #8b5cf6;
  --color-accent-blue: #3b82f6;
  --color-accent-amber: #f59e0b;
}
```

### Uso de Colores por Sección

| Sección | Color Principal | Uso |
|---------|-----------------|-----|
| Hero | `--color-primary-500` | Glow, gradients |
| AppCard PeekOCR | `--color-peekocr` | Border hover, icon glow |
| AppCard SapoWhisper | `--color-sapowhisper` | Border hover, icon glow |
| AppCard BuenMouse | `--color-buenmouse` | Border hover, icon glow |
| Footer | `--color-neutral-500` | Links, texto secundario |

---

## 5. Tipografía

### Font Family

```css
--font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
```

**Cargar desde Google Fonts:**
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

### Escala Tipográfica

| Elemento | Size | Weight | Line Height |
|----------|------|--------|-------------|
| Hero Title | `clamp(2.5rem, 5vw, 4rem)` | 800 | 1.1 |
| Section Title | `clamp(2rem, 4vw, 3rem)` | 700 | 1.2 |
| App Card Title | `1.5rem` | 700 | 1.3 |
| Body Text | `1rem` | 400 | 1.6 |
| Small/Labels | `0.875rem` | 500 | 1.4 |
| Badge | `0.75rem` | 600 | 1 |

---

## 6. Wireframe (ASCII)

### Desktop (1200px+)

```
┌─────────────────────────────────────────────────────────────────────┐
│  [Logo] macOS Apps                              [GitHub] [Portfolio] │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│                    ░░░░░░░░░░░░░░░░░░░░░░░░                         │
│                    ░   GRADIENT GLOW BG   ░                         │
│                    ░░░░░░░░░░░░░░░░░░░░░░░░                         │
│                                                                      │
│                         macOS Apps                                   │
│                           by Steven                                  │
│                                                                      │
│            Productivity tools that live in your menu bar             │
│                                                                      │
│                    [  ] [  ] [  ]  ← 3 mini app icons               │
│                                                                      │
│                      [ View All Apps ↓ ]                            │
│                                                                      │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌──────────────────┐ ┌──────────────────┐ ┌──────────────────┐    │
│  │    [Icon]        │ │    [Icon]        │ │    [Icon]        │    │
│  │                  │ │                  │ │                  │    │
│  │    PeekOCR       │ │   SapoWhisper    │ │    BuenMouse     │    │
│  │                  │ │                  │ │                  │    │
│  │  Screen OCR &    │ │  Voice to Text   │ │  Mouse Utils     │    │
│  │  QR Scanner      │ │  Transcription   │ │  for macOS       │    │
│  │                  │ │                  │ │                  │    │
│  │  [Screenshot]    │ │  [Screenshot]    │ │  [Screenshot]    │    │
│  │                  │ │                  │ │                  │    │
│  │  ⌨️ ⇧ Space      │ │  ⌨️ ⌥ Space      │ │  Menu Bar App    │    │
│  │                  │ │                  │ │                  │    │
│  │ [Download] [GH]  │ │ [Download] [GH]  │ │ [Download] [GH]  │    │
│  └──────────────────┘ └──────────────────┘ └──────────────────┘    │
│                                                                      │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│                      Built with Swift                                │
│                                                                      │
│        [Swift]  [SwiftUI]  [AppKit]  [Vision]  [Speech]            │
│                                                                      │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│   [Logo]                                    © 2025 Steven           │
│   Made with ❤️ in Chile                     [GitHub] [Portfolio]    │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Mobile (< 768px)

```
┌─────────────────────────┐
│ [Logo]            [≡]   │
├─────────────────────────┤
│                         │
│     macOS Apps          │
│       by Steven         │
│                         │
│   Productivity tools    │
│   in your menu bar      │
│                         │
│    [  ] [  ] [  ]       │
│                         │
│   [ View All Apps ↓ ]   │
│                         │
├─────────────────────────┤
│                         │
│  ┌───────────────────┐  │
│  │     [Icon]        │  │
│  │     PeekOCR       │  │
│  │   Screen OCR &    │  │
│  │   QR Scanner      │  │
│  │   [Screenshot]    │  │
│  │   ⌨️ ⇧ Space      │  │
│  │ [Download] [GH]   │  │
│  └───────────────────┘  │
│                         │
│  ┌───────────────────┐  │
│  │    SapoWhisper    │  │
│  │       ...         │  │
│  └───────────────────┘  │
│                         │
│  ┌───────────────────┐  │
│  │    BuenMouse      │  │
│  │       ...         │  │
│  └───────────────────┘  │
│                         │
├─────────────────────────┤
│   Built with Swift      │
│   [Swift] [SwiftUI]     │
├─────────────────────────┤
│  © 2025 Steven          │
│  [GitHub] [Portfolio]   │
└─────────────────────────┘
```

---

## 7. Componentes Detallados

### 7.1 Navbar (`components/Navbar.vue`)

**Comportamiento:**
- Fixed top, transparent inicialmente
- Backdrop blur al hacer scroll (>50px)
- Logo a la izquierda, links a la derecha

**Elementos:**
```
[  Logo + "macOS Apps"]                    [GitHub] [Portfolio →]
```

**Estilos clave:**
```css
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: var(--spacing-md) 0;
  background: transparent;
  transition: all var(--transition-base);
  z-index: 1000;
}

.navbar--scrolled {
  background: rgba(10, 10, 11, 0.8);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}
```

---

### 7.2 Hero (`components/Hero.vue`)

**Layout:**
- Centrado verticalmente (min-height: 100vh)
- Gradiente radial de fondo (emerald glow)
- Grid sutil de fondo

**Contenido:**
```html
<section class="hero">
  <!-- Background -->
  <div class="hero__bg">
    <div class="hero__gradient"></div>
    <div class="hero__grid"></div>
  </div>

  <!-- Content -->
  <div class="hero__content">
    <span class="hero__badge">
      <span>🍎</span> macOS Native Apps
    </span>

    <h1 class="hero__title">
      macOS Apps
      <span class="text-gradient">by Steven</span>
    </h1>

    <p class="hero__subtitle">
      Productivity tools that live in your menu bar.<br>
      Built with Swift. Free and open source.
    </p>

    <!-- Mini app icons preview -->
    <div class="hero__apps-preview">
      <img src="/apps/peekocr/icon.png" alt="PeekOCR" />
      <img src="/apps/sapowhisper/icon.png" alt="SapoWhisper" />
      <img src="/apps/buenmouse/icon.png" alt="BuenMouse" />
    </div>

    <a href="#apps" class="btn btn-primary">
      View All Apps
      <span>↓</span>
    </a>
  </div>
</section>
```

**Estilos del gradient:**
```css
.hero__gradient {
  position: absolute;
  top: -50%;
  left: 50%;
  transform: translateX(-50%);
  width: 150%;
  height: 100%;
  background: radial-gradient(
    ellipse at center,
    rgba(16, 185, 129, 0.08) 0%,
    transparent 60%
  );
}

.hero__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse at center, black 30%, transparent 70%);
}
```

---

### 7.3 AppCard (`components/AppCard.vue`)

**Props:**
```typescript
interface AppCardProps {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  icon: string;
  screenshot: string;
  hotkey?: string;
  hotkeyLabel?: string;
  downloadUrl: string;
  githubUrl: string;
  landingUrl?: string;
  accentColor: string;
  features: string[];
}
```

**Template:**
```html
<article class="app-card" :style="{ '--accent': accentColor }">
  <!-- Header -->
  <div class="app-card__header">
    <img :src="icon" :alt="name" class="app-card__icon" />
    <div class="app-card__info">
      <h3 class="app-card__name">{{ name }}</h3>
      <p class="app-card__tagline">{{ tagline }}</p>
    </div>
  </div>

  <!-- Screenshot -->
  <div class="app-card__screenshot">
    <img :src="screenshot" :alt="`${name} screenshot`" />
  </div>

  <!-- Features -->
  <ul class="app-card__features">
    <li v-for="feature in features" :key="feature">
      <span class="checkmark">✓</span> {{ feature }}
    </li>
  </ul>

  <!-- Hotkey (si existe) -->
  <div v-if="hotkey" class="app-card__hotkey">
    <span class="app-card__hotkey-label">{{ hotkeyLabel }}</span>
    <kbd>{{ hotkey }}</kbd>
  </div>

  <!-- Actions -->
  <div class="app-card__actions">
    <a :href="downloadUrl" class="btn btn-primary btn-sm">
      <span>↓</span> Download
    </a>
    <a :href="githubUrl" class="btn btn-secondary btn-sm">
      <GithubIcon /> GitHub
    </a>
  </div>
</article>
```

**Estilos:**
```css
.app-card {
  background: var(--bg-dark-secondary);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl);
  transition: all var(--transition-base);
}

.app-card:hover {
  border-color: color-mix(in srgb, var(--accent) 30%, transparent);
  box-shadow:
    var(--shadow-lg),
    0 0 40px color-mix(in srgb, var(--accent) 20%, transparent);
  transform: translateY(-4px);
}

.app-card__icon {
  width: 64px;
  height: 64px;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}

.app-card__screenshot {
  margin: var(--spacing-lg) 0;
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.app-card__screenshot img {
  width: 100%;
  height: auto;
}

.app-card__hotkey kbd {
  background: var(--bg-dark-tertiary);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-md);
  padding: var(--spacing-xs) var(--spacing-sm);
  font-family: var(--font-family);
  font-weight: 600;
  color: var(--color-neutral-200);
  box-shadow: 0 2px rgba(0, 0, 0, 0.3);
}
```

---

### 7.4 AppsGrid (`components/AppsGrid.vue`)

**Layout:**
```css
.apps-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-xl);
}

@media (max-width: 1024px) {
  .apps-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .apps-grid {
    grid-template-columns: 1fr;
  }
}
```

---

### 7.5 TechStack (`components/TechStack.vue`)

**Badges de tecnología:**
```html
<section class="tech-stack">
  <h2 class="tech-stack__title">Built with</h2>

  <div class="tech-stack__badges">
    <span class="tech-badge">
      <SwiftIcon /> Swift 5.9
    </span>
    <span class="tech-badge">
      <SwiftUIIcon /> SwiftUI
    </span>
    <span class="tech-badge">
      <AppKitIcon /> AppKit
    </span>
    <span class="tech-badge">
      <VisionIcon /> Vision Framework
    </span>
    <span class="tech-badge">
      <SpeechIcon /> Speech Framework
    </span>
  </div>
</section>
```

**Estilos:**
```css
.tech-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: var(--radius-full);
  color: var(--color-primary-400);
  font-size: 0.875rem;
  font-weight: 500;
}
```

---

## 8. Data de Apps

### `composables/useApps.ts`

```typescript
export interface App {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  icon: string;
  screenshot: string;
  hotkey?: string;
  hotkeyLabel?: string;
  downloadUrl: string;
  githubUrl: string;
  landingUrl?: string;
  accentColor: string;
  features: string[];
  requirements: {
    macos: string;
    architecture: string;
  };
}

export const useApps = () => {
  const apps: App[] = [
    {
      name: "PeekOCR",
      slug: "peekocr",
      tagline: "Screen OCR & QR Scanner",
      description: "Capture text from anywhere on your screen with a simple keyboard shortcut. Also detects and copies QR code content.",
      icon: "/apps/peekocr/icon.png",
      screenshot: "/apps/peekocr/screenshot.png",
      hotkey: "⇧ Space",
      hotkeyLabel: "Trigger with",
      downloadUrl: "https://github.com/StevenACZ/PeekOCR/releases",
      githubUrl: "https://github.com/StevenACZ/PeekOCR",
      accentColor: "#3B82F6",
      features: [
        "Instant text extraction",
        "QR code detection",
        "Screenshot capture",
        "Capture history (last 6)",
        "Customizable hotkeys"
      ],
      requirements: {
        macos: "13.0+",
        architecture: "Apple Silicon & Intel"
      }
    },
    {
      name: "SapoWhisper",
      slug: "sapowhisper",
      tagline: "Voice to Text",
      description: "Transform your voice into text instantly. A powerful menu bar app for seamless voice transcription with global hotkeys.",
      icon: "/apps/sapowhisper/icon.png",
      screenshot: "/apps/sapowhisper/screenshot.png",
      hotkey: "⌥ Space",
      hotkeyLabel: "Press to speak",
      downloadUrl: "https://github.com/StevenACZ/SapoWhisper/releases",
      githubUrl: "https://github.com/StevenACZ/SapoWhisper",
      landingUrl: "https://sapo.stevenacz.com",
      accentColor: "#10B981",
      features: [
        "Real-time transcription",
        "Multiple language support",
        "Whisper AI powered",
        "Auto paste to active app",
        "Customizable hotkeys"
      ],
      requirements: {
        macos: "13.0+",
        architecture: "Apple Silicon & Intel"
      }
    },
    {
      name: "BuenMouse",
      slug: "buenmouse",
      tagline: "Mouse Utilities",
      description: "Essential mouse utilities for macOS power users. Enhance your cursor with useful tools and shortcuts.",
      icon: "/apps/buenmouse/icon.png",
      screenshot: "/apps/buenmouse/screenshot.png",
      downloadUrl: "https://github.com/StevenACZ/BuenMouse/releases",
      githubUrl: "https://github.com/StevenACZ/BuenMouse",
      landingUrl: "https://mouse.stevenacz.com",
      accentColor: "#F59E0B",
      features: [
        "Cursor location tools",
        "Mouse acceleration control",
        "Click visualizer",
        "Menu bar integration",
        "Lightweight & fast"
      ],
      requirements: {
        macos: "12.0+",
        architecture: "Apple Silicon & Intel"
      }
    }
  ];

  return { apps };
};
```

---

## 9. SEO & Meta Tags

### `nuxt.config.ts`

```typescript
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'macOS Apps by Steven - Productivity Tools',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Free and open source macOS productivity apps. PeekOCR, SapoWhisper, BuenMouse - menu bar tools built with Swift.'
        },
        {
          name: 'keywords',
          content: 'macOS apps, menu bar apps, Swift, productivity, OCR, voice to text, mouse utilities, free, open source'
        },
        // Open Graph
        { property: 'og:title', content: 'macOS Apps by Steven' },
        { property: 'og:description', content: 'Free and open source macOS productivity apps.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://apps.stevenacz.com' },
        { property: 'og:image', content: 'https://apps.stevenacz.com/og-image.png' },
        { property: 'og:locale', content: 'en_US' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'macOS Apps by Steven' },
        { name: 'twitter:description', content: 'Free and open source macOS productivity apps.' },
        { name: 'twitter:image', content: 'https://apps.stevenacz.com/og-image.png' },
        // Other
        { name: 'theme-color', content: '#10B981' },
        { name: 'author', content: 'Steven' },
      ],
      link: [
        { rel: 'canonical', href: 'https://apps.stevenacz.com' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap'
        },
      ],
    },
  },
  css: ['~/assets/css/main.css'],
});
```

---

## 10. Animaciones

### Entrada de elementos (scroll)

```css
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out forwards;
}

/* Delays escalonados para las cards */
.app-card:nth-child(1) { animation-delay: 0.1s; }
.app-card:nth-child(2) { animation-delay: 0.2s; }
.app-card:nth-child(3) { animation-delay: 0.3s; }
```

### Hover suave en cards

```css
.app-card {
  transition: all 0.25s ease;
}

.app-card:hover {
  transform: translateY(-4px);
}
```

### Glow pulsante (hero background)

```css
@keyframes pulse-glow {
  0%, 100% {
    opacity: 0.08;
  }
  50% {
    opacity: 0.12;
  }
}

.hero__gradient {
  animation: pulse-glow 4s ease-in-out infinite;
}
```

---

## 11. Responsive Breakpoints

```css
/* Mobile first approach */

/* Tablet */
@media (min-width: 768px) {
  .apps-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .apps-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .hero__title {
    font-size: 4rem;
  }
}

/* Large desktop */
@media (min-width: 1280px) {
  .container {
    max-width: 1200px;
  }
}
```

---

## 12. Assets Necesarios

### Imágenes a preparar

| Asset | Tamaño | Formato | Notas |
|-------|--------|---------|-------|
| `og-image.png` | 1200x630px | PNG | Para social sharing |
| `favicon.ico` | 32x32, 16x16 | ICO | Multi-size |
| `apps/*/icon.png` | 256x256px | PNG | Con transparencia |
| `apps/*/screenshot.png` | 800x600px aprox | PNG | De la app en uso |

### Colores de los iconos

Para consistencia visual, los screenshots deberían mostrar:
- PeekOCR: Captura de texto activa (overlay azul)
- SapoWhisper: Recording indicator (verde pulsando)
- BuenMouse: Menu bar dropdown visible

---

## 13. Copy Sugerido

### Hero
```
macOS Apps by Steven

Productivity tools that live in your menu bar.
Built with Swift. Free and open source.
```

### PeekOCR Card
```
PeekOCR
Screen OCR & QR Scanner

Capture text from anywhere on your screen with a simple keyboard shortcut.

✓ Instant text extraction
✓ QR code detection
✓ Screenshot capture
✓ Capture history
✓ Customizable hotkeys

⌨️ Trigger: ⇧ Space
```

### SapoWhisper Card
```
SapoWhisper
Voice to Text

Transform your voice into text instantly with AI-powered transcription.

✓ Real-time transcription
✓ Multiple languages
✓ Whisper AI powered
✓ Auto paste
✓ Global hotkey

⌨️ Press to speak: ⌥ Space
```

### BuenMouse Card
```
BuenMouse
Mouse Utilities

Essential mouse utilities for macOS power users.

✓ Cursor location tools
✓ Acceleration control
✓ Click visualizer
✓ Menu bar integration
✓ Lightweight
```

### Footer
```
Made with ❤️ in Chile
© 2025 Steven

Built with Swift for macOS
```

---

## 14. Checklist de Implementación

### Setup
- [ ] Crear proyecto Nuxt 3
- [ ] Configurar `nuxt.config.ts` con SEO
- [ ] Agregar `main.css` con variables
- [ ] Preparar assets (iconos, screenshots, og-image)

### Componentes
- [ ] `Navbar.vue` con scroll behavior
- [ ] `Hero.vue` con gradient background
- [ ] `AppCard.vue` con hover effects
- [ ] `AppsGrid.vue` responsive
- [ ] `TechStack.vue` con badges
- [ ] `Footer.vue` con links

### Data
- [ ] Crear `useApps.ts` composable
- [ ] Agregar data de las 3 apps
- [ ] Links a GitHub releases

### Polish
- [ ] Animaciones de entrada
- [ ] Responsive testing
- [ ] Lighthouse audit (>90)
- [ ] Test en Safari, Chrome, Firefox

### Deploy
- [ ] Configurar Nginx en servidor
- [ ] Agregar a Cloudflare Tunnel
- [ ] DNS record en Cloudflare
- [ ] Actualizar documentación

---

## 15. Futuras Mejoras (v2+)

- **Páginas individuales por app**: `/peekocr`, `/sapowhisper`, etc.
- **Changelog/Updates section**: Mostrar últimas versiones
- **Download counter**: Usando GitHub API
- **i18n**: Español/Inglés
- **Blog/Updates**: Anunciar nuevas apps

---

**Documento creado:** 15 Diciembre 2025
**Para usar con:** Nuxt 3 + CSS Custom + Cloudflare
**Deploy target:** `apps.stevenacz.com`

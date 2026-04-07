# Robin Bobin — Design System & Code Guide

> **Single source of truth for design and development.**
> This file should be placed in the project root and used by AI agents (Claude Code/Antigravity) as a reference when creating any new components and pages.

---

## 1. Brand Identity

**Name:** Робин Бобин / Robin Bobin
**Tagline:** Вкусно. Быстро. По-домашнему!
**Positioning:** Кафе быстрого питания в Челябинске. Бургеры, шаурма, закуски. Широкая аудитория — от студентов до семей. Средний чек — доступный.
**Language:** ru
**Currency:** ₽

**Brand Tone:** Яркий, весёлый, дружелюбный. Мультяшный маскот, сочные цвета, энергичная атмосфера. Как весёлая уличная забегаловка с характером.

**Brand Assets:**
- Логотип: округлые красные буквы "робин•бобин" с чёрным контуром, зелёная точка-разделитель, белые "глазки"
- Маскот: пухлый весёлый персонаж в народном стиле (красный/зелёный/жёлтый)

---

## 2. Color Palette

### Primary Colors

⚠️ **RULE:** Never use Tailwind default colors (blue-500, red-400, indigo-600). Only custom colors from this table.

| Token        | HEX       | Tailwind Class    | Usage                            |
|--------------|-----------|-------------------|----------------------------------|
| `background` | `#FFF9F0` | `bg-background`   | Main page background (тёплый белый) |
| `primary`    | `#1A1A1A` | `text-primary`    | Primary text, headings           |
| `secondary`  | `#555555` | `text-secondary`  | Secondary text, descriptions     |
| `accent`     | `#E31E24` | `text-accent`     | CTA buttons, accents, brand red  |
| `surface`    | `#FFFFFF` | `bg-surface`      | Cards, modals, form backgrounds  |
| `green`      | `#2D8B47` | `text-green`      | Success states, green accents (логотип) |
| `yellow`     | `#FFD700` | `text-yellow`     | Badges, highlights, warm accents (маскот) |

### CSS Variables (index.css)

```css
:root {
  /* ⚠️ IMPORTANT: RAW RGB format required for Tailwind opacity modifiers
     (e.g., bg-primary/50) */
  --color-background: 255 249 240;   /* #FFF9F0 — warm white */
  --color-primary: 26 26 26;         /* #1A1A1A — near-black */
  --color-secondary: 85 85 85;       /* #555555 — gray */
  --color-accent: 227 30 36;         /* #E31E24 — Robin Bobin red */
  --color-surface: 255 255 255;      /* #FFFFFF — white */
  --color-green: 45 139 71;          /* #2D8B47 — brand green */
  --color-yellow: 255 215 0;         /* #FFD700 — brand yellow */
}
```

### Opacity Variants Rules

| Pattern              | Application                          |
|----------------------|--------------------------------------|
| `text-primary/80`    | Lead paragraphs, descriptions        |
| `text-primary/60`    | Inactive elements, placeholders      |
| `text-primary/40`    | Meta information, labels             |
| `border-primary/20`  | Card borders, dividers               |
| `border-primary/10`  | Thin separator lines                 |
| `bg-accent/10`       | Subtle red background (category active) |
| `bg-green/10`        | Success message background           |

### Forbidden ❌

- Tailwind default colors: `blue-500`, `indigo-600`, `red-400`
- Pure black `#000000` as background
- Muted/pastel reds — brand red must be vivid `#E31E24`
- Clashing neon colors

---

## 3. Typography

### Font Stack

| Role      | Family              | Tailwind        | Weights        |
|-----------|---------------------|-----------------|----------------|
| Headings  | Nunito              | `font-heading`  | 700, 800, 900  |
| Body      | Inter               | `font-body`     | 400, 500, 600  |

**Why Nunito:** Rounded terminals match the bubble-style logo. Fun, friendly, excellent Cyrillic support.
**Why Inter:** Clean, highly readable body text. Perfect Cyrillic. Universal.

### Google Fonts Import

```html
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@700;800;900&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

### Heading Hierarchy

| Level            | Size                        | Weight           | Use Case             |
|------------------|-----------------------------|------------------|----------------------|
| Hero Title       | `text-5xl md:text-7xl`      | `font-black` (900) | Hero section       |
| Section Heading  | `text-3xl md:text-5xl`      | `font-extrabold` (800) | Section titles  |
| Card Title       | `text-xl md:text-2xl`       | `font-bold` (700) | Menu items, cards   |
| Subtitle/Label   | `text-sm md:text-base`      | `font-semibold` (600) | Category tabs, labels |

### Body Text

| Context        | Size        | Weight | Line Height       |
|----------------|------------|--------|-------------------|
| Body default   | `text-base` | 400    | `leading-relaxed` (1.7) |
| Card description | `text-sm` | 400    | `leading-normal`  |
| Price          | `text-lg`  | 700    | default           |
| Fine print     | `text-xs`  | 400    | `leading-normal`  |
| Nav links      | `text-sm`  | 600    | default           |

### Typography Rules ✅

1. **Headings — ALWAYS `font-heading` (Nunito)**, weight 700–900
2. **Body/UI — ALWAYS `font-body` (Inter)**
3. **Bold headings ARE ALLOWED** — this is a fun, energetic brand (not luxury)
4. **Uppercase** — only for category tabs and CTA buttons
5. **Price** — always `font-heading font-bold text-accent`

---

## 4. Spacing System & Layout

### Page Constraints

| Context               | Spacing                |
|-----------------------|------------------------|
| Max content width     | `max-w-7xl mx-auto`   |
| Horizontal padding    | `px-4 md:px-8 lg:px-16` |
| Section vertical      | `py-16 md:py-24`      |
| Grid gap              | `gap-4 md:gap-6`      |
| Card internal         | `p-4 md:p-6`          |

### Vertical Rhythm

- **Between sections:** `py-16` mobile, `py-24` desktop
- **Between elements within section:** `gap-4` — `gap-8`
- **Fine spacing (inside cards):** `p-4`, `mb-2`, `gap-2`

### Grid System

| Context          | Grid                              |
|------------------|-----------------------------------|
| Menu grid        | `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` |
| Reviews          | `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` |
| Contact cards    | `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` |
| Footer layout    | `grid-cols-1 md:grid-cols-3`      |

### Aspect Ratios

| Context         | Ratio               |
|-----------------|---------------------|
| Menu item photo | `aspect-[4/3]`      |
| Hero image      | `h-screen` or `h-[80vh]` |
| Review avatar   | `aspect-square rounded-full` |

---

## 5. Animation & Motion (The Fun Feel)

⚠️ **RULE:** Never use `transition-all` on large blocks. Animate **only** `transform` and `opacity` for performance.

### Tech Stack

| Library          | Usage                                      |
|------------------|--------------------------------------------|
| GSAP + ScrollTrigger | Scroll animations (reveals, parallax)  |
| Lenis 1.3+       | Smooth page scroll (Desktop)              |
| CSS Transitions  | Hovers and micro-interactions              |

### GSAP Patterns

**Hero Entrance (Logo + Mascot + CTA):**
```js
const tl = gsap.timeline({ delay: 0.3 });
tl.from('.hero-logo', { y: -80, opacity: 0, duration: 1, ease: 'back.out(1.7)' })
  .from('.hero-mascot', { x: 100, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5')
  .from('.hero-tagline', { y: 30, opacity: 0, duration: 0.6 }, '-=0.3')
  .from('.hero-cta', { scale: 0.8, opacity: 0, duration: 0.5, ease: 'back.out(2)' }, '-=0.2');
```

**Menu Cards Batch Reveal:**
```js
ScrollTrigger.batch('.menu-card', {
  onEnter: batch => gsap.to(batch, {
    opacity: 1,
    y: 0,
    stagger: 0.08,
    duration: 0.6,
    ease: 'power2.out',
    overwrite: true
  }),
  start: "top 85%"
});
```

**Section Title Reveal:**
```js
gsap.from('.section-title', {
  y: 40,
  opacity: 0,
  duration: 0.8,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: '.section-title',
    start: 'top 80%'
  }
});
```

### CSS Hover Patterns

| Property             | Pattern                                          |
|---------------------|--------------------------------------------------|
| Menu card hover     | `transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg` |
| Button hover        | `transition-all duration-300 hover:bg-accent hover:text-white hover:scale-105` |
| Category tab active | `transition-colors duration-200`                  |
| Nav link hover      | `transition-colors duration-200 hover:text-accent` |
| Add to cart         | `transition-transform duration-200 active:scale-95` |

### Animation Rules ✅

1. Animate **only** `transform` and `opacity`
2. Easing: `power3.out`, `back.out` for playful bounces
3. Stagger: `0.08s` for menu cards
4. Initial state for reveals: `opacity: 0, y: 30–60`
5. **NEVER** `transition-all` on cards/sections
6. Hero animations: playful (`back.out`), other sections: smooth (`power3.out`)

---

## 6. Image Treatment

### Rules ✅

1. **All images:** `object-cover` + container with `overflow-hidden rounded-xl`
2. **Menu item images:** `aspect-[4/3]` container
3. **Placeholder background:** `bg-yellow/10` (warm)
4. **Hover:** card lift (`-translate-y-1`) — NOT image zoom (food photos look weird zoomed)

### Overlay Pattern (Hero only)

```jsx
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90" />
```

### Photo Direction

✅ **Use (stock):**
- Appetizing food photos (top-down or 45° angle)
- Warm lighting, natural colors
- Craft/street food aesthetic
- Consistent style across all items

❌ **Avoid:**
- Cold/clinical food photography
- Overly styled/fancy plating (this is fast food)
- Low-quality mobile photos

---

## 7. Shadows & Depth

### Shadow System

| Level      | Shadow CSS                                        | Usage            |
|-----------|---------------------------------------------------|------------------|
| Base      | none                                              | Background       |
| Card      | `shadow-sm hover:shadow-lg`                       | Menu items       |
| Elevated  | `shadow-md`                                       | Sticky header, cart |
| Floating  | `shadow-xl`                                       | Modal, order form |

### Tailwind Config (Custom Shadows)

```js
boxShadow: {
  'card': '0 2px 8px rgba(0,0,0,0.08)',
  'card-hover': '0 8px 24px rgba(0,0,0,0.12)',
  'header': '0 2px 12px rgba(0,0,0,0.06)',
  'modal': '0 16px 48px rgba(0,0,0,0.16)',
}
```

### Backdrop Blur (Header)

```jsx
className="bg-background/95 backdrop-blur-sm shadow-header"
```

---

## 8. Interactive States

### Hover Effects

| Element          | Hover Effect                                     |
|------------------|-------------------------------------------------|
| Menu card        | Lift up `-translate-y-1`, shadow grows           |
| CTA button       | `bg-accent → darker`, `scale-105`               |
| Category tab     | `bg-accent/10 text-accent`                       |
| Nav link         | `text-accent`                                    |
| Add to cart btn  | `scale-105`, color change                        |
| Cart icon        | Bounce animation on item add                     |

### Active State (Category Tab)

```jsx
className="bg-accent text-white rounded-full px-4 py-2 font-semibold"
// vs inactive:
className="bg-transparent text-primary/60 rounded-full px-4 py-2 hover:bg-accent/10"
```

### Focus-Visible (A11y)

All interactive elements must have:
```jsx
className="focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
```

---

## 9. Component Patterns

### CTA Button (Primary)

```jsx
<button className="px-8 py-3 bg-accent text-white font-heading font-bold text-sm uppercase tracking-wider rounded-full hover:bg-red-700 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg">
  Заказать
</button>
```

### Menu Card

```jsx
<div className="group bg-surface rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
  {/* Image */}
  <div className="aspect-[4/3] overflow-hidden bg-yellow/10">
    <img
      src="..."
      className="w-full h-full object-cover"
      alt="Название блюда"
      loading="lazy"
    />
  </div>

  {/* Info */}
  <div className="p-4">
    <h3 className="font-heading font-bold text-lg text-primary mb-1">
      Название блюда
    </h3>
    <p className="text-sm text-secondary mb-3 line-clamp-2">
      Описание блюда
    </p>
    <div className="flex items-center justify-between">
      <span className="font-heading font-bold text-xl text-accent">
        290 ₽
      </span>
      <button className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-transform" aria-label="Добавить в корзину">
        +
      </button>
    </div>
  </div>
</div>
```

### Category Tab

```jsx
<button className={`px-5 py-2 rounded-full font-body font-semibold text-sm transition-colors duration-200
  ${active
    ? 'bg-accent text-white'
    : 'bg-transparent text-primary/60 hover:bg-accent/10 hover:text-accent'
  }`}>
  Бургеры
</button>
```

### Section Header

```jsx
<div className="text-center mb-10">
  <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-primary mb-3">
    Наше меню
  </h2>
  <p className="text-secondary text-base md:text-lg max-w-xl mx-auto">
    Выберите любимые блюда и закажите на самовывоз
  </p>
</div>
```

### Sticky Header

```jsx
<header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm shadow-header">
  <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
    <img src="/logo.svg" alt="Робин Бобин" className="h-10" />
    <nav className="hidden md:flex gap-6">
      <a href="#menu" className="text-sm font-semibold text-primary/60 hover:text-accent transition-colors">Меню</a>
      <a href="#about" className="text-sm font-semibold text-primary/60 hover:text-accent transition-colors">О нас</a>
      <a href="#contacts" className="text-sm font-semibold text-primary/60 hover:text-accent transition-colors">Контакты</a>
    </nav>
    <button className="relative" aria-label="Корзина">
      🛒 <span className="absolute -top-1 -right-2 bg-accent text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">3</span>
    </button>
  </div>
</header>
```

---

## 10. Development Rules (For AI Agents)

### Critical Rules for Claude Code:

1. **Don't break the design:**
   When asked to add functionality, integrate it **WITHIN** the current design. Preserve padding, font types, hover effects.

2. **Write clean Tailwind:**
   Don't create custom classes in `index.css`, except for global `body`, `@layer utilities`, and animation utilities.

3. **Mobile-First always:**
   Always write default classes for mobile, apply desktop via `md:` or `lg:`.

4. **Accessibility (A11y):**
   - All buttons without text (icons only) must have `aria-label`
   - Use `focus-visible:ring-2` for keyboard navigation
   - Semantic HTML tags (`<nav>`, `<main>`, `<article>`, `<section>`)

5. **Brand consistency:**
   - Red = `accent` (#E31E24) EVERYWHERE, no other reds
   - Headings = Nunito, body = Inter, NO EXCEPTIONS
   - Rounded corners: `rounded-2xl` for cards, `rounded-full` for buttons/tabs

6. **Fun but not chaotic:**
   - Animations should be playful but not distracting
   - Max 1 animation per viewport at a time
   - No flashing, no infinite loops

---

## 11. Do's & Don'ts

### ✅ DO

- Rounded shapes everywhere (brand identity)
- Warm background (`#FFF9F0`), not cold white
- Bold headings (Nunito 700-900) — this is fast food, not luxury
- Vivid red CTAs that pop
- Appetizing food photography
- Generous card padding
- Playful hover animations (lift, bounce)
- Green for success, yellow for badges/highlights

### ❌ DON'T

- Default Tailwind colors (`blue-500`, `indigo-600`)
- Sharp corners (use `rounded-xl` minimum)
- Thin/light headings (this brand is BOLD)
- Dark theme (brand is bright and warm)
- `transition-all` on cards/sections
- Complex multi-step forms (keep ordering simple)
- Image zoom on hover for food photos
- Generic stock photos of people eating

---

## 12. Tech Stack Summary

| Technology       | Version | Purpose                            |
|------------------|---------|------------------------------------|
| React            | 19+     | UI framework                       |
| Vite             | 7+      | Build tool & dev server            |
| Tailwind CSS     | 3.4+    | Utility-first styling              |
| GSAP             | 3.14+   | Scroll & entrance animations       |
| Lenis            | 1.3+    | Smooth scrolling                   |
| Puppeteer        | latest  | Screenshot/visual testing (NOT for animated pages) |

---

## 13. Tailwind Config Reference

```js
// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--color-background) / <alpha-value>)',
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        green: 'rgb(var(--color-green) / <alpha-value>)',
        yellow: 'rgb(var(--color-yellow) / <alpha-value>)',
      },
      fontFamily: {
        heading: ['"Nunito"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0,0,0,0.08)',
        'card-hover': '0 8px 24px rgba(0,0,0,0.12)',
        'header': '0 2px 12px rgba(0,0,0,0.06)',
        'modal': '0 16px 48px rgba(0,0,0,0.16)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
}
```

---

## 14. Page Structure (One-Page)

```
┌─────────────────────────────────────┐
│  HEADER (sticky, blur)              │
│  Logo    Nav (Меню|О нас|Контакты)  Cart │
├─────────────────────────────────────┤
│                                     │
│  HERO SECTION                       │
│  Logo (large) + Mascot              │
│  Tagline + CTA "Смотреть меню"      │
│                                     │
├─────────────────────────────────────┤
│                                     │
│  MENU SECTION (#menu)               │
│  Section title                      │
│  Category tabs (Бургеры|Шаурма|...) │
│  Grid of menu cards (3 cols)        │
│                                     │
├─────────────────────────────────────┤
│                                     │
│  ABOUT SECTION (#about)             │
│  Story/philosophy + photo           │
│                                     │
├─────────────────────────────────────┤
│                                     │
│  REVIEWS SECTION (#reviews)         │
│  Carousel/grid of customer reviews  │
│                                     │
├─────────────────────────────────────┤
│                                     │
│  CONTACTS SECTION (#contacts)       │
│  2-3 location cards with addresses  │
│  Yandex Map widget                  │
│  Phone + Telegram link              │
│                                     │
├─────────────────────────────────────┤
│  FOOTER                             │
│  Logo | Contacts | Telegram | ©     │
└─────────────────────────────────────┘

│  CART (floating button / slide-out) │
│  ORDER FORM (modal)                 │
```

---

**This document is updated with every significant design change.**

*Last updated: 2026-04-07*

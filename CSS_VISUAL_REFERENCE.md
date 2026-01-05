# CSS Working - Visual Reference

## How It All Fits Together

```
Browser Request
      ↓
index.html (loads fonts + CSS)
      ↓
┌─────────────────────────────────┐
│   Google Fonts (via CDN)        │
│   - Lora (serif)   ← headings  │
│   - Poppins (sans) ← body text │
└─────────────────────────────────┘
      ↓
┌─────────────────────────────────┐
│   BlazorApp.styles.css          │
│   (compiled component CSS)      │
│   (includes app.css bundle)     │
└─────────────────────────────────┘
      ↓
┌─────────────────────────────────┐
│  Your Razor Pages               │
│  ├─ Index.razor (Home)          │
│  ├─ Gallery.razor               │
│  ├─ Projects.razor              │
│  ├─ Research.razor              │
│  ├─ About.razor                 │
│  └─ Students.razor              │
└─────────────────────────────────┘
      ↓
Styled HTML Rendered in Browser
```

## Color Palette in Action

```
┌──────────────────────────────────────────────────────────┐
│                    HERO SECTION                          │
│                 (primary background)                      │
│                   #faf8f3 (Ivory)                        │
│                                                          │
│        Utkeern                                           │
│     (h1 - #2d1b47)          Deep Indigo Heading        │
│                                                          │
│    Preserving Heritage                                   │
│   (p - #6b3d5b)                Maroon Subtitle         │
│                                                          │
│  ┌─────────────────────────┐                            │
│  │ Explore Gallery         │ ← Primary Button           │
│  │ (#2d1b47 bg, #faf8f3 text)    (Deep Indigo bg)      │
│  └─────────────────────────┘                            │
│  ┌─────────────────────────┐                            │
│  │ Learn More              │ ← Secondary Button        │
│  │ (Transparent, border)   │ (#2d1b47 border & text)   │
│  └─────────────────────────┘                            │
└──────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────┐
│              CONTENT SECTION                            │
│              (secondary background)                      │
│              #f3f1ed (Light Beige)                      │
│                                                          │
│           What You'll Find Here                         │
│         (h2 - #2d1b47) Deep Indigo Heading            │
│         ─────────────────────────────── ← Gold underline│
│                                                          │
│  ┌──────┐    ┌──────┐    ┌──────┐                      │
│  │ Card │    │ Card │    │ Card │  ← White background  │
│  │      │    │      │    │      │  ← Light gray border  │
│  └──────┘    └──────┘    └──────┘  ← Lifts on hover    │
└──────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────┐
│            LINKS & TEXT                                 │
│                                                          │
│  Normal Link:    Learn more →                           │
│                  Color: #6b3d5b (Maroon)               │
│                  Hover:  #c49960 (Gold) ✨              │
│                                                          │
│  Body Text:      Lorem ipsum dolor sit amet...         │
│                  Color:     #5a5550 (Medium Brown)     │
│                  Font:      Poppins, 1rem              │
│                  Line-height: 1.6                       │
│                  Max-width:   75ch (readability)        │
└──────────────────────────────────────────────────────────┘
```

## Responsive Layout in Action

### Desktop (1440px+)

```
┌─────────────────────────────────────────────────────────┐
│ HOME                    GALLERY    PROJECTS  RESEARCH   │  ← Nav
├─────────────────────────────────────────────────────────┤
│                      HERO SECTION                       │
│                        Utkeern                          │  ← 4.5rem
│                                                         │
│                    Explore Gallery ▼                    │
│                     Learn More     ▼                    │
├─────────────────────────────────────────────────────────┤
│                  FEATURED COLLECTIONS                   │
│                                                         │
│   ┌─────────────────┐    Architecture Title             │
│   │                 │    From ancient temples...        │
│   │    Image Box    │    View Collection →              │
│   │     (4:5)       │                                   │
│   │                 │                                   │
│   └─────────────────┘                                   │
├─────────────────────────────────────────────────────────┤
│          ❧ Heritage Divider with Ornament ❧            │
├─────────────────────────────────────────────────────────┤
│                    QUICK ACCESS (grid-4)                │
│   ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐               │
│   │ 🖼️   │  │ 💼   │  │ 📖   │  │ 👤   │               │
│   │ Gal  │  │ Proj │  │ Res  │  │ About│               │
│   └──────┘  └──────┘  └──────┘  └──────┘               │
└─────────────────────────────────────────────────────────┘
```

### Tablet (1024px)

```
┌──────────────────────────────────┐
│ HOME  GALLERY  PROJECTS RESEARCH │  ← Nav
├──────────────────────────────────┤
│      HERO SECTION                │
│       Utkeern (2.5rem)           │
│   Buttons stack or inline        │
├──────────────────────────────────┤
│   FEATURED (grid-2 stacks)       │
│                                  │
│   ┌─────────────┐                │
│   │   Image     │  Text...       │
│   └─────────────┘                │
├──────────────────────────────────┤
│   QUICK ACCESS (grid-2)          │
│   ┌──────┐  ┌──────┐            │
│   │      │  │      │            │
│   └──────┘  └──────┘            │
│   ┌──────┐  ┌──────┐            │
│   │      │  │      │            │
│   └──────┘  └──────┘            │
└──────────────────────────────────┘
```

### Mobile (768px)

```
┌──────────────────┐
│  ☰ UTKEERN       │  ← Hamburger nav
├──────────────────┤
│    HERO SECTION  │
│     Utkeern      │  ← 2rem, centered
│  Explore Gallery │  ← Full width
│   Learn More     │  ← Full width
├──────────────────┤
│ FEATURED         │
│ ┌──────────────┐ │
│ │ Image  (1:1) │ │  ← Stacked layout
│ └──────────────┘ │
│ Architecture     │
│ From ancient...  │
├──────────────────┤
│  QUICK ACCESS    │
│ ┌──────────────┐ │
│ │ 🖼️ Gallery   │ │  ← Single column
│ └──────────────┘ │
│ ┌──────────────┐ │
│ │ 💼 Projects  │ │
│ └──────────────┘ │
└──────────────────┘
```

## CSS Variables in Use

When you write HTML like this:

```html
<section class="content">           <!-- Uses --bg-primary or --bg-secondary -->
    <div class="container">         <!-- Uses var(--spacing-xl) for padding -->
        <h2>Section Title</h2>      <!-- Uses --font-serif, --accent-primary -->
        <p>Description</p>          <!-- Uses --text-secondary, --line-height-normal -->
        <a href="#">Link</a>        <!-- Uses --accent-secondary, --transition-fast -->
    </div>
</section>
```

All of these CSS variables are automatically applied:

```css
:root {
  --bg-primary: #faf8f3;
  --bg-secondary: #f3f1ed;
  --text-primary: #1a1714;
  --text-secondary: #5a5550;
  --accent-primary: #2d1b47;
  --accent-secondary: #6b3d5b;
  --accent-gold: #c49960;
  
  --font-serif: "Lora", serif;
  --font-sans: "Poppins", sans-serif;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
  --line-height-normal: 1.6;
  --transition-fast: 0.15s ease-in-out;
  /* ... and 30+ more */
}
```

## Font Scaling Example

```
Mobile (480px)     Tablet (768px)    Desktop (1440px)
│                  │                 │
H1: 1.5rem ─────→ 2rem ────────────→ 4.5rem
H2: 1.125rem ──→ 1.5rem ────────────→ 2.5rem
H3: 1rem ───────→ 1.25rem ──────────→ 1.75rem
Body: 15px ─────→ 16px ─────────────→ 16px

Uses clamp() for smooth scaling:
h1 { font-size: clamp(1.5rem, 4vw, 4.5rem); }
                        ↑      ↑     ↑
                      min   fluid   max
```

## Button Hover State

```
Normal State:
┌─────────────────────┐
│  Explore Gallery    │  ← bg: #2d1b47 (Deep Indigo)
│  (no shadow)        │  ← text: white
│  y-offset: 0        │  ← border: 2px solid
└─────────────────────┘

Hover State (0.15s transition):
┌─────────────────────┐
│  Explore Gallery    │  ← bg: #6b3d5b (Maroon - hover)
│✨ (with shadow)  │  ← text: white
│  y-offset: -2px     │  ← border: 2px solid (maroon)
└─────────────────────┘
│
└─→ Lifts up slightly with subtle shadow
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(45, 27, 71, 0.12);
```

## Link Hover State

```
Normal:    Learn more →
           Color: #6b3d5b (Maroon)
           No underline

Hover:     Learn more →
           Color: #c49960 (Gold) ✨
           Smooth 0.15s transition
           No underline (clean design)
```

## Card Hover State

```
Normal State:              Hover State:
┌──────────────────┐      ┌──────────────────┐
│    Heritage      │      │    Heritage      │  ↑ lifted
│    Image Box     │  →   │    Image Box     │  up 4px
│                  │      │                  │
│   Title          │      │   Title          │
│   Description    │      │   Description    │
└──────────────────┘      └──────────────────┘
border: 1px solid         border: 1px solid
#e8e4dd (light)           #d4cdc3 (darker)
box-shadow: none          box-shadow: subtle
                          transform: translateY(-4px)
```

## Spacing Example (8px Scale)

```
Typical Page Layout:

┌─────────────────────────────────┐
│                                 │  --spacing-lg (2rem)
│      SECTION HEADING            │  ← Padding top
│                                 │
│  --spacing-md (1.5rem)          │
│  ↓                              │
│  Paragraph text here with       │  ← Content
│  proper line-height and max     │
│  width for readability.         │
│                                 │
│  --spacing-md (1.5rem) down     │
│  ↓                              │
│  ┌─────────────────────────────┐│
│  │  Button with padding        ││  --spacing-md (1.5rem)
│  │  inside: --spacing-md       ││  vertical padding
│  └─────────────────────────────┘│  --spacing-lg (2rem)
│                                 │  horizontal padding
│  --spacing-lg (2rem)            │
│  ↓                              │
└─────────────────────────────────┘
```

## When CSS Loads

1. **Browser requests page** → `/`
2. **index.html loads** → Contains meta tags, CSS links
3. **Fonts download** → Lora + Poppins from Google Fonts (async)
4. **CSS bundles load** → BlazorApp.styles.css (includes app.css)
5. **Blazor initializes** → JavaScript loads components
6. **Page renders** → HTML + CSS + JavaScript = interactive SPA

The CSS is available before Blazor JavaScript runs, so you see styled content immediately (no flash of unstyled content).

---

**✅ CSS System Complete & Working!**

All styles are production-ready and optimized for performance.

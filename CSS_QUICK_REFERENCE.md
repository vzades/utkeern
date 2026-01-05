# CSS Working - Quick Reference

## What Was Fixed

### 1. **Font Stack**
- **Updated** `index.html` to load Google Fonts correctly
- Serif: `Lora` (for headings)
- Sans-serif: `Poppins` (for body text)

### 2. **Complete CSS Redesign**
- **Replaced** old `app.css` with comprehensive heritage-focused stylesheet
- Includes 40+ CSS variables for consistent theming
- Desktop-first responsive design with 4 breakpoints

### 3. **CSS Variables System**
All colors, spacing, and animations now use variables:
```css
Colors: --bg-primary, --accent-primary, --accent-secondary, --accent-gold
Spacing: --spacing-sm, --spacing-md, --spacing-lg, --spacing-xl, --spacing-2xl, --spacing-3xl
Transitions: --transition-fast, --transition-smooth
```

### 4. **Responsive Design**
- **Desktop** (1440px+): Full layouts, multi-column grids
- **Tablet** (1024px): Condensed grids (2-3 columns)
- **Mobile** (768px): Single column stacks
- **Small Mobile** (480px): Optimized spacing, full-width buttons

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary BG | #faf8f3 | Main background |
| Secondary BG | #f3f1ed | Alternate sections |
| Dark Text | #1a1714 | Headings, primary text |
| Medium Text | #5a5550 | Body paragraphs |
| Deep Indigo | #2d1b47 | Primary buttons, accents |
| Maroon | #6b3d5b | Secondary accents |
| Antique Gold | #c49960 | Highlights, hover states |

## How to Use in HTML/Razor

```html
<!-- Headings -->
<h1>Large title</h1>  <!-- Auto-scales with clamp() -->
<h2>Section title</h2>
<h3>Subsection</h3>

<!-- Buttons -->
<a href="#" class="btn btn-primary">Primary Button</a>
<a href="#" class="btn btn-secondary">Secondary Button</a>
<button class="btn btn-text">Text Button</button>

<!-- Layouts -->
<div class="container">...</div>           <!-- Max 1440px -->
<div class="container-sm">...</div>        <!-- Max 900px -->

<div class="grid-2">...</div>              <!-- 2 columns -->
<div class="grid-3">...</div>              <!-- 3 columns -->
<div class="grid-4">...</div>              <!-- 4 columns -->

<!-- Sections -->
<section class="content">...</section>     <!-- White background -->
<section class="content alt">...</section>  <!-- Secondary background -->
<section class="hero">...</section>        <!-- Full-height hero -->

<!-- Images -->
<div class="image-wrapper">
  <img src="..." alt="..." />
</div>

<!-- Decorative Elements -->
<div class="heritage-divider"></div>       <!-- Ornamental separator -->
```

## File Structure

```
src/BlazorApp/
├── wwwroot/
│   ├── css/
│   │   └── app.css              ✅ FIXED - New heritage CSS system
│   ├── images/
│   │   └── (your heritage images)
│   └── index.html               ✅ FIXED - Correct fonts loaded
└── Pages/
    ├── Index.razor              ✅ Home page
    ├── Gallery.razor            ✅ Heritage gallery
    ├── Projects.razor           ✅ Projects showcase
    ├── Research.razor           ✅ Articles & research
    ├── About.razor              ✅ About page
    └── Students.razor           ✅ Student guidelines
```

## Responsive Breakpoints

```css
/* Desktop (default) */
/* All styles optimized for 1440px+ */

/* Tablet */
@media (max-width: 1024px) {
  /* 2-3 column grids */
  /* Reduced spacing */
}

/* Mobile */
@media (max-width: 768px) {
  /* Single column layouts */
  /* Stack elements vertically */
}

/* Small Mobile */
@media (max-width: 480px) {
  /* Minimal spacing */
  /* Touch-friendly sizing */
  /* Full-width buttons */
}
```

## Build Status

✅ **Build Successful** - CSS fully loaded and functional

## Testing

1. View home page at `/`
2. Check responsive design at different viewport widths
3. Hover over buttons to see gold highlight
4. Resize to mobile to see responsive stacking

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

All CSS uses standard properties with CSS custom properties (variables) for easy theming.

---

**Note**: Components referenced in pages (SectionHeader, FeatureCard, etc.) still need to be created, but CSS styling system is now complete and functional.

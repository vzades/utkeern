# CSS Implementation Examples

## 1. Hero Section (Home Page)

```html
<section class="hero">
    <div class="hero-content">
        <h1>Utkeern</h1>                                    <!-- Deep indigo, elegant serif -->
        <p class="hero-subtitle">Preserving Heritage</p>   <!-- Maroon color -->
        
        <div class="hero-cta">
            <NavLink class="btn btn-primary">
                Explore Gallery
            </NavLink>
            <NavLink class="btn btn-secondary">
                Learn More
            </NavLink>
        </div>
    </div>
</section>
```

**CSS Applied**:
- `section.hero`: Full viewport height, centered content
- `h1`: Scales from 2.5rem (mobile) to 4.5rem (desktop)
- `p`: Medium brown text, relaxed line-height
- `.btn-primary`: Deep indigo button with hover effect
- `.btn-secondary`: Transparent with border, inverts on hover

---

## 2. Gallery Grid (Heritage Gallery Page)

```html
<section class="content">
    <div class="container">
        <div class="grid-4">        <!-- 4 columns on desktop, 2 on tablet, 1 on mobile -->
            <div class="card">
                <img src="..." />
                <h3>Heritage Item</h3>
                <p>Description</p>
            </div>
            <!-- Repeat for each item -->
        </div>
    </div>
</section>
```

**CSS Applied**:
- `grid-4`: 4 equal columns at desktop, auto-collapses at breakpoints
- `.card`: Light background, subtle border, hover lift effect
- Images: Auto-scale with object-fit cover, smooth zoom on hover

---

## 3. Two-Column Layout (Projects)

```html
<div class="grid-2">
    <div class="project-image">
        <img src="project.jpg" />   <!-- Left side on desktop -->
    </div>
    <div class="project-content">
        <h2>Project Title</h2>       <!-- Right side on desktop -->
        <p>Project description...</p>
    </div>
</div>
```

**CSS Applied**:
- `grid-2`: 2 equal columns on desktop, stacks vertically on mobile
- Maintains vertical alignment
- Gap of 2rem on desktop, 1.5rem on tablet, 1rem on mobile

---

## 4. Section with Alternate Background

```html
<section class="content alt">          <!-- Secondary bg color -->
    <div class="container-sm">         <!-- Max-width 900px -->
        <div class="heritage-divider"></div>   <!-- Ornamental separator -->
        <h2>Featured Content</h2>
        <div class="grid-3">
            <div class="card">...</div>
            <div class="card">...</div>
            <div class="card">...</div>
        </div>
    </div>
</section>
```

**CSS Applied**:
- `section.alt`: Light beige background
- `.container-sm`: Centered with max 900px width
- `.heritage-divider`: Gradient line with decorative symbol (❧)
- `grid-3`: 3 columns → 2 columns → 1 column responsively

---

## 5. Typography Examples

```html
<!-- Large serif heading -->
<h1>Heritage Archives</h1>              <!-- clamp(2.5rem, 6vw, 4.5rem) -->

<!-- Section heading -->
<h2>Explore Categories</h2>             <!-- clamp(1.75rem, 4vw, 2.5rem) -->

<!-- Subsection -->
<h3>Ancient Architecture</h3>           <!-- clamp(1.25rem, 2.5vw, 1.75rem) -->

<!-- Body text with max width -->
<p>Description with excellent readability...</p>  <!-- Max 75ch width -->

<!-- Links -->
<a href="#">Learn more →</a>            <!-- Maroon, gold on hover -->
```

**CSS Applied**:
- All headings use `clamp()` for fluid scaling
- Headings: Lora serif with letter-spacing for elegance
- Body: Poppins sans-serif, line-height 1.6
- Links: Automatic hover color transition

---

## 6. Button Variations

```html
<!-- Primary action -->
<a href="#" class="btn btn-primary">Primary Action</a>
<!-- Deep indigo bg, white text, hover lifts with shadow -->

<!-- Secondary action -->
<a href="#" class="btn btn-secondary">Secondary Action</a>
<!-- Transparent bg, indigo border, inverts on hover -->

<!-- Text button -->
<a href="#" class="btn btn-text">View Collection →</a>
<!-- No background/border, maroon text, gold on hover -->
```

**CSS Applied**:
- All buttons: Min-height 44px for touch accessibility
- Primary/Secondary: 2px border, border-radius 4px
- Hover: Transform translateY(-2px), box-shadow, color change
- Transitions: All 0.15s ease-in-out

---

## 7. Responsive Image Container

```html
<div class="image-wrapper">
    <img src="heritage-image.jpg" alt="Description" />
</div>
```

**CSS Applied**:
- Maintains aspect ratio with responsive padding
- border-radius: 4px
- Hover: Image scales 1.05x with smooth transition
- Background: Secondary color as fallback

---

## 8. Navigation (When Component Added)

```html
<nav class="navbar">
    <ul class="navbar-menu">
        <li><NavLink class="nav-link">Home</NavLink></li>
        <li><NavLink class="nav-link">Gallery</NavLink></li>
        <!-- More items -->
    </ul>
</nav>
```

**CSS Applied**:
- Sticky positioning at top
- Links: Animated underline with gold accent
- Mobile: Hamburger menu, dropdown list
- Transition: All animations 0.3s smooth

---

## 9. Footer (When Component Added)

```html
<footer class="footer">
    <div class="footer-content">
        <div class="footer-section">
            <h4>Section Title</h4>
            <ul class="footer-links">
                <li><a href="#">Link</a></li>
            </ul>
        </div>
        <!-- More sections -->
    </div>
</footer>
```

**CSS Applied**:
- Background: Deep indigo (primary accent)
- Text: Warm ivory
- Grid: 4 columns → 2 columns → 1 column responsively
- Links: Subtle gray → gold on hover

---

## 10. Responsive Spacing

```css
/* All spacing uses CSS variables for consistency */
Margins/Padding Use Cases:

--spacing-sm (1rem)       : Tight spacing, inline elements
--spacing-md (1.5rem)     : Button padding, card padding
--spacing-lg (2rem)       : Section padding, large gaps
--spacing-xl (3rem)       : Hero padding, major sections
--spacing-2xl (4rem)      : Section separation
--spacing-3xl (6rem)      : Hero section top/bottom (desktop)
```

All spacing variables scale down at tablet/mobile breakpoints for optimal viewing.

---

## Color Usage Guide

| Component | Color | Hex |
|-----------|-------|-----|
| Page background | Primary BG | #faf8f3 |
| Alternate sections | Secondary BG | #f3f1ed |
| Main text | Text Primary | #1a1714 |
| Descriptions | Text Secondary | #5a5550 |
| Headings | Accent Primary | #2d1b47 |
| Secondary accents | Accent Secondary | #6b3d5b |
| Hover states | Accent Gold | #c49960 |
| Borders | Border Light | #e8e4dd |
| Card shadows | Black (10% opacity) | rgba(0,0,0,0.08) |

---

## Performance Notes

✅ **CSS Optimization**:
- Uses CSS variables (no preprocessor needed)
- Minimal specificity issues
- Efficient media queries
- GPU-accelerated transforms
- No unused styles

✅ **Accessibility**:
- WCAG AA contrast ratios
- 44px+ touch targets
- Semantic HTML sizing
- Readable line lengths (60-75ch)
- Clear visual focus states

✅ **Browser Support**:
- CSS Grid: All modern browsers
- CSS Variables: All modern browsers
- clamp(): All modern browsers
- Fallbacks: Graceful degradation

---

## Build & Deploy

✅ Build: `dotnet build` - Compiles successfully  
✅ Run: `dotnet run` - Starts dev server  
✅ CSS: All styles load from `BlazorApp.styles.css` (compiled bundle)

The global `app.css` is bundled automatically by Blazor's CSS isolation system.

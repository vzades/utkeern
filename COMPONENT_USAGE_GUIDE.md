# 🎨 Component Usage Guide

## Quick Reference - Using the Components

### 1. SectionHeader
**Purpose**: Display a section title (h2)

```razor
<SectionHeader Title="Section Name" />
```

**Renders as**:
```html
<h2>Section Name</h2>
```

**Styling**: Automatically gets deep indigo color, serif font, proper margins

---

### 2. FeatureCard
**Purpose**: Card with icon, title, and description

```razor
<FeatureCard 
    Icon="🏛️" 
    Title="Heritage Gallery" 
    Description="Curated collection of Indian architectural marvels, sacred spaces, and cultural landmarks." />
```

**Renders as**:
```html
<div class="card feature-card">
    <div class="feature-icon">🏛️</div>
    <h3>Heritage Gallery</h3>
    <p>Curated collection...</p>
</div>
```

**Features**:
- Large emoji/icon (3rem)
- Centered text
- White card with hover lift effect
- Responsive on all devices

---

### 3. GuidelineCard
**Purpose**: Similar to FeatureCard, used for guidelines

```razor
<GuidelineCard 
    Icon="📚"
    Title="Academic Projects"
    Description="Use heritage images and articles for essays, research papers, presentations, and theses. Always cite the source." />
```

**Same styling as FeatureCard**

---

### 4. QuickAccessCard
**Purpose**: Navigation card that links to a page

```razor
<QuickAccessCard Title="Gallery" Icon="🖼️" Link="gallery" />
```

**Renders as**:
```html
<NavLink href="gallery" class="quick-access-card">
    <div class="quick-icon">🖼️</div>
    <h4>Gallery</h4>
</NavLink>
```

**Features**:
- Clickable link to page
- Icon + title display
- Hover effect changes border color to indigo
- Lifts on hover

---

## Common Usage Patterns

### Grid of Feature Cards
```razor
<div class="grid-3">
    <FeatureCard Icon="🏛️" Title="Architecture" Description="..." />
    <FeatureCard Icon="📚" Title="Research" Description="..." />
    <FeatureCard Icon="🎓" Title="Education" Description="..." />
</div>
```

**Result**: 3-column grid on desktop, auto-collapses on mobile

---

### Quick Access Navigation
```razor
<div class="grid-4">
    <QuickAccessCard Title="Gallery" Icon="🖼️" Link="gallery" />
    <QuickAccessCard Title="Projects" Icon="💼" Link="projects" />
    <QuickAccessCard Title="Research" Icon="📖" Link="research" />
    <QuickAccessCard Title="About" Icon="👤" Link="about" />
</div>
```

**Result**: 4-column navigation grid

---

## Emoji Reference

### Common Icons
```
Architecture:    🏛️ 🏰 🕌 ⛪ 🏯
Art & Culture:   🎨 🖼️ 🎭 🎪 🎬
Books & Reading: 📚 📖 📝 ✍️ 📄
Learning:        🎓 📚 👨‍🎓 👩‍🎓 💡
Community:       👥 👫 👬 👭 🤝
Presentation:    📊 📈 📉 🎯 💼
Music:           🎵 🎶 🎼 🎹 🎸
Various:         ⭐ 💎 🌟 ✨ 🔥
```

---

## Styling Tips

### Override Card Styling
If you need custom styling for a specific card:

```razor
<div class="card feature-card" style="background-color: #f3f1ed;">
    <FeatureCard Icon="..." Title="..." Description="..." />
</div>
```

### Custom Grid Layout
```razor
<div class="grid-2" style="gap: 3rem;">
    <FeatureCard ... />
    <FeatureCard ... />
</div>
```

### Center Cards
```razor
<div style="display: flex; justify-content: center;">
    <FeatureCard ... style="max-width: 300px;" />
</div>
```

---

## Responsive Behavior

### Grid Breakpoints
```
Desktop (1440px+):  grid-4 → 4 columns, grid-3 → 3 columns, grid-2 → 2 columns
Tablet (1024px):   grid-4 → 2 columns, grid-3 → 3 columns, grid-2 → 2 columns
Mobile (768px):    All grids → 1 column
```

### Card Sizing
- Cards automatically scale based on container
- Min height: 150px (on mobile, may be less)
- Padding adjusts at breakpoints
- Text wraps and scales

---

## Examples from Pages

### Index.razor (Home Page)
```razor
<!-- Feature cards -->
<div class="grid-3">
    <FeatureCard Icon="🏛️" Title="Heritage Gallery" Description="..." />
    <FeatureCard Icon="📚" Title="Research & Articles" Description="..." />
    <FeatureCard Icon="🎓" Title="Educational Resources" Description="..." />
</div>

<!-- Quick access navigation -->
<div class="grid-4">
    <QuickAccessCard Title="Gallery" Icon="🖼️" Link="gallery" />
    <QuickAccessCard Title="Projects" Icon="💼" Link="projects" />
    <QuickAccessCard Title="Research" Icon="📖" Link="research" />
    <QuickAccessCard Title="About" Icon="👤" Link="about" />
</div>
```

### Students.razor (Student Page)
```razor
<!-- Guidelines cards -->
<div class="guidelines-cards">
    <GuidelineCard Icon="📚" Title="Academic Projects" Description="..." />
    <GuidelineCard Icon="🎨" Title="Creative Work" Description="..." />
    <GuidelineCard Icon="📖" Title="Learning & Study" Description="..." />
    <GuidelineCard Icon="📊" Title="Presentations" Description="..." />
</div>
```

---

## Best Practices

✅ **DO**:
- Use emoji icons for visual interest
- Keep titles short (1-3 words)
- Write descriptive text (2-3 sentences)
- Use semantic link names (avoid "Click Here")
- Test on mobile devices
- Keep consistent icon styles

❌ **DON'T**:
- Use very long titles (breaks layout)
- Use too many different icon styles
- Nest components unnecessarily
- Forget to add `Link` parameter on QuickAccessCard
- Use emoji that doesn't match the content

---

## Component Files

**Location**: `src/BlazorApp/Components/`

- `SectionHeader.razor` (simple h2 wrapper)
- `FeatureCard.razor` (icon + title + description)
- `GuidelineCard.razor` (same as FeatureCard)
- `QuickAccessCard.razor` (link + icon + title)

All components have CSS styling in `app.css`

---

## Summary

| Component | Usage | Grid |
|-----------|-------|------|
| SectionHeader | Section titles | N/A |
| FeatureCard | Feature display | grid-3 |
| GuidelineCard | Guidelines display | grid-2/3 |
| QuickAccessCard | Navigation | grid-4 |

All components are:
- ✅ Fully responsive
- ✅ Properly styled
- ✅ Accessible
- ✅ Easy to customize
- ✅ Performance optimized

---

**Ready to use!** Just add these components to your pages with the appropriate content.

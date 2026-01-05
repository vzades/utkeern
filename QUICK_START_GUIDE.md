# 🚀 QUICK START GUIDE - UTKEERN WEBSITE

## What's Ready to Use

### ✅ Pages (All Complete & Functional)
```
/ → Home (Hero + Features + Quick Access)
/gallery → Heritage Gallery with filters
/projects → Project case studies
/research → Research articles
/students → Educational guidelines
/about → About page with bio & impact
/tools/breadcrumb-generator → SEO tool
```

### ✅ Navigation System
- **Top Bar**: Sticky navigation with logo, links, responsive hamburger menu
- **Footer**: 4-section footer with links and copyright
- **Both**: Fully responsive on all devices

### ✅ Components (Ready to Use in Pages)
```razor
<!-- Headers -->
<SectionHeader Title="My Section" />

<!-- Cards -->
<FeatureCard Icon="🏛️" Title="Title" Description="Description" />
<GuidelineCard Icon="📚" Title="Title" Description="Description" />
<ImageCard Title="Title" Description="Desc" Category="Cat" ImageUrl="url" />
<CollaborationCard Organization="Org" Description="Desc" />
<ValueCard Title="Title" Description="Description" />
<ResourceCard Title="Title" Icon="🔧" Description="Description" />

<!-- Navigation -->
<QuickAccessCard Title="Gallery" Icon="🖼️" Link="gallery" />
```

### ✅ Layout System
```html
<!-- Hero sections -->
<section class="hero">...</section>

<!-- Content sections -->
<section class="content">...</section>
<section class="content alt">...</section>

<!-- Containers -->
<div class="container">      <!-- Max 1440px -->
<div class="container-sm">   <!-- Max 900px -->

<!-- Grids -->
<div class="grid-2">...</div>  <!-- 2 columns -->
<div class="grid-3">...</div>  <!-- 3 columns -->
<div class="grid-4">...</div>  <!-- 4 columns -->
```

### ✅ Styling System
```css
/* Colors - Use these variables */
--accent-primary: #2d1b47    /* Deep indigo */
--accent-secondary: #6b3d5b  /* Maroon */
--accent-gold: #c49960       /* Gold hover */
--text-primary: #1a1714      /* Dark brown */
--text-secondary: #5a5550    /* Medium brown */
--bg-primary: #faf8f3        /* Warm ivory */
--bg-secondary: #f3f1ed      /* Light beige */

/* Spacing - Consistent sizing */
--spacing-sm: 1rem
--spacing-md: 1.5rem
--spacing-lg: 2rem
--spacing-xl: 3rem
--spacing-2xl: 4rem
--spacing-3xl: 6rem

/* Typography - Use these fonts */
--font-serif: "Lora", serif          /* Headers */
--font-sans: "Poppins", sans-serif   /* Body */
```

### ✅ Button Styles
```html
<!-- Primary (filled) -->
<button class="btn btn-primary">Click Me</button>

<!-- Secondary (outlined) -->
<button class="btn btn-secondary">Click Me</button>

<!-- Text (no background) -->
<button class="btn btn-text">Click Me</button>
```

---

## Running Locally

### Prerequisites
- .NET 8 SDK
- Visual Studio or VS Code
- Node.js (optional)

### Steps
```bash
# 1. Navigate to project
cd src/BlazorApp

# 2. Restore packages
dotnet restore

# 3. Run development server
dotnet run

# 4. Open browser
# Visit: https://localhost:5001
```

### Hot Reload
The dev server supports hot reload:
- Save Razor file → Page auto-reloads
- Save CSS → Styles refresh
- Fast development iteration

---

## File Organization

```
src/BlazorApp/
├── Pages/               (7 page routes)
├── Components/          (10 reusable components)
├── Layout/             (Main layout wrapper)
├── Models/             (Data models - optional)
├── Services/           (Service classes - optional)
└── wwwroot/
    ├── css/app.css     (2500+ lines of styling)
    ├── js/             (Breadcrumb generator logic)
    └── images/         (Sample images)
```

---

## Creating New Content

### Add a New Page
```razor
@page "/my-page"

<PageTitle>My Page - Utkeern</PageTitle>

<section class="hero">
    <div class="hero-content">
        <h1>My Page</h1>
        <p>Subtitle here</p>
    </div>
</section>

<section class="content">
    <div class="container-sm">
        <SectionHeader Title="Section Title" />
        
        <!-- Your content -->
    </div>
</section>

@code {
}
```

### Use Components
```razor
<!-- In your page, use components like: -->

<FeatureCard 
    Icon="🎨"
    Title="My Feature"
    Description="Feature description goes here"
/>
```

### Create Grid Layouts
```html
<!-- 3-column grid (auto-responsive) -->
<div class="grid-3">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>

<!-- 2-column with side-by-side content -->
<div class="grid-2">
    <div><img src="image.jpg" alt=""></div>
    <div><h2>Text Content</h2><p>...</p></div>
</div>
```

---

## Styling Best Practices

### ✅ DO:
- Use CSS variables for colors and spacing
- Apply `!important` to global overrides
- Use semantic HTML elements
- Follow mobile-first responsive approach
- Keep specificity low in component CSS
- Use existing utility classes

### ❌ DON'T:
- Inline styles on elements
- Hardcode colors (use variables)
- Create new custom colors
- Add unnecessary CSS rules
- Change core layout structure
- Ignore mobile breakpoints

### Example Proper Styling
```css
/* Good */
.my-component {
    padding: var(--spacing-lg);
    color: var(--text-primary);
    background: var(--bg-secondary);
}

/* Bad */
.my-component {
    padding: 20px;
    color: #1a1714;
    background-color: #f3f1ed;
}
```

---

## Navigation Structure

### Top Navigation (Auto-generated)
```
Utkeern | Home Gallery Projects Research Students About Tools
```

### Footer Sections
```
Utkeern          Navigation       Resources        Connect
- Description    - Home           - Students       - Email
- Tagline        - Gallery        - About          - Twitter
                 - Projects       - Tools          - GitHub
                 - Research
```

---

## Testing Checklist

Before deploying:
- [ ] All pages load correctly
- [ ] Navigation links work
- [ ] Mobile menu functions
- [ ] Responsive design verified
- [ ] No console errors
- [ ] Images load properly
- [ ] Buttons have hover effects
- [ ] Links have proper colors
- [ ] Footer displays on all pages
- [ ] Fonts render correctly

---

## Common Tasks

### Change Site Colors
Edit `app.css` variables:
```css
:root {
  --accent-primary: #2d1b47;  /* Change this */
  --accent-gold: #c49960;     /* And this */
}
```

### Add New Navigation Link
Edit `Navigation.razor`:
```razor
<li class="nav-item">
    <NavLink href="my-page" class="nav-link">My Link</NavLink>
</li>
```

### Add Footer Link
Edit `Footer.razor`:
```razor
<li><NavLink href="my-page">My Link</NavLink></li>
```

### Create New Page with Layout
```razor
@page "/new-page"
<PageTitle>New Page - Utkeern</PageTitle>

<section class="hero">...</section>
<section class="content">...</section>

@code { }
```

---

## Responsive Breakpoints

Always test at these widths:
- **Desktop**: 1440px+ (full layout)
- **Tablet**: 1024px (2-column grids)
- **Mobile**: 768px (single column)
- **Small Mobile**: 480px (compact)

Use Chrome DevTools to test responsive design.

---

## Deploy to Production

### Build for Production
```bash
dotnet publish -c Release
```

### Output Location
```
bin/Release/net8.0/publish/
```

### Deploy Steps
1. Run build command above
2. Copy publish folder to server
3. Configure web server
4. Set up HTTPS/SSL
5. Test thoroughly
6. Go live!

---

## Troubleshooting

### Page Not Loading
- Check `@page` route matches URL
- Verify component exists in `Components/` folder
- Check for compilation errors in output

### Styles Not Applying
- Ensure class names match CSS
- Check CSS is loaded (app.css)
- Use browser DevTools to inspect

### Mobile Menu Not Working
- Check viewport meta tag
- Test in actual mobile device
- Check JavaScript console for errors

### Images Not Showing
- Verify path is correct
- Check file exists in `wwwroot/images/`
- Use relative paths from wwwroot

---

## Build Status

✅ **Latest Build**: SUCCESSFUL  
✅ **Errors**: 0  
✅ **Warnings**: 0  
✅ **Ready**: YES  

---

## Support Resources

**Documentation Files**:
- `COMPLETE_FEATURE_SUMMARY.md` - Full feature list
- `NAVIGATION_AND_FOOTER_IMPLEMENTATION.md` - Nav/footer details
- `COMPONENT_USAGE_GUIDE.md` - Component reference
- `BLANK_SPACE_FIX.md` - CSS loading info

**Source Code**:
- All components in `src/BlazorApp/Components/`
- All pages in `src/BlazorApp/Pages/`
- Styles in `src/BlazorApp/wwwroot/css/app.css`

---

## Quick Links

| Resource | Location |
|----------|----------|
| Home Page | `/` |
| Gallery | `/gallery` |
| Projects | `/projects` |
| Research | `/research` |
| Students | `/students` |
| About | `/about` |
| Tools | `/tools/breadcrumb-generator` |

---

**Everything is ready to use!** 🚀

Start with the home page and navigate through the site. Modify content as needed using the components and layout system described above.

**Happy coding!** 🎉

# Text79 - AI Coding Instructions

## Project Overview

Text79 is a Brazilian educational platform website focused on self-regulated writing development for students, teachers, and schools. The project is a multi-page static website with professional animations and Portuguese content.

## Architecture & Structure

### Page Organization
- **5 main pages**: `index.html` (home), `recursos.html` (features), `precos.html` (pricing), `para-quem.html` (target audience), `contato.html` (contact)
- **Shared navigation**: Consistent header/footer across all pages with active state indicators
- **Modular CSS**: `styles.css` (global/brand), `pages-styles.css` (page-specific styles - currently missing but referenced)
- **JavaScript architecture**: `script.js` (core functionality) + `pages-scripts.js` (page-specific animations - currently missing but referenced)

### Brand System
The project uses a comprehensive brand system defined in CSS custom properties:
```css
--primary-blue: #4070B7
--secondary-blue: #61C2D3  
--accent-blue: #39A1DB
--dark-blue: #1A5B94
```

**Typography**: Uses Inter font family with 'Final Six Black' for brand elements. All content is in Portuguese (pt-BR).

## Development Patterns

### CSS Architecture
- **CSS Custom Properties**: Extensively uses CSS variables for colors, spacing, and typography
- **Component-based styling**: Classes like `.btn-primary`, `.hero-content`, `.resource-tabs`
- **Animation classes**: `.fade-in-up`, `.hover-lift`, `.delay-1/.delay-2` for staggered animations
- **Responsive breakpoints**: Mobile-first with tablet (768px) and desktop (968px+) breakpoints

### HTML Patterns
- **Semantic structure**: Proper HTML5 semantic elements (header, nav, section, footer)
- **Accessibility**: ARIA labels, alt texts, proper heading hierarchy
- **Animation triggers**: Elements use classes like `fade-in-up delay-1` for JavaScript animation targeting
- **Data attributes**: Used for functionality like `data-monthly`/`data-yearly` for price toggles

### JavaScript Architecture (from documentation)
- **Intersection Observer**: Used extensively for scroll-triggered animations
- **Animation system**: Counter animations, parallax effects, staggered reveals
- **Form validation**: Custom validation for contact forms
- **Page transitions**: Smooth transitions between sections

## Key Development Workflows

### Adding New Pages
1. Copy structure from existing page (header, nav, hero, footer)
2. Add page-specific class to `<body>` (e.g., `class="page-recursos"`)
3. Update navigation active states
4. Reference both `styles.css` and `pages-styles.css`
5. Include both JavaScript files at page bottom

### Working with Animations
- Use `.fade-in-up`, `.fade-in-right` classes on elements
- Add `delay-1`, `delay-2` for staggered animations
- Intersection Observer handles timing automatically
- Counter elements need `data-target` attribute

### Styling Conventions
- Use existing CSS custom properties for colors
- Follow BEM-like naming: `.resource-category`, `.recurso-detailed-card`
- Hover effects use `.hover-lift` class
- Buttons follow `.btn .btn-primary/.btn-secondary` pattern

## Missing Critical Files

**IMPORTANT**: The following files are referenced but missing. Create them when working on animations/styling:
- `pages-styles.css` - Contains page-specific styles (1000+ lines per docs)
- `script.js` - Core JavaScript functionality 
- `pages-scripts.js` - Animation and interaction scripts (~400 lines per docs)

## Content & Localization

- **Language**: All content in Brazilian Portuguese (pt-BR)
- **Currency**: Prices in Brazilian Real (R$)
- **Target audience**: Brazilian education market (students, teachers, schools)
- **Contact info**: WhatsApp integration for Brazilian market

## Integration Points

- **Font Awesome**: Used for icons throughout the site
- **Google Fonts**: Inter font family
- **WhatsApp**: Floating button integration for customer contact
- **Form handling**: Contact forms need backend integration (currently frontend-only)

When working on this project, prioritize maintaining the professional Brazilian educational brand, consistent animation patterns, and responsive design across all devices.
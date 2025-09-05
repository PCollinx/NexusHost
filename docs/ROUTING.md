# Routing Structure Documentation

## Overview

MokoHost website uses Next.js 15 App Router for file-based routing. All pages are organized in the `/app` directory with proper SEO metadata and reusable components.

## Page Structure

### 🏠 Homepage (`/`)

- **File**: `app/page.js`
- **Components**: NavigationBar, HeroSection, ServicesSection, FeaturesSection, Footer, ParticlesToggle
- **Features**: Interactive particles, animated sections, pricing calculator, testimonials
- **SEO**: Optimized for web hosting keywords

### 📖 About Page (`/about`)

- **File**: `app/about/page.js`
- **Components**: AboutHero, CompanyStats, MissionVision, TeamSection
- **Features**: Company history, team profiles, mission/vision, animated counters
- **SEO**: Focused on company information and trust signals

### 🖥️ Hosting Plans (`/hosting`)

- **File**: `app/hosting/page.js`
- **Components**: HostingHero, PricingPlans, FeatureComparison, HostingFAQ
- **Features**: Interactive pricing tables, feature comparison, billing toggles
- **SEO**: Optimized for hosting plan keywords

### 📞 Contact Page (`/contact`)

- **File**: `app/contact/page.js`
- **Components**: ContactHero, ContactSection, ContactInfo, ContactMap
- **Features**: Contact form with validation, multiple contact methods, office locations
- **SEO**: Local SEO optimized for support queries

### 📝 Blog (`/blog`)

- **File**: `app/blog/page.js`
- **Components**: BlogHero, BlogCategories, BlogGrid, BlogNewsletter
- **Features**: Article grid, category filtering, search functionality, newsletter signup
- **SEO**: Content marketing and knowledge base focused

### ❌ 404 Error Page

- **File**: `app/not-found.js`
- **Features**: Animated 404 message, quick navigation links, particles background
- **UX**: Helpful error page with clear navigation options

## Component Architecture

### Layout Components

- **NavigationBar**: Responsive navigation with dropdowns and mobile menu
- **Footer**: Comprehensive footer with links, newsletter, and social media
- **ParticlesToggle**: Floating toggle for user preference control

### Hero Components

- **HeroSection**: Homepage hero with animated background
- **AboutHero**: About page hero with company achievements
- **HostingHero**: Hosting page hero with plan highlights
- **ContactHero**: Contact page hero with support methods
- **BlogHero**: Blog page hero with search and stats

### Content Components

- **ServicesSection**: Service offerings with interactive cards
- **FeaturesSection**: Key features with animated counters
- **CompanyStats**: Animated statistics and achievements
- **MissionVision**: Company mission, vision, and values
- **TeamSection**: Team member profiles with social links
- **PricingPlans**: Interactive pricing tables with billing toggles
- **ContactSection**: Contact form with validation (react-hook-form + zod)

## Routing Features

### SEO Optimization

- **Metadata**: Each page has optimized title, description, keywords
- **Open Graph**: Social media sharing optimization
- **Structured Data**: Schema markup for better search visibility
- **Canonical URLs**: Proper URL structure and canonicalization

### Performance

- **Code Splitting**: Automatic code splitting by page
- **Lazy Loading**: Components load as needed
- **Image Optimization**: Next.js Image component for optimal loading
- **Caching**: Built-in Next.js caching strategies

### Accessibility

- **Semantic HTML**: Proper heading structure and landmarks
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader**: ARIA labels and descriptions
- **Reduced Motion**: Respects user motion preferences

## Navigation Structure

```
├── Home (/)
├── Hosting (/hosting)
│   ├── Shared Hosting (/hosting/shared) [Future]
│   ├── VPS Hosting (/hosting/vps) [Future]
│   └── Dedicated Servers (/hosting/dedicated) [Future]
├── About (/about)
├── Blog (/blog)
│   ├── Categories (/blog/category/[slug]) [Future]
│   └── Posts (/blog/[slug]) [Future]
├── Contact (/contact)
└── 404 Error Page
```

## Future Enhancements

### Additional Pages

- **Individual Hosting Plan Pages**: Detailed pages for each hosting type
- **Blog Post Pages**: Individual blog post templates
- **Knowledge Base**: FAQ and tutorial sections
- **Customer Portal**: Account management and billing
- **Domain Search**: Domain registration functionality

### Features to Add

- **Search Functionality**: Site-wide search capability
- **Multi-language Support**: Internationalization (i18n)
- **Dark/Light Mode**: Theme switching
- **Live Chat**: Customer support integration
- **User Dashboard**: Customer account portal

### SEO Enhancements

- **Blog Categories**: Organized content taxonomy
- **Breadcrumbs**: Improved navigation hierarchy
- **XML Sitemap**: Automated sitemap generation
- **Schema Markup**: Rich snippets for better SERP visibility

## Technical Implementation

### File-based Routing

```
app/
├── page.js                 # Homepage
├── layout.js              # Root layout
├── not-found.js           # 404 page
├── globals.css            # Global styles
├── about/
│   └── page.js            # About page
├── hosting/
│   └── page.js            # Hosting plans
├── contact/
│   └── page.js            # Contact page
├── blog/
│   └── page.js            # Blog listing
└── components/            # Reusable components
    ├── NavigationBar.jsx
    ├── Footer.jsx
    └── ...
```

### Metadata Configuration

Each page includes comprehensive metadata:

- Title optimization for SEO
- Meta descriptions for search snippets
- Open Graph tags for social sharing
- Twitter Card optimization
- Canonical URLs and robots directives

### Performance Monitoring

- Core Web Vitals optimization
- Bundle size monitoring
- Lighthouse score tracking
- User experience metrics

This routing structure provides a solid foundation for a professional hosting company website with room for future expansion and optimization.

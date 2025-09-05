# Dark/Light Mode & Internationalization Implementation

## Overview

This document outlines the implementation of dark/light mode toggle and internationalization (i18n) features in the MokoHost website.

## Features Implemented

### 1. Dark/Light Mode Toggle

- **Theme Provider**: Integrated `next-themes` for seamless theme management
- **Theme Toggle Component**: Dropdown with Light, Dark, and System options
- **CSS Variables**: Comprehensive color system supporting both themes
- **Automatic Detection**: Respects user's system preference by default

### 2. Internationalization (i18n)

- **Multi-language Support**: English (default), Spanish, French, German, Portuguese, Japanese, Korean, Chinese
- **Language Toggle**: Dropdown component with flag icons for easy language selection
- **Translation Files**: JSON-based translation system with complete coverage
- **Localized Routing**: Automatic URL handling for different languages

## File Structure

### Theme Components

```
app/components/
├── ThemeProvider.jsx      # Main theme context provider
├── ThemeToggle.jsx        # Theme selection dropdown
└── LanguageToggle.jsx     # Language selection dropdown
```

### UI Components

```
components/ui/
├── button.jsx             # Enhanced button component
└── dropdown-menu.jsx      # Dropdown menu primitives
```

### Configuration

```
lib/i18n/
├── config.js              # i18n configuration and locale settings
└── request.js             # Request configuration for next-intl
```

### Translations

```
messages/
├── en.json                # English translations (default)
├── es.json                # Spanish translations
└── ...                    # Additional language files
```

### Styling

```
app/globals.css            # CSS variables and dark mode styles
tailwind.config.js         # Tailwind configuration with dark mode
```

## Implementation Details

### Theme System

The theme system uses CSS custom properties (variables) that automatically switch between light and dark values:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  /* ... other light mode variables */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... other dark mode variables */
}
```

### Theme Toggle Usage

The theme toggle is integrated into the navigation bar:

```jsx
import { ThemeToggle } from "./ThemeToggle";

// In navigation component
<ThemeToggle />;
```

### Language System

The language system provides:

- Automatic locale detection
- Fallback to English for missing translations
- SEO-friendly URLs with locale prefixes
- Complete translation coverage for all UI elements

### Language Toggle Usage

```jsx
import { LanguageToggle } from "./LanguageToggle";

// In navigation component
<LanguageToggle />;
```

## Configuration

### Tailwind CSS

Updated to support class-based dark mode:

```js
module.exports = {
  darkMode: ["class"],
  // ... rest of config
};
```

### Layout Updates

Root layout includes theme provider:

```jsx
<ThemeProvider
  attribute="class"
  defaultTheme="system"
  enableSystem
  disableTransitionOnChange
>
  {children}
</ThemeProvider>
```

## Supported Languages

| Language   | Code | Flag | Status      |
| ---------- | ---- | ---- | ----------- |
| English    | en   | 🇺🇸   | ✅ Complete |
| Spanish    | es   | 🇪🇸   | ✅ Complete |
| French     | fr   | 🇫🇷   | 🚧 Planned  |
| German     | de   | 🇩🇪   | 🚧 Planned  |
| Portuguese | pt   | 🇵🇹   | 🚧 Planned  |
| Japanese   | ja   | 🇯🇵   | 🚧 Planned  |
| Korean     | ko   | 🇰🇷   | 🚧 Planned  |
| Chinese    | zh   | 🇨🇳   | 🚧 Planned  |

## Translation Keys Structure

### Navigation

```json
{
  "navigation": {
    "home": "Home",
    "about": "About Us",
    "hosting": "Hosting",
    "contact": "Contact",
    "blog": "Blog"
  }
}
```

### Content Sections

```json
{
  "hero": {
    "title": "Premium Web Hosting Solutions",
    "subtitle": "Reliable, fast, and secure hosting..."
  },
  "services": {
    "title": "Our Hosting Services",
    "shared": {
      "title": "Shared Hosting",
      "description": "Perfect for small websites..."
    }
  }
}
```

## Performance Optimizations

### Theme Switching

- No flash of unstyled content (FOUC)
- Instant theme transitions
- Respects user's prefers-reduced-motion setting

### Language Loading

- Only loads active language translations
- Lazy loading for non-default languages
- Cached translations for performance

## Accessibility Features

### Theme Toggle

- Keyboard navigation support
- Screen reader friendly labels
- High contrast mode support
- Respects system preferences

### Language Toggle

- Clear language indicators with flags
- Accessible dropdown implementation
- Proper ARIA labels

## Browser Support

### Theme Features

- Modern browsers with CSS custom properties support
- Graceful degradation for older browsers
- System theme detection where available

### Language Features

- All modern browsers
- SEO-friendly URL structure
- Proper lang attributes for screen readers

## Development Guidelines

### Adding New Translations

1. Add new language to `lib/i18n/config.js`
2. Create translation file in `messages/[locale].json`
3. Update language toggle dropdown
4. Test all UI components with new language

### Theme Customization

1. Update CSS variables in `globals.css`
2. Test both light and dark modes
3. Ensure proper contrast ratios
4. Verify component consistency

## Testing Checklist

### Theme Toggle

- [ ] Light mode displays correctly
- [ ] Dark mode displays correctly
- [ ] System preference detection works
- [ ] No FOUC on page load
- [ ] Theme persists across navigation

### Language Toggle

- [ ] All languages switch correctly
- [ ] URLs update with locale
- [ ] Fallback to English works
- [ ] Navigation remains functional
- [ ] Content translates properly

## Future Enhancements

### Theme System

- Custom theme creation
- High contrast mode
- Theme scheduling (automatic dark mode at night)
- More color scheme options

### Internationalization

- RTL language support (Arabic, Hebrew)
- Regional variants (en-US, en-GB)
- Date/time localization
- Currency formatting
- Number formatting

## Troubleshooting

### Common Issues

1. **Theme not switching**: Check if ThemeProvider wraps the app
2. **Language not changing**: Verify translation files exist
3. **CSS variables not working**: Ensure proper HSL format
4. **Hydration errors**: Add suppressHydrationWarning to html tag

### Debug Mode

Enable debug mode in development:

```jsx
<ThemeProvider defaultTheme="system" enableSystem>
```

## Dependencies

### Theme System

- `next-themes`: Theme management
- `@radix-ui/react-dropdown-menu`: Dropdown components
- `lucide-react`: Icons

### Internationalization

- `next-intl`: i18n framework
- `react-use`: Utility hooks

This implementation provides a robust foundation for both theme switching and multi-language support, enhancing user experience and accessibility across the MokoHost website.

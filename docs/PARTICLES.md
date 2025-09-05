# Particles System Documentation

## Overview

The particles system provides interactive animated backgrounds throughout the MokoHost website using `react-tsparticles`. It includes configurable particle effects for different sections with a centralized configuration system.

## Components

### ParticlesBackground

The core component that renders particles using the tsparticles library.

**Props:**

- `section` (string): The section identifier for configuration (`hero`, `services`, `footer`, `contact`)
- `config` (object): Optional custom configuration overrides

**Usage:**

```jsx
<ParticlesBackground section="hero" />
```

### ParticlesWrapper

A wrapper component that adds particles background to any section.

**Props:**

- `children` (ReactNode): Content to render with particles background
- `className` (string): CSS classes for the wrapper
- `section` (string): Section identifier for particle configuration
- `showParticles` (boolean): Whether to show particles (default: true)

**Usage:**

```jsx
<ParticlesWrapper section="services" className="py-24">
  <YourContent />
</ParticlesWrapper>
```

### ParticlesProvider

Context provider for global particles settings.

**Features:**

- Global enable/disable particles
- Centralized state management

### ParticlesToggle

A floating toggle button that allows users to enable/disable particles.

**Features:**

- Animated toggle button
- Tooltip with current state
- Smooth animations and transitions

## Configuration

### Section Configurations

The system includes predefined configurations for different sections:

#### Hero Section

- 80 particles
- Multi-colored particles (blue, purple, cyan, green)
- Medium opacity (0.3)
- Normal speed (1)

#### Services Section

- 40 particles
- Blue/cyan particles
- Low opacity (0.15)
- Slow speed (0.5)

#### Footer Section

- 30 particles
- Gray particles
- Very low opacity (0.1)
- Very slow speed (0.3)

#### Contact Section

- 60 particles
- Purple/pink particles
- Low-medium opacity (0.2)
- Medium-fast speed (0.8)

### Custom Configuration

You can create custom configurations by extending the `particleConfigs` object in `/lib/particleConfigs.js`:

```javascript
export const particleConfigs = {
  // ... existing configs
  myCustomSection: {
    particleCount: 50,
    opacity: 0.25,
    speed: 0.7,
    colors: ["#ff6b6b", "#4ecdc4"],
    linkDistance: 100,
  },
};
```

## Installation

The system requires the following dependencies:

- `react-tsparticles`
- `tsparticles-slim`

Install them with:

```bash
npm install react-tsparticles tsparticles-slim
```

## Usage Examples

### Adding Particles to a New Section

1. **Create a new configuration** in `/lib/particleConfigs.js`
2. **Use ParticlesWrapper** around your section:

```jsx
<ParticlesWrapper section="mySection" className="my-section-styles">
  <div>
    <h2>My Section</h2>
    <p>Content with particles background</p>
  </div>
</ParticlesWrapper>
```

### Direct Particles Background

For more control, use ParticlesBackground directly:

```jsx
<div className="relative">
  <ParticlesBackground section="hero" />
  <div className="relative z-10">Your content here</div>
</div>
```

### Custom Particles Configuration

Override specific settings:

```jsx
<ParticlesBackground
  section="hero"
  config={{
    particles: {
      number: {
        value: 120, // Override particle count
      },
    },
  }}
/>
```

## Performance Considerations

- Particles are automatically disabled on touch devices for better performance
- FPS is limited to 120 for smooth performance
- Particle density is optimized for different screen sizes
- Uses `tsparticles-slim` for smaller bundle size

## Browser Support

- Modern browsers with Canvas support
- Graceful degradation on older browsers
- Mobile-optimized configurations

## Accessibility

- Particles are purely decorative and don't interfere with screen readers
- Users can disable particles using the toggle button
- Reduced motion support can be added for accessibility compliance

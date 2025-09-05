// Centralized particles configuration for different sections
export const particleConfigs = {
  hero: {
    particleCount: 80,
    opacity: 0.3,
    speed: 1,
    colors: ["#3b82f6", "#8b5cf6", "#06b6d4", "#10b981"],
    linkDistance: 150,
  },
  services: {
    particleCount: 40,
    opacity: 0.15,
    speed: 0.5,
    colors: ["#3b82f6", "#06b6d4"],
    linkDistance: 100,
  },
  footer: {
    particleCount: 30,
    opacity: 0.1,
    speed: 0.3,
    colors: ["#6b7280", "#9ca3af"],
    linkDistance: 80,
  },
  contact: {
    particleCount: 60,
    opacity: 0.2,
    speed: 0.8,
    colors: ["#8b5cf6", "#ec4899"],
    linkDistance: 120,
  },
};

export const getParticleConfig = (section = "default") => {
  const config = particleConfigs[section] || particleConfigs.hero;

  return {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 2,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: config.colors,
      },
      links: {
        color: config.colors[0],
        distance: config.linkDistance,
        enable: true,
        opacity: config.opacity,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: config.speed,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: config.particleCount,
      },
      opacity: {
        value: config.opacity,
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.05,
          sync: false,
        },
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
        animation: {
          enable: true,
          speed: 2,
          minimumValue: 0.5,
          sync: false,
        },
      },
    },
    detectRetina: true,
  };
};

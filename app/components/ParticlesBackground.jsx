"use client";

import React, { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { getParticleConfig } from "@/lib/particleConfigs";
import {
  useDeviceCapabilities,
  getOptimizedParticleCount,
} from "@/lib/deviceCapabilities";

export function ParticlesBackground({ section = "default", config = {} }) {
  const capabilities = useDeviceCapabilities();

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // Optional callback when particles are loaded
  }, []);

  // Get configuration for the section, then apply any custom overrides
  const sectionConfig = getParticleConfig(section);

  // Optimize particle count based on device capabilities
  const optimizedConfig = {
    ...sectionConfig,
    particles: {
      ...sectionConfig.particles,
      number: {
        ...sectionConfig.particles.number,
        value: getOptimizedParticleCount(
          sectionConfig.particles.number.value,
          capabilities
        ),
      },
    },
  };

  const finalOptions = { ...optimizedConfig, ...config };

  // Don't render particles if user prefers reduced motion
  if (capabilities.prefersReducedMotion) {
    return null;
  }

  return (
    <Particles
      id={`tsparticles-${section}`}
      init={particlesInit}
      loaded={particlesLoaded}
      className="absolute inset-0 pointer-events-none"
      options={finalOptions}
    />
  );
}

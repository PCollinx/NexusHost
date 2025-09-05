"use client";

import { useEffect, useState } from "react";

export function useDeviceCapabilities() {
  const [capabilities, setCapabilities] = useState({
    isMobile: false,
    isLowEnd: false,
    prefersReducedMotion: false,
    supportsWebGL: true,
  });

  useEffect(() => {
    const checkCapabilities = () => {
      // Check if mobile device
      const isMobile =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );

      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      // Check device memory (if available)
      const deviceMemory = navigator.deviceMemory || 4;
      const isLowEnd = deviceMemory < 4;

      // Check WebGL support
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      const supportsWebGL = !!gl;

      setCapabilities({
        isMobile,
        isLowEnd,
        prefersReducedMotion,
        supportsWebGL,
      });
    };

    checkCapabilities();

    // Listen for changes in reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => checkCapabilities();

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return capabilities;
}

export function getOptimizedParticleCount(baseCount, capabilities) {
  let count = baseCount;

  if (capabilities.prefersReducedMotion) {
    return 0; // Disable particles if user prefers reduced motion
  }

  if (capabilities.isMobile) {
    count = Math.floor(count * 0.5); // Reduce by half on mobile
  }

  if (capabilities.isLowEnd) {
    count = Math.floor(count * 0.3); // Reduce significantly on low-end devices
  }

  if (!capabilities.supportsWebGL) {
    count = Math.floor(count * 0.2); // Minimal particles without WebGL
  }

  return Math.max(count, 10); // Minimum of 10 particles
}

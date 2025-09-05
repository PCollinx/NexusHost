"use client";

import React from "react";
import { ParticlesBackground } from "./ParticlesBackground";
import { useParticles } from "./ParticlesProvider";

export function ParticlesWrapper({
  children,
  className = "",
  section = "default",
  showParticles = true,
}) {
  const { particlesEnabled } = useParticles();

  const shouldShowParticles = particlesEnabled && showParticles;

  return (
    <div className={`relative ${className}`}>
      {shouldShowParticles && (
        <div className="absolute inset-0 pointer-events-none">
          <ParticlesBackground section={section} />
        </div>
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

"use client";

import React, { createContext, useContext, useState } from "react";

const ParticlesContext = createContext({});

export const useParticles = () => {
  const context = useContext(ParticlesContext);
  if (!context) {
    throw new Error("useParticles must be used within a ParticlesProvider");
  }
  return context;
};

export function ParticlesProvider({ children }) {
  const [particlesEnabled, setParticlesEnabled] = useState(true);
  const [particlesIntensity, setParticlesIntensity] = useState("normal");

  const toggleParticles = () => {
    setParticlesEnabled(!particlesEnabled);
  };

  const setIntensity = (intensity) => {
    setParticlesIntensity(intensity);
  };

  const value = {
    particlesEnabled,
    particlesIntensity,
    toggleParticles,
    setIntensity,
  };

  return (
    <ParticlesContext.Provider value={value}>
      {children}
    </ParticlesContext.Provider>
  );
}

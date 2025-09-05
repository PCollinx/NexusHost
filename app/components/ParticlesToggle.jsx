"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, SparklesIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useParticles } from "./ParticlesProvider";

export function ParticlesToggle() {
  const { particlesEnabled, toggleParticles } = useParticles();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.div
            className="fixed bottom-6 right-6 z-50"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            <Button
              onClick={toggleParticles}
              size="icon"
              variant={particlesEnabled ? "default" : "outline"}
              className={`w-12 h-12 rounded-full shadow-lg transition-all duration-300 ${
                particlesEnabled
                  ? "bg-blue-600 hover:bg-blue-700 shadow-blue-500/25"
                  : "bg-white/10 backdrop-blur-sm hover:bg-white/20"
              }`}
            >
              <motion.div
                animate={{
                  rotate: particlesEnabled ? 360 : 0,
                  scale: particlesEnabled ? [1, 1.2, 1] : 1,
                }}
                transition={{
                  duration: particlesEnabled ? 2 : 0.3,
                  repeat: particlesEnabled ? Infinity : 0,
                  ease: "linear",
                }}
              >
                <Sparkles
                  className={`w-5 h-5 ${
                    particlesEnabled ? "text-white" : "text-muted-foreground"
                  }`}
                />
              </motion.div>
            </Button>
          </motion.div>
        </TooltipTrigger>
        <TooltipContent side="left">
          {particlesEnabled ? "Disable particles" : "Enable particles"}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Server, Shield, Zap, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ParticlesWrapper } from "./ParticlesWrapper";

export function HostingHero() {
  const features = [
    { icon: Shield, text: "99.9% Uptime" },
    { icon: Zap, text: "Lightning Fast" },
    { icon: Clock, text: "24/7 Support" },
    { icon: Server, text: "Free SSL" },
  ];

  return (
    <ParticlesWrapper
      section="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Badge */}
          <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
            <Server className="w-4 h-4 mr-2 text-blue-600" />
            Professional Hosting Solutions
          </Badge>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="block">Choose Your Perfect</span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Hosting Plan
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              From personal blogs to enterprise applications, we have the
              perfect hosting solution for your needs. Start your journey with
              us today.
            </p>
          </div>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 pt-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10"
              >
                <feature.icon className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium">{feature.text}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
            >
              View All Plans
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3">
              Compare Features
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </ParticlesWrapper>
  );
}

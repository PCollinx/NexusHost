"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Users, Clock, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ParticlesWrapper } from "./ParticlesWrapper";

export function AboutHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const achievements = [
    { icon: Award, label: "Industry Leader", value: "15+ Years" },
    { icon: Users, label: "Happy Customers", value: "50,000+" },
    { icon: Clock, label: "Uptime", value: "99.99%" },
    { icon: Shield, label: "Security First", value: "24/7" },
  ];

  return (
    <ParticlesWrapper
      section="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <Badge
              variant="secondary"
              className="px-4 py-2 text-sm font-medium"
            >
              <Award className="w-4 h-4 mr-2 text-blue-600" />
              Trusted Since 2009
            </Badge>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="block">Building the Future of</span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Web Hosting
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              From a small startup to a global hosting provider, we've been on a
              mission to make web hosting accessible, reliable, and affordable
              for everyone.
            </p>
          </motion.div>

          {/* Achievement Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-8"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.1)",
                }}
                transition={{ duration: 0.2 }}
              >
                <achievement.icon className="w-8 h-8 text-blue-500 mb-3" />
                <div className="text-2xl font-bold text-foreground">
                  {achievement.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </ParticlesWrapper>
  );
}

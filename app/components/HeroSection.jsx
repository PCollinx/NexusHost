"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, Globe, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ParticlesBackground } from "./ParticlesBackground";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export function HeroSection() {
  // Hook for intersection observer to trigger CountUp when stats section is visible
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

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

  const floatingVariants = {
    floating: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Particles Background */}
        <ParticlesBackground section="hero" />

        {/* Animated Background Gradient */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Floating Icons */}
        <motion.div
          className="absolute opacity-50 top-20 left-10 p-3 bg-white/10 backdrop-blur-sm rounded-lg"
          variants={floatingVariants}
          animate="floating"
        >
          <Shield className="w-6 h-6 text-blue-500" />
        </motion.div>

        <motion.div
          className="absolute opacity-50 top-40 right-20 p-3 bg-white/10 backdrop-blur-sm rounded-lg"
          variants={floatingVariants}
          animate="floating"
          transition={{ delay: 1 }}
        >
          <Zap className="w-6 h-6 text-purple-500" />
        </motion.div>

        <motion.div
          className="absolute opacity-50 bottom-40 left-20 p-3 bg-white/10 backdrop-blur-sm rounded-lg"
          variants={floatingVariants}
          animate="floating"
          transition={{ delay: 2 }}
        >
          <Globe className="w-6 h-6 text-green-500" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
              className="px-4 py-2 text-sm font-medium opacity-50"
            >
              <Star className="w-4 h-4 mr-2 text-yellow-500" />
              Trusted by 10,000+ websites worldwide
            </Badge>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="block">Premium</span>
              <span className="block bg-gradient-to-r from-blue-500 via-purple-500 to-blue-700 bg-clip-text text-transparent">
                Web Hosting
              </span>
              <span className="block">Solutions</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Power your website with our cutting-edge hosting infrastructure.
            Experience 99.9% uptime, lightning-fast loading speeds, and 24/7
            expert support.
          </motion.p>

          {/* Features */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground"
          >
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-green-500" />
              <span>SSL Certificates</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-yellow-500" />
              <span>SSD Storage</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-blue-500" />
              <span>Global CDN</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold group"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 text-lg font-semibold border-2 hover:bg-muted/50"
            >
              View Plans
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            ref={statsRef}
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-border/50"
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-foreground">
                {statsInView && (
                  <CountUp
                    end={99.9}
                    duration={2.5}
                    decimals={1}
                    suffix="%"
                  />
                )}
                {!statsInView && "99.9%"}
              </div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-foreground">
                {statsInView && (
                  <CountUp
                    end={24}
                    duration={2.5}
                    suffix="/7"
                  />
                )}
                {!statsInView && "24/7"}
              </div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-foreground">
                {statsInView && (
                  <CountUp
                    end={10}
                    duration={2.5}
                    suffix="k+"
                  />
                )}
                {!statsInView && "10k+"}
              </div>
              <div className="text-sm text-muted-foreground">Websites</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-foreground">
                {statsInView && (
                  <CountUp
                    end={5}
                    duration={2.5}
                    suffix="★"
                  />
                )}
                {!statsInView && "5★"}
              </div>
              <div className="text-sm text-muted-foreground">Rating</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute opacity-50 bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10  border-2 border-muted-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
}

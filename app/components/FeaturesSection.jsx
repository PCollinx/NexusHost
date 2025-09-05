"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import {
  Shield,
  Zap,
  Clock,
  Globe,
  Award,
  Users,
  Server,
  HeadphonesIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function FeaturesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Shield,
      title: "Advanced Security",
      description:
        "Multi-layered security with DDoS protection, malware scanning, and automatic security updates.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Zap,
      title: "Lightning Speed",
      description:
        "Optimized infrastructure with SSD storage, CDN integration, and advanced caching technologies.",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: Clock,
      title: "99.9% Uptime",
      description:
        "Guaranteed uptime with redundant systems, automatic failover, and proactive monitoring.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "Worldwide data centers and CDN network ensuring fast loading times from anywhere.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Award,
      title: "Award Winning",
      description:
        "Recognized by industry experts for excellence in hosting services and customer satisfaction.",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: HeadphonesIcon,
      title: "Expert Support",
      description:
        "24/7 technical support from certified hosting experts via chat, phone, and email.",
      gradient: "from-red-500 to-pink-500",
    },
  ];

  const stats = [
    {
      icon: Users,
      value: 50000,
      suffix: "+",
      label: "Happy Customers",
    },
    {
      icon: Server,
      value: 99.9,
      suffix: "%",
      label: "Uptime Guarantee",
    },
    {
      icon: Globe,
      value: 15,
      suffix: "+",
      label: "Global Locations",
    },
    {
      icon: Award,
      value: 24,
      suffix: "/7",
      label: "Expert Support",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section
      className="py-24 bg-gradient-to-b from-muted/20 to-background"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="secondary" className="mb-4">
            Why Choose Us
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Built for
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Performance & Reliability
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the difference with our cutting-edge infrastructure,
            expert support, and commitment to excellence.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div key={feature.title} variants={itemVariants}>
              <Card className="h-full group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-border">
                <CardContent className="p-6">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Trusted by Thousands Worldwide
            </h3>
            <p className="text-muted-foreground">
              Join the growing community of satisfied customers who trust
              MokoHost
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={
                  inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
                }
                transition={{ duration: 0.6, delay: 0.2 * index }}
              >
                <div className="w-16 h-16 bg-background/50 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>

                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {inView && (
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      decimals={stat.value % 1 !== 0 ? 1 : 0}
                    />
                  )}
                  <span>{stat.suffix}</span>
                </div>

                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-sm text-muted-foreground mb-6">
            Trusted by leading companies worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            {/* You can replace these with actual company logos */}
            <div className="h-8 w-24 bg-muted/50 rounded"></div>
            <div className="h-8 w-24 bg-muted/50 rounded"></div>
            <div className="h-8 w-24 bg-muted/50 rounded"></div>
            <div className="h-8 w-24 bg-muted/50 rounded"></div>
            <div className="h-8 w-24 bg-muted/50 rounded"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

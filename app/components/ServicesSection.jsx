"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Server,
  Shield,
  Zap,
  Globe,
  Database,
  Cloud,
  ArrowRight,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ParticlesWrapper } from "./ParticlesWrapper";

export function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Server,
      title: "Shared Hosting",
      description:
        "Perfect for small to medium websites. Get started with our reliable shared hosting platform.",
      features: ["99.9% Uptime", "Free SSL", "24/7 Support", "cPanel Included"],
      price: "$3.99",
      period: "/month",
      popular: false,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Zap,
      title: "VPS Hosting",
      description:
        "Scale your website with dedicated resources and root access for advanced users.",
      features: [
        "Dedicated Resources",
        "Root Access",
        "SSD Storage",
        "Weekly Backups",
      ],
      price: "$19.99",
      period: "/month",
      popular: true,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Database,
      title: "Dedicated Servers",
      description:
        "Maximum performance and control with our dedicated server solutions.",
      features: [
        "Full Control",
        "High Performance",
        "24/7 Monitoring",
        "Custom Setup",
      ],
      price: "$99.99",
      period: "/month",
      popular: false,
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Cloud,
      title: "Cloud Hosting",
      description:
        "Scalable cloud infrastructure that grows with your business needs.",
      features: [
        "Auto Scaling",
        "Load Balancing",
        "Global CDN",
        "Pay-as-you-go",
      ],
      price: "$0.01",
      period: "/hour",
      popular: false,
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <ParticlesWrapper
      section="services"
      className="py-24 bg-gradient-to-b from-background to-muted/20"
    >
      <section ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4">
              Our Services
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Hosting Solutions for
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Every Need
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From personal blogs to enterprise applications, we have the
              perfect hosting solution to power your online presence.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {services.map((service, index) => (
              <motion.div key={service.title} variants={cardVariants}>
                <Card
                  className={`h-full relative overflow-hidden group hover:shadow-2xl transition-all duration-300 ${
                    service.popular
                      ? "border-purple-500/50 shadow-lg"
                      : "border-border"
                  }`}
                >
                  {service.popular && (
                    <div className="absolute top-0 left-0 right-0">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-2 text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}

                  <CardHeader className={service.popular ? "pt-12" : "pt-6"}>
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.gradient} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className="w-6 h-6 text-white" />
                    </div>

                    <CardTitle className="text-xl font-bold">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Price */}
                    <div className="text-center">
                      <div className="flex items-baseline justify-center">
                        <span className="text-3xl font-bold">
                          {service.price}
                        </span>
                        <span className="text-muted-foreground ml-1">
                          {service.period}
                        </span>
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-sm"
                        >
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Button
                      className={`w-full text-white group ${
                        service.popular
                          ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                          : "bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900"
                      }`}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Features */}
          <motion.div
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-center">
              <Shield className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                Enterprise Security
              </h3>
              <p className="text-muted-foreground text-sm">
                Advanced security measures to protect your data and
                applications.
              </p>
            </div>

            <div className="text-center">
              <Globe className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                Global Infrastructure
              </h3>
              <p className="text-muted-foreground text-sm">
                Data centers worldwide for optimal performance and reliability.
              </p>
            </div>

            <div className="text-center">
              <Zap className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
              <p className="text-muted-foreground text-sm">
                Optimized infrastructure for maximum speed and performance.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </ParticlesWrapper>
  );
}

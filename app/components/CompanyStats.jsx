"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { Server, Globe, Headphones, Zap } from "lucide-react";

export function CompanyStats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    {
      icon: Server,
      value: 50000,
      suffix: "+",
      label: "Websites Hosted",
      description: "Trusted by businesses worldwide",
      color: "text-blue-500",
    },
    {
      icon: Globe,
      value: 99.99,
      suffix: "%",
      label: "Uptime Guarantee",
      description: "Reliable hosting you can count on",
      color: "text-green-500",
    },
    {
      icon: Headphones,
      value: 24,
      suffix: "/7",
      label: "Expert Support",
      description: "Always here when you need us",
      color: "text-purple-500",
    },
    {
      icon: Zap,
      value: 15,
      suffix: "+",
      label: "Years Experience",
      description: "Industry expertise and knowledge",
      color: "text-orange-500",
    },
  ];

  return (
    <section
      className="py-24 bg-gradient-to-b from-background to-muted/20"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Numbers That Speak for Themselves
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Over a decade of growth, innovation, and unwavering commitment to
            our customers.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-card rounded-lg border border-border hover:border-border/80 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-background rounded-full border border-border">
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </div>

              <div className="text-4xl font-bold mb-2">
                {inView && (
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    delay={0.5 + index * 0.2}
                    decimals={stat.suffix === "%" ? 2 : 0}
                  />
                )}
                <span className="text-2xl">{stat.suffix}</span>
              </div>

              <h3 className="text-lg font-semibold mb-2">{stat.label}</h3>
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

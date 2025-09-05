"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, TrendingUp, Users, Coffee } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ParticlesWrapper } from "./ParticlesWrapper";

export function BlogHero() {
  const stats = [
    { icon: BookOpen, value: "500+", label: "Articles" },
    { icon: TrendingUp, value: "50K+", label: "Monthly Readers" },
    { icon: Users, value: "Expert", label: "Authors" },
    { icon: Coffee, value: "Fresh", label: "Content" },
  ];

  return (
    <ParticlesWrapper
      section="hero"
      className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20"
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
            <BookOpen className="w-4 h-4 mr-2 text-green-600" />
            Knowledge Hub
          </Badge>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="block">Web Hosting</span>
              <span className="block bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Insights & Tips
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Stay ahead with expert tutorials, industry insights, and practical
              guides to help you master web hosting and grow your online
              presence.
            </p>
          </div>

          {/* Search Bar */}
          <motion.div
            className="max-w-lg mx-auto flex gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Input placeholder="Search articles..." className="flex-1" />
            <Button className="bg-green-600 hover:bg-green-700">Search</Button>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto pt-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-2">
                  <stat.icon className="w-6 h-6 text-green-500" />
                </div>
                <div className="text-lg font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </ParticlesWrapper>
  );
}

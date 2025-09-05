"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Server,
  Shield,
  Code,
  TrendingUp,
  Users,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function BlogCategories() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    {
      id: "all",
      name: "All Posts",
      icon: BookOpen,
      count: 247,
      color: "text-gray-600",
    },
    {
      id: "hosting",
      name: "Web Hosting",
      icon: Server,
      count: 89,
      color: "text-blue-600",
    },
    {
      id: "security",
      name: "Security",
      icon: Shield,
      count: 56,
      color: "text-green-600",
    },
    {
      id: "tutorials",
      name: "Tutorials",
      icon: Code,
      count: 72,
      color: "text-purple-600",
    },
    {
      id: "business",
      name: "Business",
      icon: TrendingUp,
      count: 43,
      color: "text-orange-600",
    },
    {
      id: "industry",
      name: "Industry News",
      icon: Users,
      count: 31,
      color: "text-red-600",
    },
  ];

  return (
    <section className="py-16 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Browse by Category
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Find articles that match your interests and expertise level.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
            >
              <Button
                variant={
                  selectedCategory === category.id ? "default" : "outline"
                }
                onClick={() => setSelectedCategory(category.id)}
                className={`h-auto p-4 flex flex-col items-center space-y-2 min-w-[120px] ${
                  selectedCategory === category.id
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "hover:bg-muted/50"
                }`}
              >
                <category.icon
                  className={`w-6 h-6 ${
                    selectedCategory === category.id
                      ? "text-white"
                      : category.color
                  }`}
                />
                <span className="text-sm font-medium">{category.name}</span>
                <Badge
                  variant={
                    selectedCategory === category.id ? "secondary" : "outline"
                  }
                  className="text-xs"
                >
                  {category.count}
                </Badge>
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Topics */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-lg font-semibold mb-6 text-center">
            Popular Topics
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "WordPress Hosting",
              "SSL Certificates",
              "Website Speed",
              "Domain Names",
              "Email Hosting",
              "VPS Setup",
              "Security Best Practices",
              "Backup Solutions",
              "CDN Integration",
              "Database Optimization",
              "PHP Updates",
              "Server Migration",
            ].map((topic, index) => (
              <motion.div
                key={topic}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.05 }}
              >
                <Badge
                  variant="outline"
                  className="cursor-pointer hover:bg-muted/50 transition-colors"
                >
                  {topic}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

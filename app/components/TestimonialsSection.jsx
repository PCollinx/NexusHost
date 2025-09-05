"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Hook for intersection observer to trigger CountUp when stats section is visible
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO",
      company: "TechStart Inc.",
      avatar: "/avatars/sarah.jpg",
      rating: 5,
      content:
        "MokoHost has been incredible for our startup. The performance is outstanding, and their support team is always there when we need them. Our website loads lightning fast!",
      service: "VPS Hosting",
      featured: true,
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Web Developer",
      company: "Digital Agency Pro",
      avatar: "/avatars/michael.jpg",
      rating: 5,
      content:
        "I've tried many hosting providers, but MokoHost stands out. The uptime is exceptional, and the dashboard is so user-friendly. Perfect for managing multiple client websites.",
      service: "Shared Hosting",
      featured: false,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "E-commerce Owner",
      company: "Fashion Forward",
      avatar: "/avatars/emily.jpg",
      rating: 5,
      content:
        "Since switching to MokoHost, our online store has never been faster. The security features give us peace of mind, and customer support is genuinely helpful.",
      service: "Cloud Hosting",
      featured: true,
    },
    {
      id: 4,
      name: "David Wilson",
      position: "Blogger",
      company: "Travel Tales Blog",
      avatar: "/avatars/david.jpg",
      rating: 5,
      content:
        "As a blogger, I need reliable hosting that won't break the bank. MokoHost delivers amazing value with excellent performance. My readers love how fast my site loads!",
      service: "WordPress Hosting",
      featured: false,
    },
    {
      id: 5,
      name: "Lisa Thompson",
      position: "Marketing Director",
      company: "Growth Marketing Co.",
      avatar: "/avatars/lisa.jpg",
      rating: 5,
      content:
        "The migration process was seamless, and our website performance improved dramatically. MokoHost's team made the transition effortless. Highly recommended!",
      service: "Dedicated Server",
      featured: true,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Badge variant="secondary" className="mb-4">
            Customer Stories
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            What Our
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Customers Say
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what real customers say
            about their experience with MokoHost.
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="mb-12"
            >
              <Card className="max-w-4xl mx-auto bg-gradient-to-br from-background to-muted/20 border-border/50 shadow-xl">
                <CardContent className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                        {currentTestimonial.name.charAt(0)}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-center md:text-left">
                      {/* Quote Icon */}
                      <Quote className="w-12 h-12 text-blue-500/20 mb-4 mx-auto md:mx-0" />

                      {/* Rating */}
                      <div className="flex items-center justify-center md:justify-start space-x-1 mb-4">
                        {[...Array(currentTestimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <blockquote className="text-lg md:text-xl text-foreground/90 mb-6 leading-relaxed">
                        "{currentTestimonial.content}"
                      </blockquote>

                      {/* Author Info */}
                      <div className="space-y-2">
                        <div className="font-semibold text-lg">
                          {currentTestimonial.name}
                        </div>
                        <div className="text-muted-foreground">
                          {currentTestimonial.position} at{" "}
                          {currentTestimonial.company}
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {currentTestimonial.service}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full p-0"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full p-0"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? "bg-blue-600 scale-125"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border/50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground mb-2">
              {statsInView && (
                <CountUp end={4.9} duration={2.5} decimals={1} suffix="/5" />
              )}
              {!statsInView && "4.9/5"}
            </div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground mb-2">
              {statsInView && <CountUp end={10} duration={2.5} suffix="k+" />}
              {!statsInView && "10k+"}
            </div>
            <div className="text-sm text-muted-foreground">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground mb-2">
              {statsInView && (
                <CountUp end={99.9} duration={2.5} decimals={1} suffix="%" />
              )}
              {!statsInView && "99.9%"}
            </div>
            <div className="text-sm text-muted-foreground">
              Satisfaction Rate
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground mb-2">
              {statsInView && <CountUp end={24} duration={2.5} suffix="/7" />}
              {!statsInView && "24/7"}
            </div>
            <div className="text-sm text-muted-foreground">
              Support Available
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

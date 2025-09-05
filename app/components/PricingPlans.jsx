"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Check, X, Star, Crown, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function PricingPlans() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = {
    shared: [
      {
        name: "Starter",
        icon: Star,
        popular: false,
        price: { monthly: 4.99, yearly: 3.99 },
        description: "Perfect for personal websites and blogs",
        features: {
          included: [
            "1 Website",
            "10 GB SSD Storage",
            "Unmetered Bandwidth",
            "Free SSL Certificate",
            "24/7 Email Support",
            "cPanel Control Panel",
          ],
          excluded: ["Free Domain", "Premium Support", "Advanced Security"],
        },
      },
      {
        name: "Professional",
        icon: Crown,
        popular: true,
        price: { monthly: 9.99, yearly: 7.99 },
        description: "Great for small businesses and growing websites",
        features: {
          included: [
            "5 Websites",
            "50 GB SSD Storage",
            "Unmetered Bandwidth",
            "Free SSL Certificate",
            "Free Domain for 1 Year",
            "24/7 Priority Support",
            "cPanel Control Panel",
            "WordPress Staging",
            "Daily Backups",
          ],
          excluded: ["Dedicated IP", "Advanced Security Suite"],
        },
      },
      {
        name: "Business",
        icon: Zap,
        popular: false,
        price: { monthly: 19.99, yearly: 15.99 },
        description: "Perfect for established businesses and e-commerce",
        features: {
          included: [
            "Unlimited Websites",
            "100 GB SSD Storage",
            "Unmetered Bandwidth",
            "Free SSL Certificate",
            "Free Domain for 1 Year",
            "24/7 Premium Support",
            "cPanel Control Panel",
            "WordPress Staging",
            "Daily Backups",
            "Dedicated IP",
            "Advanced Security Suite",
            "Performance Monitoring",
          ],
          excluded: [],
        },
      },
    ],
  };

  return (
    <section className="py-24 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Choose Your Perfect Plan
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Start with our shared hosting plans, perfect for websites of all
            sizes.
          </motion.p>

          {/* Billing Toggle */}
          <motion.div
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span
              className={
                billingCycle === "monthly"
                  ? "font-medium"
                  : "text-muted-foreground"
              }
            >
              Monthly
            </span>
            <button
              onClick={() =>
                setBillingCycle(
                  billingCycle === "monthly" ? "yearly" : "monthly"
                )
              }
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                billingCycle === "yearly" ? "bg-blue-600" : "bg-gray-200"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingCycle === "yearly" ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span
              className={
                billingCycle === "yearly"
                  ? "font-medium"
                  : "text-muted-foreground"
              }
            >
              Yearly
            </span>
            {billingCycle === "yearly" && (
              <Badge variant="secondary" className="text-green-600">
                Save 20%
              </Badge>
            )}
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.shared.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <Card
                className={`h-full relative ${
                  plan.popular
                    ? "border-blue-500 shadow-lg scale-105"
                    : "border-border hover:border-border/80"
                } transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div
                      className={`p-3 rounded-full ${
                        plan.popular
                          ? "bg-blue-100 text-blue-600"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <plan.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <p className="text-muted-foreground">{plan.description}</p>

                  <div className="mt-4">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold">
                        ${plan.price[billingCycle]}
                      </span>
                      <span className="text-muted-foreground ml-1">
                        /{billingCycle === "monthly" ? "mo" : "yr"}
                      </span>
                    </div>
                    {billingCycle === "yearly" && (
                      <p className="text-sm text-muted-foreground mt-1">
                        Billed annually
                      </p>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "bg-primary hover:bg-primary/90"
                    }`}
                    size="lg"
                  >
                    Get Started
                  </Button>

                  <div className="space-y-3">
                    {plan.features.included.map((feature) => (
                      <div key={feature} className="flex items-center">
                        <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                    {plan.features.excluded.map((feature) => (
                      <div key={feature} className="flex items-center">
                        <X className="w-4 h-4 text-muted-foreground mr-3 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-sm text-muted-foreground mb-4">
            All plans include 30-day money-back guarantee
          </p>
          <Button variant="outline" size="lg">
            Compare All Features
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

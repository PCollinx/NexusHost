"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Server,
  Database,
  Shield,
  Zap,
  Check,
  Calculator,
  ArrowRight,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function PricingCalculator() {
  const [selectedPlan, setSelectedPlan] = useState("shared");
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [addOns, setAddOns] = useState({
    ssl: false,
    backup: false,
    cdn: false,
    priority: false,
  });

  const plans = {
    shared: {
      name: "Shared Hosting",
      icon: Server,
      description: "Perfect for personal websites and small businesses",
      basePrice: { monthly: 3.99, annual: 2.99 },
      features: [
        "1 Website",
        "10 GB SSD Storage",
        "Unlimited Bandwidth",
        "Free SSL Certificate",
        "24/7 Support",
        "cPanel Access",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    vps: {
      name: "VPS Hosting",
      icon: Database,
      description: "Scalable resources for growing websites",
      basePrice: { monthly: 19.99, annual: 15.99 },
      features: [
        "2 vCPU Cores",
        "4 GB RAM",
        "80 GB SSD Storage",
        "2 TB Bandwidth",
        "Root Access",
        "Free Backups",
      ],
      gradient: "from-purple-500 to-pink-500",
    },
    dedicated: {
      name: "Dedicated Server",
      icon: Shield,
      description: "Maximum performance and control",
      basePrice: { monthly: 99.99, annual: 79.99 },
      features: [
        "Intel Xeon CPU",
        "32 GB RAM",
        "1 TB SSD Storage",
        "Unlimited Bandwidth",
        "Full Root Access",
        "Dedicated IP",
      ],
      gradient: "from-orange-500 to-red-500",
    },
  };

  const addOnPrices = {
    ssl: { monthly: 5.99, annual: 4.99, name: "Premium SSL Certificate" },
    backup: { monthly: 2.99, annual: 1.99, name: "Daily Automated Backups" },
    cdn: { monthly: 4.99, annual: 3.99, name: "Global CDN Service" },
    priority: { monthly: 9.99, annual: 7.99, name: "Priority Support" },
  };

  const calculateTotal = () => {
    let total = plans[selectedPlan].basePrice[billingCycle];

    Object.keys(addOns).forEach((addon) => {
      if (addOns[addon]) {
        total += addOnPrices[addon][billingCycle];
      }
    });

    return total;
  };

  const calculateSavings = () => {
    if (billingCycle === "monthly") return 0;

    const monthlyTotal = plans[selectedPlan].basePrice.monthly * 12;
    const annualTotal = plans[selectedPlan].basePrice.annual * 12;

    let monthlySavings = monthlyTotal - annualTotal;

    Object.keys(addOns).forEach((addon) => {
      if (addOns[addon]) {
        monthlySavings +=
          addOnPrices[addon].monthly * 12 - addOnPrices[addon].annual * 12;
      }
    });

    return monthlySavings;
  };

  const toggleAddOn = (addon) => {
    setAddOns((prev) => ({
      ...prev,
      [addon]: !prev[addon],
    }));
  };

  const currentPlan = plans[selectedPlan];
  const total = calculateTotal();
  const savings = calculateSavings();

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Badge variant="secondary" className="mb-4">
            <Calculator className="w-4 h-4 mr-2" />
            Pricing Calculator
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Calculate Your
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Perfect Plan
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Use our interactive calculator to build your ideal hosting solution
            and see exactly what you'll pay.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Configuration Panel */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Plan Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Server className="w-5 h-5" />
                  <span>Choose Your Hosting Plan</span>
                </CardTitle>
                <CardDescription>
                  Select the hosting solution that best fits your needs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs value={selectedPlan} onValueChange={setSelectedPlan}>
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="shared">Shared</TabsTrigger>
                    <TabsTrigger value="vps">VPS</TabsTrigger>
                    <TabsTrigger value="dedicated">Dedicated</TabsTrigger>
                  </TabsList>

                  {Object.entries(plans).map(([key, plan]) => (
                    <TabsContent key={key} value={key} className="mt-6">
                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-12 h-12 rounded-lg bg-gradient-to-r ${plan.gradient} p-3`}
                        >
                          <plan.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-2">
                            {plan.name}
                          </h3>
                          <p className="text-muted-foreground mb-4">
                            {plan.description}
                          </p>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                            {plan.features.map((feature, index) => (
                              <div
                                key={index}
                                className="flex items-center space-x-2 text-sm"
                              >
                                <Check className="w-3 h-3 text-green-500 flex-shrink-0" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>

            {/* Billing Cycle */}
            <Card>
              <CardHeader>
                <CardTitle>Billing Cycle</CardTitle>
                <CardDescription>Save more with annual billing</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant={billingCycle === "monthly" ? "default" : "outline"}
                    onClick={() => setBillingCycle("monthly")}
                    className="justify-start"
                  >
                    Monthly Billing
                  </Button>
                  <Button
                    variant={billingCycle === "annual" ? "default" : "outline"}
                    onClick={() => setBillingCycle("annual")}
                    className="justify-between"
                  >
                    <span>Annual Billing</span>
                    <Badge variant="secondary" className="text-xs">
                      Save 25%
                    </Badge>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Add-ons */}
            <Card>
              <CardHeader>
                <CardTitle>Additional Services</CardTitle>
                <CardDescription>
                  Enhance your hosting with these optional add-ons
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TooltipProvider>
                  <div className="space-y-4">
                    {Object.entries(addOnPrices).map(([key, addon]) => (
                      <div
                        key={key}
                        className="flex items-center justify-between p-4 border border-border rounded-lg"
                      >
                        <div className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            checked={addOns[key]}
                            onChange={() => toggleAddOn(key)}
                            className="w-4 h-4 text-blue-600 rounded"
                          />
                          <div>
                            <div className="font-medium">{addon.name}</div>
                            <div className="text-sm text-muted-foreground">
                              ${addon[billingCycle]}/
                              {billingCycle === "monthly" ? "mo" : "yr"}
                            </div>
                          </div>
                        </div>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="w-4 h-4 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Learn more about {addon.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    ))}
                  </div>
                </TooltipProvider>
              </CardContent>
            </Card>
          </motion.div>

          {/* Summary Panel */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
                <CardDescription>
                  Your customized hosting package
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Selected Plan */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{currentPlan.name}</div>
                    <div className="text-sm text-muted-foreground capitalize">
                      {billingCycle} billing
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">
                      ${currentPlan.basePrice[billingCycle]}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      /{billingCycle === "monthly" ? "mo" : "yr"}
                    </div>
                  </div>
                </div>

                {/* Add-ons */}
                {Object.entries(addOns).map(([key, enabled]) => {
                  if (!enabled) return null;
                  const addon = addOnPrices[key];
                  return (
                    <div
                      key={key}
                      className="flex items-center justify-between text-sm"
                    >
                      <div className="text-muted-foreground">{addon.name}</div>
                      <div>
                        ${addon[billingCycle]}/
                        {billingCycle === "monthly" ? "mo" : "yr"}
                      </div>
                    </div>
                  );
                })}

                <div className="border-t border-border pt-4">
                  <div className="flex items-center justify-between text-lg font-semibold">
                    <span>Total</span>
                    <div className="text-right">
                      <div>${total.toFixed(2)}</div>
                      <div className="text-xs text-muted-foreground">
                        /{billingCycle === "monthly" ? "mo" : "yr"}
                      </div>
                    </div>
                  </div>

                  {savings > 0 && (
                    <div className="mt-2 text-sm text-green-600">
                      You save ${savings.toFixed(2)} annually!
                    </div>
                  )}
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 group">
                  Get Started Now
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>

                <div className="text-center text-xs text-muted-foreground">
                  30-day money-back guarantee
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

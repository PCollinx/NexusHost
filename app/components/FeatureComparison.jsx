"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Check, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function FeatureComparison() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const features = [
    {
      name: "Storage Space",
      starter: "10 GB SSD",
      professional: "50 GB SSD",
      business: "100 GB SSD",
    },
    {
      name: "Bandwidth",
      starter: "Unmetered",
      professional: "Unmetered",
      business: "Unmetered",
    },
    {
      name: "Websites",
      starter: "1",
      professional: "5",
      business: "Unlimited",
    },
    { name: "Free Domain", starter: false, professional: true, business: true },
    {
      name: "SSL Certificate",
      starter: true,
      professional: true,
      business: true,
    },
    {
      name: "Email Accounts",
      starter: "5",
      professional: "25",
      business: "Unlimited",
    },
    {
      name: "WordPress Install",
      starter: true,
      professional: true,
      business: true,
    },
    {
      name: "Daily Backups",
      starter: false,
      professional: true,
      business: true,
    },
    {
      name: "Priority Support",
      starter: false,
      professional: true,
      business: true,
    },
    {
      name: "Dedicated IP",
      starter: false,
      professional: false,
      business: true,
    },
  ];

  const plans = ["Starter", "Professional", "Business"];

  return (
    <section className="py-24 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2x
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Compare Features
          </motion.h2x>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            See what&apos;s included with each hosting plan to find the perfect
            fit for your needs.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Feature Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-4 px-4">Features</th>
                      {plans.map((plan) => (
                        <th
                          key={plan}
                          className="text-center py-4 px-4 font-semibold"
                        >
                          {plan}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {features.map((feature, index) => (
                      <motion.tr
                        key={feature.name}
                        className="border-b hover:bg-muted/50 transition-colors"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          duration: 0.6,
                          delay: 0.6 + index * 0.05,
                        }}
                      >
                        <td className="py-4 px-4 font-medium">
                          {feature.name}
                        </td>
                        <td className="py-4 px-4 text-center">
                          {typeof feature.starter === "boolean" ? (
                            feature.starter ? (
                              <Check className="w-5 h-5 text-green-500 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-muted-foreground mx-auto" />
                            )
                          ) : (
                            feature.starter
                          )}
                        </td>
                        <td className="py-4 px-4 text-center">
                          {typeof feature.professional === "boolean" ? (
                            feature.professional ? (
                              <Check className="w-5 h-5 text-green-500 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-muted-foreground mx-auto" />
                            )
                          ) : (
                            feature.professional
                          )}
                        </td>
                        <td className="py-4 px-4 text-center">
                          {typeof feature.business === "boolean" ? (
                            feature.business ? (
                              <Check className="w-5 h-5 text-green-500 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-muted-foreground mx-auto" />
                            )
                          ) : (
                            feature.business
                          )}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

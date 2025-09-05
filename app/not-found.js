"use client";

import React from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NavigationBar } from "./components/NavigationBar";
import { Footer } from "./components/Footer";
import { ParticlesToggle } from "./components/ParticlesToggle";
import { ParticlesWrapper } from "./components/ParticlesWrapper";

export default function NotFound() {
  const quickLinks = [
    { name: "Hosting Plans", href: "/hosting", icon: Home },
    { name: "About Us", href: "/about", icon: HelpCircle },
    { name: "Contact Support", href: "/contact", icon: Search },
  ];

  return (
    <>
      <NavigationBar />
      <ParticlesWrapper
        section="hero"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Large 404 */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                404
              </h1>
            </motion.div>

            {/* Error Message */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Oops! Page Not Found
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The page you&apos;re looking for seems to have vanished into
                cyberspace. Don&apos;t worry, it happens to the best of us!
              </p>
            </div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Home className="w-5 h-5 mr-2" />
                Back to Home
              </Button>
              <Button size="lg" variant="outline">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Go Back
              </Button>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="pt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h3 className="text-lg font-semibold mb-6">
                Or try one of these popular pages:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                {quickLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  >
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                      <CardContent className="p-6 text-center">
                        <link.icon className="w-8 h-8 mx-auto mb-3 text-blue-500" />
                        <h4 className="font-medium">{link.name}</h4>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </ParticlesWrapper>
      <Footer />
      <ParticlesToggle />
    </>
  );
}

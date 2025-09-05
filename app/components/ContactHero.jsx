"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone, Mail, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ParticlesWrapper } from "./ParticlesWrapper";

export function ContactHero() {
  const contactMethods = [
    { icon: MessageCircle, text: "Live Chat" },
    { icon: Phone, text: "Phone Support" },
    { icon: Mail, text: "Email Help" },
    { icon: Clock, text: "24/7 Available" },
  ];

  return (
    <ParticlesWrapper
      section="contact"
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
            <MessageCircle className="w-4 h-4 mr-2 text-purple-600" />
            Expert Support Team
          </Badge>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="block">Get in Touch</span>
              <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-purple-800 bg-clip-text text-transparent">
                We're Here to Help
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Have questions about our hosting services? Need technical support?
              Our expert team is available 24/7 to assist you.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="flex flex-wrap justify-center gap-6 pt-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10"
              >
                <method.icon className="w-5 h-5 text-purple-500" />
                <span className="text-sm font-medium">{method.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </ParticlesWrapper>
  );
}

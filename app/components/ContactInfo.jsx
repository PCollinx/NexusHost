"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Headphones,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ContactInfo() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our experts",
      details: ["+1 (555) 123-4567", "Available 24/7"],
      action: "Call Now",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Get detailed assistance via email",
      details: ["support@nexushost.com", "Response within 1 hour"],
      action: "Send Email",
      color: "text-green-500",
      bgColor: "bg-green-50",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Instant help when you need it",
      details: ["Available 24/7", "Average response: 30 seconds"],
      action: "Start Chat",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
    },
    {
      icon: Headphones,
      title: "Premium Support",
      description: "Priority assistance for Business customers",
      details: ["Dedicated support line", "Guaranteed 5-minute response"],
      action: "Contact Premium",
      color: "text-orange-500",
      bgColor: "bg-orange-50",
    },
  ];

  const officeLocations = [
    {
      city: "San Francisco",
      address: "123 Tech Street, San Francisco, CA 94102",
      phone: "+1 (555) 123-4567",
      hours: "Mon-Fri: 9AM-6PM PST",
    },
    {
      city: "New York",
      address: "456 Business Ave, New York, NY 10001",
      phone: "+1 (555) 987-6543",
      hours: "Mon-Fri: 9AM-6PM EST",
    },
    {
      city: "London",
      address: "789 Innovation Road, London EC1A 1AA",
      phone: "+44 20 7123 4567",
      hours: "Mon-Fri: 9AM-6PM GMT",
    },
  ];

  return (
    <section className="py-24 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Methods */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Multiple Ways to Reach Us
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Choose the support method that works best for you. Our expert team
              is standing by to help.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`inline-flex p-3 rounded-full ${method.bgColor} mb-4`}
                    >
                      <method.icon className={`w-6 h-6 ${method.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {method.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {method.description}
                    </p>
                    <div className="space-y-1 mb-4">
                      {method.details.map((detail, idx) => (
                        <p key={idx} className="text-sm font-medium">
                          {detail}
                        </p>
                      ))}
                    </div>
                    <Button size="sm" className="w-full">
                      {method.action}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Office Locations */}
        <div>
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Our Global Offices
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              Visit us in person or call our local offices for regional support.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {officeLocations.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <MapPin className="w-5 h-5 text-blue-500 mr-2" />
                      <h3 className="text-xl font-semibold">{office.city}</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <MapPin className="w-4 h-4 text-muted-foreground mr-2 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">
                          {office.address}
                        </p>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 text-muted-foreground mr-2" />
                        <p className="text-sm font-medium">{office.phone}</p>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 text-muted-foreground mr-2" />
                        <p className="text-sm text-muted-foreground">
                          {office.hours}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

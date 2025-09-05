"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function TeamSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "/team/sarah.jpg",
      bio: "Visionary leader with 15+ years in web hosting. Former CTO at major tech companies.",
      social: {
        linkedin: "https://linkedin.com/in/sarahjohnson",
        twitter: "https://twitter.com/sarahjohnson",
        email: "sarah@mokohost.com",
      },
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "/team/michael.jpg",
      bio: "Technology expert specializing in cloud infrastructure and system architecture.",
      social: {
        linkedin: "https://linkedin.com/in/michaelchen",
        twitter: "https://twitter.com/michaelchen",
        email: "michael@mokohost.com",
      },
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Customer Success",
      image: "/team/emily.jpg",
      bio: "Customer advocate with a passion for helping businesses succeed online.",
      social: {
        linkedin: "https://linkedin.com/in/emilyrodriguez",
        twitter: "https://twitter.com/emilyrodriguez",
        email: "emily@mokohost.com",
      },
    },
    {
      name: "David Thompson",
      role: "Lead Developer",
      image: "/team/david.jpg",
      bio: "Full-stack developer focused on creating seamless user experiences.",
      social: {
        linkedin: "https://linkedin.com/in/davidthompson",
        twitter: "https://twitter.com/davidthompson",
        email: "david@mokohost.com",
      },
    },
    {
      name: "Lisa Wang",
      role: "Security Director",
      image: "/team/lisa.jpg",
      bio: "Cybersecurity expert ensuring our infrastructure is secure and compliant.",
      social: {
        linkedin: "https://linkedin.com/in/lisawang",
        twitter: "https://twitter.com/lisawang",
        email: "lisa@mokohost.com",
      },
    },
    {
      name: "Alex Kumar",
      role: "Product Manager",
      image: "/team/alex.jpg",
      bio: "Product strategist focused on innovation and user-centered design.",
      social: {
        linkedin: "https://linkedin.com/in/alexkumar",
        twitter: "https://twitter.com/alexkumar",
        email: "alex@mokohost.com",
      },
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
            Meet Our Team
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The passionate individuals behind MokoHost's success. We're a
            diverse team united by our commitment to exceptional hosting
            services.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 relative overflow-hidden">
                  {/* Placeholder for team member image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="flex space-x-2">
                    <Button size="sm" variant="ghost" className="p-2">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="p-2">
                      <Twitter className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="p-2">
                      <Mail className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Join Our Team CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
              <p className="text-muted-foreground mb-6">
                We're always looking for talented individuals who share our
                passion for technology and customer service.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                View Open Positions
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

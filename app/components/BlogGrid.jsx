"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function BlogGrid() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const blogPosts = [
    {
      id: 1,
      title: "Complete Guide to WordPress Hosting in 2025",
      excerpt:
        "Everything you need to know about choosing the best WordPress hosting solution for your website, including performance tips and security considerations.",
      category: "Tutorials",
      author: "Sarah Johnson",
      date: "Jan 15, 2025",
      readTime: "8 min read",
      featured: true,
      tags: ["WordPress", "Performance", "Security"],
    },
    {
      id: 2,
      title: "SSL Certificates Explained: Why Your Website Needs HTTPS",
      excerpt:
        "Learn about SSL certificates, how they work, and why they're essential for website security and SEO rankings.",
      category: "Security",
      author: "Michael Chen",
      date: "Jan 12, 2025",
      readTime: "6 min read",
      featured: false,
      tags: ["SSL", "Security", "SEO"],
    },
    {
      id: 3,
      title: "VPS vs Shared Hosting: Which is Right for Your Business?",
      excerpt:
        "Compare the pros and cons of VPS and shared hosting to make an informed decision for your growing business website.",
      category: "Web Hosting",
      author: "Emily Rodriguez",
      date: "Jan 10, 2025",
      readTime: "10 min read",
      featured: false,
      tags: ["VPS", "Shared Hosting", "Business"],
    },
    {
      id: 4,
      title: "Website Speed Optimization: 15 Proven Techniques",
      excerpt:
        "Boost your website's performance with these actionable speed optimization techniques that will improve user experience and search rankings.",
      category: "Performance",
      author: "David Thompson",
      date: "Jan 8, 2025",
      readTime: "12 min read",
      featured: true,
      tags: ["Performance", "Optimization", "User Experience"],
    },
    {
      id: 5,
      title: "Domain Name Best Practices for 2025",
      excerpt:
        "Choose the perfect domain name for your business with these expert tips on branding, SEO, and domain extensions.",
      category: "Business",
      author: "Lisa Wang",
      date: "Jan 5, 2025",
      readTime: "7 min read",
      featured: false,
      tags: ["Domain Names", "Branding", "Business"],
    },
    {
      id: 6,
      title: "Backup Strategies Every Website Owner Should Know",
      excerpt:
        "Protect your website with comprehensive backup strategies including automated solutions and disaster recovery planning.",
      category: "Security",
      author: "Alex Kumar",
      date: "Jan 3, 2025",
      readTime: "9 min read",
      featured: false,
      tags: ["Backup", "Security", "Disaster Recovery"],
    },
  ];

  const getCategoryColor = (category) => {
    const colors = {
      Tutorials: "bg-purple-100 text-purple-800",
      Security: "bg-green-100 text-green-800",
      "Web Hosting": "bg-blue-100 text-blue-800",
      Performance: "bg-orange-100 text-orange-800",
      Business: "bg-red-100 text-red-800",
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <section className="py-24 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Latest Articles
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Stay updated with the latest trends, tips, and insights from our
            hosting experts.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className={post.featured ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="aspect-video bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
                  {/* Placeholder for blog post image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl font-bold text-blue-500/20">
                      {post.category[0]}
                    </div>
                  </div>
                  {post.featured && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-blue-600 text-white">Featured</Badge>
                    </div>
                  )}
                  <div className="absolute top-4 right-4">
                    <Badge className={getCategoryColor(post.category)}>
                      {post.category}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    className="w-full group-hover:bg-blue-50 transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button size="lg" variant="outline">
            Load More Articles
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

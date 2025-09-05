"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function HostingFAQ() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const faqs = [
    {
      question: "What's included with my hosting plan?",
      answer:
        "All our hosting plans include free SSL certificates, cPanel control panel, 24/7 support, and a 30-day money-back guarantee. Higher tier plans include additional features like free domains, priority support, and advanced security features.",
    },
    {
      question: "Can I upgrade my plan later?",
      answer:
        "Yes! You can upgrade your hosting plan at any time. We'll help you migrate to a higher tier with zero downtime, and you'll only pay the difference for the remaining billing period.",
    },
    {
      question: "Do you offer a money-back guarantee?",
      answer:
        "We offer a 30-day money-back guarantee on all our hosting plans. If you're not completely satisfied, we'll refund your payment within the first 30 days.",
    },
    {
      question: "What's your uptime guarantee?",
      answer:
        "We guarantee 99.9% uptime for all our hosting services. Our infrastructure is monitored 24/7, and we have redundant systems in place to ensure maximum availability for your website.",
    },
    {
      question: "Do you provide website migration?",
      answer:
        "Yes! We offer free website migration for all new customers. Our technical team will handle the entire migration process to ensure your website is transferred safely with zero downtime.",
    },
    {
      question: "What type of support do you offer?",
      answer:
        "We provide 24/7 customer support through live chat, email, and phone. Our support team consists of hosting experts who can help with technical issues, billing questions, and general guidance.",
    },
    {
      question: "Can I host multiple websites?",
      answer:
        "This depends on your plan. Our Starter plan supports 1 website, Professional supports up to 5 websites, and Business plan supports unlimited websites.",
    },
    {
      question: "Do you offer backups?",
      answer:
        "Professional and Business plans include daily automated backups. Starter plan customers can purchase backup services separately. All backups are stored securely and can be restored with one click.",
    },
  ];

  return (
    <section className="py-24 bg-muted/30" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            className="flex justify-center mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="p-3 bg-blue-100 rounded-full">
              <HelpCircle className="w-8 h-8 text-blue-600" />
            </div>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Find answers to common questions about our hosting services.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-background rounded-lg border px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <p className="text-muted-foreground mb-4">
            Still have questions? We&apos;re here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Support
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-muted/50 transition-colors"
            >
              Live Chat
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

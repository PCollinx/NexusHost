"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Shield,
  Zap,
  Globe,
  Globe2,
  ArrowRightLeft,
  Search,
  Lock,
  ShieldCheck,
  Database,
  Server,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";

export function NavigationBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "Hosting",
      href: "/hosting",
      dropdown: [
        { name: "Shared Hosting", href: "/hosting/shared", icon: Globe },
        { name: "VPS Hosting", href: "/hosting/vps", icon: Zap },
        { name: "Dedicated Servers", href: "/hosting/dedicated", icon: Shield },
      ],
    },
    {
      name: "Domain",
      href: "/domain",
      dropdown: [
        { name: "Domain Registration", href: "/domain/register", icon: Globe2 },
        {
          name: "Transfer Your Domain To Us",
          href: "/domain/transfer",
          icon: ArrowRightLeft,
        },
        {
          name: "Find a Domain Owner (WHOIS)",
          href: "/domain/whois",
          icon: Search,
        },
      ],
    },
    {
      name: "Web Security",
      href: "/security",
      dropdown: [
        { name: "NordVPN", href: "/security/nordvpn", icon: Server },
        {
          name: "SSL Certificates",
          href: "/security/ssl-certificates",
          icon: Lock,
        },
        {
          name: "Website Security",
          href: "/security/website-security",
          icon: ShieldCheck,
        },
        {
          name: "Website Backup",
          href: "/security/website-backup",
          icon: Database,
        },
      ],
    },
    {
      name: "Need Help?",
      href: "/help",
      dropdown: [
        { name: "Blog", href: "/blog", icon: Globe },
        { name: "About", href: "/about", icon: Shield },
        { name: "Contact", href: "/contact", icon: Zap },
      ],
    },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm"
            : "bg-background/80 backdrop-blur-sm"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Shield className="w-3 h-3 sm:w-5 sm:h-5 text-white" />
              </div>
              <span className="text-base sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                NexusHost
              </span>
            </motion.div>

            {/* Desktop Navigation - Show on md screens and above (768px+) */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
              {navItems.map((item, index) => (
                <div key={item.name} className="relative group">
                  <motion.a
                    href={item.href}
                    className="text-foreground/80 hover:text-foreground transition-colors duration-200 flex items-center space-x-1 text-sm lg:text-base"
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span>{item.name}</span>
                    {item.dropdown && (
                      <ChevronDown
                        className={`w-3 h-3 lg:w-4 lg:h-4 transition-transform duration-200 transform -rotate-180 group-hover:rotate-0`}
                      />
                    )}
                  </motion.a>

                  {/* Dropdown Menu */}
                  {item.dropdown && (
                    <div className="absolute top-full left-0 mt-2 w-52 lg:w-56 xl:w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-background/95 backdrop-blur-md border border-border/50 rounded-lg shadow-lg p-2">
                        {item.dropdown.map((dropdownItem) => (
                          <motion.a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="flex items-center space-x-2 lg:space-x-3 p-2 lg:p-3 rounded-md hover:bg-muted/50 transition-colors"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <dropdownItem.icon className="w-4 h-4 lg:w-5 lg:h-5 text-muted-foreground" />
                            <div>
                              <div className="font-medium text-sm lg:text-base">
                                {dropdownItem.name}
                              </div>
                            </div>
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Action Buttons - Show on md screens and above (768px+) */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2 xl:space-x-3">
              <div className="hidden lg:block">
                <ThemeToggle />
              </div>
              <div className="hidden xl:block">
                <LanguageToggle />
              </div>
              <div className="w-px h-4 sm:h-6 bg-border hidden lg:block" />
              <Link href="/dashboard">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs lg:text-sm px-2 lg:px-3 border-purple-500 text-purple-600 hover:bg-purple-50"
                >
                  Dashboard Demo
                </Button>
              </Link>
              <Link href="/login">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs lg:text-sm px-2 lg:px-3"
                >
                  Login
                </Button>
              </Link>
              <Link href="/signup">
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-xs lg:text-sm px-2 lg:px-3"
                >
                  <span className="hidden md:inline">Get Started</span>
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button - Show only below md (768px) */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden p-1 sm:p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              ) : (
                <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu - Show only below md (768px) */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden bg-background/95 backdrop-blur-md border-b border-border/50"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-3 sm:px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <a
                      href={item.href}
                      className="block text-foreground/80 hover:text-foreground transition-colors py-2 text-sm sm:text-base font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                    {item.dropdown && (
                      <div className="ml-3 sm:ml-4 mt-2 space-y-1 sm:space-y-2">
                        {item.dropdown.map((dropdownItem) => (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors py-1 text-sm"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <dropdownItem.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>{dropdownItem.name}</span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* Mobile Theme/Language Toggles */}
                <div className="flex items-center space-x-3 pt-2 border-t border-border/50">
                  <ThemeToggle />
                  <LanguageToggle />
                </div>

                {/* Mobile Action Buttons */}
                <div className="flex flex-col space-y-2 pt-2 border-t border-border/50">
                  <Link
                    href="/dashboard"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full text-sm border-purple-500 text-purple-600"
                    >
                      Dashboard Demo
                    </Button>
                  </Link>
                  <Link
                    href="/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full text-sm"
                    >
                      Login
                    </Button>
                  </Link>
                  <Link
                    href="/signup"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button
                      size="sm"
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm"
                    >
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}

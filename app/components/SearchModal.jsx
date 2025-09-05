"use client";

import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import { Button } from "../../components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const searchData = [
  {
    title: "Shared Hosting",
    description: "Affordable hosting for small websites and blogs",
    url: "/hosting",
    category: "Hosting",
  },
  {
    title: "VPS Hosting",
    description: "Virtual private servers with dedicated resources",
    url: "/hosting",
    category: "Hosting",
  },
  {
    title: "Dedicated Servers",
    description: "High-performance dedicated server solutions",
    url: "/hosting",
    category: "Hosting",
  },
  {
    title: "About Us",
    description: "Learn more about NexusHost and our mission",
    url: "/about",
    category: "Company",
  },
  {
    title: "Contact",
    description: "Get in touch with our support team",
    url: "/contact",
    category: "Support",
  },
  {
    title: "Blog",
    description: "Latest news and tutorials about web hosting",
    url: "/blog",
    category: "Resources",
  },
  {
    title: "SSL Certificates",
    description: "Free SSL certificates with all hosting plans",
    url: "/hosting",
    category: "Features",
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock technical support",
    url: "/contact",
    category: "Support",
  },
];

export function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      return;
    }

    const filteredResults = searchData.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filteredResults);
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (results[selectedIndex]) {
        window.location.href = results[selectedIndex].url;
        onClose();
      }
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  const handleResultClick = (url) => {
    window.location.href = url;
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg"
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-background border border-border rounded-lg shadow-lg overflow-hidden">
            {/* Search Input */}
            <div className="flex items-center p-4 border-b border-border">
              <Search className="w-5 h-5 text-muted-foreground mr-3" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search for hosting plans, features, support..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent outline-none text-foreground placeholder-muted-foreground"
              />
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="ml-2"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Search Results */}
            <div className="max-h-96 overflow-y-auto">
              {results.length > 0 ? (
                <div className="p-2">
                  {results.map((result, index) => (
                    <motion.div
                      key={`${result.title}-${index}`}
                      className={`p-3 rounded-md cursor-pointer transition-colors ${
                        index === selectedIndex
                          ? "bg-accent text-accent-foreground"
                          : "hover:bg-muted"
                      }`}
                      onClick={() => handleResultClick(result.url)}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-medium text-sm">
                            {result.title}
                          </h3>
                          <p className="text-xs text-muted-foreground mt-1">
                            {result.description}
                          </p>
                        </div>
                        <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded ml-2">
                          {result.category}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : query.trim() !== "" ? (
                <div className="p-8 text-center text-muted-foreground">
                  <Search className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">No results found for "{query}"</p>
                  <p className="text-xs mt-1">
                    Try searching for hosting, support, or features
                  </p>
                </div>
              ) : (
                <div className="p-8 text-center text-muted-foreground">
                  <Search className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">Start typing to search...</p>
                  <p className="text-xs mt-1">
                    Search for hosting plans, features, and more
                  </p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="border-t border-border p-3 bg-muted/50">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center space-x-4">
                  <span>↑↓ Navigate</span>
                  <span>↵ Select</span>
                  <span>Esc Close</span>
                </div>
                <span>{results.length} results</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export function SearchTrigger({ onOpen }) {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={onOpen}
      className="w-64 justify-start text-muted-foreground"
    >
      <Search className="w-4 h-4 mr-2" />
      <span>Search...</span>
      <div className="ml-auto flex items-center space-x-1">
        <kbd className="hidden sm:inline-block pointer-events-none h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
          ⌘K
        </kbd>
      </div>
    </Button>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Plus,
  Upload,
  Download,
  RefreshCw,
  Shield,
  Database,
  Globe,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const quickActions = [
  {
    name: "Add New Service",
    description: "Deploy a new hosting service",
    icon: Plus,
    color: "blue",
    action: () => console.log("Add service"),
  },
  {
    name: "Upload Files",
    description: "Upload files to your server",
    icon: Upload,
    color: "green",
    action: () => console.log("Upload files"),
  },
  {
    name: "Backup Data",
    description: "Create a backup of your data",
    icon: Download,
    color: "purple",
    action: () => console.log("Backup data"),
  },
  {
    name: "Restart Services",
    description: "Restart all running services",
    icon: RefreshCw,
    color: "orange",
    action: () => console.log("Restart services"),
  },
  {
    name: "SSL Certificate",
    description: "Manage SSL certificates",
    icon: Shield,
    color: "emerald",
    action: () => console.log("SSL management"),
  },
  {
    name: "Database Access",
    description: "Access your databases",
    icon: Database,
    color: "indigo",
    action: () => console.log("Database access"),
  },
  {
    name: "Add Domain",
    description: "Register a new domain",
    icon: Globe,
    color: "pink",
    action: () => console.log("Add domain"),
  },
  {
    name: "Email Setup",
    description: "Configure email accounts",
    icon: Mail,
    color: "red",
    action: () => console.log("Email setup"),
  },
];

const colorClasses = {
  blue: "bg-blue-500 hover:bg-blue-600",
  green: "bg-green-500 hover:bg-green-600",
  purple: "bg-purple-500 hover:bg-purple-600",
  orange: "bg-orange-500 hover:bg-orange-600",
  emerald: "bg-emerald-500 hover:bg-emerald-600",
  indigo: "bg-indigo-500 hover:bg-indigo-600",
  pink: "bg-pink-500 hover:bg-pink-600",
  red: "bg-red-500 hover:bg-red-600",
};

export function QuickActions() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700">
      <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 sm:gap-4">
        {quickActions.map((action, index) => (
          <motion.div
            key={action.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="ghost"
              className="w-full h-auto p-2 sm:p-4 flex flex-col items-center space-y-1 sm:space-y-2 hover:bg-gray-50 dark:hover:bg-gray-700 group"
              onClick={action.action}
            >
              <div
                className={`w-8 h-8 sm:w-12 sm:h-12 ${
                  colorClasses[action.color]
                } rounded-lg flex items-center justify-center transition-colors group-hover:scale-110`}
              >
                <action.icon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="text-center">
                <p className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white leading-tight">
                  {action.name}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 hidden sm:block">
                  {action.description}
                </p>
              </div>
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

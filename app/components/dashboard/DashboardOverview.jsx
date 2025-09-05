"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Server,
  Globe,
  Database,
  Users,
  TrendingUp,
  TrendingDown,
  Activity,
  DollarSign,
} from "lucide-react";

const metrics = [
  {
    name: "Active Services",
    value: "12",
    change: "+2",
    changeType: "increase",
    icon: Server,
    color: "blue",
  },
  {
    name: "Domains",
    value: "8",
    change: "+1",
    changeType: "increase",
    icon: Globe,
    color: "green",
  },
  {
    name: "Storage Used",
    value: "245 GB",
    change: "+12 GB",
    changeType: "increase",
    icon: Database,
    color: "purple",
  },
  {
    name: "Monthly Traffic",
    value: "1.2M",
    change: "+15%",
    changeType: "increase",
    icon: Activity,
    color: "orange",
  },
  {
    name: "This Month's Bill",
    value: "$89.50",
    change: "-$5.00",
    changeType: "decrease",
    icon: DollarSign,
    color: "red",
  },
  {
    name: "Uptime",
    value: "99.98%",
    change: "+0.01%",
    changeType: "increase",
    icon: TrendingUp,
    color: "emerald",
  },
];

const colorClasses = {
  blue: "bg-blue-500",
  green: "bg-green-500",
  purple: "bg-purple-500",
  orange: "bg-orange-500",
  red: "bg-red-500",
  emerald: "bg-emerald-500",
};

export function DashboardOverview() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
              <div
                className={`w-8 h-8 sm:w-10 sm:h-10 ${
                  colorClasses[metric.color]
                } rounded-lg flex items-center justify-center flex-shrink-0`}
              >
                <metric.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium truncate">
                  {metric.name}
                </p>
                <p className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white">
                  {metric.value}
                </p>
              </div>
            </div>

            <div className="text-right flex-shrink-0">
              <div
                className={`flex items-center space-x-1 ${
                  metric.changeType === "increase"
                    ? "text-green-600 dark:text-green-400"
                    : "text-red-600 dark:text-red-400"
                }`}
              >
                {metric.changeType === "increase" ? (
                  <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                ) : (
                  <TrendingDown className="w-3 h-3 sm:w-4 sm:h-4" />
                )}
                <span className="text-xs sm:text-sm font-medium">
                  {metric.change}
                </span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 hidden sm:block">
                vs last month
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

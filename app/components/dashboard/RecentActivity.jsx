"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Activity,
  Server,
  Database,
  Globe,
  Shield,
  User,
  CheckCircle,
  AlertTriangle,
  Info,
  Clock,
} from "lucide-react";

const activities = [
  {
    id: 1,
    type: "success",
    icon: CheckCircle,
    title: "SSL Certificate Renewed",
    description: "SSL certificate for example.com renewed successfully",
    time: "2 minutes ago",
    details: "Valid until March 2026",
  },
  {
    id: 2,
    type: "info",
    icon: Server,
    title: "Server Backup Completed",
    description: "Automated backup of Web Server #1 completed",
    time: "1 hour ago",
    details: "Size: 2.4 GB",
  },
  {
    id: 3,
    type: "warning",
    icon: AlertTriangle,
    title: "High CPU Usage Detected",
    description: "CPU usage exceeded 80% on MySQL Database",
    time: "3 hours ago",
    details: "Peak: 87% at 2:15 PM",
  },
  {
    id: 4,
    type: "info",
    icon: Database,
    title: "Database Optimization",
    description: "MySQL database optimization completed",
    time: "6 hours ago",
    details: "Performance improved by 15%",
  },
  {
    id: 5,
    type: "success",
    icon: Globe,
    title: "Domain DNS Updated",
    description: "DNS records updated for newdomain.com",
    time: "1 day ago",
    details: "Propagation complete",
  },
  {
    id: 6,
    type: "info",
    icon: User,
    title: "User Login",
    description: "Successful login from new device",
    time: "2 days ago",
    details: "Location: New York, USA",
  },
];

const typeConfig = {
  success: {
    bgColor: "bg-green-100 dark:bg-green-900/20",
    iconColor: "text-green-600 dark:text-green-400",
    borderColor: "border-green-200 dark:border-green-800",
  },
  warning: {
    bgColor: "bg-orange-100 dark:bg-orange-900/20",
    iconColor: "text-orange-600 dark:text-orange-400",
    borderColor: "border-orange-200 dark:border-orange-800",
  },
  info: {
    bgColor: "bg-blue-100 dark:bg-blue-900/20",
    iconColor: "text-blue-600 dark:text-blue-400",
    borderColor: "border-blue-200 dark:border-blue-800",
  },
  error: {
    bgColor: "bg-red-100 dark:bg-red-900/20",
    iconColor: "text-red-600 dark:text-red-400",
    borderColor: "border-red-200 dark:border-red-800",
  },
};

export function RecentActivity() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h3 className="text-lg sm:text-lg font-semibold text-gray-900 dark:text-white flex items-center">
          <Activity className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
          Recent Activity
        </h3>
        <button className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
          View All
        </button>
      </div>

      <div className="space-y-3 sm:space-y-4 max-h-80 sm:max-h-96 overflow-y-auto">
        {activities.map((activity, index) => {
          const config = typeConfig[activity.type];
          const ActivityIcon = activity.icon;

          return (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`p-3 sm:p-4 rounded-lg border ${config.borderColor} ${config.bgColor} hover:shadow-sm transition-shadow`}
            >
              <div className="flex items-start space-x-2 sm:space-x-3">
                <div
                  className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center flex-shrink-0 ${config.iconColor}`}
                >
                  <ActivityIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white truncate">
                      {activity.title}
                    </h4>
                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 ml-2 flex-shrink-0">
                      <Clock className="w-3 h-3 mr-1" />
                      <span className="hidden xs:inline">{activity.time}</span>
                      <span className="xs:hidden">
                        {activity.time.split(" ")[0]}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1">
                    {activity.description}
                  </p>

                  {activity.details && (
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 font-medium">
                      {activity.details}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Activity Summary */}
      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-lg font-bold text-green-600 dark:text-green-400">
              24
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Success
            </div>
          </div>
          <div>
            <div className="text-lg font-bold text-orange-600 dark:text-orange-400">
              3
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Warnings
            </div>
          </div>
          <div>
            <div className="text-lg font-bold text-red-600 dark:text-red-400">
              0
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Errors
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

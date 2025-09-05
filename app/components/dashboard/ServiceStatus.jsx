"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Server,
  Database,
  Globe,
  Mail,
  Shield,
  Activity,
  AlertCircle,
  CheckCircle,
  Clock,
  MoreHorizontal,
} from "lucide-react";

const services = [
  {
    id: 1,
    name: "Web Server",
    fullName: "Web Server (Apache)",
    type: "Web Hosting",
    status: "online",
    uptime: "99.98%",
    lastRestart: "2 days ago",
    cpu: 23,
    memory: 67,
    icon: Server,
  },
  {
    id: 2,
    name: "MySQL DB",
    fullName: "MySQL Database",
    type: "Database",
    status: "online",
    uptime: "99.95%",
    lastRestart: "5 days ago",
    cpu: 15,
    memory: 45,
    icon: Database,
  },
  {
    id: 3,
    name: "Email",
    fullName: "Email Server",
    type: "Email",
    status: "maintenance",
    uptime: "99.92%",
    lastRestart: "1 hour ago",
    cpu: 8,
    memory: 32,
    icon: Mail,
  },
  {
    id: 4,
    name: "SSL Cert",
    fullName: "SSL Certificate",
    type: "Security",
    status: "online",
    uptime: "100%",
    lastRestart: "Never",
    cpu: 0,
    memory: 5,
    icon: Shield,
  },
  {
    id: 5,
    name: "CDN",
    fullName: "CDN Service",
    type: "Content Delivery",
    status: "online",
    uptime: "99.99%",
    lastRestart: "1 week ago",
    cpu: 5,
    memory: 15,
    icon: Globe,
  },
];

const getStatusConfig = (status) => {
  const configs = {
    online: {
      label: "Online",
      shortLabel: "On",
      icon: CheckCircle,
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-100 dark:bg-green-900/20",
      variant: "secondary",
    },
    offline: {
      label: "Offline",
      shortLabel: "Off",
      icon: AlertCircle,
      color: "text-red-600 dark:text-red-400",
      bgColor: "bg-red-100 dark:bg-red-900/20",
      variant: "destructive",
    },
    maintenance: {
      label: "Maintenance",
      shortLabel: "Maint",
      icon: Clock,
      color: "text-orange-600 dark:text-orange-400",
      bgColor: "bg-orange-100 dark:bg-orange-900/20",
      variant: "secondary",
    },
  };
  return configs[status] || configs.offline;
};

const getCpuColor = (cpu) => {
  if (cpu < 30) return "bg-green-500 dark:bg-green-400";
  if (cpu < 70) return "bg-yellow-500 dark:bg-yellow-400";
  return "bg-red-500 dark:bg-red-400";
};

const getMemoryColor = (memory) => {
  if (memory < 50) return "bg-blue-500 dark:bg-blue-400";
  if (memory < 80) return "bg-yellow-500 dark:bg-yellow-400";
  return "bg-red-500 dark:bg-red-400";
};

export function ServiceStatus() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white flex items-center">
          <Activity className="w-4 h-4 mr-2" />
          Service Status
        </h2>
        <button className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
          View All
        </button>
      </div>

      <div className="space-y-3 sm:space-y-4">
        {services.map((service, index) => {
          const statusConfig = getStatusConfig(service.status);
          const StatusIcon = statusConfig.icon;

          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-3 sm:p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow"
            >
              {/* Mobile Layout: Stack vertically */}
              <div className="block xs:hidden">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2 min-w-0 flex-1">
                    <service.icon className="w-4 h-4 text-gray-600 dark:text-gray-400 flex-shrink-0" />
                    <span className="font-semibold text-gray-900 dark:text-white text-sm truncate">
                      {service.name}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div
                      className={`flex items-center px-2 py-1 rounded-full ${statusConfig.bgColor}`}
                    >
                      <StatusIcon className="w-3 h-3 mr-1" />
                      <span
                        className={`text-xs font-medium ${statusConfig.color}`}
                      >
                        {statusConfig.shortLabel}
                      </span>
                    </div>
                    <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                      <MoreHorizontal className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>

                {/* Resource bars for mobile */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      CPU
                    </span>
                    <span className="text-xs font-medium">{service.cpu}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                    <motion.div
                      className={`h-1.5 rounded-full ${getCpuColor(
                        service.cpu
                      )}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${service.cpu}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      RAM
                    </span>
                    <span className="text-xs font-medium">
                      {service.memory}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                    <motion.div
                      className={`h-1.5 rounded-full ${getMemoryColor(
                        service.memory
                      )}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${service.memory}%` }}
                      transition={{ duration: 1, delay: index * 0.2 + 0.1 }}
                    />
                  </div>
                </div>
              </div>

              {/* Desktop Layout: Side by side */}
              <div className="hidden xs:block">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3 min-w-0 flex-1">
                    <div className="flex-shrink-0">
                      <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-400" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base truncate">
                          <span className="hidden sm:inline">
                            {service.fullName}
                          </span>
                          <span className="sm:hidden">{service.name}</span>
                        </h3>
                        <div
                          className={`flex items-center px-2 py-1 rounded-full ${statusConfig.bgColor}`}
                        >
                          <StatusIcon className="w-3 h-3 mr-1" />
                          <span
                            className={`text-xs font-medium ${statusConfig.color}`}
                          >
                            <span className="hidden sm:inline">
                              {statusConfig.label}
                            </span>
                            <span className="sm:hidden">
                              {statusConfig.shortLabel}
                            </span>
                          </span>
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-2 sm:mb-3">
                        {service.type} • Uptime: {service.uptime}
                      </p>

                      {/* Resource Usage Bars */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-600 dark:text-gray-400">
                            CPU
                          </span>
                          <span className="font-medium">{service.cpu}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 sm:h-2">
                          <motion.div
                            className={`h-1.5 sm:h-2 rounded-full ${getCpuColor(
                              service.cpu
                            )}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${service.cpu}%` }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                          />
                        </div>

                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-600 dark:text-gray-400">
                            Memory
                          </span>
                          <span className="font-medium">{service.memory}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 sm:h-2">
                          <motion.div
                            className={`h-1.5 sm:h-2 rounded-full ${getMemoryColor(
                              service.memory
                            )}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${service.memory}%` }}
                            transition={{
                              duration: 1,
                              delay: index * 0.2 + 0.1,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex-shrink-0 ml-2">
                    <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                      <MoreHorizontal className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>

                {/* Additional Info - Hide on very small screens */}
                <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700 hidden sm:block">
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span>Last restart: {service.lastRestart}</span>
                    <span className="text-right">Response: &lt; 100ms</span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

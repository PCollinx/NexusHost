"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  TrendingUp,
  Download,
  Upload,
  HardDrive,
  Activity,
} from "lucide-react";

// Mock data for the charts (in a real app, this would come from your API)
const bandwidthData = [
  { name: "Mon", upload: 120, download: 340 },
  { name: "Tue", upload: 98, download: 280 },
  { name: "Wed", upload: 156, download: 420 },
  { name: "Thu", upload: 145, download: 380 },
  { name: "Fri", upload: 189, download: 460 },
  { name: "Sat", upload: 203, download: 520 },
  { name: "Sun", upload: 178, download: 450 },
];

const storageData = [
  { name: "Images", value: 45, color: "bg-blue-500" },
  { name: "Documents", value: 25, color: "bg-green-500" },
  { name: "Videos", value: 20, color: "bg-purple-500" },
  { name: "Other", value: 10, color: "bg-gray-500" },
];

export function UsageStats() {
  const maxBandwidth = Math.max(
    ...bandwidthData.map((d) => Math.max(d.upload, d.download))
  );

  return (
    <div className="space-y-6">
      {/* Bandwidth Usage */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Bandwidth Usage (Last 7 Days)
          </h3>
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-gray-600 dark:text-gray-400">Upload</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-600 dark:text-gray-400">Download</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {bandwidthData.map((day, index) => (
            <motion.div
              key={day.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex items-center space-x-4"
            >
              <div className="w-12 text-sm font-medium text-gray-600 dark:text-gray-400">
                {day.name}
              </div>

              <div className="flex-1 space-y-2">
                {/* Upload Bar */}
                <div className="flex items-center space-x-2">
                  <Upload className="w-4 h-4 text-blue-500" />
                  <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="h-2 bg-blue-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{
                        width: `${(day.upload / maxBandwidth) * 100}%`,
                      }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                    />
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400 w-12">
                    {day.upload} GB
                  </span>
                </div>

                {/* Download Bar */}
                <div className="flex items-center space-x-2">
                  <Download className="w-4 h-4 text-green-500" />
                  <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="h-2 bg-green-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{
                        width: `${(day.download / maxBandwidth) * 100}%`,
                      }}
                      transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
                    />
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400 w-12">
                    {day.download} GB
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Storage & Performance Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Storage Breakdown */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
            <HardDrive className="w-5 h-5 mr-2" />
            Storage Breakdown
          </h3>

          <div className="space-y-4">
            {storageData.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center justify-between"
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full ${item.color}`}></div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {item.name}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      className={`h-2 rounded-full ${item.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${item.value}%` }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400 w-8">
                    {item.value}%
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Total Used
              </span>
              <span className="font-semibold text-gray-900 dark:text-white">
                245 GB / 500 GB
              </span>
            </div>
            <div className="mt-2 w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
              <motion.div
                className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "49%" }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
            <Activity className="w-5 h-5 mr-2" />
            Performance Metrics
          </h3>

          <div className="space-y-6">
            {/* Average Response Time */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Avg Response Time
                </span>
                <span className="font-semibold text-green-600 dark:text-green-400">
                  245ms
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <motion.div
                  className="h-2 bg-green-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "75%" }}
                  transition={{ duration: 0.8 }}
                />
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Excellent performance
              </p>
            </div>

            {/* Page Load Speed */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Page Load Speed
                </span>
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  1.2s
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <motion.div
                  className="h-2 bg-blue-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "80%" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Good performance
              </p>
            </div>

            {/* Error Rate */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Error Rate
                </span>
                <span className="font-semibold text-red-600 dark:text-red-400">
                  0.02%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <motion.div
                  className="h-2 bg-red-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "2%" }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Very low error rate
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

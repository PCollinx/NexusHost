"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  HelpCircle,
  MessageSquare,
  Clock,
  AlertCircle,
  CheckCircle,
  Plus,
  Calendar,
  User,
  Tag,
} from "lucide-react";

const tickets = [
  {
    id: "#TK-001",
    title: "SSL Certificate Installation Issue",
    description: "Need help installing SSL certificate for my domain",
    status: "open",
    priority: "high",
    category: "Technical",
    customer: "John Doe",
    created: "2 hours ago",
    lastUpdate: "1 hour ago",
    messages: 3,
  },
  {
    id: "#TK-002",
    title: "Email Setup Configuration",
    description: "Unable to configure email settings for new domain",
    status: "in-progress",
    priority: "medium",
    category: "Email",
    customer: "Sarah Wilson",
    created: "1 day ago",
    lastUpdate: "6 hours ago",
    messages: 7,
  },
  {
    id: "#TK-003",
    title: "Website Performance Optimization",
    description: "Site loading slowly, need performance analysis",
    status: "waiting",
    priority: "low",
    category: "Performance",
    customer: "Mike Johnson",
    created: "3 days ago",
    lastUpdate: "2 days ago",
    messages: 2,
  },
  {
    id: "#TK-004",
    title: "Backup Restoration Request",
    description: "Need to restore website from last week's backup",
    status: "resolved",
    priority: "high",
    category: "Backup",
    customer: "Lisa Chen",
    created: "1 week ago",
    lastUpdate: "5 days ago",
    messages: 12,
  },
];

const statusConfig = {
  open: {
    label: "Open",
    bgColor: "bg-red-100 dark:bg-red-900/20",
    textColor: "text-red-800 dark:text-red-300",
    icon: AlertCircle,
  },
  "in-progress": {
    label: "In Progress",
    bgColor: "bg-blue-100 dark:bg-blue-900/20",
    textColor: "text-blue-800 dark:text-blue-300",
    icon: Clock,
  },
  waiting: {
    label: "Waiting",
    bgColor: "bg-orange-100 dark:bg-orange-900/20",
    textColor: "text-orange-800 dark:text-orange-300",
    icon: Clock,
  },
  resolved: {
    label: "Resolved",
    bgColor: "bg-green-100 dark:bg-green-900/20",
    textColor: "text-green-800 dark:text-green-300",
    icon: CheckCircle,
  },
};

const priorityConfig = {
  high: {
    label: "High",
    color: "text-red-600 dark:text-red-400",
    bgColor: "bg-red-50 dark:bg-red-900/10",
  },
  medium: {
    label: "Medium",
    color: "text-orange-600 dark:text-orange-400",
    bgColor: "bg-orange-50 dark:bg-orange-900/10",
  },
  low: {
    label: "Low",
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-50 dark:bg-green-900/10",
  },
};

export function SupportTickets() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h3 className="text-lg sm:text-lg font-semibold text-gray-900 dark:text-white flex items-center">
          <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
          Support Tickets
        </h3>
        <button className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-xs sm:text-sm font-medium">
          <Plus className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
          <span className="hidden xs:inline">New Ticket</span>
          <span className="xs:hidden">New</span>
        </button>
      </div>

      {/* Ticket Summary */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-4 sm:mb-6">
        {Object.entries(statusConfig).map(([status, config]) => {
          const count = tickets.filter(
            (ticket) => ticket.status === status
          ).length;
          const StatusIcon = config.icon;

          return (
            <div
              key={status}
              className={`p-3 rounded-lg ${config.bgColor} text-center`}
            >
              <div
                className={`flex items-center justify-center mb-2 ${config.textColor}`}
              >
                <StatusIcon className="w-4 h-4 mr-1" />
                <span className="text-lg font-bold">{count}</span>
              </div>
              <div className={`text-xs font-medium ${config.textColor}`}>
                {config.label}
              </div>
            </div>
          );
        })}
      </div>

      {/* Tickets List */}
      <div className="space-y-3 sm:space-y-4 max-h-80 sm:max-h-96 overflow-y-auto">
        {tickets.map((ticket, index) => {
          const statusConf = statusConfig[ticket.status];
          const priorityConf = priorityConfig[ticket.priority];
          const StatusIcon = statusConf.icon;

          return (
            <motion.div
              key={ticket.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-sm transition-shadow cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-mono text-gray-500 dark:text-gray-400">
                    {ticket.id}
                  </span>
                  <span
                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${statusConf.bgColor} ${statusConf.textColor}`}
                  >
                    <StatusIcon className="w-3 h-3 mr-1" />
                    {statusConf.label}
                  </span>
                  <span
                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${priorityConf.bgColor} ${priorityConf.color}`}
                  >
                    {priorityConf.label}
                  </span>
                </div>
                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                  <MessageSquare className="w-3 h-3 mr-1" />
                  {ticket.messages}
                </div>
              </div>

              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                {ticket.title}
              </h4>

              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
                {ticket.description}
              </p>

              <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <User className="w-3 h-3 mr-1" />
                    {ticket.customer}
                  </div>
                  <div className="flex items-center">
                    <Tag className="w-3 h-3 mr-1" />
                    {ticket.category}
                  </div>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-3 h-3 mr-1" />
                  Updated {ticket.lastUpdate}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium">4 total tickets</span> •
            <span className="ml-1">Average response: 2 hours</span>
          </div>
          <button className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
            View All Tickets
          </button>
        </div>
      </div>
    </div>
  );
}

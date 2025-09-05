import { DashboardLayout } from "../components/dashboard/DashboardLayout";
import { DashboardOverview } from "../components/dashboard/DashboardOverview";
import { QuickActions } from "../components/dashboard/QuickActions";
import { RecentActivity } from "../components/dashboard/RecentActivity";
import { ServiceStatus } from "../components/dashboard/ServiceStatus";
import { UsageStats } from "../components/dashboard/UsageStats";
import { SupportTickets } from "../components/dashboard/SupportTickets";

export const metadata = {
  title: "Dashboard - NexusHost",
  description: "Manage your hosting services, domains, and account settings.",
};

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-4 sm:space-y-6">
        {/* Demo Banner */}
        <div className="bg-amber-500 border border-amber-600 rounded-xl p-3 text-amber-950 flex items-center justify-between">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
            <span className="font-medium">You are viewing a demo version of the NexusHost dashboard.</span>
          </div>
          <div className="text-xs text-amber-800">All data is simulated</div>
        </div>
        
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-4 sm:p-6 text-white">
          <h1 className="text-xl sm:text-2xl font-bold mb-2">
            Welcome back, John!
          </h1>
          <p className="text-blue-100 text-sm sm:text-base">
            Here&apos;s what&apos;s happening with your hosting services today.
          </p>
        </div>

        {/* Dashboard Overview Cards */}
        <DashboardOverview />

        {/* Quick Actions */}
        <QuickActions />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
          {/* Left Column - 2/3 width on large screens, full width on small */}
          <div className="xl:col-span-2 space-y-4 sm:space-y-6">
            <ServiceStatus />
            <UsageStats />
          </div>

          {/* Right Column - 1/3 width on large screens, full width on small */}
          <div className="space-y-4 sm:space-y-6">
            <RecentActivity />
            <SupportTickets />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

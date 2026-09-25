"use client";

import { useUser } from "@/hooks/useUser";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
<<<<<<< HEAD
<<<<<<< HEAD
import { Loader2, Sparkles, Mail, MessageSquare, Calendar, Bell, TrendingUp, Clock, Users, Zap } from "lucide-react";
import Link from "next/link";
import ConnectGmail from "@/components/ConnectGmail";
import ConnectWhatsApp from "@/components/ConnectWhatsApp";
import { AuthDebug } from "@/components/AuthDebug";
=======
import { Loader2 } from "lucide-react";
import ConnectGmail from "@/components/ConnectGmail";
import ConnectWhatsApp from "@/components/ConnectWhatsApp";
>>>>>>> feature/final-polish
=======
import { Loader2 } from "lucide-react";
import ConnectGmail from "@/components/ConnectGmail";
import ConnectWhatsApp from "@/components/ConnectWhatsApp";
>>>>>>> origin/feature/phase-2-database

export default function DashboardPage() {
  const { user, credits, isLoaded, isSignedIn } = useUser();
  const platforms = useQuery(api.platforms.getPlatforms);
  const alerts = useQuery(api.alerts.getAlerts, { unreadOnly: true });
  const todayBriefing = useQuery(api.briefings.getTodayBriefing);

<<<<<<< HEAD
<<<<<<< HEAD
=======
  // Show loading state while Clerk is initializing
>>>>>>> feature/final-polish
=======
  // Show loading state while Clerk is initializing
>>>>>>> origin/feature/phase-2-database
  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

<<<<<<< HEAD
<<<<<<< HEAD
=======
  // If not signed in, redirect to sign in
>>>>>>> feature/final-polish
=======
  // If not signed in, show a message
>>>>>>> origin/feature/phase-2-database
  if (!isSignedIn) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <p className="text-gray-600">Please sign in to view your dashboard.</p>
        </div>
      </div>
    );
  }

<<<<<<< HEAD
<<<<<<< HEAD
=======
  // Check if data is still loading
>>>>>>> feature/final-polish
  if (platforms === undefined || alerts === undefined || todayBriefing === undefined) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

=======
>>>>>>> origin/feature/phase-2-database
  const isGmailConnected = platforms?.some(p => p.platform === "gmail" && p.isConnected) || false;
  const isWhatsAppConnected = platforms?.some(p => p.platform === "whatsapp" && p.isConnected) || false;
  const connectedPlatforms = platforms?.filter(p => p.isConnected).length || 0;
  const unreadAlerts = alerts?.length || 0;

  return (
    <div>
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="mb-6">
        <AuthDebug />
      </div>

      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {user?.name || "User"}! 👋
          </h1>
          <p className="text-sm text-gray-500 mt-1">Here's your AI agent summary</p>
        </div>
        <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-lg">
          <Zap className="w-4 h-4 text-blue-600" />
=======
=======
>>>>>>> origin/feature/phase-2-database
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome back, {user?.name || "User"}! 👋
        </h1>
        <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-lg">
<<<<<<< HEAD
>>>>>>> feature/final-polish
=======
>>>>>>> origin/feature/phase-2-database
          <span className="text-sm text-blue-600">Credits:</span>
          <span className="font-bold text-blue-700">{credits}</span>
        </div>
      </div>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <QuickStat
          icon={<Sparkles className="w-5 h-5 text-blue-500" />}
          title="AI Briefing"
          value={todayBriefing ? "Ready" : "Pending"}
          subtitle={todayBriefing ? "Today's summary" : "Generate now"}
          link="/dashboard/ai/briefings"
        />
        <QuickStat
          icon={<Bell className="w-5 h-5 text-red-500" />}
          title="Unread Alerts"
          value={unreadAlerts}
          subtitle="Need attention"
          link="/dashboard/notifications"
        />
        <QuickStat
          icon={<Users className="w-5 h-5 text-green-500" />}
          title="Platforms"
          value={connectedPlatforms}
          subtitle="Connected"
          link="/dashboard/platforms"
        />
        <QuickStat
          icon={<Clock className="w-5 h-5 text-purple-500" />}
          title="Productivity"
          value="78%"
          subtitle="+12% this week"
          link="/dashboard/analytics"
        />
      </div>

      {/* Platform Connections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
=======
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
>>>>>>> feature/final-polish
=======
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
>>>>>>> origin/feature/phase-2-database
        <ConnectGmail isConnected={isGmailConnected} />
        <ConnectWhatsApp isConnected={isWhatsAppConnected} />
      </div>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* AI Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <FeatureCard
          icon={<Sparkles className="w-6 h-6 text-blue-600" />}
          title="AI Briefings"
          description="Daily summaries of your communications"
          link="/dashboard/ai/briefings"
          status={todayBriefing ? "Ready" : "Generate"}
        />
        <FeatureCard
          icon={<MessageSquare className="w-6 h-6 text-green-600" />}
          title="Email Drafts"
          description="AI-powered email responses"
          link="/dashboard/ai/email-drafts"
          status="New"
        />
        <FeatureCard
          icon={<Calendar className="w-6 h-6 text-purple-600" />}
          title="Smart Scheduling"
          description="Find optimal meeting times"
          link="/dashboard/calendar/schedule"
          status="Active"
        />
      </div>

      {/* Today's Briefing Preview */}
      {todayBriefing && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-600" />
              Today's Briefing
            </h2>
            <Link
              href="/dashboard/ai/briefings"
              className="text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              View Full →
            </Link>
          </div>
          <p className="text-gray-600">{todayBriefing.summary}</p>
          <div className="mt-3 flex items-center gap-4">
            <span className="text-xs text-gray-400">
              {new Date(todayBriefing.createdAt).toLocaleTimeString()}
            </span>
            {todayBriefing.items?.length > 0 && (
              <span className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">
                {todayBriefing.items.length} action items
              </span>
            )}
=======
=======
>>>>>>> origin/feature/phase-2-database
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Platforms Connected" 
          value={connectedPlatforms} 
          icon="🔗"
          subtitle="Active integrations"
        />
        <StatCard 
          title="Unread Alerts" 
          value={unreadAlerts} 
          icon="🔔"
          subtitle="Require attention"
        />
        <StatCard 
          title="Today's Briefing" 
          value={todayBriefing ? "Ready" : "Pending"} 
          icon="📋"
          subtitle={todayBriefing ? "Click to view" : "Generating..."}
        />
        <StatCard 
          title="AI Credits" 
          value={credits} 
          icon="⚡"
          subtitle="Available for use"
        />
      </div>

      {todayBriefing && (
        <div className="mt-8 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            📊 Today's Briefing
          </h2>
          <p className="text-gray-600">{todayBriefing.summary}</p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm text-gray-500">
              Generated: {new Date(todayBriefing.createdAt).toLocaleTimeString()}
            </span>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View Full Briefing →
            </button>
<<<<<<< HEAD
>>>>>>> feature/final-polish
=======
>>>>>>> origin/feature/phase-2-database
          </div>
        </div>
      )}
    </div>
  );
}

<<<<<<< HEAD
<<<<<<< HEAD
function QuickStat({ icon, title, value, subtitle, link }: any) {
=======
=======
>>>>>>> origin/feature/phase-2-database
function StatCard({ title, value, icon, subtitle }: { 
  title: string; 
  value: string | number; 
  icon: string;
  subtitle: string;
}) {
<<<<<<< HEAD
>>>>>>> feature/final-polish
=======
>>>>>>> origin/feature/phase-2-database
  return (
    <Link href={link} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-all">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
          <p className="text-xs text-gray-400 mt-1">{subtitle}</p>
<<<<<<< HEAD
<<<<<<< HEAD
        </div>
        <div className="p-2 bg-gray-50 rounded-lg">
          {icon}
=======
>>>>>>> feature/final-polish
=======
>>>>>>> origin/feature/phase-2-database
        </div>
      </div>
    </Link>
  );
}

function FeatureCard({ icon, title, description, link, status }: any) {
  return (
    <Link href={link} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-all group">
      <div className="flex items-start justify-between">
        <div>
          <div className="p-2 bg-gray-50 rounded-lg inline-block mb-2">
            {icon}
          </div>
          <h3 className="font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500 mt-1">{description}</p>
        </div>
        {status && (
          <span className={`text-xs px-2 py-1 rounded-full ${
            status === 'Ready' ? 'bg-green-100 text-green-700' :
            status === 'Active' ? 'bg-blue-100 text-blue-700' :
            status === 'New' ? 'bg-purple-100 text-purple-700' :
            'bg-gray-100 text-gray-700'
          }`}>
            {status}
          </span>
        )}
      </div>
    </Link>
  );
}
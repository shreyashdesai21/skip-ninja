
import React from 'react';
import { Timer, Zap, Shield, TrendingUp } from 'lucide-react';
import Header from '@/components/Header';
import StatsCard from '@/components/StatsCard';
import ControlPanel from '@/components/ControlPanel';
import ActivityFeed from '@/components/ActivityFeed';

const Index = () => {
  const stats = [
    {
      title: "Ads Skipped Today",
      value: "247",
      icon: Zap,
      subtitle: "Across 52 videos",
      trend: "+12% from yesterday"
    },
    {
      title: "Time Saved",
      value: "1h 23m",
      icon: Timer,
      subtitle: "This week",
      trend: "+8 minutes today"
    },
    {
      title: "Success Rate",
      value: "98.5%",
      icon: Shield,
      subtitle: "Skippable ads detected",
      trend: "Consistently high"
    },
    {
      title: "Weekly Streak",
      value: "127",
      icon: TrendingUp,
      subtitle: "Days active",
      trend: "Personal best!"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      <Header />
      
      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatsCard
              key={index}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              subtitle={stat.subtitle}
              trend={stat.trend}
            />
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Control Panel */}
          <div className="lg:col-span-1">
            <ControlPanel />
          </div>

          {/* Activity Feed */}
          <div className="lg:col-span-2">
            <ActivityFeed />
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center">
          <div className="bg-blue-600/10 border border-blue-600/20 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-2">How It Works</h3>
            <p className="text-gray-300 mb-4">
              Ad Skip Ninja monitors YouTube pages and automatically clicks the skip button when it becomes available, 
              saving you time and improving your viewing experience.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
              <span>✓ Respects non-skippable ads</span>
              <span>✓ Privacy focused</span>
              <span>✓ Lightweight & fast</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;


import React from 'react';
import { Clock, CheckCircle, AlertCircle } from 'lucide-react';

const ActivityFeed = () => {
  const activities = [
    {
      id: 1,
      type: 'skip',
      message: 'Skipped 30s ad on "React Tutorial"',
      time: '2 minutes ago',
      icon: CheckCircle,
      iconColor: 'text-green-400'
    },
    {
      id: 2,
      type: 'skip',
      message: 'Skipped 15s ad on "JavaScript Basics"',
      time: '5 minutes ago',
      icon: CheckCircle,
      iconColor: 'text-green-400'
    },
    {
      id: 3,
      type: 'warning',
      message: 'Non-skippable ad detected',
      time: '12 minutes ago',
      icon: AlertCircle,
      iconColor: 'text-yellow-400'
    },
    {
      id: 4,
      type: 'skip',
      message: 'Skipped 20s ad on "CSS Grid Guide"',
      time: '18 minutes ago',
      icon: CheckCircle,
      iconColor: 'text-green-400'
    }
  ];

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <Clock className="h-5 w-5 text-blue-400" />
        Recent Activity
      </h3>
      
      <div className="space-y-3">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
            <activity.icon className={`h-5 w-5 ${activity.iconColor} mt-0.5`} />
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-medium">{activity.message}</p>
              <p className="text-gray-400 text-xs mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;

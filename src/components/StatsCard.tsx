
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  subtitle: string;
  trend?: string;
}

const StatsCard = ({ title, value, icon: Icon, subtitle, trend }: StatsCardProps) => {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-gray-400 text-sm font-medium">{title}</p>
          <p className="text-2xl font-bold text-white mt-1">{value}</p>
          <p className="text-gray-500 text-sm mt-1">{subtitle}</p>
          {trend && (
            <p className="text-green-400 text-sm mt-2 font-medium">{trend}</p>
          )}
        </div>
        <div className="bg-blue-600/20 p-3 rounded-lg">
          <Icon className="h-6 w-6 text-blue-400" />
        </div>
      </div>
    </div>
  );
};

export default StatsCard;

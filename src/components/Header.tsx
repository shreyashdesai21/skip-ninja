
import React from 'react';
import { Shield, Zap } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gray-900 border-b border-gray-800 px-6 py-4">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Shield className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">Ad Skip Ninja</h1>
            <p className="text-gray-400 text-sm">Silent. Fast. Effective.</p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-green-900/20 px-3 py-1 rounded-full">
          <Zap className="h-4 w-4 text-green-400" />
          <span className="text-green-400 text-sm font-medium">Active</span>
        </div>
      </div>
    </header>
  );
};

export default Header;

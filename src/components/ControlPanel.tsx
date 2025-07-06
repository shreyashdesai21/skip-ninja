
import React, { useState } from 'react';
import { Play, Pause, Settings, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ControlPanel = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [skipDelay, setSkipDelay] = useState(0.5);

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <Settings className="h-5 w-5 text-blue-400" />
        Control Panel
      </h3>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white font-medium">Auto Skip Ads</p>
            <p className="text-gray-400 text-sm">Automatically skip YouTube ads when possible</p>
          </div>
          <Button
            onClick={() => setIsEnabled(!isEnabled)}
            variant={isEnabled ? "default" : "outline"}
            className={`${
              isEnabled 
                ? "bg-blue-600 hover:bg-blue-700 text-white" 
                : "border-gray-600 text-gray-400 hover:bg-gray-700"
            }`}
          >
            {isEnabled ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
            {isEnabled ? "Disable" : "Enable"}
          </Button>
        </div>

        <div className="border-t border-gray-700 pt-4">
          <div className="flex items-center justify-between mb-2">
            <label className="text-white font-medium">Skip Delay</label>
            <span className="text-blue-400 font-mono">{skipDelay}s</span>
          </div>
          <input
            type="range"
            min="0"
            max="5"
            step="0.1"
            value={skipDelay}
            onChange={(e) => setSkipDelay(parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
          />
          <p className="text-gray-400 text-sm mt-1">
            Delay before skipping ads (0 = instant)
          </p>
        </div>

        <div className="border-t border-gray-700 pt-4">
          <Button
            variant="outline"
            className="w-full border-red-600 text-red-400 hover:bg-red-600/10"
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Clear Statistics
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;

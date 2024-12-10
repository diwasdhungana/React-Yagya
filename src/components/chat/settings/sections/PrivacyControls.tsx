import React from 'react';
import { Eye } from 'lucide-react';

export function PrivacyControls() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-700">Profile Visibility</label>
        <select className="w-full p-2 border rounded-md">
          <option value="public">Public</option>
          <option value="private">Private</option>
          <option value="custom">Custom</option>
        </select>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Eye className="h-5 w-5 text-gray-500" />
          <div>
            <div className="font-medium">Activity Status</div>
            <div className="text-sm text-gray-500">Show when you're active</div>
          </div>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
        </label>
      </div>

      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-700">Connection Requests</label>
        <select className="w-full p-2 border rounded-md">
          <option value="auto">Auto Approve</option>
          <option value="manual">Manual Approval</option>
        </select>
      </div>
    </div>
  );
}

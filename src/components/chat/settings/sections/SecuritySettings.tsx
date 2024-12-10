import React from 'react';
import { Key, Smartphone, Mail, Laptop } from 'lucide-react';

const activeSessions = [
  { device: 'MacBook Pro', location: 'San Francisco, US', time: '2 hours ago', type: 'laptop' },
  { device: 'iPhone 12', location: 'San Francisco, US', time: 'Just now', type: 'phone' },
];

export function SecuritySettings() {
  return (
    <div className="space-y-6">
      <button className="flex items-center gap-2 w-full p-3 bg-purple-100 hover:bg-purple-200 text-purple-600 rounded-md transition-colors">
        <Key className="h-5 w-5" />
        <span>Change Password</span>
      </button>

      <div className="space-y-4">
        <h3 className="font-medium">Two-Factor Authentication</h3>
        <div className="space-y-3">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="rounded text-purple-600" />
            <span className="flex items-center gap-2">
              <Smartphone className="h-5 w-5 text-gray-500" />
              SMS Authentication
            </span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="rounded text-purple-600" />
            <span className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-gray-500" />
              Email Authentication
            </span>
          </label>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-medium">Active Sessions</h3>
        <div className="space-y-3">
          {activeSessions.map((session, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-md"
            >
              <div className="flex items-center gap-3">
                {session.type === 'laptop' ? (
                  <Laptop className="h-5 w-5 text-gray-500" />
                ) : (
                  <Smartphone className="h-5 w-5 text-gray-500" />
                )}
                <div>
                  <div className="font-medium">{session.device}</div>
                  <div className="text-sm text-gray-500">
                    {session.location} • {session.time}
                  </div>
                </div>
              </div>
              <button className="text-sm text-red-600 hover:text-red-700">End Session</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

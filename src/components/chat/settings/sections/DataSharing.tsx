import React from 'react';
import { Share2 } from 'lucide-react';

export function DataSharing() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="font-medium">Third-Party Access</h3>
        <div className="space-y-3">
          {['Analytics Provider', 'Marketing Tools', 'Social Integration'].map((service) => (
            <div
              key={service}
              className="flex items-center justify-between p-3 bg-white rounded-md border"
            >
              <div className="flex items-center gap-3">
                <Share2 className="h-5 w-5 text-gray-500" />
                <div>
                  <div className="font-medium">{service}</div>
                  <div className="text-sm text-gray-500">Access to your basic info</div>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-medium">Cookie Preferences</h3>
        <div className="space-y-3">
          {[
            {
              name: 'Essential Cookies',
              description: 'Required for basic functionality',
              locked: true,
            },
            { name: 'Analytics Cookies', description: 'Help us improve our service' },
            { name: 'Marketing Cookies', description: 'Personalized recommendations' },
          ].map((cookie) => (
            <div
              key={cookie.name}
              className="flex items-center justify-between p-3 bg-white rounded-md border"
            >
              <div>
                <div className="font-medium">{cookie.name}</div>
                <div className="text-sm text-gray-500">{cookie.description}</div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  defaultChecked={cookie.locked}
                  disabled={cookie.locked}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

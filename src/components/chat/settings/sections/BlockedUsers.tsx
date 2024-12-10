import React, { useState } from 'react';
import { UserX, Plus, X } from 'lucide-react';

export function BlockedUsers() {
  const [blockedUsers] = useState([
    { id: '1', name: 'John Smith', email: 'john@example.com' },
    { id: '2', name: 'Sarah Johnson', email: 'sarah@example.com' },
  ]);

  return (
    <div className="space-y-6">
      <button className="flex items-center gap-2 w-full p-3 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors">
        <Plus className="h-5 w-5" />
        <span>Block New User</span>
      </button>

      <div className="space-y-3">
        {blockedUsers.map((user) => (
          <div
            key={user.id}
            className="flex items-center justify-between p-3 bg-white rounded-md border"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <UserX className="h-5 w-5 text-gray-500" />
              </div>
              <div>
                <div className="font-medium">{user.name}</div>
                <div className="text-sm text-gray-500">{user.email}</div>
              </div>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

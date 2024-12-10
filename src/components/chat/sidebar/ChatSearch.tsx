import React from 'react';
import { Search } from 'lucide-react';

export function ChatSearch() {
  return (
    <div className="p-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search chats..."
          className="w-full pl-9 pr-4 py-2 bg-gray-100 rounded-md text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
    </div>
  );
}

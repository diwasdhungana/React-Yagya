import React from 'react';

export function ChatFilter() {
  return (
    <div className="flex gap-2 px-2 py-3">
      <button className="px-3 py-1 text-sm rounded-full bg-orange-100 text-orange-600">All</button>
      <button className="px-3 py-1 text-sm rounded-full hover:bg-gray-100">Starred</button>
      <button className="px-3 py-1 text-sm rounded-full hover:bg-gray-100">Archived</button>
    </div>
  );
}

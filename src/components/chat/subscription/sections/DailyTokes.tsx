import React from 'react';
import { Gift } from 'lucide-react';

export function DailyTokens() {
  return (
    <div className="bg-white border rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Daily Free Tokens</h3>
        <Gift className="h-5 w-5 text-purple-500" />
      </div>
      <p className="text-gray-600 mb-4">You earn 5 free tokens daily.</p>
      <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors">
        Claim Daily Tokens
      </button>
    </div>
  );
}

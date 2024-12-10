import React from 'react';
import { Crown, Coins, Users } from 'lucide-react';

export function SubscriptionHeader() {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-6 text-white">
      <div className="grid grid-cols-3 gap-4">
        <div className="flex items-center gap-3">
          <Crown className="h-6 w-6" />
          <div>
            <p className="text-sm opacity-90">Active Plan</p>
            <p className="font-semibold">Basic</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Coins className="h-6 w-6" />
          <div>
            <p className="text-sm opacity-90">Current Tokens</p>
            <p className="font-semibold">15</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Users className="h-6 w-6" />
          <div>
            <p className="text-sm opacity-90">Referral Progress</p>
            <p className="font-semibold">2/5 Referrals</p>
          </div>
        </div>
      </div>
      <div className="flex gap-3 mt-6">
        <button className="bg-white text-purple-600 px-4 py-2 rounded-lg font-medium hover:bg-purple-50 transition-colors">
          Upgrade Plan
        </button>
        <button className="bg-purple-400 bg-opacity-20 text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-30 transition-colors">
          View Plans
        </button>
      </div>
    </div>
  );
}

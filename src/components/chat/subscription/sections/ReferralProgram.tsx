import React from 'react';
import { Link, Copy, Users } from 'lucide-react';

export function ReferralProgram() {
  const referralCode = 'FRIEND2024';

  return (
    <div className="bg-white border rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Refer a Friend</h3>
        <Users className="h-5 w-5 text-purple-500" />
      </div>

      <p className="text-gray-600 mb-4">Earn 10 Bonus Tokens per Successful Referral</p>

      <div className="flex gap-2 mb-4">
        <div className="flex-1 bg-gray-50 p-3 rounded-lg font-mono text-sm">{referralCode}</div>
        <button className="p-3 bg-purple-100 text-purple-600 rounded-lg hover:bg-purple-200 transition-colors">
          <Copy className="h-5 w-5" />
        </button>
      </div>

      <div className="mb-4">
        <div className="flex justify-between text-sm mb-1">
          <span>2 Referrals</span>
          <span>8 Tokens Earned</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-purple-600 h-2 rounded-full" style={{ width: '40%' }} />
        </div>
      </div>

      <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
        View Referral History
      </button>
    </div>
  );
}

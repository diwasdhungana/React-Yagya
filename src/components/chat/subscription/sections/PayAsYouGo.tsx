import React from 'react';
import { CreditCard, CircleDollarSign } from 'lucide-react';

const tokenPackages = [
  { tokens: 10, price: 5 },
  { tokens: 50, price: 20 },
  { tokens: 100, price: 35 },
];

export function PayAsYouGo() {
  return (
    <div className="bg-white border rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Pay as You Go</h3>
        <CreditCard className="h-5 w-5 text-purple-500" />
      </div>

      <p className="text-gray-600 mb-4">Buy additional tokens as needed</p>

      <div className="grid grid-cols-3 gap-4 mb-6">
        {tokenPackages.map((pkg) => (
          <div
            key={pkg.tokens}
            className="border rounded-lg p-4 text-center hover:border-purple-500 cursor-pointer transition-colors"
          >
            <p className="text-2xl font-bold text-purple-600">{pkg.tokens}</p>
            <p className="text-sm text-gray-600 mb-2">Tokens</p>
            <p className="font-semibold">${pkg.price}</p>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <button className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2">
          <CreditCard className="h-4 w-4" />
          Pay with Card
        </button>
        <button className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2">
          <CircleDollarSign className="h-4 w-4" />
          PayPal
        </button>
      </div>
    </div>
  );
}

import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: 0,
    tokens: 50,
    features: ['5 Daily Tokens', 'Basic Chat Support', 'Standard Response Time'],
  },
  {
    name: 'Standard',
    price: 29,
    tokens: 200,
    features: [
      '10 Daily Tokens',
      'Priority Support',
      'Faster Response Time',
      'Custom Instructions',
    ],
    popular: true,
  },
  {
    name: 'Premium',
    price: 99,
    tokens: 500,
    features: [
      '20 Daily Tokens',
      '24/7 Support',
      'Instant Response',
      'API Access',
      'Custom Models',
    ],
  },
];

export function SubscriptionPlans() {
  return (
    <div className="bg-white border rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-6">Subscription Plans</h3>

      <div className="grid grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`border rounded-lg p-6 ${
              plan.popular ? 'border-purple-500 ring-2 ring-purple-500 ring-opacity-20' : ''
            }`}
          >
            {plan.popular && (
              <span className="bg-purple-100 text-purple-600 text-xs font-semibold px-2 py-1 rounded-full">
                Most Popular
              </span>
            )}

            <h4 className="text-xl font-bold mt-4">{plan.name}</h4>
            <div className="mt-2">
              <span className="text-3xl font-bold">${plan.price}</span>
              <span className="text-gray-600">/month</span>
            </div>

            <p className="mt-2 text-purple-600 font-semibold">{plan.tokens} Tokens/month</p>

            <ul className="mt-6 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full mt-6 py-2 px-4 rounded-lg transition-colors ${
                plan.popular
                  ? 'bg-purple-600 text-white hover:bg-purple-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {plan.price === 0 ? 'Current Plan' : 'Subscribe Now'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

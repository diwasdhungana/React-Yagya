import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { DailyTokens } from './sections/DailyTokes';
import { ReferralProgram } from './sections/ReferralProgram';
import { PayAsYouGo } from './sections/PayAsYouGo';
import { SubscriptionPlans } from './sections/SubscriptionPlans';
import { SubscriptionHeader } from './sections/SubscriptionHeader';

interface SubscriptionProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Subscription({ isOpen, onClose }: SubscriptionProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-xl shadow-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <Dialog.Title className="text-2xl font-bold">Subscription & Rewards</Dialog.Title>
            <Dialog.Close className="p-2 hover:bg-gray-100 rounded-full">
              <X className="h-5 w-5" />
            </Dialog.Close>
          </div>

          <div className="space-y-6">
            <SubscriptionHeader />
            <DailyTokens />
            <ReferralProgram />
            <PayAsYouGo />
            <SubscriptionPlans />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

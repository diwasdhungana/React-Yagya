import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import * as Accordion from '@radix-ui/react-accordion';
import { X, ChevronDown } from 'lucide-react';
import { PrivacyControls } from './sections/PrivacyControls';
import { DataManagement } from './sections/DataManagement';
import { SecuritySettings } from './sections/SecuritySettings';
import { DataSharing } from './sections/DataSharing';

interface SettingsProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Settings({ isOpen, onClose }: SettingsProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-xl shadow-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <Dialog.Title className="text-2xl font-bold">Privacy & Security Settings</Dialog.Title>
            <Dialog.Close className="p-2 hover:bg-gray-100 rounded-full">
              <X className="h-5 w-5" />
            </Dialog.Close>
          </div>

          <Accordion.Root type="single" collapsible className="space-y-4">
            <Accordion.Item value="privacy" className="border rounded-lg overflow-hidden">
              <Accordion.Trigger className="w-full flex items-center justify-between p-4 hover:bg-gray-50">
                <span className="font-semibold">Privacy Controls</span>
                <ChevronDown className="h-5 w-5" />
              </Accordion.Trigger>
              <Accordion.Content className="p-4 bg-gray-50">
                <PrivacyControls />
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="data" className="border rounded-lg overflow-hidden">
              <Accordion.Trigger className="w-full flex items-center justify-between p-4 hover:bg-gray-50">
                <span className="font-semibold">Data Management</span>
                <ChevronDown className="h-5 w-5" />
              </Accordion.Trigger>
              <Accordion.Content className="p-4 bg-gray-50">
                <DataManagement />
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="security" className="border rounded-lg overflow-hidden">
              <Accordion.Trigger className="w-full flex items-center justify-between p-4 hover:bg-gray-50">
                <span className="font-semibold">Security Settings</span>
                <ChevronDown className="h-5 w-5" />
              </Accordion.Trigger>
              <Accordion.Content className="p-4 bg-gray-50">
                <SecuritySettings />
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="sharing" className="border rounded-lg overflow-hidden">
              <Accordion.Trigger className="w-full flex items-center justify-between p-4 hover:bg-gray-50">
                <span className="font-semibold">Data Sharing</span>
                <ChevronDown className="h-5 w-5" />
              </Accordion.Trigger>
              <Accordion.Content className="p-4 bg-gray-50">
                <DataSharing />
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

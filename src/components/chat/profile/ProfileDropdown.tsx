import React from 'react';
import { User, Settings, HelpCircle, CreditCard, LogOut } from 'lucide-react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ThemeToggle } from '../theme/ThemeToggle';

interface ProfileDropdownProps {
  onOpenProfile: () => void;
  onOpenSettings: () => void;
  onOpenSubscription: () => void;
}

export function ProfileDropdown({
  onOpenProfile,
  onOpenSettings,
  onOpenSubscription,
}: ProfileDropdownProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="outline-none w-full">
          <div className="flex items-center gap-2 p-4 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
              <span className="text-purple-600 dark:text-purple-300 font-medium">U</span>
            </div>
            <div className="flex-1 text-left">
              <div className="font-medium text-sm dark:text-white">uniteactachieve</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Free Plan</div>
            </div>
          </div>
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-[220px] bg-white dark:bg-gray-900 rounded-lg shadow-lg border dark:border-gray-700 mt-1 p-1"
          sideOffset={5}
          align="end"
        >
          <DropdownMenu.Item
            className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md cursor-pointer outline-none dark:text-white"
            onClick={onOpenProfile}
          >
            <User className="w-4 h-4" />
            Profile
          </DropdownMenu.Item>

          <DropdownMenu.Item
            className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md cursor-pointer outline-none dark:text-white"
            onClick={onOpenSettings}
          >
            <Settings className="w-4 h-4" />
            Settings
          </DropdownMenu.Item>

          <DropdownMenu.Item className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md cursor-pointer outline-none dark:text-white">
            <HelpCircle className="w-4 h-4" />
            Help Center
          </DropdownMenu.Item>

          <ThemeToggle />

          <DropdownMenu.Separator className="h-px bg-gray-200 dark:bg-gray-700 my-1" />

          <DropdownMenu.Item
            className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md cursor-pointer outline-none dark:text-white"
            onClick={onOpenSubscription}
          >
            <CreditCard className="w-4 h-4" />
            My Subscription
          </DropdownMenu.Item>

          <DropdownMenu.Separator className="h-px bg-gray-200 dark:bg-gray-700 my-1" />

          <DropdownMenu.Item className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md cursor-pointer outline-none text-red-600 dark:text-red-400">
            <LogOut className="w-4 h-4" />
            Sign Out
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

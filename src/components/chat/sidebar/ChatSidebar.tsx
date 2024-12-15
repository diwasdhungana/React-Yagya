import React, { useState } from 'react';
import { NewChatButton } from './NewChatButton';
import { ChatSearch } from './ChatSearch';
import { ChatFilter } from './ChatFilter';
import { ChatList } from './ChatList';
import { ProfileDropdown } from '../profile/ProfileDropdown';
import { ProfileModal } from '../profile/ProfileModal';
import { Settings } from '../settings/Settings';
import { Subscription } from '../subscription/Subscriptions';

export function ChatSidebar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isSubscriptionOpen, setIsSubscriptionOpen] = useState(false);

  return (
    <div className="w-80 border-r flex flex-col h-screen bg-white">
      <div className="p-4">
        <NewChatButton />
      </div>
      {/* <ChatSearch /> */}
      {/* <ChatFilter /> */}
      <ChatList />

      {/* <div className="mt-auto border-t">
        <ProfileDropdown
          onOpenProfile={() => setIsProfileOpen(true)}
          onOpenSettings={() => setIsSettingsOpen(true)}
          onOpenSubscription={() => setIsSubscriptionOpen(true)}
        />
      </div> */}

      {/* {isProfileOpen && (
        <ProfileModal isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
      )}

      {isSettingsOpen && (
        <Settings isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
      )}

      {isSubscriptionOpen && (
        <Subscription isOpen={isSubscriptionOpen} onClose={() => setIsSubscriptionOpen(false)} />
      )} */}
    </div>
  );
}

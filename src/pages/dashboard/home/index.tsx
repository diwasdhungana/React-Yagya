import { LandingPage } from '@/components/LandingPage';
import { Page } from '@/components/ui/page';
import { useChat } from '@/hooks/useChat';
import React from 'react';

const index = () => {
  const { messages, isNewChat, handleStartChat, handleNewChat, handleSendMessage, initialInput } =
    useChat();
  return (
    <Page title="Chat Page">
      <div className="flex-1 flex flex-col min-w-0 h-screen">
        <LandingPage onStartChat={handleStartChat} />
      </div>
    </Page>
  );
};

export default index;

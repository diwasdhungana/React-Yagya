import React from 'react';
import { PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import { ChatFlow } from '@/components/chat/chatflow/ChatFlow';
import { ChatSidebar } from '@/components/chat/sidebar/ChatSidebar';
import { LandingPage } from '@/components/LandingPage';
// import { ProfileSettings } from '@/components/settings/ProfileSettings';
import { useChat } from '@/hooks/useChat';
import { useSidebar } from '@/hooks/useSidebar';
// import { SettingsProvider } from '@/contexts/SettingsContext';

function App() {
  const { messages, isNewChat, handleStartChat, handleNewChat, handleSendMessage, initialInput } =
    useChat();
  const { isOpen: isSidebarOpen, toggle: toggleSidebar } = useSidebar();

  return (
    // <SettingsProvider>
    <div className="flex h-screen bg-gray-50">
      <div
        className={`fixed md:relative inset-y-0 left-0 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        } transition-transform duration-300 ease-in-out z-30 ${isSidebarOpen ? 'w-80' : 'w-16'}`}
      >
        <ChatSidebar />
      </div>

      <div className="flex-1 flex flex-col min-w-0">
        {!isNewChat && (
          <header className="bg-white border-b p-4 flex items-center gap-4">
            {/* <button
              onClick={toggleSidebar}
              className="p-2 hover:bg-gray-100 rounded-lg text-gray-600"
            >
              {isSidebarOpen ? (
                <PanelLeftClose className="w-5 h-5" />
              ) : (
                <PanelLeftOpen className="w-5 h-5" />
              )}
            </button> */}
            <h1 className="text-xl font-semibold">Rishi</h1>
          </header>
        )}

        {isNewChat ? (
          <LandingPage onStartChat={handleStartChat} />
        ) : (
          <ChatFlow initialInput={initialInput} />
        )}
      </div>
    </div>
    // </SettingsProvider>
  );
}

export default App;

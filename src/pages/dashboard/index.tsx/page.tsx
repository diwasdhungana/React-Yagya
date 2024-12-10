import React, { useState } from 'react';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';

import type { Message } from '@/types';
import { ConversationPanel } from '@/components/chat/chatflow/ConversationPanel';
import { CategoryList } from '@/components/chat/chatflow/CategoryList';
import { ExampleList } from '@/components/chat/chatflow/ExampleList';
import { useChatFlow } from '@/hooks/useChatFlow';

interface ChatFlowProps {
  initialInput?: string;
}

export default function ChatFlow({ initialInput }: ChatFlowProps) {
  const {
    categories,
    subcategories,
    examples,
    selectedCategory,
    selectedSubcategory,
    setSelectedCategory,
    setSelectedSubcategory,
  } = useChatFlow();

  const [messages, setMessages] = useState<Message[]>([]);

  const handleChatMessage = (content: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        content,
        isBot: false,
      },
    ]);

    // Simulate Rishi's response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          content: `I understand your interest in "${content}". Let me help you explore this further.`,
          isBot: true,
          agentNumber: 1,
        },
      ]);
    }, 1000);
  };

  return (
    <div className="h-full">
      override
      <PanelGroup direction="horizontal">
        <Panel defaultSize={25} minSize={20}>
          <ConversationPanel
            messages={messages}
            onSendMessage={handleChatMessage}
            initialInput={initialInput}
          />
        </Panel>

        <PanelResizeHandle className="w-1 hover:bg-orange-200 transition-colors" />

        <Panel defaultSize={30} minSize={20}>
          <CategoryList
            categories={categories}
            subcategories={selectedCategory ? subcategories[selectedCategory] : []}
            selectedCategory={selectedCategory}
            selectedSubcategory={selectedSubcategory}
            onCategorySelect={setSelectedCategory}
            onSubcategorySelect={setSelectedSubcategory}
          />
        </Panel>

        <PanelResizeHandle className="w-1 hover:bg-orange-200 transition-colors" />

        <Panel defaultSize={45} minSize={30}>
          <ExampleList examples={selectedSubcategory ? examples[selectedSubcategory] : []} />
        </Panel>
      </PanelGroup>
    </div>
  );
}

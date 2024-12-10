import React from 'react';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import type { Message } from '../../../types';

interface ConversationPanelProps {
  messages: Message[];
  onSendMessage: (content: string) => void;
  initialInput?: string;
}

const INITIAL_GREETING: Message = {
  id: 'initial',
  content:
    'Namaste 🙏 Welcome to Yagya! I am Rishi, your guide. Please share your interests and aspirations.',
  isBot: true,
  agentNumber: 1,
};

export function ConversationPanel({
  messages = [],
  onSendMessage,
  initialInput,
}: ConversationPanelProps) {
  // Combine initial input with other messages
  const allMessages = React.useMemo(() => {
    const combinedMessages: Message[] = [];

    // Add initial user input if provided
    if (initialInput) {
      combinedMessages.push({
        id: 'user-initial',
        content: initialInput,
        isBot: false,
      });
    }

    // Add initial greeting
    combinedMessages.push(INITIAL_GREETING);

    // Add rest of the messages
    return [...combinedMessages, ...messages];
  }, [messages, initialInput]);

  return (
    <div className="h-full flex flex-col border-r bg-gray-50">
      <div className="p-4 border-b bg-white">
        <h2 className="text-xl font-semibold">Conversation with Rishi</h2>
      </div>
      <div className="flex-1 overflow-y-auto">
        {allMessages.map((message) => (
          <ChatMessage
            key={message.id}
            content={message.content}
            isBot={message.isBot}
            agentNumber={message.agentNumber}
          />
        ))}
      </div>
      <ChatInput onSendMessage={onSendMessage} placeholder="Ask Rishi anything..." />
    </div>
  );
}

import React from 'react';
import { MessageSquare, Star } from 'lucide-react';
import type { ChatHistory } from '../../types';

interface CollapsedChatListProps {
  chats: ChatHistory[];
  activeChat: string | null;
  onSelect: (id: string) => void;
}

export function CollapsedChatList({ chats, activeChat, onSelect }: CollapsedChatListProps) {
  return (
    <div className="mt-4">
      {chats.map((chat) => (
        <div
          key={chat.id}
          className="mx-2 mb-2 relative group"
          onClick={() => onSelect(chat.id)}
        >
          <div className={`p-2 rounded-lg cursor-pointer transition-colors ${
            activeChat === chat.id ? 'bg-orange-100' : 'hover:bg-gray-100'
          }`}>
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-white">
              <MessageSquare className="w-5 h-5" />
            </div>
          </div>
          {chat.isStarred && (
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full shadow-sm flex items-center justify-center">
              <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
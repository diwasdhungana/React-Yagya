import React from 'react';
import { Star } from 'lucide-react';

interface ChatItem {
  id: string;
  title: string;
  isStarred?: boolean;
}

const chats: ChatItem[] = [
  { id: '1', title: 'Project Discussion', isStarred: false },
  { id: '2', title: 'Technical Support', isStarred: false },
];

export function ChatList() {
  return (
    <div className="flex-1 overflow-auto">
      {chats.map((chat) => (
        <button
          key={chat.id}
          className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition-colors"
        >
          <div className="flex-1 text-left">
            <p className="text-sm font-medium text-gray-900">{chat.title}</p>
            <p className="text-xs text-gray-500 truncate">Let's discuss the new features and...</p>
          </div>
          {chat.isStarred && <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />}
        </button>
      ))}
    </div>
  );
}

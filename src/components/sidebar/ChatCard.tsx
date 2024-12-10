import React from 'react';
import { MessageSquare, Star, Archive, Trash2, Clock, Calendar } from 'lucide-react';
import type { ChatHistory } from '../../types';

interface ChatCardProps {
  chat: ChatHistory;
  isActive: boolean;
  onSelect: (id: string) => void;
  onStar: (id: string, e: React.MouseEvent) => void;
  onArchive: (id: string, e: React.MouseEvent) => void;
  onDelete: (id: string, e: React.MouseEvent) => void;
  isNewChat?: boolean;
}

export function ChatCard({ 
  chat, 
  isActive, 
  onSelect, 
  onStar, 
  onArchive, 
  onDelete,
  isNewChat = false 
}: ChatCardProps) {
  return (
    <div
      className={`group relative mb-2 rounded-xl hover:bg-white cursor-pointer transition-all duration-200 ${
        isActive ? 'bg-white shadow-sm' : 'bg-gray-50'
      }`}
      onClick={() => onSelect(chat.id)}
    >
      <div className="p-4">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-white">
            <MessageSquare className="w-6 h-6" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-gray-900 truncate pr-20">{chat.title}</h3>
            </div>
            <p className="text-sm text-gray-600 line-clamp-2 mb-3">{chat.preview}</p>
            {!isNewChat && chat.tags && (
              <div className="flex flex-wrap gap-1 mb-3">
                {chat.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2 py-0.5 rounded-md bg-gray-100 text-xs font-medium text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            {!isNewChat && (
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {chat.lastActive}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {chat.date}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {!isNewChat && (
        <div className="absolute right-2 top-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={(e) => onStar(chat.id, e)}
            className={`p-1.5 rounded-lg hover:bg-gray-100 ${
              chat.isStarred ? 'text-yellow-500' : 'text-gray-400'
            }`}
            title={chat.isStarred ? "Unstar" : "Star"}
          >
            <Star className="w-4 h-4" />
          </button>
          <button
            onClick={(e) => onArchive(chat.id, e)}
            className={`p-1.5 rounded-lg hover:bg-gray-100 ${
              chat.isArchived ? 'text-blue-500' : 'text-gray-400'
            }`}
            title={chat.isArchived ? "Unarchive" : "Archive"}
          >
            <Archive className="w-4 h-4" />
          </button>
          <button
            onClick={(e) => onDelete(chat.id, e)}
            className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-red-500"
            title="Delete"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
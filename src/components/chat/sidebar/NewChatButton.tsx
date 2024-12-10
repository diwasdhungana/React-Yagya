import React from 'react';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NewChatButtonProps {
  className?: string;
}

export function NewChatButton({ className }: NewChatButtonProps) {
  return (
    <button
      className={cn(
        'w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors',
        className
      )}
    >
      <Plus className="h-5 w-5" />
      New Chat
    </button>
  );
}

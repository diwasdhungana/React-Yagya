import React from 'react';
import { Bot, User } from 'lucide-react';
import { cn } from '../../../lib/utils';

interface ChatMessageProps {
  content: string;
  isBot: boolean;
  agentNumber?: number;
  timestamp?: string;
}

export function ChatMessage({
  content,
  isBot,
  agentNumber,
  timestamp = new Date().toLocaleTimeString(),
}: ChatMessageProps) {
  return (
    <div className={cn('flex gap-3 p-4 animate-slide-up ', isBot ? '' : 'flex-row-reverse')}>
      {/* <div className={'flex gap-3 p-4 animate-slide-up '}> */}
      <div className="flex-shrink-0 mt-1">
        {isBot ? (
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-primary flex items-center justify-center">
            <Bot className="w-5 h-5 text-white" />
          </div>
        ) : (
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
        )}
      </div>

      <div className={cn('flex-1 space-y-2 max-w-5xl', !isBot && 'text-right')}>
        {/* <div className={'flex-1 space-y-2 max-w-5xl'}> */}
        <div className="flex items-center gap-2 text-xs text-gray-500">
          {isBot ? (
            <span className="font-medium text-primary/90">Rishi</span>
          ) : (
            <span className="ml-auto">You</span>
            // <span className="font-medium text-primary/90">You</span>
          )}
          <span>{timestamp}</span>
        </div>
        <div
          className={cn(
            'text-sm text-gray-700 p-3 rounded-lg whitespace-pre-wrap w-fit',
            isBot ? 'bg-primary/10 ' : 'bg-primary/10 w-fit float-right'
          )}
        >
          {content}
        </div>
      </div>
    </div>
  );
}

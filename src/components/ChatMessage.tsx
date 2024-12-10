import React from "react";
import { Bot, User } from "lucide-react";

interface ChatMessageProps {
  content: string;
  isBot: boolean;
  agentNumber?: number;
}

export function ChatMessage({ content, isBot, agentNumber }: ChatMessageProps) {
  return (
    <div className={`flex gap-4 p-4 ${isBot ? "bg-orange-50" : ""}`}>
      <div className="flex-shrink-0">
        {isBot ? (
          <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
            <Bot className="w-5 h-5 text-orange-600" />
          </div>
        ) : (
          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
            <User className="w-5 h-5 text-gray-600" />
          </div>
        )}
      </div>
      <div className="flex-1">
        {isBot && agentNumber && (
          <div className="text-xs font-medium text-orange-600 mb-1">
            Agent {agentNumber}
          </div>
        )}
        <div className="prose prose-sm max-w-none">{content}</div>
      </div>
    </div>
  );
}

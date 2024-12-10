import React, { useState } from 'react';
import { Send, Mic, RefreshCw, Sparkles, Paperclip } from 'lucide-react';
import { cn } from '../../../lib/utils';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  placeholder?: string;
}

export function ChatInput({
  onSendMessage,
  placeholder = 'Type your message here...',
}: ChatInputProps) {
  const [message, setMessage] = useState('');
  const [charCount, setCharCount] = useState(0);
  const MAX_CHARS = 500;

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    if (newValue.length <= MAX_CHARS) {
      setMessage(newValue);
      setCharCount(newValue.length);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
      setCharCount(0);
    }
  };

  const handleRewrite = () => {
    console.log('Rewriting input');
    // TODO: Implement rewrite functionality
  };

  const handleEnhance = () => {
    console.log('Enhancing input');
    // TODO: Implement enhance functionality
  };

  return (
    <form onSubmit={handleSubmit} className="border-t bg-white p-4">
      {message.trim() && (
        <div className="flex gap-2 max-w-4xl mx-auto mb-3">
          <button
            type="button"
            onClick={handleRewrite}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Rewrite
          </button>
          <button
            type="button"
            onClick={handleEnhance}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-orange-600 bg-orange-50 rounded-lg border border-orange-200 hover:bg-orange-100 transition-colors"
          >
            <Sparkles className="w-4 h-4" />
            Enhance
          </button>
        </div>
      )}

      <div className="flex flex-col gap-2 max-w-4xl mx-auto">
        <div className="flex items-end gap-4">
          <div className="relative flex-1">
            <textarea
              value={message}
              onChange={handleInputChange}
              placeholder={placeholder}
              rows={1}
              className={cn(
                'w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 pr-24 pl-12 resize-none overflow-hidden',
                'min-h-[2.5rem] max-h-32',
                charCount >= MAX_CHARS
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                  : 'border-gray-300 focus:border-orange-500 focus:ring-orange-200'
              )}
              style={{
                height: 'auto',
                minHeight: '2.5rem',
                maxHeight: '8rem',
              }}
              onInput={(e) => {
                const target = e.target as HTMLTextAreaElement;
                target.style.height = 'auto';
                target.style.height = `${Math.min(target.scrollHeight, 128)}px`;
              }}
            />
            <button
              type="button"
              className="absolute left-2 bottom-2 p-2 text-gray-400 hover:text-gray-600 transition-colors"
              title="Add attachment"
            >
              <Paperclip className="w-5 h-5" />
            </button>
            <button
              type="button"
              className="absolute right-2 bottom-2 p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <Mic className="w-5 h-5" />
            </button>
          </div>

          <button
            type="submit"
            disabled={!message.trim()}
            className="p-3 rounded-xl bg-orange-500 text-white hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>

        <div className="text-right text-sm text-gray-500">
          {charCount}/{MAX_CHARS} characters
        </div>
      </div>
    </form>
  );
}

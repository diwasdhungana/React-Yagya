import React, { useState } from 'react';
import { Send, Edit2, Sparkles } from 'lucide-react';
import { cn } from '../../../lib/utils';

interface TopInputProps {
  value: string;
  onSubmit: (content: string) => void;
  onEdit: (content: string) => void;
  onEnhance: () => void;
}

export function TopInput({ value, onSubmit, onEdit, onEnhance }: TopInputProps) {
  const [isEditing, setIsEditing] = useState(!value);
  const [inputValue, setInputValue] = useState(value);
  const [charCount, setCharCount] = useState(0);
  const MAX_CHARS = 500;

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    if (newValue.length <= MAX_CHARS) {
      setInputValue(newValue);
      setCharCount(newValue.length);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSubmit(inputValue.trim());
      setIsEditing(false);
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setInputValue(value);
    setCharCount(value.length);
  };

  const handleSaveEdit = () => {
    if (inputValue.trim()) {
      onEdit(inputValue.trim());
      setIsEditing(false);
    }
  };

  return (
    <div className="border-b bg-white p-4">
      <div className="max-w-4xl mx-auto">
        {isEditing ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <textarea
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Share your interests and aspirations..."
                className={cn(
                  'w-full p-4 pr-24 rounded-xl border-2 focus:ring-2 resize-none h-32',
                  'transition-colors duration-200',
                  charCount >= MAX_CHARS
                    ? 'border-red-200 focus:border-red-500 focus:ring-red-200'
                    : 'border-orange-200 focus:border-orange-500 focus:ring-orange-200'
                )}
              />
              <div className="absolute right-2 top-2 flex gap-2">
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="p-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              <div className="absolute right-3 bottom-3 text-sm text-gray-500">
                {charCount}/{MAX_CHARS}
              </div>
            </div>
          </form>
        ) : (
          <div className="bg-orange-50 rounded-xl p-4 flex items-start gap-4">
            <div className="flex-1">
              <h3 className="font-medium text-gray-900 mb-1">Your Input:</h3>
              <p className="text-gray-600">{value}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleEditClick}
                className="p-2 rounded-lg hover:bg-orange-100 text-gray-600 transition-colors"
                title="Edit input"
              >
                <Edit2 className="w-5 h-5" />
              </button>
              <button
                onClick={onEnhance}
                className="p-2 rounded-lg hover:bg-orange-100 text-gray-600 transition-colors"
                title="Enhance with AI"
              >
                <Sparkles className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

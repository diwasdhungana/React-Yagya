import React from 'react';
import { Send, Mic } from 'lucide-react';

export function ChatMain() {
  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1 p-6">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Welcome to Yagya.ai</h1>
          <p className="text-gray-600 mb-4">
            Tell us about yourself and share your ideas. Let's explore together.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-gray-700 mb-4">
              Tell us about yourself and an idea or involvement you'd like to explore, enhance, or
              initiate. What impact do you hope to make?
            </p>
            <div className="relative">
              <textarea
                className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 min-h-[120px]"
                placeholder="Share your thoughts..."
              />
              <div className="absolute bottom-4 right-4 flex items-center gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Mic className="h-5 w-5 text-gray-500" />
                </button>
                <button className="bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700">
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

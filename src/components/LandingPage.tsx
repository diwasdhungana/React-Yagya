import React, { useState } from "react";
import { MessageSquare, Sparkles, RefreshCw } from "lucide-react";
import { cn } from "../lib/utils";

interface LandingPageProps {
  onStartChat: (input: string) => void;
}

export function LandingPage({ onStartChat }: LandingPageProps) {
  const [input, setInput] = useState("");
  const [charCount, setCharCount] = useState(0);
  const MAX_CHARS = 500;

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    if (newValue.length <= MAX_CHARS) {
      setInput(newValue);
      setCharCount(newValue.length);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onStartChat(input.trim());
    }
  };

  const handleRewrite = () => {
    console.log("Rewriting input");
    // TODO: Implement rewrite functionality
  };

  const handleEnhance = () => {
    console.log("Enhancing input");
    // TODO: Implement enhance functionality
  };

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-b from-orange-50 to-white">
        <div className="w-24 h-24 mb-8 rounded-3xl bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center">
          <Sparkles className="w-12 h-12 text-white" />
        </div>

        <h1 className="text-4xl font-bold text-center mb-4">
          Welcome to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
            Rishi
          </span>
        </h1>
        <p className="text-gray-600 text-center max-w-xl mb-12">
          Your AI guide to explore opportunities and connections. Share your
          ideas and let's discover the perfect path together.
        </p>

        <form onSubmit={handleSubmit} className="w-full max-w-2xl">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="relative mb-4">
              <textarea
                value={input}
                onChange={handleInputChange}
                placeholder="Tell me about yourself and what brings you here today. What opportunities or connections are you looking to explore?"
                className={cn(
                  "w-full h-32 p-4 bg-gray-50 rounded-xl border-0 focus:outline-none focus:ring-2 resize-none",
                  charCount >= MAX_CHARS
                    ? "focus:ring-red-500"
                    : "focus:ring-orange-500"
                )}
              />
              <div className="absolute bottom-3 right-3 text-sm text-gray-500">
                {charCount}/{MAX_CHARS}
              </div>
            </div>

            {input.trim() && (
              <div className="flex gap-2 mb-6">
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

            <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>Share your aspirations and goals</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={!input.trim()}
              className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl py-4 px-6 hover:from-orange-600 hover:to-pink-600 transition-all duration-200 flex items-center justify-center gap-2 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <MessageSquare className="w-5 h-5" />
              Start Your Journey
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

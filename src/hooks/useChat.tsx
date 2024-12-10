"use client";
import { useState } from "react";
import type { Message } from "@/types/index";

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isNewChat, setIsNewChat] = useState(true);
  const [initialInput, setInitialInput] = useState<string>("");

  const handleStartChat = (input: string) => {
    setIsNewChat(false);
    setInitialInput(input);
    setMessages([]);
  };

  const handleNewChat = () => {
    setIsNewChat(true);
    setMessages([]);
    setInitialInput("");
  };

  const handleSendMessage = (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      isBot: false,
    };

    setMessages((prev) => [...prev, userMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: `I understand you're interested in "${content}". Let me help you explore this further.`,
        isBot: true,
        agentNumber: Math.floor(Math.random() * 6) + 1,
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  return {
    messages,
    isNewChat,
    initialInput,
    handleStartChat,
    handleNewChat,
    handleSendMessage,
  };
}

export interface Message {
  id: string;
  content: string;
  isBot: boolean;
  agentNumber?: number;
}

export interface Category {
  id: string;
  title: string;
  description: string;
}

export interface Subcategory {
  id: string;
  title: string;
}

export interface Example {
  id: string;
  title: string;
  source: string;
  date: string;
  url: string;
  focus: string;
  compatibility: string;
}

export interface ChatHistory {
  id: string;
  title: string;
  date: string;
  preview: string;
  isStarred?: boolean;
  isArchived?: boolean;
  tags?: string[];
  lastActive?: string;
}

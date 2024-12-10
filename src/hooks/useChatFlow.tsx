"use client";
import { useState } from "react";
import type { Category, Subcategory, Example } from "../types";

const CATEGORIES: Category[] = [
  {
    id: "music",
    title: "Music Industry",
    description: "Connect with music professionals and opportunities",
  },
  {
    id: "tech",
    title: "Technology",
    description: "Explore tech opportunities and collaborations",
  },
  {
    id: "art",
    title: "Visual Arts",
    description: "Discover artistic opportunities and communities",
  },
];

const SUBCATEGORIES: Record<string, Subcategory[]> = {
  music: [
    { id: "producers", title: "Music Producers" },
    { id: "labels", title: "Record Labels" },
    { id: "artists", title: "Artists" },
    { id: "studios", title: "Recording Studios" },
  ],
  tech: [
    { id: "developers", title: "Software Developers" },
    { id: "startups", title: "Tech Startups" },
    { id: "mentors", title: "Tech Mentors" },
  ],
  art: [
    { id: "galleries", title: "Art Galleries" },
    { id: "artists", title: "Visual Artists" },
    { id: "exhibitions", title: "Exhibition Opportunities" },
  ],
};

const EXAMPLES: Record<string, Example[]> = {
  producers: [
    {
      id: "1",
      title: "Bipul Chettri",
      source: "Official Website",
      date: "March 2024",
      url: "https://bipulchettri.com",
      focus: "Folk and contemporary Nepali music production",
      compatibility: "Specializes in blending traditional and modern sounds",
    },
    {
      id: "2",
      title: "Rohit Shakya",
      source: "SoundCloud",
      date: "February 2024",
      url: "https://soundcloud.com/rohitshakya",
      focus: "Electronic and experimental music production",
      compatibility:
        "Known for innovative sound design and production techniques",
    },
  ],
  labels: [
    {
      id: "3",
      title: "Fuzz Factory",
      source: "Instagram",
      date: "March 2024",
      url: "https://instagram.com/fuzzfactoryrecords",
      focus: "Independent record label for alternative music",
      compatibility: "Supports emerging artists in the alternative scene",
    },
  ],
};

export function useChatFlow() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(
    null
  );

  return {
    categories: CATEGORIES,
    subcategories: SUBCATEGORIES,
    examples: EXAMPLES,
    selectedCategory,
    selectedSubcategory,
    setSelectedCategory: (id: string) => {
      setSelectedCategory(id);
      setSelectedSubcategory(null);
    },
    setSelectedSubcategory,
  };
}

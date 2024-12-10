import React from 'react';
import { Eye, EyeOff, Linkedin, Instagram, Youtube } from 'lucide-react';

interface SocialLinks {
  linkedin: string;
  instagram: string;
  youtube: string;
}

interface SocialSectionProps {
  links: SocialLinks;
  onLinksChange: (links: SocialLinks) => void;
}

export function SocialSection({ links, onLinksChange }: SocialSectionProps) {
  const socialIcons = {
    linkedin: Linkedin,
    instagram: Instagram,
    youtube: Youtube,
  };

  return (
    <div className="space-y-4">
      {(Object.entries(links) as [keyof SocialLinks, string][]).map(([platform, link]) => {
        const Icon = socialIcons[platform];
        return (
          <div key={platform} className="flex items-center gap-3">
            <div className="relative flex-1">
              <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="url"
                placeholder={`${platform.charAt(0).toUpperCase() + platform.slice(1)} URL`}
                className="w-full pl-10 pr-10 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={link}
                onChange={(e) => onLinksChange({ ...links, [platform]: e.target.value })}
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                {link ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

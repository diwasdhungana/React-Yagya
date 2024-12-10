import React from 'react';
import { Camera } from 'lucide-react';

interface ProfileHeaderProps {
  name: string;
  email: string;
  onNameChange: (name: string) => void;
}

export function ProfileHeader({ name, email, onNameChange }: ProfileHeaderProps) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover ring-2 ring-purple-100"
        />
        <button className="absolute bottom-0 right-0 p-1.5 bg-purple-600 rounded-full text-white hover:bg-purple-700 transition-colors shadow-lg">
          <Camera className="w-4 h-4" />
        </button>
      </div>
      <div className="flex-1">
        <input
          type="text"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
          className="text-xl font-semibold mb-1 p-1 w-full border-b border-transparent hover:border-gray-300 focus:border-purple-600 focus:outline-none transition-colors"
          placeholder="Your Name"
        />
        <p className="text-gray-600">{email}</p>
      </div>
    </div>
  );
}

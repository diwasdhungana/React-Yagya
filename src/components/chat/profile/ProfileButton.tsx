import React from 'react';
import { User } from 'lucide-react';

interface ProfileButtonProps {
  onClick: () => void;
  name: string;
  email: string;
}

export function ProfileButton({ onClick, name, email }: ProfileButtonProps) {
  return (
    <div className="mt-auto border-t">
      <button
        onClick={onClick}
        className="flex items-center gap-3 w-full p-4 hover:bg-gray-50 transition-colors"
      >
        <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center">
          <User className="h-5 w-5 text-rose-500" />
        </div>
        <div className="text-left">
          <div className="font-medium">{name}</div>
          <div className="text-sm text-gray-500">{email}</div>
        </div>
      </button>
    </div>
  );
}

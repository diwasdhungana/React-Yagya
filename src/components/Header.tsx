'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { paths } from '@/routes';

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="bg-[#FFFAF0] border-b">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => navigate(paths.dashboard.home)}
        >
          <img
            className="mx-auto h-12 w-auto"
            alt="Yagya.ai Logo"
            src="https://yagya.ai/favicon.png"
            width={46}
            height={23}
          />
          <span className="text-xl font-bold text-[#8B4513]">Yagya.ai</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/about-us" className="text-[#8B4513] hover:text-[#654321]">
            About Us
          </a>
          <a href="/blogs" className="text-[#8B4513] hover:text-[#654321]">
            Blogs
          </a>
          <a href="/faqs" className="text-[#8B4513] hover:text-[#654321]">
            FAQs
          </a>
          <a href="/contact-us" className="text-[#8B4513] hover:text-[#654321]">
            Contact Us
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            className="text-[#8B4513]"
            onClick={() => navigate(paths.auth.login)}
          >
            Log In
          </Button>
          <Button
            className="bg-[#FFA500] text-white hover:bg-[#FF8C00]"
            onClick={() => navigate(paths.auth.register)}
          >
            Sign Up
          </Button>
          <Button variant="ghost" className="text-[#8B4513]" onClick={() => {}}>
            Sign Out
          </Button>
        </div>
      </div>
    </header>
  );
}

export const Header2 = () => {
  return <div>Header</div>;
};

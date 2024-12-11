'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { paths } from '@/routes';
import { LinkTo } from './ui/navigate-link';

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="bg-card border-b">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => navigate(paths.root.root)}
        >
          <img
            className="mx-auto h-12 w-auto"
            alt="Yagya.ai Logo"
            src="https://yagya.ai/favicon.png"
            width={46}
            height={23}
          />
          <span className="text-xl font-bold text-primary">Yagya.ai</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <LinkTo to={paths.root.aboutUs.root} variant="accent">
            About Us
          </LinkTo>
          <LinkTo to={paths.root.blogs.root} variant="accent">
            Blogs
          </LinkTo>
          <LinkTo to={paths.root.faqs.root} variant="accent">
            FAQs
          </LinkTo>
          <LinkTo to={paths.root.contactUs.root} variant="accent">
            Contact Us
          </LinkTo>
        </nav>

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            className="text-primary"
            onClick={() => navigate(paths.auth.login)}
          >
            Log In
          </Button>
          <Button
            // className="bg-[#FFA500] text-white hover:bg-[#FF8C00]"
            onClick={() => navigate(paths.auth.register)}
          >
            Sign Up
          </Button>
          {/* <Button variant="destructive" onClick={() => {}}>
            Sign Out
          </Button> */}
        </div>
      </div>
    </header>
  );
}

export const Header2 = () => {
  return <div>Header</div>;
};

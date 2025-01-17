'use client';
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { paths } from '@/routes';
import { LinkTo } from './ui/navigate-link';
import { useAuth } from '@/hooks/use-auth';
import { removeClientAccessToken } from '@/api/axios';

export default function Header() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    if (isAuthenticated) {
      setLoggedIn(true);
    }
  }, []);
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
          <LinkTo to={paths.root.aboutUs.root} variant="default">
            About Us
          </LinkTo>
          <LinkTo to={paths.root.blogs.root} variant="default">
            Blogs
          </LinkTo>
          <LinkTo to={paths.root.faqs.root} variant="default">
            FAQs
          </LinkTo>
          <LinkTo to={paths.root.contactUs.root} variant="default">
            Contact Us
          </LinkTo>
        </nav>
        {loggedIn ? (
          <Button
            variant="destructive"
            onClick={() => {
              removeClientAccessToken();
            }}
          >
            Sign Out
          </Button>
        ) : (
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-primary"
              onClick={() => navigate(paths.auth.login)}
            >
              Log In
            </Button>
            <Button
              // className="bg-primary text-white hover:bg-primary/90"
              onClick={() => navigate(paths.auth.register)}
            >
              Sign Up
            </Button>
            {/* <Button variant="destructive" onClick={() => {}}>
            Sign Out
            </Button> */}
          </div>
        )}
      </div>
    </header>
  );
}

export const Header2 = () => {
  return <div>Header</div>;
};

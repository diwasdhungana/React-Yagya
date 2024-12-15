import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Youtube,
  Twitter,
  Instagram,
  Linkedin,
  Heart,
  Globe,
  ExternalLink,
  Phone,
  Mail,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex text-align-center gap-3 ">
              <img
                className="w-auto  h-9"
                alt="Yagya.ai"
                src="https://yagya.ai/favicon.png"
                width={46}
                height={23}
              />
              <span className="text-xl  font-bold   text-primary">Yagya.ai</span>
            </div>
            {/* <div className="flex items-center space-x-2 cursor-pointer">
        <Image className="mx-auto h-12 w-auto"  alt="Yagya.ai Logo"
          src="https://yagya.ai/favicon.png"
          width={46}
          height={23}
          
        />
          <span className="text-xl font-bold text-primary">Yagya.ai</span>
        </div> */}
            <p className="text-primary text-sm">
              Empowering innovation through AI-driven exploration and collaborative learning.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary hover:text-foreground">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary hover:text-foreground">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary hover:text-foreground">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary hover:text-foreground">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/docs"
                  className="text-primary hover:text-foreground text-sm flex items-center"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="/community"
                  className="text-primary hover:text-foreground text-sm flex items-center"
                >
                  Community
                </a>
              </li>
              <li>
                <a
                  href="/partner"
                  className="text-primary hover:text-foreground text-sm flex items-center"
                >
                  Partner Program
                </a>
              </li>
              <li>
                <a
                  href="/success"
                  className="text-primary hover:text-foreground text-sm flex items-center"
                >
                  Success Stories
                </a>
              </li>
            </ul>
          </div>

          {/* Support & Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-primary">Support & Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/support"
                  className="text-primary hover:text-foreground text-sm flex items-center"
                >
                  Contact Support
                  <Badge variant="secondary" className="ml-2 bg-orange-100">
                    Help Center
                  </Badge>
                </a>
              </li>
              <li>
                <div className="flex items-center text-sm">
                  <span className="text-primary">API Status</span>
                  <Badge variant="secondary" className="ml-2 bg-green-100">
                    99.9%
                  </Badge>
                </div>
              </li>
              <li>
                <a
                  href="tel:+977984615165"
                  className="text-primary hover:text-foreground text-sm flex items-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  +977 984615165
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@yagya.ai"
                  className="text-primary hover:text-foreground text-sm flex items-center"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  info@yagya.ai
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Settings */}
          <div className="space-y-4">
            <h3 className="font-semibold text-primary">Legal & Settings</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/privacy"
                  className="text-primary hover:text-foreground text-sm flex items-center"
                >
                  Privacy Policy
                  <Badge variant="secondary" className="ml-2">
                    Updated
                  </Badge>
                </a>
              </li>
              <li>
                <a href="/terms" className="text-primary hover:text-foreground text-sm">
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/gdpr"
                  className="text-primary hover:text-foreground text-sm flex items-center"
                >
                  GDPR
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a
                  href="/ccpa"
                  className="text-primary hover:text-foreground text-sm flex items-center"
                >
                  CCPA
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-1 text-sm text-primary">
            <span>© 2024 Yagya.ai</span>
            <span>•</span>
            <span className="flex items-center">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> in Nepal
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="text-primary">
              <Globe className="w-4 h-4 mr-2" />
              English
            </Button>
            <a href="/feedback" className="text-sm text-primary hover:text-foreground">
              Feedback
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

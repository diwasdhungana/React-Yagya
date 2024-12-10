// src/app/auth/signup/components/SignupSocialButtons.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Linkedin, Facebook, Mail } from "lucide-react";
import { signIn } from "next-auth/react";

const Icons = {
  linkedin: Linkedin,
  facebook: Facebook,
  google: Mail,
};

interface SocialSignupButtonsProps {
  onLinkedInSignup: () => void;
}

export function SignupSocialButtons({
  onLinkedInSignup,
}: SocialSignupButtonsProps) {
  return (
    <>
      <Button onClick={onLinkedInSignup} variant="outline" className="w-full">
        <Icons.linkedin className="mr-2 h-4 w-4" />
        Sign up with LinkedIn
      </Button>
      <Button variant="outline" className="w-full" onClick={()=>{
        signIn('google')
      }}>
        <Icons.google className="mr-2 h-4 w-4" />
        Sign up with Google
      </Button>
      <Button variant="outline" className="w-full" onClick={()=>{
        signIn('facebook')
      }}>
        <Icons.facebook className="mr-2 h-4 w-4" />
        Sign up with Facebook
      </Button>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">Or continue with</span>
        </div>
      </div>
    </>
  );
}

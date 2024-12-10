// src/app/auth/signup/components/SignupForm.tsx
'use client';

import { useState } from 'react';
import { Navigate, useNavigate, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Checkbox } from '@/components/ui/checkbox';
import { useRegister } from '@/hooks/api/auth';
import { getPasswordStrength } from '@/utilities/passwordStrength';
// import { SignupSocialButtons } from './SignupSocialButtons';
import { LinkedInDialog } from './LinkedInDialog';

export function SignupForm() {
  const [isOrganization, setIsOrganization] = useState(false);
  const [password, setPassword] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [showLinkedInConfirmation, setShowLinkedInConfirmation] = useState(false);
  const [linkedInData, setLinkedInData] = useState({ name: '', email: '' });

  const { mutate: registerUser, isPending, error } = useRegister();
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    registerUser(
      {
        variables: {
          email: data.email as string,
          firstName: isOrganization
            ? (data.contactName as string)
            : (data.fullName as string)?.split(' ')[0] || (data.fullName as string),
          lastName: isOrganization ? '' : (data.fullName as string)?.split(' ')[1] || '',
          userName: (data.username as string) || '',
          password: data.password as string,
          image: '',
          chatsCreated: [],
          isOrganization: isOrganization,
          confirmPassword: data.confirmPassword as string,
          agreedToTerms: agreedToTerms,
          ...(isOrganization
            ? {
                orgName: data.orgName as string,
                category: data.category as string,
              }
            : {}),
        },
      },
      {
        onSuccess: () => {
          navigate('/auth/login');
        },
        onError: (error) => {
          console.error('Registration error:', error.message);
        },
      }
    );
  };

  const handleLinkedInSignup = () => {
    // Simulate LinkedIn OAuth process
    setTimeout(() => {
      setLinkedInData({
        name: 'John Doe',
        email: 'john.doe@example.com',
      });
      setShowLinkedInConfirmation(true);
    }, 1000);
  };

  const confirmLinkedInSignup = () => {
    // Process LinkedIn signup
    setShowLinkedInConfirmation(false);
    // Additional LinkedIn signup logic can go here
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm font-medium text-gray-700">Individual</span>
        <Switch
          checked={isOrganization}
          onCheckedChange={setIsOrganization}
          aria-label="Toggle between Individual and Organization signup"
        />
        <span className="text-sm font-medium text-gray-700">Organization</span>
      </div>

      {/* <SignupSocialButtons onLinkedInSignup={handleLinkedInSignup} /> */}

      <form onSubmit={handleSubmit}>
        {isOrganization ? (
          <>
            <div className="space-y-2">
              <Label htmlFor="orgName">Organization Name</Label>
              <Input id="orgName" name="orgName" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select name="category">
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {/* Organization categories */}
                  <SelectItem value="cooperative">Cooperative</SelectItem>
                  <SelectItem value="startup">Startup</SelectItem>
                  {/* ... other categories ... */}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="contactName">Contact Persons Name</Label>
              <Input id="contactName" name="contactName" required />
            </div>
          </>
        ) : (
          <>
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input id="fullName" name="fullName" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="username">Username (optional)</Label>
              <Input id="username" name="username" />
            </div>
          </>
        )}

        {/* Rest of the form fields similar to the original implementation */}
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" name="email" type="email" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="text-sm text-gray-500">
            Password strength: {getPasswordStrength(password)}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input id="confirmPassword" name="confirmPassword" type="password" required />
        </div>

        <div className="flex items-center space-x-2 mt-4">
          <Checkbox
            id="terms"
            checked={agreedToTerms}
            onCheckedChange={() => setAgreedToTerms(!agreedToTerms)}
          />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I agree to the{' '}
            <NavLink to="/terms" className="text-primary hover:underline">
              Terms of Service
            </NavLink>{' '}
            and{' '}
            <NavLink to="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </NavLink>
          </label>
        </div>

        {error && <div className="text-red-500 text-sm mt-2">{error.message}</div>}

        <Button type="submit" className="w-full mt-6" disabled={!agreedToTerms || isPending}>
          {isPending ? 'Signing Up...' : 'Sign Up'}
        </Button>
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <span
            className="font-medium inline-block text-primary hover:underline cursor-pointer"
            onClick={() => navigate('/auth/signin')}
          >
            Sign in
          </span>
        </p>
      </form>

      <LinkedInDialog
        isOpen={showLinkedInConfirmation}
        onOpenChange={setShowLinkedInConfirmation}
        linkedInData={linkedInData}
        onConfirm={confirmLinkedInSignup}
      />
    </div>
  );
}

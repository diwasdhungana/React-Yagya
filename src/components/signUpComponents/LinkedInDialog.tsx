// src/app/auth/signup/components/LinkedInDialog.tsx
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

interface LinkedInDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  linkedInData: { name: string; email: string };
  onConfirm: () => void;
}

export function LinkedInDialog({
  isOpen,
  onOpenChange,
  linkedInData,
  onConfirm,
}: LinkedInDialogProps) {
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm LinkedIn Signup</DialogTitle>
          <DialogDescription>
            Please review the information imported from your LinkedIn profile:
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <Label>Name</Label>
            <Input value={linkedInData.name} readOnly />
          </div>
          <div>
            <Label>Email</Label>
            <Input value={linkedInData.email} readOnly />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="linkedinTerms"
              checked={agreedToTerms}
              onCheckedChange={() => setAgreedToTerms(!agreedToTerms)}
            />
            <label
              htmlFor="linkedinTerms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I agree to the Terms of Service and Privacy Policy
            </label>
          </div>
          <Button onClick={onConfirm} className="w-full" disabled={!agreedToTerms}>
            Complete Signup with LinkedIn
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

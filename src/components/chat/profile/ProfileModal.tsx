import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import * as Accordion from '@radix-ui/react-accordion';
import { X, ChevronDown } from 'lucide-react';
import { ProfileHeader } from './sections/ProfileHeader';
import { InterestsSection } from './sections/InterestsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { SocialSection } from './sections/SocialSection';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProfileModal({ isOpen, onClose }: ProfileModalProps) {
  const [name, setName] = useState('John Doe');
  const [interests, setInterests] = useState('');
  const [goals, setGoals] = useState('');
  const [projects, setProjects] = useState<
    Array<{ title: string; description: string; link?: string }>
  >([]);
  const [socialLinks, setSocialLinks] = useState({
    linkedin: '',
    instagram: '',
    youtube: '',
  });
  const [completion] = useState(40);

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-xl shadow-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <Dialog.Title className="text-2xl font-bold text-gray-900">
              Profile Settings
            </Dialog.Title>
            <Dialog.Close className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <X className="h-5 w-5" />
            </Dialog.Close>
          </div>

          <ProfileHeader name={name} email="john@example.com" onNameChange={setName} />

          <Accordion.Root type="single" collapsible className="space-y-4">
            <Accordion.Item value="interests" className="border rounded-lg overflow-hidden">
              <Accordion.Trigger className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
                <span className="font-semibold">Interests & Focus Areas</span>
                <ChevronDown className="h-5 w-5" />
              </Accordion.Trigger>
              <Accordion.Content className="p-4 bg-gray-50">
                <InterestsSection
                  interests={interests}
                  goals={goals}
                  onInterestsChange={setInterests}
                  onGoalsChange={setGoals}
                />
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="projects" className="border rounded-lg overflow-hidden">
              <Accordion.Trigger className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
                <span className="font-semibold">Projects & Achievements</span>
                <ChevronDown className="h-5 w-5" />
              </Accordion.Trigger>
              <Accordion.Content className="p-4 bg-gray-50">
                <ProjectsSection projects={projects} onProjectsChange={setProjects} />
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="social" className="border rounded-lg overflow-hidden">
              <Accordion.Trigger className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
                <span className="font-semibold">Social Media Links</span>
                <ChevronDown className="h-5 w-5" />
              </Accordion.Trigger>
              <Accordion.Content className="p-4 bg-gray-50">
                <SocialSection links={socialLinks} onLinksChange={setSocialLinks} />
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>

          {/* Profile Completion */}
          <div className="mt-6">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-600">Profile Completion</span>
              <span className="font-medium">{completion}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-purple-600 h-2.5 rounded-full transition-all"
                style={{ width: `${completion}%` }}
              />
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Save Changes
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

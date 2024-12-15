import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Mic } from 'lucide-react';

interface MainInputSectionProps {
  onSubmit: (input: string) => void;
}

export default function MainInputSection({ onSubmit }: MainInputSectionProps) {
  const [input, setInput] = useState('');
  const [showTips, setShowTips] = useState(false);

  const handleSubmit = () => {
    if (input.trim().length > 0) {
      onSubmit(input);
    }
  };

  return (
    <div className="container max-w-2xl mx-auto px-6 py-16">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2 text-primary">Welcome to Yagya.ai</h1>
        <p className="text-lg text-primary/80">
          Tell us about yourself and share your ideas. Let's explore together.
        </p>
      </div>
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="space-y-4">
          <div className="relative">
            <Textarea
              placeholder="Tell us about yourself and an idea or involvement you'd like to explore, enhance, or initiate. What impact do you hope to make?"
              className="min-h-[200px] text-base border-0 focus:ring-0 resize-none bg-transparent placeholder:text-primary/60 pb-10"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 bottom-2 text-primary hover:bg-transparent"
            >
              <Mic className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex items-center justify-between">
            <Button
              variant="link"
              onClick={() => setShowTips(!showTips)}
              className="text-primary hover:text-primary/80 px-0"
            >
              Input Tips
            </Button>
            <span className="text-sm text-primary/80">{input.length}/500</span>
          </div>

          {showTips && (
            <div className="bg-primary/10 p-4 rounded-lg space-y-2">
              <h3 className="font-semibold text-primary">Tips for a Great Input:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-primary/80">
                <li>Be specific about your goals and aspirations</li>
                <li>Mention any relevant skills or experiences</li>
                <li>Describe the impact you hope to make</li>
                <li>Include any challenges you're facing</li>
                <li>Share your vision for the future</li>
              </ul>
            </div>
          )}

          <div className="flex justify-center pt-4">
            <Button
              size="lg"
              onClick={handleSubmit}
              disabled={!input.trim()}
              className="px-8 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full"
            >
              Start Exploration
            </Button>
          </div>
        </div>
      </div>
         
    </div>
  );
}

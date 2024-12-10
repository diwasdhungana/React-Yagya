import React from "react";
import { History, Star } from "lucide-react";

export function FoundingStory() {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 mb-8">
        <History className="w-6 h-6 text-[#FFA500]" />
        <h3 className="text-2xl font-bold text-[#8B4513]">
          Our Founding Story
        </h3>
      </div>

      <div className="prose prose-lg text-[#654321] max-w-none">
        <p>
          Yagya.ai was born from a vision of connecting changemakers and
          amplifying their impact. The journey began with our founder, Rohit
          Yuvvrajchandra Budhathoki, who spent four transformative years in the
          social impact space, experiencing firsthand the challenges that
          individuals and organizations face when trying to create positive
          change.
        </p>

        <div className="my-6 bg-[#FFF5E6] p-6 rounded-lg border-l-4 border-[#FFA500]">
          <p className="text-[#8B4513] italic">
            &quot; Through his own experiences as a changemaker and
            entrepreneur, Rohit observed a recurring pattern: passionate
            individuals and innovative organizations often worked in isolation,
            unaware of potential collaborators or valuable resources that could
            amplify their impact. &quot;
          </p>
        </div>

        <p>
          This realization sparked a mission: to create a platform that would
          bridge these gaps, using cutting-edge technology to connect
          changemakers with the right people, resources, and opportunities. Over
          the past four years, this vision has evolved into Yagya.ai, combining
          advanced AI and Large Language Models with a deep understanding of
          what changemakers truly need to succeed.
        </p>
      </div>
    </div>
  );
}

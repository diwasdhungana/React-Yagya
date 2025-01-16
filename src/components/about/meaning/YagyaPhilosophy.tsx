import React from 'react';
import { CircleUserRound, Network, Target } from 'lucide-react';

export function YagyaPhilosophy() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="order-2 lg:order-1 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <CircleUserRound className="w-8 h-8 text-primary mb-4" />
            <h4 className="text-xl font-semibold text-secondary mb-2">Modern Adaptation</h4>
            <p className="text-secondary/80">
              Channeling the power of selflessness and collective action into a modern, AI-driven
              platform.
            </p>
          </div>
          <div className="bg-gradient-to-br from-primary/10 to-background p-6 rounded-xl">
            <Network className="w-8 h-8 text-primary mb-4" />
            <h4 className="text-xl font-semibold text-secondary mb-2">United Purpose</h4>
            <p className="text-secondary/80">
              Uniting changemakers, organizations, and resources to achieve impactful outcomes for
              the common good.
            </p>
          </div>
        </div>
        <div className="mt-6 md:mt-12">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <Target className="w-8 h-8 text-primary mb-4" />
            <h4 className="text-xl font-semibold text-secondary mb-2">Driving Change</h4>
            <p className="text-secondary/80">
              Creating a space where collaboration, shared purpose, and mutual growth thrive to
              address global challenges.
            </p>
          </div>
        </div>
      </div>

      <div className="order-1 lg:order-2 space-y-6">
        <h3 className="text-2xl md:text-3xl font-bold text-secondary">
          Philosophical Significance
        </h3>
        <p className="text-lg text-secondary/80 leading-relaxed">
          Yagya.ai embodies the timeless essence of Yagya by channeling the power of selflessness
          and collective action into a modern, AI-driven platform. Just as a traditional Yagya
          brings people together in shared devotion, our platform unites changemakers,
          organizations, and resources to achieve impactful outcomes for the common good.
        </p>
        <p className="text-lg text-secondary/80 leading-relaxed">
          This philosophy drives our mission: to create a space where collaboration, shared purpose,
          and mutual growth thrive. At Yagya.ai, every connection made and every resource shared is
          part of a greater effort to address global challenges, nurture innovation, and leave a
          lasting, positive mark on the world.
        </p>
      </div>
    </div>
  );
}

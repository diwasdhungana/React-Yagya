import React from "react";
import { ArrowRight, Sparkles, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutIntro() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-[#FFF5E6] rounded-full">
              <Sparkles className="w-4 h-4 text-[#FFA500] mr-2" />
              <span className="text-sm font-medium text-[#8B4513]">
                Empowering Changemakers
              </span>
            </div>

            <h2 className="text-4xl font-bold text-[#8B4513] leading-tight">
              Your AI-Powered Partner in Creating{" "}
              <span className="text-[#FFA500]">Positive Change</span>
            </h2>

            <p className="text-lg text-[#654321] leading-relaxed">
              Yagya.ai is an AI-powered platform designed to empower
              changemakers by simplifying the journey toward achieving impactful
              goals. We leverage cutting-edge technologies like advanced AI and
              Large Language Models (LLMs) to provide personalized
              recommendations and foster meaningful connections.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                className="bg-[#FFA500] hover:bg-[#FF8C00] text-white inline-flex items-center"
                size="lg"
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                className="text-[#8B4513] border-[#8B4513]"
                size="lg"
              >
                Learn More
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-[#FFF5E6] p-6 rounded-xl">
                <Users className="w-8 h-8 text-[#FFA500] mb-4" />
                <h3 className="text-xl font-semibold text-[#8B4513] mb-2">
                  Right Connections
                </h3>
                <p className="text-[#654321]">
                  Bridge gaps between passionate individuals, innovative
                  organizations, and valuable resources.
                </p>
              </div>
              <div className="bg-white border border-[#FFA500]/20 p-6 rounded-xl shadow-lg">
                <Target className="w-8 h-8 text-[#FFA500] mb-4" />
                <h3 className="text-xl font-semibold text-[#8B4513] mb-2">
                  Our Purpose
                </h3>
                <p className="text-[#654321]">
                  Create a seamless ecosystem of collaboration to drive forward
                  a brighter, more connected world.
                </p>
              </div>
            </div>
            <div className="space-y-6 sm:mt-12">
              <div className="bg-gradient-to-br from-[#FFA500]/10 to-[#FFF5E6] p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-[#8B4513] mb-2">
                  Our Mission
                </h3>
                <p className="text-[#654321]">
                  Empower you to innovate, grow, and create solutions that truly
                  matter—whether it's solving pressing challenges, exploring new
                  ideas, or scaling transformative initiatives.
                </p>
              </div>
              <div className="bg-white border border-[#FFA500]/20 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-[#8B4513] mb-2">
                  Impact Focus
                </h3>
                <p className="text-[#654321]">
                  Focus less on searching and more on driving real-world change
                  through meaningful collaborations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

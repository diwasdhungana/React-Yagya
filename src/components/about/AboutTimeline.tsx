import React from "react";
import { Card } from "@/components/ui/card";
import { Calendar, Award, Users, Rocket } from "lucide-react";

const milestones = [
  {
    icon: <Calendar className="w-6 h-6 text-[#FFA500]" />,
    year: "2023",
    title: "The Beginning",
    description: "Founded with a vision to democratize AI innovation.",
  },
  {
    icon: <Users className="w-6 h-6 text-[#FFA500]" />,
    year: "2023",
    title: "Growing Community",
    description: "Reached our first 1,000 active innovators.",
  },
  {
    icon: <Award className="w-6 h-6 text-[#FFA500]" />,
    year: "2024",
    title: "Recognition",
    description: "Named one of the most promising AI startups in South Asia.",
  },
  {
    icon: <Rocket className="w-6 h-6 text-[#FFA500]" />,
    year: "2024",
    title: "Global Expansion",
    description: "Launched partnerships across multiple continents.",
  },
];

export function AboutTimeline() {
  return (
    <section className="py-20 bg-[#FFF5E6]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#8B4513] mb-4">
            Our Journey
          </h2>
          <p className="text-lg text-[#654321] max-w-2xl mx-auto">
            From a simple idea to a global innovation platform, here&apos;s how
            we&apos;ve grown.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <Card
                key={index}
                className="p-6 relative hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white rounded-full">
                    {milestone.icon}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#FFA500] mb-1">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-semibold text-[#8B4513] mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-[#654321]">{milestone.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
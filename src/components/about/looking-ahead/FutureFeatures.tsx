import React from "react";
import { Card } from "@/components/ui/card";
import { Workflow, BarChart3, Trophy } from "lucide-react";

const features = [
  {
    icon: <Workflow className="w-6 h-6 text-[#FFA500]" />,
    title: "Seamless Collaboration Tools",
    items: [
      "Project Workspace for team collaboration",
      "Real-time synchronized work across time zones",
      "Resource Sharing Hub for valuable assets",
      "Smart Task Management with AI assistance",
    ],
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-[#FFA500]" />,
    title: "Enhanced Project Management",
    items: [
      "Intuitive Dashboards for project overview",
      "Impact Metrics to measure social impact",
      "Smart Resource Allocation systems",
      "Interactive Timeline Visualization",
    ],
  },
  {
    icon: <Trophy className="w-6 h-6 text-[#FFA500]" />,
    title: "Engaging Gamification",
    items: [
      "Achievement System with points and badges",
      "Impact Badges for social milestones",
      "Collaborative Community Challenges",
      "Gamified Skills Development paths",
    ],
  },
];

export function FutureFeatures() {
  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold text-[#8B4513] text-center mb-8">
        Innovative Features in Development
      </h3>

      <div className="grid md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="p-6 hover:shadow-lg transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="p-3 bg-white rounded-full w-fit">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold text-[#8B4513]">
                {feature.title}
              </h4>
              <ul className="space-y-2">
                {feature.items.map((item, idx) => (
                  <li key={idx} className="flex items-start text-[#654321]">
                    <span className="inline-block w-2 h-2 mt-2 mr-2 bg-[#FFA500] rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

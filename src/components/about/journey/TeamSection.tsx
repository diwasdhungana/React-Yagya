import React from "react";
import { Users, Code, Brain, Shield, LineChart } from "lucide-react";
import { Card } from "@/components/ui/card";

const teamRoles = [
  {
    icon: <Code className="w-5 h-5 text-[#FFA500]" />,
    title: "Skilled Software Engineers",
    description: "Crafting robust and intuitive solutions",
  },
  {
    icon: <Brain className="w-5 h-5 text-[#FFA500]" />,
    title: "AI Specialists",
    description: "Developing sophisticated recommendation systems",
  },
  {
    icon: <LineChart className="w-5 h-5 text-[#FFA500]" />,
    title: "Data Scientists",
    description: "Ensuring our platform learns and adapts effectively",
  },
  {
    icon: <Users className="w-5 h-5 text-[#FFA500]" />,
    title: "Social Impact Experts",
    description: "Providing deep insight into changemaker needs",
  },
  {
    icon: <Shield className="w-5 h-5 text-[#FFA500]" />,
    title: "Security Specialists",
    description: "Protecting our users and their data",
  },
];

export function TeamSection() {
  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-3">
        <Users className="w-6 h-6 text-[#FFA500]" />
        <h3 className="text-2xl font-bold text-[#8B4513]">
          The Team Behind the Vision
        </h3>
      </div>

      <p className="text-lg text-[#654321]">
        Today, Yagya.ai is powered by a rapidly growing team of passionate
        individuals who share a common goal: to make positive change more
        accessible and impactful. Our team brings together diverse expertise and
        perspectives:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {teamRoles.map((role, index) => (
          <Card
            key={index}
            className="p-4 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-[#FFF5E6] rounded-full">{role.icon}</div>
              <div>
                <h4 className="font-semibold text-[#8B4513]">{role.title}</h4>
                <p className="text-sm text-[#654321]">{role.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <p className="text-lg text-[#654321] italic text-center">
        Each team member brings not just technical expertise, but also a genuine
        commitment to our mission of empowering changemakers worldwide.
      </p>
    </div>
  );
}

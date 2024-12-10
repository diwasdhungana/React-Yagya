import React from "react";
import { Card } from "@/components/ui/card";
import { Code2, Users, Brain, ChartBar } from "lucide-react";

const integrationPoints = [
  {
    icon: <Code2 className="w-5 h-5 text-[#FFA500]" />,
    title: "User Experience",
    description:
      "Designing intuitive interfaces that embody our values of accessibility and inclusion",
  },
  {
    icon: <Brain className="w-5 h-5 text-[#FFA500]" />,
    title: "AI Algorithms",
    description:
      "Developing ethical AI that promotes collaboration and diverse perspectives",
  },
  {
    icon: <Users className="w-5 h-5 text-[#FFA500]" />,
    title: "Community",
    description:
      "Building features that foster meaningful connections and collective action",
  },
  {
    icon: <ChartBar className="w-5 h-5 text-[#FFA500]" />,
    title: "Impact Metrics",
    description:
      "Measuring success through the lens of sustainable, positive change",
  },
];

export function ValuesIntegration() {
  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold text-[#8B4513] text-center mb-8">
        How We Live Our Values
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {integrationPoints.map((point, index) => (
          <Card key={index} className="p-4 hover:shadow-md transition-shadow">
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 p-2 bg-[#FFF5E6] rounded-full">
                {point.icon}
              </div>
              <h4 className="font-semibold text-[#8B4513] mb-2">
                {point.title}
              </h4>
              <p className="text-sm text-[#654321]">{point.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

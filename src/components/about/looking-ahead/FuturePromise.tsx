import React from "react";
import { Card } from "@/components/ui/card";
import { Lightbulb, Users, Target, LineChart } from "lucide-react";

const promises = [
  {
    icon: <Lightbulb className="w-5 h-5 text-[#FFA500]" />,
    title: "Innovation",
    description:
      "Continuously improving our platform with cutting-edge technology",
  },
  {
    icon: <Users className="w-5 h-5 text-[#FFA500]" />,
    title: "Accessibility",
    description: "Ensuring our tools remain accessible to all changemakers",
  },
  {
    icon: <Target className="w-5 h-5 text-[#FFA500]" />,
    title: "Community",
    description:
      "Growing our global community while maintaining meaningful connections",
  },
  {
    icon: <LineChart className="w-5 h-5 text-[#FFA500]" />,
    title: "Impact",
    description:
      "Measuring and amplifying the positive change we create together",
  },
];

export function FuturePromise() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-[#8B4513] mb-4">
          Our Promise for the Future
        </h3>
        <p className="text-lg text-[#654321] max-w-2xl mx-auto">
          The future of Yagya.ai is not just about technological
          advancement—it&apos;s about creating a global ecosystem where positive
          change can flourish.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {promises.map((promise, index) => (
          <Card key={index} className="p-4 hover:shadow-md transition-shadow">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="p-2 bg-[#FFF5E6] rounded-full">
                {promise.icon}
              </div>
              <h4 className="font-semibold text-[#8B4513]">{promise.title}</h4>
              <p className="text-sm text-[#654321]">{promise.description}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-lg text-[#654321] italic">
          Join us as we write the next chapter of this exciting journey,
          expanding our reach and amplifying our collective impact on the world.
        </p>
      </div>
    </div>
  );
}
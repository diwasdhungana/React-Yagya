import React from "react";
import { Shield, Eye, Users, LineChart } from "lucide-react";
import { Card } from "@/components/ui/card";

const trustPillars = [
  {
    icon: <Shield className="w-6 h-6 text-[#FFA500]" />,
    title: "Security & Privacy",
    points: [
      "Industry-standard security measures",
      "Transparent data handling practices",
      "Clear privacy policies",
      "Regular security audits",
    ],
  },
  {
    icon: <Eye className="w-6 h-6 text-[#FFA500]" />,
    title: "Transparent AI",
    points: [
      "Explainable AI recommendations",
      "Clear technology communication",
      "Regular platform updates",
      "Open development process",
    ],
  },
  {
    icon: <Users className="w-6 h-6 text-[#FFA500]" />,
    title: "User-Centric Practices",
    points: [
      "Community guidelines",
      "Verification processes",
      "Open feedback channels",
      "Dedicated support team",
    ],
  },
  {
    icon: <LineChart className="w-6 h-6 text-[#FFA500]" />,
    title: "Impact Measurement",
    points: [
      "Transparent impact tracking",
      "Regular community reporting",
      "Clear success metrics",
      "Open sharing of progress",
    ],
  },
];

export function TrustSection() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-[#8B4513] mb-4">
          Building Trust Through Transparency
        </h3>
        <p className="text-lg text-[#654321] max-w-2xl mx-auto">
          Trust is the foundation of everything we do at Yagya.ai. We've built
          our platform with several key commitments:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {trustPillars.map((pillar, index) => (
          <Card
            key={index}
            className="p-6 hover:shadow-lg transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-[#FFF5E6] rounded-full">
                  {pillar.icon}
                </div>
                <h4 className="text-xl font-semibold text-[#8B4513]">
                  {pillar.title}
                </h4>
              </div>
              <ul className="space-y-2">
                {pillar.points.map((point, idx) => (
                  <li key={idx} className="flex items-start text-[#654321]">
                    <span className="inline-block w-2 h-2 mt-2 mr-2 bg-[#FFA500] rounded-full" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>

      <div className="bg-[#FFF5E6] p-6 rounded-lg">
        <h4 className="text-xl font-semibold text-[#8B4513] mb-4">
          Our Commitment to You
        </h4>
        <p className="text-[#654321] mb-4">
          We understand that trust is earned through consistent actions and
          transparency. As we continue to grow and evolve, we remain committed
          to:
        </p>
        <ul className="space-y-2">
          <li className="flex items-center text-[#654321]">
            <span className="inline-block w-2 h-2 mr-2 bg-[#FFA500] rounded-full" />
            Maintaining the highest standards of security and privacy
          </li>
          <li className="flex items-center text-[#654321]">
            <span className="inline-block w-2 h-2 mr-2 bg-[#FFA500] rounded-full" />
            Being transparent about our technology and practices
          </li>
          <li className="flex items-center text-[#654321]">
            <span className="inline-block w-2 h-2 mr-2 bg-[#FFA500] rounded-full" />
            Continuously improving based on user feedback
          </li>
          <li className="flex items-center text-[#654321]">
            <span className="inline-block w-2 h-2 mr-2 bg-[#FFA500] rounded-full" />
            Staying true to our mission of empowering changemakers
          </li>
        </ul>
      </div>
    </div>
  );
}

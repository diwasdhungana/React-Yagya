import React from "react";
import { Flame, Heart, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const meanings = [
  {
    icon: <Flame className="w-8 h-8 text-[#FFA500]" />,
    title: "Traditional Ritual",
    description:
      "A sacred offering, often involving fire rituals, performed with devotion to the Supreme.",
  },
  {
    icon: <Heart className="w-8 h-8 text-[#FFA500]" />,
    title: "Selfless Action",
    description:
      "As illustrated in the Bhagavad Gita, any action carried out with selfless intent to contribute to society's well-being.",
  },
  {
    icon: <Users className="w-8 h-8 text-[#FFA500]" />,
    title: "Collective Effort",
    description:
      "The Yajur Veda emphasizes the dynamic collaboration of individuals to explore and utilize nature's resources for collective benefit.",
  },
];

export function YagyaCulturalRoots() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h3 className="text-2xl md:text-3xl font-bold text-[#8B4513]">
          Cultural Roots
        </h3>
        <p className="text-lg text-[#654321] leading-relaxed">
          The word &quot;Yagya&quot; originates from ancient Sanskrit, embodying
          profound meanings rooted in Hindu philosophy. It carries a rich
          heritage that highlights three primary layers of meaning, each
          contributing to our understanding of collective action and shared
          purpose.
        </p>
        <p className="text-lg text-[#654321] leading-relaxed">
          At its heart, Yagya celebrates the spirit of giving, sacrifice, and
          working together to achieve something greater than oneself.
        </p>
      </div>

      <div className="grid gap-6">
        {meanings.map((meaning, index) => (
          <Card
            key={index}
            className="p-6 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-[#FFF5E6] rounded-full">
                {meaning.icon}
              </div>
              <div>
                <h4 className="text-xl font-semibold text-[#8B4513] mb-2">
                  {meaning.title}
                </h4>
                <p className="text-[#654321]">{meaning.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

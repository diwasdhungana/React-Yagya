import React from "react";
import { ValueCard } from "./values/ValueCard";
import { ValuesIntegration } from "./values/ValuesIntegration";
import { valuesData } from "./values/ValuesData";

export function AboutValues() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#8B4513] mb-4">
            Our Core Values
          </h2>
          <p className="text-lg text-[#654321] max-w-2xl mx-auto">
            At Yagya.ai, our values are more than just words—they&apos;re the
            principles that guide every decision we make and every feature we
            build. These core values reflect our commitment to creating a
            platform that truly serves humanity&apos;s collective progress.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {valuesData.map((value, index) => (
            <ValueCard
              key={index}
              icon={<value.icon className="w-6 h-6 text-[#FFA500]" />}
              title={value.title}
              description={value.description}
              details={value.details}
            />
          ))}
        </div>

        <ValuesIntegration />
      </div>
    </section>
  );
}

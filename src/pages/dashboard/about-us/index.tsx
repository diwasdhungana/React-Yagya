import React from "react";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutIntro } from "@/components/about/AboutIntro";
import { YagyaMeaning } from "@/components/about/meaning/YagyaMeaning";
import { AboutMission } from "@/components/about/AboutMission";
import { AboutValues } from "@/components/about/AboutValues";
import { AboutFeatures } from "@/components/about/AboutFeatures";
import { AboutHelp } from "@/components/about/AboutHelp";
import { AboutJourney } from "@/components/about/AboutJourney";
import { AboutLookingAhead } from "@/components/about/AboutLookingAhead";
import { AboutJoinUs } from "@/components/about/AboutJoinUs";

export default function AboutUs() {
  return (
    <div className="bg-background min-h-screen">
      <AboutHero />
      <AboutIntro />
      <YagyaMeaning />
      <AboutMission />
      <AboutValues />
      <AboutFeatures />
      <AboutHelp />
      <AboutJourney />
      <AboutLookingAhead />
      <AboutJoinUs />
    </div>
  );
}

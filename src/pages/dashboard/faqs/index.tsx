import React from "react";
import { FAQsHero } from "@/components/faqs/FAQsHero";
import { FAQsContent } from "@/components/faqs/FAQsContent";

export default function FAQs() {
  return (
    <div className="bg-[#FFFAF0] min-h-screen">
      <FAQsHero />
      <FAQsContent />
    </div>
  );
}

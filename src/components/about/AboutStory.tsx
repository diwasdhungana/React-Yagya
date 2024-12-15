import React from "react";
import { StoryHighlight } from "./story/StoryHighlight";
import { StoryNarrative } from "./story/StoryNarrative";

export function AboutStory() {
  return (
    <section className="py-24 bg-primary/5">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Story
            </h2>
            <p className="text-lg text-primary/80">
              A journey of innovation, collaboration, and positive change
            </p>
          </div>

          <StoryNarrative />
          <StoryHighlight />
        </div>
      </div>
    </section>
  );
}

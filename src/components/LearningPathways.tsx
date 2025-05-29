import React from "react";

export default function LearningPathways(): JSX.Element {
  return (
    <section className="relative overflow-hidden pt-2 md:pt-20 pb-10 px-20">
      <div className="container mx-auto px-4">
        <div className="text-left mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#761587] font-[Poppins,sans-serif]">
            Learning Pathways
          </h2>
        </div>
        <div className="mx-auto">
          <p className="text-black font-[Poppins,sans-serif] text-sm px-4">
            Our Learning Pathways are structured, personalized routes designed specifically
            for students to acquire knowledge and skills in STEAM (Science, Technology,
            Engineering, Arts, and Mathematics). These pathways ensure a logical progression
            from foundational concepts to advanced topics, helping individuals achieve their
            educational and career goals through a systematic, goal-oriented approach.
          </p>
        </div>
      </div>
    </section>
  );
}

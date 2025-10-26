import { useState } from "react";
import { CheckCircle, BookOpen, HandHeart, Users, Calendar } from "lucide-react";

const features = [
  {
    icon: CheckCircle,
    label: "Real Implementation",
    description: "Every challenge has a City department champion ready to adopt winning solutions. This isn't just demos—it's civic procurement.",
  },
  {
    icon: BookOpen,
    label: "Open Source by Design",
    description: "All civic solutions default to open source licensing so the City can actually use them. We've pre-cleared the legal pathway.",
  },
  {
    icon: HandHeart,
    label: "$10K Prize Money",
    description: "Winners get mentorship from CoStar and City staff, plus $10k in prize money to help pilot their solutions.",
  },
  {
    icon: Users,
    label: "Built for Everyone",
    description: "Not just for coders. We need designers, data analysts, policy experts, and community organizers. If you care about Richmond, there's a role for you.",
  },
  {
    icon: Calendar,
    label: "A 10-Year Vision",
    description: "This isn't a one-off. It's the first annual civic innovation weekend that becomes a Richmond tradition.",
  },
];

export const WhatMakesDifferent = () => {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);

  return (
    <section id="different" className="py-16 md:py-20 bg-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
              Not Just Another Hackathon
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Click to learn what makes this event different
            </p>
          </div>

          {/* Compact Features Bubbles */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
            {features.map((feature, index) => (
              <button
                key={index}
                onClick={() => setSelectedFeature(selectedFeature === index ? null : index)}
                className={`inline-flex items-center gap-2 px-4 py-3 bg-card rounded-full border-2 shadow-sm hover:shadow-elegant transition-smooth ${
                  selectedFeature === index
                    ? "border-accent bg-accent/5"
                    : "border-border hover:border-accent/50"
                }`}
              >
                <feature.icon className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm font-semibold text-card-foreground whitespace-nowrap">
                  {feature.label}
                </span>
              </button>
            ))}
          </div>

          {/* Description Panel */}
          {selectedFeature !== null && (
            <div className="bg-card p-6 rounded-xl border-2 border-accent/30 shadow-elegant animate-fade-in">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  {(() => {
                    const Feature = features[selectedFeature];
                    return <Feature.icon className="w-6 h-6 text-accent" />;
                  })()}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-card-foreground mb-2">
                    {features[selectedFeature].label}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {features[selectedFeature].description}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

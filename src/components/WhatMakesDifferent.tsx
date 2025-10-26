import { CheckCircle, BookOpen, HandHeart, Users, Calendar } from "lucide-react";

const features = [
  { icon: CheckCircle, label: "Real Implementation" },
  { icon: BookOpen, label: "Open Source by Design" },
  { icon: HandHeart, label: "$10K Prize Money" },
  { icon: Users, label: "Built for Everyone" },
  { icon: Calendar, label: "A 10-Year Vision" },
];

export const WhatMakesDifferent = () => {
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
              Every challenge has a City department champion. Winners get 6-month mentorship, $10k in prizes, and their solutions actually implemented.
            </p>
          </div>

          {/* Compact Features Bubbles */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-2 px-4 py-3 bg-card rounded-full border-2 border-border hover:border-accent/50 shadow-sm hover:shadow-elegant transition-smooth cursor-default"
              >
                <feature.icon className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm font-semibold text-card-foreground whitespace-nowrap">
                  {feature.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

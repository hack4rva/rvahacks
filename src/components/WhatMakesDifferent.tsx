import { CheckCircle, BookOpen, HandHeart, Users, Calendar } from "lucide-react";

const features = [
  {
    icon: CheckCircle,
    headline: "Real Implementation",
    text: "Every challenge has a City department champion ready to adopt winning solutions. This isn't just demos—it's civic procurement.",
  },
  {
    icon: BookOpen,
    headline: "Open Source by Design",
    text: "All civic solutions default to open source licensing so the City can actually use them. We've pre-cleared the legal pathway.",
  },
  {
    icon: HandHeart,
    headline: "6-Month Support",
    text: "Winners get mentorship from CoStar and City staff, plus micro-grants ($1K-5K) to help pilot their solutions.",
  },
  {
    icon: Users,
    headline: "Built for Everyone",
    text: "Not just for coders. We need designers, data analysts, policy experts, and community organizers. If you care about Richmond, there's a role for you.",
  },
  {
    icon: Calendar,
    headline: "A 10-Year Vision",
    text: "This isn't a one-off. It's the first annual civic innovation weekend that becomes a Richmond tradition.",
  },
];

export const WhatMakesDifferent = () => {
  return (
    <section id="different" className="py-20 md:py-32 bg-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Not Just Another Hackathon
            </h2>
          </div>

          {/* Features List */}
          <div className="space-y-20">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-8 md:gap-12`}
              >
                {/* Icon Side */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    {/* Background shape */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl transform rotate-6" />
                    <div className="relative w-24 h-24 md:w-32 md:h-32 bg-card rounded-2xl shadow-elegant flex items-center justify-center">
                      <feature.icon className="w-12 h-12 md:w-16 md:h-16 text-accent" />
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-left" : "md:text-right"} text-center`}>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {feature.headline}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

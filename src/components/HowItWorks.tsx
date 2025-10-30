import { Users, Presentation, MessageSquare, Code, Trophy } from "lucide-react";

const steps = [
  {
    icon: Users,
    title: "Team Formation",
    description: "Lead or join a team",
    color: "from-blue-500/20 to-blue-600/20",
    iconColor: "text-blue-600"
  },
  {
    icon: Presentation,
    title: "Kick-Off",
    description: "101 on Danny's 7 pillars",
    color: "from-purple-500/20 to-purple-600/20",
    iconColor: "text-purple-600"
  },
  {
    icon: MessageSquare,
    title: "Deep-Dive",
    description: "SME presentations & Q&A",
    color: "from-green-500/20 to-green-600/20",
    iconColor: "text-green-600"
  },
  {
    icon: Code,
    title: "2 Days of Hacking",
    description: "Friday & Saturday",
    color: "from-orange-500/20 to-orange-600/20",
    iconColor: "text-orange-600"
  },
  {
    icon: Trophy,
    title: "Finalist Pitch & Awards",
    description: "Sunday",
    color: "from-yellow-500/20 to-yellow-600/20",
    iconColor: "text-yellow-600"
  }
];

export const HowItWorks = () => {
  return (
    <section id="how" className="py-16 md:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Your journey from idea to impact
            </p>
          </div>

          {/* Desktop Flow */}
          <div className="hidden md:block relative">
            {/* Connection Line */}
            <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 via-green-400 via-orange-400 to-yellow-400 opacity-30" />
            
            <div className="grid grid-cols-5 gap-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative">
                    {/* Step Card */}
                    <div className="bg-card rounded-2xl border border-border shadow-elegant hover:shadow-hover transition-smooth p-6 relative z-10">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 mx-auto`}>
                        <Icon className={`w-8 h-8 ${step.iconColor}`} />
                      </div>
                      <div className="text-center">
                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm mb-3">
                          {index + 1}
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-2">
                          {step.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Arrow */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-24 -right-2 z-20">
                        <div className="w-4 h-4 rotate-45 bg-gradient-to-br from-primary/40 to-accent/40" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Flow */}
          <div className="md:hidden space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="flex gap-4 items-start">
                    <div className="flex flex-col items-center">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-7 h-7 ${step.iconColor}`} />
                      </div>
                      {index < steps.length - 1 && (
                        <div className="w-0.5 h-12 bg-gradient-to-b from-primary/40 to-accent/40 my-2" />
                      )}
                    </div>
                    <div className="bg-card rounded-xl border border-border shadow-elegant p-4 flex-1">
                      <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary font-bold text-sm mb-2">
                        {index + 1}
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-1">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

import { Building, Bike, Heart, Sprout } from "lucide-react";

const challenges = [
  {
    icon: Building,
    title: "Urban Development",
    description:
      "Create tools to improve city planning, housing accessibility, and neighborhood development.",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Bike,
    title: "Transportation",
    description:
      "Design solutions for better public transit, bike infrastructure, and traffic management.",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: Heart,
    title: "Community Health",
    description:
      "Build platforms that connect residents with health resources and promote wellness.",
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
  {
    icon: Sprout,
    title: "Sustainability",
    description:
      "Develop innovations for environmental protection, clean energy, and green spaces.",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
];

export const Challenges = () => {
  return (
    <section id="challenges" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Challenge Tracks
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Choose a track that resonates with you and build solutions that
            address Richmond's most pressing needs. Each track offers unique
            opportunities to make a real difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="group bg-card p-6 rounded-xl shadow-elegant hover:shadow-hover transition-smooth border border-border hover:border-primary/20 cursor-pointer"
            >
              <div
                className={`w-14 h-14 rounded-xl ${challenge.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth`}
              >
                <challenge.icon className={`w-7 h-7 ${challenge.color}`} />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">
                {challenge.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            More challenge details and specific problem statements will be
            announced closer to the event.
          </p>
        </div>
      </div>
    </section>
  );
};

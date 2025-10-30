import { Users, Target, Calendar, DollarSign, Gift } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Participants",
  },
  {
    icon: Target,
    value: "7",
    label: "City Goals",
  },
  {
    icon: Calendar,
    value: "2 Days",
    label: "Friday AM - Saturday PM",
  },
  {
    icon: DollarSign,
    value: "$10K",
    label: "Prize Money",
  },
  {
    icon: Gift,
    value: "Free",
    label: "Registration, lunch, swag",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
            What We're Building
          </h2>

          <p className="text-lg text-foreground/90 leading-relaxed text-center mb-12 max-w-3xl mx-auto">
            Hack for RVA brings together Richmond's brightest minds to solve
            real problems for the City of Richmond.
          </p>

          <div className="max-w-md mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent>
                {stats.map((stat, index) => (
                  <CarouselItem key={index}>
                    <div className="bg-card p-8 rounded-xl shadow-elegant hover:shadow-hover transition-smooth border border-border">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                          <stat.icon className="w-6 h-6 text-accent" />
                        </div>
                      </div>
                      <div className="text-4xl font-bold text-accent mb-2">
                        {stat.value}
                      </div>
                      <div className="text-base text-muted-foreground font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

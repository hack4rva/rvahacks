import { useState, useEffect } from "react";
import { Calendar, Clock } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Countdown = () => {
  const targetDate = new Date("2026-03-06T10:00:00").getTime();
  
  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="py-16 md:py-20 bg-accent/5 border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Calendar className="w-6 h-6 text-accent" />
              <Clock className="w-6 h-6 text-accent" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">
              Countdown to Hack for RVA
            </h2>
            <p className="text-muted-foreground text-lg">
              March 6-8, 2026 • CoStar Headquarters, Richmond
            </p>
          </div>

          {/* Countdown Display */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {timeBlocks.map((block, index) => (
              <div
                key={block.label}
                className="bg-card rounded-xl p-6 shadow-elegant border border-border hover:border-accent/40 transition-smooth"
              >
                <div className="text-center">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-2 font-mono">
                    {String(block.value).padStart(2, "0")}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground font-semibold uppercase tracking-wider">
                    {block.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Countdown = () => {
  const targetDate = new Date("2026-03-27T10:00:00").getTime();
  
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

  return (
    <section className="py-6 bg-accent/5 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 sm:gap-6">
          <span className="text-base text-foreground font-semibold hidden sm:inline">Starts in</span>
          <div className="flex items-center gap-1 sm:gap-2 md:gap-3 font-mono">
            <TimeBlock value={timeLeft.days} label="d" />
            <span className="text-xl sm:text-2xl text-muted-foreground font-light">:</span>
            <TimeBlock value={timeLeft.hours} label="h" />
            <span className="text-xl sm:text-2xl text-muted-foreground font-light">:</span>
            <TimeBlock value={timeLeft.minutes} label="m" />
            <span className="text-xl sm:text-2xl text-muted-foreground font-light">:</span>
            <TimeBlock value={timeLeft.seconds} label="s" />
          </div>
        </div>
      </div>
    </section>
  );
};

const TimeBlock = ({ value, label }: { value: number; label: string }) => (
  <div className="flex items-baseline gap-0.5 sm:gap-1">
    <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-accent">
      {String(value).padStart(2, "0")}
    </span>
    <span className="text-xs sm:text-sm text-muted-foreground font-medium">{label}</span>
  </div>
);

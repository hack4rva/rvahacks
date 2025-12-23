import { useState } from "react";
import { awardTiers, prizeTimeline, prizePoolTotal, type PrizeAward } from "@/data";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Award, Star, ChevronRight } from "lucide-react";

// Track badge colors mapping
const getTrackStyle = (award: PrizeAward) => {
  const trackMatch = award.title.match(/Track (\d)/);
  const trackNum = trackMatch ? trackMatch[1] : null;
  
  const colorMap: Record<string, { bg: string; border: string; text: string; hex: string }> = {
    'blue': { bg: 'bg-blue-500/20', border: 'border-blue-500/50', text: 'text-blue-600 dark:text-blue-400', hex: '#3b82f6' },
    'red': { bg: 'bg-red-500/20', border: 'border-red-500/50', text: 'text-red-600 dark:text-red-400', hex: '#ef4444' },
    'purple': { bg: 'bg-purple-500/20', border: 'border-purple-500/50', text: 'text-purple-600 dark:text-purple-400', hex: '#a855f7' },
    'emerald': { bg: 'bg-emerald-500/20', border: 'border-emerald-500/50', text: 'text-emerald-600 dark:text-emerald-400', hex: '#10b981' },
    'green': { bg: 'bg-green-500/20', border: 'border-green-500/50', text: 'text-green-600 dark:text-green-400', hex: '#22c55e' },
    'amber': { bg: 'bg-amber-500/20', border: 'border-amber-500/50', text: 'text-amber-600 dark:text-amber-400', hex: '#f59e0b' },
    'cyan': { bg: 'bg-cyan-500/20', border: 'border-cyan-500/50', text: 'text-cyan-600 dark:text-cyan-400', hex: '#06b6d4' },
  };
  
  const colorKey = Object.keys(colorMap).find(key => award.color?.includes(key)) || 'blue';
  return { ...colorMap[colorKey], trackNum };
};

interface TrackBadgeProps {
  award: PrizeAward;
  isSelected: boolean;
  onClick: () => void;
}

const TrackBadge = ({ award, isSelected, onClick }: TrackBadgeProps) => {
  const style = getTrackStyle(award);
  const shortTitle = award.title.replace(/Track \d: /, '');
  
  return (
    <button
      onClick={onClick}
      className={`group inline-flex items-center gap-2 px-4 py-3 rounded-full border-2 transition-all duration-300 ${
        isSelected
          ? `${style.border} ${style.bg} shadow-lg scale-105`
          : `border-border hover:border-muted-foreground/50 bg-card hover:bg-muted/50 hover:scale-[1.02]`
      }`}
    >
      <div 
        className={`w-7 h-7 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 transition-transform duration-300 ${isSelected ? 'scale-110' : 'group-hover:scale-105'}`}
        style={{ backgroundColor: style.hex }}
      >
        {style.trackNum}
      </div>
      <span className="text-sm font-semibold text-card-foreground whitespace-nowrap">
        {shortTitle}
      </span>
      <span className={`text-xs font-bold ${style.text}`}>
        {award.amount}
      </span>
      <ChevronRight 
        className={`w-4 h-4 text-muted-foreground transition-all duration-300 ${
          isSelected ? 'rotate-90 opacity-100' : 'opacity-0 group-hover:opacity-50'
        }`} 
      />
    </button>
  );
};

interface PrizesGridProps {
  className?: string;
  showTimeline?: boolean;
}

export const PrizesGrid = ({ className = "", showTimeline = true }: PrizesGridProps) => {
  // Start with first track expanded by default
  const [selectedTrack, setSelectedTrack] = useState<number | null>(0);
  
  const grandPrize = awardTiers[0];
  const runnerUpPrizes = awardTiers.slice(1, 3);
  const trackAwards = awardTiers.slice(3);
  
  return (
    <div className={className}>
      {/* Prize Pool Hero Banner */}
      <div className="relative mb-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 via-pink-500/20 to-violet-500/20 rounded-2xl" />
        <div className="relative px-6 py-8 text-center rounded-2xl border border-accent/20">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Trophy className="w-6 h-6 text-yellow-500" />
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Total Prize Pool</span>
            <Trophy className="w-6 h-6 text-yellow-500" />
          </div>
          <p className="text-5xl md:text-6xl font-black text-foreground tracking-tight">
            {prizePoolTotal}
          </p>
          <p className="text-sm text-muted-foreground mt-2">in prizes and recognition</p>
        </div>
      </div>

      {/* Horizontal Timeline */}
      {showTimeline && (
        <div className="mb-12 max-w-4xl mx-auto">
          <div className="relative flex items-center justify-between">
            {/* Timeline connector line */}
            <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-accent/50 via-accent to-accent/50 -translate-y-1/2 z-0" />
            
            {prizeTimeline.map((item, index) => (
              <div key={index} className="relative z-10 flex flex-col items-center text-center px-2">
                <div className="w-4 h-4 rounded-full bg-accent border-4 border-background mb-2 shadow-md" />
                <div className="bg-background px-3 py-1 rounded-lg">
                  <p className="text-xs font-bold text-accent whitespace-nowrap">{item.label}</p>
                  <p className="text-xs text-muted-foreground whitespace-nowrap">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Grand Prize - Hero Treatment */}
      <div className="mb-10">
        <div className="relative max-w-lg mx-auto">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-yellow-500/20 blur-3xl rounded-full scale-75 animate-pulse" />
          
          <Card className="relative border-2 border-yellow-500 bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
            <CardContent className="py-8 px-6 text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Trophy className="w-10 h-10 text-white" />
              </div>
              <p className="text-xs font-medium text-yellow-600 dark:text-yellow-400 uppercase tracking-widest mb-1">
                Grand Prize
              </p>
              <p className="text-4xl md:text-5xl font-black text-foreground mb-1">{grandPrize.amount}</p>
              <p className="text-lg font-bold text-foreground">{grandPrize.title}</p>
              <p className="text-sm text-muted-foreground mt-2">{grandPrize.description}</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Runner-Up Prizes - Side by Side */}
      <div className="mb-12">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-muted-foreground/30" />
          <h3 className="text-lg font-semibold text-foreground text-center">Runner-Up Prizes</h3>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-muted-foreground/30" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {runnerUpPrizes.map((prize, index) => {
            const Icon = index === 0 ? Star : Award;
            const iconColor = prize.color?.includes('pink') ? 'text-pink-500' : 'text-violet-500';
            const bgColor = prize.color?.includes('pink') ? 'from-pink-500/10 to-pink-600/5' : 'from-violet-500/10 to-violet-600/5';
            
            return (
              <Card 
                key={index} 
                className={`border-2 ${prize.color?.split(' ')[0] || 'border-border'} bg-gradient-to-br ${bgColor} transition-all duration-300 hover:shadow-lg hover:scale-[1.02]`}
              >
                <CardContent className="py-6 px-4 text-center">
                  <div className={`w-12 h-12 rounded-full ${prize.color?.includes('pink') ? 'bg-pink-500/20' : 'bg-violet-500/20'} flex items-center justify-center mx-auto mb-3`}>
                    <Icon className={`w-6 h-6 ${iconColor}`} />
                  </div>
                  <p className="text-2xl font-bold text-foreground mb-1">{prize.amount}</p>
                  <p className="text-sm font-semibold text-foreground">{prize.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{prize.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Track Awards Section */}
      <div className="mb-6">
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-muted-foreground/30" />
          <h3 className="text-lg font-semibold text-foreground text-center">Track Bounties</h3>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-muted-foreground/30" />
        </div>
        <p className="text-center text-sm text-muted-foreground mb-6">
          $1,000 each · One award for each of the Mayor's 7 Tracks
        </p>
      </div>

      {/* Interactive Track Badges - Wave Pattern */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {trackAwards.map((award, index) => (
          <div 
            key={index} 
            className="animate-fade-in"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <TrackBadge
              award={award}
              isSelected={selectedTrack === index}
              onClick={() => setSelectedTrack(selectedTrack === index ? null : index)}
            />
          </div>
        ))}
      </div>

      {/* Expanded Detail Panel */}
      {selectedTrack !== null && (
        <div className="max-w-2xl mx-auto mb-6">
          <div 
            className="p-6 rounded-xl border-2 shadow-lg animate-fade-in"
            style={{ 
              borderColor: getTrackStyle(trackAwards[selectedTrack]).hex + '50',
              backgroundColor: getTrackStyle(trackAwards[selectedTrack]).hex + '10'
            }}
          >
            <div className="flex items-start gap-4">
              <div 
                className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0 shadow-lg"
                style={{ backgroundColor: getTrackStyle(trackAwards[selectedTrack]).hex }}
              >
                {getTrackStyle(trackAwards[selectedTrack]).trackNum}
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                  <h3 className="text-xl font-bold text-card-foreground">
                    {trackAwards[selectedTrack].title}
                  </h3>
                  <span 
                    className="text-xl font-black"
                    style={{ color: getTrackStyle(trackAwards[selectedTrack]).hex }}
                  >
                    {trackAwards[selectedTrack].amount}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {trackAwards[selectedTrack].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Note */}
      <div className="text-center mt-10 space-y-2 max-w-xl mx-auto">
        <p className="text-sm text-muted-foreground">
          Each Track category will have a winner recognized at the awards ceremony.
        </p>
        <p className="text-sm text-muted-foreground italic">
          Solutions may address multiple Tracks—judges will determine the best fit.
        </p>
      </div>
    </div>
  );
};

// Legacy named exports
export { awardTiers };
export const majorAwards: PrizeAward[] = awardTiers;
export const sponsorAwards: PrizeAward[] = [];
export const civicAwards: PrizeAward[] = [];

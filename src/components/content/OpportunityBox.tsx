interface OpportunityBoxProps {
  className?: string;
}

export const OpportunityBox = ({ className = "" }: OpportunityBoxProps) => {
  return (
    <div className={`bg-card p-6 md:p-8 rounded-xl border border-border shadow-elegant ${className}`}>
      <p className="text-muted-foreground mb-4 leading-relaxed">
        Richmond is at an inflection point. We have:
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="flex items-start gap-3">
          <span className="text-accent font-bold text-xl">✅</span>
          <div>
            <strong className="text-foreground">The Talent</strong>
            <p className="text-sm text-muted-foreground">Thousands of technologists at major RVA companies and VCU</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-accent font-bold text-xl">✅</span>
          <div>
            <strong className="text-foreground">The Leadership</strong>
            <p className="text-sm text-muted-foreground">Mayor Danny Avula with a clear action plan for Richmond's future</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-accent font-bold text-xl">✅</span>
          <div>
            <strong className="text-foreground">The Challenge</strong>
            <p className="text-sm text-muted-foreground">Build solutions that grow jobs, cut poverty, support small businesses, and create wealth for all Richmonders</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-accent font-bold text-xl">✅</span>
          <div>
            <strong className="text-foreground">The Moment</strong>
            <p className="text-sm text-muted-foreground">A city ready to show what public-private partnership can achieve</p>
          </div>
        </div>
      </div>
      <p className="text-foreground font-semibold mt-6 text-center">
        But we've never channeled this energy toward civic good. <span className="text-accent">Until now.</span>
      </p>
    </div>
  );
};


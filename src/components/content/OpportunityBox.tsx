import { opportunityItems, opportunityIntro, opportunityConclusion, opportunityCTA } from "@/data";

interface OpportunityBoxProps {
  className?: string;
}

export const OpportunityBox = ({ className = "" }: OpportunityBoxProps) => {
  return (
    <div className={`bg-card p-6 md:p-8 rounded-xl border border-border shadow-elegant ${className}`}>
      <p className="text-muted-foreground mb-4 leading-relaxed">
        {opportunityIntro}
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        {opportunityItems.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <span className="text-accent font-bold text-xl">✅</span>
            <div>
              <strong className="text-foreground">{item.title}</strong>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-foreground font-semibold mt-6 text-center">
        {opportunityConclusion} <span className="text-accent">{opportunityCTA}</span>
      </p>
    </div>
  );
};

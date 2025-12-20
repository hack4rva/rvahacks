import { AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { 
  pillars, 
  dataAmbassador, 
  getStatusStyle, 
  getPillarColorClasses, 
  getEcosystemProgress,
} from "@/data/pillarEcosystem";
import { Building2, Heart, Briefcase, Database, Check, Clock, AlertCircle } from "lucide-react";

export const PillarEcosystemAccordion = () => {
  const progress = getEcosystemProgress();
  const dataAmbassadorStatus = getStatusStyle(dataAmbassador.status);

  return (
    <AccordionItem value="pillars" className="border border-border rounded-xl bg-card overflow-hidden">
      <AccordionTrigger className="px-4 sm:px-6 py-4 hover:no-underline hover:bg-muted/50">
        <div className="flex items-center gap-3 sm:gap-4 w-full">
          <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center shrink-0">
            <Building2 className="w-5 h-5 text-yellow-600" />
          </div>
          <div className="flex-1 text-left min-w-0">
            <h3 className="font-semibold text-foreground text-sm sm:text-base">Pillar Ecosystem</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">7 pillars × 3 stakeholders each + Data Ambassador</p>
          </div>
          <Badge variant="outline" className="shrink-0 text-xs">
            {progress.confirmed}/{progress.total} confirmed
          </Badge>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-4 sm:px-6 pb-4">
        <p className="text-sm text-muted-foreground mb-4">
          Each pillar has a City Liaison, Nonprofit Partner, and Corporate Sponsor who present together at Friday kickoff. Nonprofit envoys serve as pillar judges on Sunday.
        </p>

        {/* Data Ambassador */}
        <div className="flex items-center justify-between p-3 rounded-lg bg-cyan-500/5 border border-cyan-500/20 mb-4">
          <div className="flex items-center gap-2">
            <Database className="w-4 h-4 text-cyan-500" />
            <span className="text-sm font-medium text-foreground">Data Ambassador</span>
            <span className="text-xs text-muted-foreground hidden sm:inline">(serves all pillars)</span>
          </div>
          <Badge 
            variant="outline" 
            className={`text-xs ${dataAmbassadorStatus.bg} ${dataAmbassadorStatus.text} border-transparent`}
          >
            {dataAmbassadorStatus.label}
          </Badge>
        </div>

        {/* Pillar Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {pillars.map((pillar) => {
            const colorClasses = getPillarColorClasses(pillar.color);
            const confirmedCount = [
              pillar.cityLiaison,
              pillar.nonprofitPartner,
              pillar.corporateSponsor
            ].filter(s => s.status === 'confirmed' || s.status === 'complete').length;

            return (
              <div 
                key={pillar.id} 
                className={`p-3 rounded-lg border ${colorClasses.border} ${colorClasses.bg}`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <pillar.icon className={`w-4 h-4 ${colorClasses.icon}`} />
                  <span className="font-medium text-foreground text-sm truncate">{pillar.shortTitle}</span>
                  <Badge variant="outline" className="text-xs ml-auto shrink-0">
                    {confirmedCount}/3
                  </Badge>
                </div>
                <div className="space-y-1">
                  <StakeholderMiniRow 
                    label="City" 
                    status={pillar.cityLiaison.status} 
                    name={pillar.cityLiaison.name}
                  />
                  <StakeholderMiniRow 
                    label="Nonprofit" 
                    status={pillar.nonprofitPartner.status}
                    name={pillar.nonprofitPartner.name}
                  />
                  <StakeholderMiniRow 
                    label="Corporate" 
                    status={pillar.corporateSponsor.status}
                    name={pillar.corporateSponsor.name}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-border text-xs">
          <div className="flex items-center gap-1 text-muted-foreground">
            <Check className="w-3 h-3 text-green-500" /> Confirmed
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Clock className="w-3 h-3 text-yellow-500" /> In Conversation
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <AlertCircle className="w-3 h-3 text-muted-foreground" /> Not Started
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

const StakeholderMiniRow = ({ 
  label, 
  status, 
  name 
}: { 
  label: string; 
  status: string;
  name?: string;
}) => {
  const getStatusIcon = () => {
    switch (status) {
      case 'confirmed':
      case 'complete':
        return <Check className="w-3 h-3 text-green-500" />;
      case 'in-conversation':
        return <Clock className="w-3 h-3 text-yellow-500" />;
      default:
        return <AlertCircle className="w-3 h-3 text-muted-foreground" />;
    }
  };

  return (
    <div className="flex items-center justify-between text-xs">
      <span className="text-muted-foreground">{label}</span>
      <div className="flex items-center gap-1">
        {name && <span className="text-foreground truncate max-w-[80px]">{name}</span>}
        {getStatusIcon()}
      </div>
    </div>
  );
};


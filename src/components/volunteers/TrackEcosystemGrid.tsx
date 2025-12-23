import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  tracks, 
  dataAmbassador, 
  getStatusStyle, 
  getTrackColorClasses, 
  getEcosystemProgress,
  type Track,
  type Stakeholder
} from "@/data/trackEcosystem";
import { Building2, Heart, Briefcase, Database, Users, Check, Clock, AlertCircle } from "lucide-react";

const StakeholderRow = ({ 
  label, 
  icon: Icon, 
  stakeholder 
}: { 
  label: string; 
  icon: React.ElementType; 
  stakeholder: Stakeholder;
}) => {
  const statusStyle = getStatusStyle(stakeholder.status);
  
  return (
    <div className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
      <div className="flex items-center gap-2">
        <Icon className="w-4 h-4 text-muted-foreground" />
        <span className="text-sm font-medium text-foreground">{label}</span>
      </div>
      <div className="flex items-center gap-2">
        {stakeholder.name && (
          <span className="text-sm text-muted-foreground">{stakeholder.name}</span>
        )}
        <Badge 
          variant="outline" 
          className={`text-xs ${statusStyle.bg} ${statusStyle.text} border-transparent`}
        >
          {stakeholder.status === 'confirmed' || stakeholder.status === 'complete' ? (
            <Check className="w-3 h-3 mr-1" />
          ) : stakeholder.status === 'in-conversation' ? (
            <Clock className="w-3 h-3 mr-1" />
          ) : (
            <AlertCircle className="w-3 h-3 mr-1" />
          )}
          {statusStyle.label}
        </Badge>
      </div>
    </div>
  );
};

const TrackCard = ({ track }: { track: Track }) => {
  const colorClasses = getTrackColorClasses(track.color);
  const confirmedCount = [
    track.cityPartner,
    track.communityPartner,
    track.corporatePartner
  ].filter(s => s.status === 'confirmed' || s.status === 'complete').length;
  
  return (
    <Card className={`${colorClasses.border} border-2 hover:shadow-elegant transition-smooth`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-lg ${colorClasses.bg} flex items-center justify-center`}>
              <track.icon className={`w-5 h-5 ${colorClasses.icon}`} />
            </div>
            <div>
              <CardTitle className="text-base">{track.title}</CardTitle>
              <p className="text-xs text-muted-foreground mt-0.5">{track.awardAmount} Award</p>
            </div>
          </div>
          <Badge variant="outline" className="text-xs shrink-0">
            {confirmedCount}/3
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
          {track.description}
        </p>
        <div className="space-y-0">
          <StakeholderRow 
            label="City Partner" 
            icon={Building2} 
            stakeholder={track.cityPartner} 
          />
          <StakeholderRow 
            label="Community Partner" 
            icon={Heart} 
            stakeholder={track.communityPartner} 
          />
          <StakeholderRow 
            label="Corporate Partner" 
            icon={Briefcase} 
            stakeholder={track.corporatePartner} 
          />
        </div>
      </CardContent>
    </Card>
  );
};

export const TrackEcosystemGrid = () => {
  const progress = getEcosystemProgress();
  const dataAmbassadorStatus = getStatusStyle(dataAmbassador.status);
  
  return (
    <div className="space-y-6">
      {/* Header with Progress */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
          Track Teams
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
          Each Track brings together City, Community, and Corporate partners to present at Friday kickoff and judge solutions.
        </p>
        
        {/* Progress Bar */}
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-muted-foreground">Stakeholder Recruitment</span>
            <span className="font-semibold text-foreground">
              {progress.confirmed}/{progress.total} confirmed ({progress.percentage}%)
            </span>
          </div>
          <Progress value={progress.percentage} className="h-2" />
        </div>
      </div>

      {/* Cross-Cutting Role: Data Ambassador */}
      <Card className="border-cyan-500/30 border-2 bg-cyan-500/5 max-w-2xl mx-auto">
        <CardContent className="pt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                <Database className="w-5 h-5 text-cyan-500" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Data Ambassador</p>
                <p className="text-xs text-muted-foreground">Cross-cutting role serving all 7 Tracks</p>
              </div>
            </div>
            <Badge 
              variant="outline" 
              className={`text-xs ${dataAmbassadorStatus.bg} ${dataAmbassadorStatus.text} border-transparent`}
            >
              {dataAmbassador.status === 'confirmed' || dataAmbassador.status === 'complete' ? (
                <Check className="w-3 h-3 mr-1" />
              ) : dataAmbassador.status === 'in-conversation' ? (
                <Clock className="w-3 h-3 mr-1" />
              ) : (
                <AlertCircle className="w-3 h-3 mr-1" />
              )}
              {dataAmbassadorStatus.label}
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-4 text-sm">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-emerald-500/10 text-emerald-600 border-transparent">
            <Check className="w-3 h-3 mr-1" /> Confirmed
          </Badge>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-yellow-500/10 text-yellow-600 border-transparent">
            <Clock className="w-3 h-3 mr-1" /> In Conversation
          </Badge>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-muted text-muted-foreground border-transparent">
            <AlertCircle className="w-3 h-3 mr-1" /> Not Started
          </Badge>
        </div>
      </div>

      {/* Track Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {tracks.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
        <Card className="border-border">
          <CardContent className="pt-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Building2 className="w-4 h-4 text-blue-500" />
              <span className="text-2xl font-bold text-foreground">7</span>
            </div>
            <p className="text-xs text-muted-foreground">City Partners</p>
          </CardContent>
        </Card>
        <Card className="border-border">
          <CardContent className="pt-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Heart className="w-4 h-4 text-pink-500" />
              <span className="text-2xl font-bold text-foreground">7</span>
            </div>
            <p className="text-xs text-muted-foreground">Community Partners</p>
          </CardContent>
        </Card>
        <Card className="border-border">
          <CardContent className="pt-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Briefcase className="w-4 h-4 text-emerald-500" />
              <span className="text-2xl font-bold text-foreground">7</span>
            </div>
            <p className="text-xs text-muted-foreground">Corporate Partners</p>
          </CardContent>
        </Card>
        <Card className="border-border">
          <CardContent className="pt-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Users className="w-4 h-4 text-accent" />
              <span className="text-2xl font-bold text-foreground">22</span>
            </div>
            <p className="text-xs text-muted-foreground">Total Stakeholders</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

// Backward compatibility alias
export const PillarEcosystemGrid = TrackEcosystemGrid;


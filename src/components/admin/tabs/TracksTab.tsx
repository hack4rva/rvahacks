import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { trackStakeholders } from "@/data/sponsorshipPipeline";

export const TracksTab = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="text-lg">🏛️</span>
          Track Stakeholders
        </CardTitle>
        <CardDescription>
          7 Tracks × 4 Roles — Each Track needs: Track Lead + City Partner + Corporate Partner + Community Partner
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* Mobile Card View */}
        <div className="block sm:hidden space-y-3">
          {trackStakeholders.map((track) => (
            <div key={track.id} className="border border-border rounded-lg p-3 bg-card">
              <div className="font-medium text-foreground mb-1">{track.id}. {track.name}</div>
              <p className="text-xs text-muted-foreground mb-3">{track.focus}</p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-muted-foreground">Lead:</span>
                  <p className={track.breakoutOwner ? 'text-accent font-medium' : 'text-muted-foreground italic'}>
                    {track.breakoutOwner || 'Unassigned'}
                  </p>
                </div>
                <div>
                  <span className="text-muted-foreground">City:</span>
                  <p className={track.cityPartnerRep ? 'text-accent font-medium' : 'text-muted-foreground italic'}>
                    {track.cityPartnerRep || 'Unassigned'}
                  </p>
                </div>
                <div>
                  <span className="text-muted-foreground">Corporate:</span>
                  <p className={track.corporatePartnerRep ? 'text-accent font-medium' : 'text-muted-foreground italic'}>
                    {track.corporatePartnerRep || 'Unassigned'}
                  </p>
                </div>
                <div>
                  <span className="text-muted-foreground">Community:</span>
                  <p className={track.communityPartnerRep ? 'text-accent font-medium' : 'text-muted-foreground italic'}>
                    {track.communityPartnerRep || 'Unassigned'}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Table View */}
        <div className="hidden sm:block overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-2 font-semibold">Track</th>
                <th className="text-left py-2 px-2 font-semibold">Track Lead</th>
                <th className="text-left py-2 px-2 font-semibold">City Partner</th>
                <th className="text-left py-2 px-2 font-semibold">Corporate Partner</th>
                <th className="text-left py-2 px-2 font-semibold">Community Partner</th>
              </tr>
            </thead>
            <tbody>
              {trackStakeholders.map((track) => (
                <tr key={track.id} className="border-b border-border/50">
                  <td className="py-3 px-2">
                    <span className="font-medium">{track.id}. {track.name}</span>
                    <p className="text-xs text-muted-foreground">{track.focus}</p>
                  </td>
                  <td className="py-3 px-2">
                    {track.breakoutOwner ? (
                      <span className="text-sm font-medium text-accent">{track.breakoutOwner}</span>
                    ) : (
                      <span className="text-xs text-muted-foreground italic">Unassigned</span>
                    )}
                  </td>
                  <td className="py-3 px-2">
                    {track.cityPartnerRep ? (
                      <span className="text-sm font-medium text-accent">{track.cityPartnerRep}</span>
                    ) : (
                      <span className="text-xs text-muted-foreground italic">Unassigned</span>
                    )}
                  </td>
                  <td className="py-3 px-2">
                    {track.corporatePartnerRep ? (
                      <span className="text-sm font-medium text-accent">{track.corporatePartnerRep}</span>
                    ) : (
                      <span className="text-xs text-muted-foreground italic">Unassigned</span>
                    )}
                  </td>
                  <td className="py-3 px-2">
                    {track.communityPartnerRep ? (
                      <span className="text-sm font-medium text-accent">{track.communityPartnerRep}</span>
                    ) : (
                      <span className="text-xs text-muted-foreground italic">Unassigned</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 p-4 bg-muted/30 rounded-lg">
          <h4 className="font-semibold mb-3">Track Coverage Summary</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-accent">
                {trackStakeholders.filter(t => t.breakoutOwner).length}/7
              </p>
              <p className="text-xs text-muted-foreground">Track Leads</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-accent">
                {trackStakeholders.filter(t => t.cityPartnerRep).length}/7
              </p>
              <p className="text-xs text-muted-foreground">City Partners</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-accent">
                {trackStakeholders.filter(t => t.corporatePartnerRep).length}/7
              </p>
              <p className="text-xs text-muted-foreground">Corporate Partners</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-accent">
                {trackStakeholders.filter(t => t.communityPartnerRep).length}/7
              </p>
              <p className="text-xs text-muted-foreground">Community Partners</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};


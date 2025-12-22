import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { pillarStakeholders } from "@/data/sponsorshipPipeline";

export const PillarsTab = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="text-lg">🏛️</span>
          Pillar Stakeholders
        </CardTitle>
        <CardDescription>
          7 Pillars × 4 Roles — Each pillar needs: Breakout Owner + City Hall Owner + Corporate Rep + Nonprofit Rep
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-2 font-semibold">Pillar</th>
                <th className="text-left py-2 px-2 font-semibold">Breakout Owner</th>
                <th className="text-left py-2 px-2 font-semibold">City Hall Owner</th>
                <th className="text-left py-2 px-2 font-semibold">Corporate Rep</th>
                <th className="text-left py-2 px-2 font-semibold">Nonprofit Rep</th>
              </tr>
            </thead>
            <tbody>
              {pillarStakeholders.map((pillar) => (
                <tr key={pillar.id} className="border-b border-border/50">
                  <td className="py-3 px-2">
                    <span className="font-medium">{pillar.id}. {pillar.name}</span>
                    <p className="text-xs text-muted-foreground">{pillar.focus}</p>
                  </td>
                  <td className="py-3 px-2">
                    {pillar.breakoutOwner ? (
                      <span className="text-sm font-medium text-accent">{pillar.breakoutOwner}</span>
                    ) : (
                      <span className="text-xs text-muted-foreground italic">Unassigned</span>
                    )}
                  </td>
                  <td className="py-3 px-2">
                    {pillar.cityHallOwner ? (
                      <span className="text-sm font-medium text-accent">{pillar.cityHallOwner}</span>
                    ) : (
                      <span className="text-xs text-muted-foreground italic">Unassigned</span>
                    )}
                  </td>
                  <td className="py-3 px-2">
                    {pillar.corporateRep ? (
                      <span className="text-sm font-medium text-accent">{pillar.corporateRep}</span>
                    ) : (
                      <span className="text-xs text-muted-foreground italic">Unassigned</span>
                    )}
                  </td>
                  <td className="py-3 px-2">
                    {pillar.nonprofitRep ? (
                      <span className="text-sm font-medium text-accent">{pillar.nonprofitRep}</span>
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
          <h4 className="font-semibold mb-3">Pillar Coverage Summary</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-accent">
                {pillarStakeholders.filter(p => p.breakoutOwner).length}/7
              </p>
              <p className="text-xs text-muted-foreground">Breakout Owners</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-accent">
                {pillarStakeholders.filter(p => p.cityHallOwner).length}/7
              </p>
              <p className="text-xs text-muted-foreground">City Hall Owners</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-accent">
                {pillarStakeholders.filter(p => p.corporateRep).length}/7
              </p>
              <p className="text-xs text-muted-foreground">Corporate Reps</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-accent">
                {pillarStakeholders.filter(p => p.nonprofitRep).length}/7
              </p>
              <p className="text-xs text-muted-foreground">Nonprofit Reps</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};


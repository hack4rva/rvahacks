import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link2 } from "lucide-react";
import { connectors } from "@/data/connectors";

export const ConnectorsTab = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Link2 className="w-5 h-5" />
          Connectors
        </CardTitle>
        <CardDescription>
          Key people who bridge networks and can make introductions to sponsors, partners, and community stakeholders
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
          {connectors.map((connector, idx) => (
            <div key={idx} className="border border-border rounded-lg p-3 sm:p-4 bg-card hover:bg-muted/30 transition-colors">
              <h5 className="font-bold text-foreground text-sm sm:text-base">{connector.name}</h5>
              <p className="text-xs text-muted-foreground mt-1 break-words">{connector.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};


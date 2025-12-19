/**
 * Data Asset Grid Component
 * Two-column grid showing existing and missing data assets
 */

import { CheckCircle2, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface DataAsset {
  name: string;
  description: string;
  source?: string;
  status?: string;
  quality?: "high" | "medium" | "low";
}

interface DataAssetGridProps {
  existingAssets: DataAsset[];
  missingAssets: DataAsset[];
}

const qualityColors = {
  high: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  medium: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
  low: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
};

export const DataAssetGrid = ({ existingAssets, missingAssets }: DataAssetGridProps) => {
  if (existingAssets.length === 0 && missingAssets.length === 0) {
    return (
      <p className="text-muted-foreground">Data ecosystem analysis to be completed.</p>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Existing Assets Column */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <CheckCircle2 className="w-5 h-5 text-green-600" />
          <h4 className="font-semibold text-green-800 dark:text-green-300">Existing Data Assets</h4>
        </div>
        <div className="space-y-3">
          {existingAssets.length > 0 ? (
            existingAssets.map((asset, idx) => (
              <Card key={idx} className="border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-950/20">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h5 className="font-medium text-foreground">{asset.name}</h5>
                    {asset.quality && (
                      <Badge className={qualityColors[asset.quality]} variant="secondary">
                        {asset.quality}
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{asset.description}</p>
                  {asset.source && (
                    <p className="text-xs text-muted-foreground">
                      <span className="font-medium">Source:</span> {asset.source}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="text-sm text-muted-foreground italic">No existing assets documented yet.</p>
          )}
        </div>
      </div>

      {/* Missing Assets Column */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <AlertCircle className="w-5 h-5 text-amber-600" />
          <h4 className="font-semibold text-amber-800 dark:text-amber-300">Missing Data Assets</h4>
        </div>
        <div className="space-y-3">
          {missingAssets.length > 0 ? (
            missingAssets.map((asset, idx) => (
              <Card key={idx} className="border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20">
                <CardContent className="p-4">
                  <h5 className="font-medium text-foreground mb-2">{asset.name}</h5>
                  <p className="text-sm text-muted-foreground mb-2">{asset.description}</p>
                  {asset.source && (
                    <p className="text-xs text-muted-foreground">
                      <span className="font-medium">Proposed Source:</span> {asset.source}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="text-sm text-muted-foreground italic">No gaps identified yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

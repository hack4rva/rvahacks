/**
 * Cross Reference Link Component
 * Styled inline badges that link to other pillar tabs
 */

import { Link2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface CrossReferenceLinkProps {
  pillarId: string;
  label: string;
  onClick: () => void;
}

export const CrossReferenceLink = ({ pillarId, label, onClick }: CrossReferenceLinkProps) => {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-1.5 group"
    >
      <Badge 
        variant="outline" 
        className="cursor-pointer hover:bg-primary/10 hover:border-primary/50 transition-colors"
      >
        <Link2 className="w-3 h-3 mr-1" />
        {label}
      </Badge>
    </button>
  );
};

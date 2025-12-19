/**
 * Insight Callout Component
 * Left-bordered boxes with light background for key insights
 */

import { ReactNode } from "react";
import { Lightbulb, AlertTriangle, Link2, Info } from "lucide-react";

type CalloutType = "insight" | "warning" | "dependency" | "recommendation" | "gap";

interface InsightCalloutProps {
  type: CalloutType;
  title: string;
  children: ReactNode;
}

const calloutStyles: Record<CalloutType, { border: string; bg: string; icon: typeof Lightbulb; iconColor: string }> = {
  insight: {
    border: "border-l-primary",
    bg: "bg-primary/5",
    icon: Lightbulb,
    iconColor: "text-primary"
  },
  warning: {
    border: "border-l-amber-500",
    bg: "bg-amber-50 dark:bg-amber-950/20",
    icon: AlertTriangle,
    iconColor: "text-amber-500"
  },
  dependency: {
    border: "border-l-blue-500",
    bg: "bg-blue-50 dark:bg-blue-950/20",
    icon: Link2,
    iconColor: "text-blue-500"
  },
  recommendation: {
    border: "border-l-green-500",
    bg: "bg-green-50 dark:bg-green-950/20",
    icon: Lightbulb,
    iconColor: "text-green-500"
  },
  gap: {
    border: "border-l-amber-500",
    bg: "bg-amber-50 dark:bg-amber-950/20",
    icon: Info,
    iconColor: "text-amber-600"
  }
};

export const InsightCallout = ({ type, title, children }: InsightCalloutProps) => {
  const styles = calloutStyles[type];
  const Icon = styles.icon;

  return (
    <div className={`border-l-4 ${styles.border} ${styles.bg} p-4 rounded-r-lg`}>
      <div className="flex items-start gap-3">
        <Icon className={`w-5 h-5 ${styles.iconColor} flex-shrink-0 mt-0.5`} />
        <div>
          <p className="text-sm font-semibold text-foreground mb-1">{title}</p>
          <div className="text-sm text-muted-foreground">{children}</div>
        </div>
      </div>
    </div>
  );
};

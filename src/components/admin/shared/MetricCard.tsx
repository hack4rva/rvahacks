import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string | number;
  label?: string;
  icon?: LucideIcon;
  trend?: string;
  status?: 'default' | 'success' | 'warning' | 'danger';
  onClick?: () => void;
  className?: string;
}

export const MetricCard = ({
  title,
  value,
  label,
  icon: Icon,
  trend,
  status = 'default',
  onClick,
  className,
}: MetricCardProps) => {
  const statusColors = {
    default: 'border-border',
    success: 'border-green-500 bg-green-50/50 dark:bg-green-950/20',
    warning: 'border-yellow-500 bg-yellow-50/50 dark:bg-yellow-950/20',
    danger: 'border-red-500 bg-red-50/50 dark:bg-red-950/20',
  };

  const valueColors = {
    default: 'text-foreground',
    success: 'text-green-600 dark:text-green-400',
    warning: 'text-yellow-600 dark:text-yellow-400',
    danger: 'text-red-600 dark:text-red-400',
  };

  return (
    <Card 
      className={cn(
        "transition-all",
        statusColors[status],
        onClick && "cursor-pointer hover:shadow-md hover:scale-[1.02]",
        className
      )}
      onClick={onClick}
    >
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              {title}
            </p>
            <p className={cn("text-2xl font-bold mt-1", valueColors[status])}>
              {value}
            </p>
            {label && (
              <p className="text-xs text-muted-foreground mt-0.5">{label}</p>
            )}
            {trend && (
              <p className="text-xs text-accent mt-1">{trend}</p>
            )}
          </div>
          {Icon && (
            <div className="p-2 rounded-lg bg-muted/50">
              <Icon className="w-5 h-5 text-muted-foreground" />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};


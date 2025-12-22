import { AlertTriangle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ActionItem {
  id: string;
  text: string;
  priority: 'critical' | 'high' | 'medium';
  section?: string;
  dueDate?: string;
}

interface ActionItemsBannerProps {
  items: ActionItem[];
  onItemClick?: (item: ActionItem) => void;
  maxItems?: number;
  className?: string;
}

export const ActionItemsBanner = ({ 
  items, 
  onItemClick, 
  maxItems = 5,
  className 
}: ActionItemsBannerProps) => {
  const displayItems = items.slice(0, maxItems);
  const hasMore = items.length > maxItems;
  
  const criticalCount = items.filter(i => i.priority === 'critical').length;
  const highCount = items.filter(i => i.priority === 'high').length;

  if (items.length === 0) {
    return null;
  }

  return (
    <div className={cn(
      "rounded-lg border p-4",
      criticalCount > 0 
        ? "border-red-500 bg-red-50/50 dark:bg-red-950/20" 
        : "border-yellow-500 bg-yellow-50/50 dark:bg-yellow-950/20",
      className
    )}>
      <div className="flex items-center gap-2 mb-3">
        <AlertTriangle className={cn(
          "w-5 h-5",
          criticalCount > 0 ? "text-red-500" : "text-yellow-500"
        )} />
        <h4 className="font-semibold text-foreground">Action Items</h4>
        <div className="flex gap-2 ml-auto">
          {criticalCount > 0 && (
            <span className="text-xs bg-red-100 text-red-800 px-2 py-0.5 rounded-full">
              {criticalCount} critical
            </span>
          )}
          {highCount > 0 && (
            <span className="text-xs bg-orange-100 text-orange-800 px-2 py-0.5 rounded-full">
              {highCount} high
            </span>
          )}
        </div>
      </div>

      <ul className="space-y-2">
        {displayItems.map((item) => (
          <li 
            key={item.id}
            className={cn(
              "flex items-center gap-2 text-sm",
              onItemClick && "cursor-pointer hover:text-accent"
            )}
            onClick={() => onItemClick?.(item)}
          >
            <span className={cn(
              "w-2 h-2 rounded-full flex-shrink-0",
              item.priority === 'critical' && "bg-red-500",
              item.priority === 'high' && "bg-orange-500",
              item.priority === 'medium' && "bg-yellow-500"
            )} />
            <span className="flex-1 text-foreground">{item.text}</span>
            {item.dueDate && (
              <span className="text-xs text-muted-foreground">{item.dueDate}</span>
            )}
            {onItemClick && (
              <ArrowRight className="w-4 h-4 text-muted-foreground" />
            )}
          </li>
        ))}
      </ul>

      {hasMore && (
        <p className="text-xs text-muted-foreground mt-2">
          +{items.length - maxItems} more items
        </p>
      )}
    </div>
  );
};


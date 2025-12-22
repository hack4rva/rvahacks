import { cn } from "@/lib/utils";

type StatusType = 
  | 'complete' 
  | 'in-progress' 
  | 'not-started' 
  | 'confirmed' 
  | 'contacted' 
  | 'meeting-scheduled'
  | 'open'
  | 'filled'
  | 'critical'
  | 'high'
  | 'medium'
  | 'low';

interface StatusBadgeProps {
  status: StatusType | string;
  className?: string;
  size?: 'sm' | 'md';
}

const statusStyles: Record<string, string> = {
  'complete': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
  'in-progress': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
  'not-started': 'bg-gray-100 text-gray-800 dark:bg-gray-800/30 dark:text-gray-400',
  'confirmed': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
  'contacted': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
  'meeting-scheduled': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400',
  'open': 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400',
  'filled': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
  'critical': 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
  'high': 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400',
  'medium': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
  'low': 'bg-gray-100 text-gray-600 dark:bg-gray-800/30 dark:text-gray-400',
};

const formatStatus = (status: string): string => {
  return status.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
};

export const StatusBadge = ({ status, className, size = 'sm' }: StatusBadgeProps) => {
  const style = statusStyles[status] || statusStyles['not-started'];
  
  return (
    <span 
      className={cn(
        "inline-flex items-center font-medium rounded-full",
        size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-2.5 py-1 text-sm',
        style,
        className
      )}
    >
      {formatStatus(status)}
    </span>
  );
};


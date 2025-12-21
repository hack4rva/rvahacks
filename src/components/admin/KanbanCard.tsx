import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, GripVertical } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Task {
  id: string;
  title: string;
  content: string | null;
  category: string;
  created_at: string;
  updated_at: string;
  assignee: string | null;
  due_date: string | null;
  priority: "low" | "medium" | "high" | "critical";
  status: "pending" | "in-progress" | "completed" | "blocked";
}

interface KanbanCardProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
}

const priorityColors = {
  critical: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
  high: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400",
  medium: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
  low: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
};

export function KanbanCard({ task, onEdit, onDelete }: KanbanCardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const isOverdue =
    task.due_date &&
    new Date(task.due_date) < new Date() &&
    task.status !== "completed";

  return (
    <Card
      ref={setNodeRef}
      style={style}
      className={cn(
        "p-3 mb-2 cursor-default bg-card border shadow-sm",
        "hover:shadow-md transition-shadow",
        isDragging && "opacity-50 shadow-lg rotate-2"
      )}
    >
      <div className="flex items-start gap-2">
        {/* Drag Handle */}
        <button
          {...attributes}
          {...listeners}
          className="mt-0.5 p-1 -ml-1 cursor-grab active:cursor-grabbing text-muted-foreground hover:text-foreground rounded hover:bg-muted"
        >
          <GripVertical className="w-4 h-4" />
        </button>

        <div className="flex-1 min-w-0">
          {/* Title */}
          <p className="font-medium text-sm truncate">{task.title}</p>

          {/* Meta row */}
          <div className="flex items-center gap-1.5 mt-1.5 flex-wrap">
            {/* Priority badge */}
            <span
              className={cn(
                "inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium",
                priorityColors[task.priority]
              )}
            >
              {task.priority}
            </span>

            {/* Category */}
            <span className="text-xs text-muted-foreground capitalize">
              {task.category.replace("-", " ")}
            </span>
          </div>

          {/* Assignee and Due Date */}
          <div className="flex items-center gap-2 mt-1.5 text-xs text-muted-foreground">
            {task.assignee && (
              <span className="truncate max-w-[100px]">{task.assignee}</span>
            )}
            {task.due_date && (
              <span
                className={cn(
                  "ml-auto",
                  isOverdue && "text-red-600 font-medium"
                )}
              >
                {new Date(task.due_date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}
              </span>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6"
            onClick={() => onEdit(task)}
            title="Edit"
          >
            <Edit className="w-3 h-3" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 text-muted-foreground hover:text-destructive"
            onClick={() => onDelete(task.id)}
            title="Delete"
          >
            <Trash2 className="w-3 h-3" />
          </Button>
        </div>
      </div>
    </Card>
  );
}


import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { KanbanCard, Task } from "./KanbanCard";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export type ColumnId = "pending" | "in-progress" | "completed" | "blocked";

interface KanbanColumnProps {
  id: ColumnId;
  title: string;
  tasks: Task[];
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
  onAddTask?: (status: ColumnId) => void;
}

const columnStyles: Record<ColumnId, string> = {
  pending: "border-t-gray-400",
  "in-progress": "border-t-blue-500",
  completed: "border-t-green-500",
  blocked: "border-t-red-500",
};

const columnBgStyles: Record<ColumnId, string> = {
  pending: "bg-gray-50 dark:bg-gray-900/20",
  "in-progress": "bg-blue-50/50 dark:bg-blue-900/10",
  completed: "bg-green-50/50 dark:bg-green-900/10",
  blocked: "bg-red-50/50 dark:bg-red-900/10",
};

export function KanbanColumn({
  id,
  title,
  tasks,
  onEdit,
  onDelete,
  onAddTask,
}: KanbanColumnProps) {
  const { setNodeRef, isOver } = useDroppable({ id });

  return (
    <div
      className={cn(
        "flex flex-col w-72 min-w-[280px] rounded-lg border-t-4",
        columnStyles[id],
        columnBgStyles[id]
      )}
    >
      {/* Column Header */}
      <div className="flex items-center justify-between p-3 border-b">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-sm">{title}</h3>
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-muted text-xs font-medium">
            {tasks.length}
          </span>
        </div>
        {onAddTask && (
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6"
            onClick={() => onAddTask(id)}
            title={`Add task to ${title}`}
          >
            <Plus className="w-4 h-4" />
          </Button>
        )}
      </div>

      {/* Column Content - Droppable Area */}
      <div
        ref={setNodeRef}
        className={cn(
          "flex-1 p-2 min-h-[200px] transition-colors",
          isOver && "bg-primary/5 ring-2 ring-primary/20 ring-inset rounded-b-lg"
        )}
      >
        <SortableContext
          items={tasks.map((t) => t.id)}
          strategy={verticalListSortingStrategy}
        >
          {tasks.length === 0 ? (
            <div className="flex items-center justify-center h-20 text-sm text-muted-foreground italic">
              No tasks
            </div>
          ) : (
            tasks.map((task) => (
              <KanbanCard
                key={task.id}
                task={task}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))
          )}
        </SortableContext>
      </div>
    </div>
  );
}


import { useState, useMemo } from "react";
import {
  DndContext,
  DragOverlay,
  closestCorners,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragStartEvent,
  DragEndEvent,
  DragOverEvent,
} from "@dnd-kit/core";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { KanbanColumn, ColumnId } from "./KanbanColumn";
import { KanbanCard, Task } from "./KanbanCard";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface KanbanBoardProps {
  tasks: Task[];
  onTasksChange: () => void;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
  onAddTask: (status: ColumnId) => void;
}

const columns: { id: ColumnId; title: string }[] = [
  { id: "pending", title: "Pending" },
  { id: "in-progress", title: "In Progress" },
  { id: "completed", title: "Completed" },
  { id: "blocked", title: "Blocked" },
];

export function KanbanBoard({
  tasks,
  onTasksChange,
  onEdit,
  onDelete,
  onAddTask,
}: KanbanBoardProps) {
  const { toast } = useToast();
  const [activeTask, setActiveTask] = useState<Task | null>(null);

  // Group tasks by status
  const tasksByColumn = useMemo(() => {
    const grouped: Record<ColumnId, Task[]> = {
      pending: [],
      "in-progress": [],
      completed: [],
      blocked: [],
    };

    tasks.forEach((task) => {
      const status = task.status as ColumnId;
      if (grouped[status]) {
        grouped[status].push(task);
      } else {
        // Fallback to pending if status doesn't match
        grouped.pending.push(task);
      }
    });

    // Sort each column by priority (critical first) then by due date
    const priorityOrder = { critical: 0, high: 1, medium: 2, low: 3 };
    Object.keys(grouped).forEach((key) => {
      grouped[key as ColumnId].sort((a, b) => {
        const priorityDiff = priorityOrder[a.priority] - priorityOrder[b.priority];
        if (priorityDiff !== 0) return priorityDiff;
        if (!a.due_date) return 1;
        if (!b.due_date) return -1;
        return new Date(a.due_date).getTime() - new Date(b.due_date).getTime();
      });
    });

    return grouped;
  }, [tasks]);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8, // Prevent accidental drags
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragStart(event: DragStartEvent) {
    const { active } = event;
    const task = tasks.find((t) => t.id === active.id);
    setActiveTask(task || null);
  }

  function handleDragOver(event: DragOverEvent) {
    // Could be used for visual feedback while dragging over columns
  }

  async function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    setActiveTask(null);

    if (!over) return;

    const taskId = active.id as string;
    const overId = over.id as string;

    // Determine the target column
    // If dropped on a task, get that task's column
    // If dropped on a column directly, use that column id
    let targetColumn: ColumnId;

    if (columns.find((c) => c.id === overId)) {
      // Dropped directly on a column
      targetColumn = overId as ColumnId;
    } else {
      // Dropped on a task - find which column that task is in
      const overTask = tasks.find((t) => t.id === overId);
      if (overTask) {
        targetColumn = overTask.status as ColumnId;
      } else {
        return;
      }
    }

    const draggedTask = tasks.find((t) => t.id === taskId);
    if (!draggedTask) return;

    // If status hasn't changed, no need to update
    if (draggedTask.status === targetColumn) return;

    // Optimistically update UI would happen here if we had local state
    // For now, we update Supabase and refetch

    try {
      const { error } = await supabase
        .from("admin_documents")
        .update({ status: targetColumn })
        .eq("id", taskId);

      if (error) throw error;

      toast({
        title: "Task moved",
        description: `Moved to ${columns.find((c) => c.id === targetColumn)?.title}`,
      });

      // Trigger refetch
      onTasksChange();
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Failed to update task";
      toast({
        variant: "destructive",
        title: "Error moving task",
        description: errorMessage,
      });
    }
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <div className="flex gap-4 overflow-x-auto pb-4">
        {columns.map((column) => (
          <KanbanColumn
            key={column.id}
            id={column.id}
            title={column.title}
            tasks={tasksByColumn[column.id]}
            onEdit={onEdit}
            onDelete={onDelete}
            onAddTask={onAddTask}
          />
        ))}
      </div>

      {/* Drag Overlay - the floating card that follows cursor */}
      <DragOverlay>
        {activeTask && (
          <div className="rotate-3 shadow-xl">
            <KanbanCard
              task={activeTask}
              onEdit={() => {}}
              onDelete={() => {}}
            />
          </div>
        )}
      </DragOverlay>
    </DndContext>
  );
}


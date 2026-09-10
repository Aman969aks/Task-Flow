import {
  Check,
  CalendarDays,
  MoreHorizontal,
  Pencil,
  Trash2,
  Flag,
} from "lucide-react";

import { useTasks } from "../../context/TaskContext";

function TaskItem({
  task,
  onEdit,
}) {
  const {
    toggleTask,
    deleteTask,
    projects,
    labels,
  } = useTasks();

  const project = projects.find(
    (p) => p.id === task.projectId
  );

  const taskLabels = labels.filter(
    (label) =>
      task.labelIds?.includes(label.id)
  );

  return (
    <div
      className={`task-row ${
        task.completed ? "completed" : ""
      }`}
    >
      <button
        className={`task-check priority-${task.priority}`}
        onClick={() =>
          toggleTask(task.id)
        }
      >
        {task.completed && (
          <Check size={13} />
        )}
      </button>

      <div className="task-main">
        <div className="task-title-row">
          <span className="task-title">
            {task.title}
          </span>

          <span
            className={`priority priority-${task.priority}`}
          >
            <Flag size={11} />
            P{task.priority}
          </span>
        </div>

        {task.description && (
          <p className="task-description">
            {task.description}
          </p>
        )}

        <div className="task-info">
          {task.dueDate && (
            <span>
              <CalendarDays size={12} />
              {task.dueDate}
            </span>
          )}

          {project && (
            <span>
              <i
                className="project-dot"
                style={{
                  background: project.color,
                }}
              />
              {project.name}
            </span>
          )}

          {taskLabels.map((label) => (
            <span
              className="label-chip"
              key={label.id}
            >
              #{label.name}
            </span>
          ))}
        </div>
      </div>

      <div className="task-actions">
        <button
          onClick={() => onEdit(task)}
        >
          <Pencil size={15} />
        </button>

        <button
          onClick={() =>
            deleteTask(task.id)
          }
        >
          <Trash2 size={15} />
        </button>

        <button>
          <MoreHorizontal size={17} />
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
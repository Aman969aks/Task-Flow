import { useState } from "react";
import {
  Check,
  Plus,
} from "lucide-react";

import { useTasks } from "../../context/TaskContext";

function SubtaskList({ task }) {
  const {
    addSubtask,
    toggleSubtask,
  } = useTasks();

  const [value, setValue] = useState("");

  const handleAdd = () => {
    if (!value.trim()) return;

    addSubtask(task.id, value.trim());
    setValue("");
  };

  return (
    <div className="subtasks">
      {task.subtasks?.map((subtask) => (
        <div
          className="subtask"
          key={subtask.id}
        >
          <button
            className={`subtask-check ${
              subtask.completed
                ? "checked"
                : ""
            }`}
            onClick={() =>
              toggleSubtask(
                task.id,
                subtask.id
              )
            }
          >
            {subtask.completed && (
              <Check size={12} />
            )}
          </button>

          <span
            className={
              subtask.completed
                ? "subtask-done"
                : ""
            }
          >
            {subtask.title}
          </span>
        </div>
      ))}

      <div className="subtask-add">
        <Plus size={14} />

        <input
          value={value}
          onChange={(e) =>
            setValue(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAdd();
            }
          }}
          placeholder="Add subtask..."
        />
      </div>
    </div>
  );
}

export default SubtaskList;
import { useEffect, useState } from "react";

import {
  X,
  CalendarDays,
  Flag,
  Folder,
  Tag,
} from "lucide-react";

import { useTasks } from "../../context/TaskContext";

function TaskModal({
  open,
  onClose,
  editingTask,
}) {
  const {
    addTask,
    updateTask,
    projects,
    labels,
  } = useTasks();

  const [title, setTitle] = useState("");
  const [description, setDescription] =
    useState("");
  const [priority, setPriority] = useState(4);
  const [dueDate, setDueDate] = useState("");
  const [projectId, setProjectId] =
    useState("personal");
  const [labelIds, setLabelIds] = useState([]);

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(
        editingTask.description || ""
      );
      setPriority(editingTask.priority);
      setDueDate(
        editingTask.dueDate || ""
      );
      setProjectId(
        editingTask.projectId || "personal"
      );
      setLabelIds(
        editingTask.labelIds || []
      );
    } else {
      setTitle("");
      setDescription("");
      setPriority(4);
      setDueDate("");
      setProjectId("personal");
      setLabelIds([]);
    }
  }, [editingTask, open]);

  if (!open) return null;

  const toggleLabel = (id) => {
    setLabelIds((prev) =>
      prev.includes(id)
        ? prev.filter(
            (item) => item !== id
          )
        : [...prev, id]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    const taskData = {
      title: title.trim(),
      description,
      priority,
      dueDate,
      projectId,
      labelIds,
    };

    if (editingTask) {
      updateTask(
        editingTask.id,
        taskData
      );
    } else {
      addTask(taskData);
    }

    onClose();
  };

  return (
    <div
      className="modal-backdrop"
      onMouseDown={onClose}
    >
      <div
        className="task-modal"
        onMouseDown={(e) =>
          e.stopPropagation()
        }
      >
        <div className="modal-title">
          <h2>
            {editingTask
              ? "Edit task"
              : "Add task"}
          </h2>

          <button onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            className="task-title-input"
            placeholder="What needs to be done?"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            autoFocus
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
          />

          <div className="modal-options">
            <div className="modal-field">
              <CalendarDays size={16} />
              <input
                type="date"
                value={dueDate}
                onChange={(e) =>
                  setDueDate(e.target.value)
                }
              />
            </div>

            <div className="modal-field">
              <Flag size={16} />

              <select
                value={priority}
                onChange={(e) =>
                  setPriority(
                    Number(e.target.value)
                  )
                }
              >
                <option value={1}>
                  Priority 1
                </option>
                <option value={2}>
                  Priority 2
                </option>
                <option value={3}>
                  Priority 3
                </option>
                <option value={4}>
                  Priority 4
                </option>
              </select>
            </div>

            <div className="modal-field">
              <Folder size={16} />

              <select
                value={projectId}
                onChange={(e) =>
                  setProjectId(
                    e.target.value
                  )
                }
              >
                {projects.map((project) => (
                  <option
                    key={project.id}
                    value={project.id}
                  >
                    {project.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="label-selector">
            <div className="label-selector-title">
              <Tag size={15} />
              Labels
            </div>

            <div className="label-options">
              {labels.map((label) => (
                <button
                  type="button"
                  key={label.id}
                  className={
                    labelIds.includes(label.id)
                      ? "selected"
                      : ""
                  }
                  onClick={() =>
                    toggleLabel(label.id)
                  }
                >
                  #{label.name}
                </button>
              ))}
            </div>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="cancel"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="modal-submit"
            >
              {editingTask
                ? "Save changes"
                : "Add task"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TaskModal;
import { useState } from "react";

import {
  Tag,
  Plus,
  Trash2,
} from "lucide-react";

import { useTasks } from "../../context/TaskContext";

function Labels() {
  const {
    labels,
    tasks,
    addLabel,
    deleteLabel,
  } = useTasks();

  const [name, setName] = useState("");
  const [color, setColor] =
    useState("#b8a58c");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) return;

    addLabel({
      name: name.trim(),
      color,
    });

    setName("");
  };

  return (
    <div className="page">
      <div className="page-heading">
        <span className="eyebrow">
          ORGANIZE
        </span>

        <h1>Labels</h1>

        <p>
          Add labels to quickly categorize
          your tasks.
        </p>
      </div>

      <form
        className="inline-add"
        onSubmit={handleSubmit}
      >
        <Tag size={17} />

        <input
          placeholder="Create label..."
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <input
          type="color"
          value={color}
          onChange={(e) =>
            setColor(e.target.value)
          }
        />

        <button>
          Create
        </button>
      </form>

      <div className="labels-list">
        {labels.map((label) => {
          const count = tasks.filter(
            (task) =>
              task.labelIds?.includes(
                label.id
              )
          ).length;

          return (
            <div
              className="label-row"
              key={label.id}
            >
              <span
                className="label-dot"
                style={{
                  background: label.color,
                }}
              />

              <span>
                #{label.name}
              </span>

              <small>
                {count} tasks
              </small>

              <button
                onClick={() =>
                  deleteLabel(label.id)
                }
              >
                <Trash2 size={15} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Labels;
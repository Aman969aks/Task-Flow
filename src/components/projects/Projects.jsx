import { useState } from "react";

import {
  Folder,
  Plus,
  Trash2,
} from "lucide-react";

import { useTasks } from "../../context/TaskContext";

function Projects() {
  const {
    projects,
    tasks,
    addProject,
    deleteProject,
  } = useTasks();

  const [name, setName] = useState("");
  const [color, setColor] =
    useState("#b8a58c");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) return;

    addProject({
      name: name.trim(),
      color,
    });

    setName("");
  };

  return (
    <div className="page">
      <div className="page-heading">
        <div>
          <span className="eyebrow">
            ORGANIZE
          </span>

          <h1>Projects</h1>

          <p>
            Keep your work organized into
            focused spaces.
          </p>
        </div>
      </div>

      <form
        className="inline-add"
        onSubmit={handleSubmit}
      >
        <Plus size={17} />

        <input
          placeholder="Create a new project..."
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

        <button>Create</button>
      </form>

      <div className="projects-grid">
        {projects.map((project) => {
          const projectTasks =
            tasks.filter(
              (task) =>
                task.projectId === project.id
            );

          const completed =
            projectTasks.filter(
              (task) => task.completed
            ).length;

          const progress =
            projectTasks.length
              ? Math.round(
                  (completed /
                    projectTasks.length) *
                    100
                )
              : 0;

          return (
            <div
              className="project-card"
              key={project.id}
            >
              <div className="project-card-top">
                <div
                  className="project-icon"
                  style={{
                    color: project.color,
                  }}
                >
                  <Folder size={20} />
                </div>

                <button
                  onClick={() =>
                    deleteProject(
                      project.id
                    )
                  }
                >
                  <Trash2 size={15} />
                </button>
              </div>

              <h3>{project.name}</h3>

              <p>
                {projectTasks.length} tasks
              </p>

              <div className="project-progress">
                <div>
                  <span
                    style={{
                      width: `${progress}%`,
                      background:
                        project.color,
                    }}
                  />
                </div>

                <strong>
                  {progress}%
                </strong>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
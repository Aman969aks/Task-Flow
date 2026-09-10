import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  initialTasks,
  initialProjects,
  initialLabels,
} from "../data/initialData";

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("taskflow_tasks");

    return saved ? JSON.parse(saved) : initialTasks;
  });

  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem("taskflow_projects");

    return saved ? JSON.parse(saved) : initialProjects;
  });

  const [labels, setLabels] = useState(() => {
    const saved = localStorage.getItem("taskflow_labels");

    return saved ? JSON.parse(saved) : initialLabels;
  });

  useEffect(() => {
    localStorage.setItem(
      "taskflow_tasks",
      JSON.stringify(tasks)
    );
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem(
      "taskflow_projects",
      JSON.stringify(projects)
    );
  }, [projects]);

  useEffect(() => {
    localStorage.setItem(
      "taskflow_labels",
      JSON.stringify(labels)
    );
  }, [labels]);

  const addTask = (task) => {
    const newTask = {
      id: Date.now(),
      completed: false,
      subtasks: [],
      labelIds: [],
      ...task,
    };

    setTasks((prev) => [...prev, newTask]);
  };

  const updateTask = (id, updates) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, ...updates }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) =>
      prev.filter((task) => task.id !== id)
    );
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );
  };

  const addProject = (project) => {
    setProjects((prev) => [
      ...prev,
      {
        id: `project-${Date.now()}`,
        ...project,
      },
    ]);
  };

  const deleteProject = (id) => {
    setProjects((prev) =>
      prev.filter((project) => project.id !== id)
    );

    setTasks((prev) =>
      prev.filter((task) => task.projectId !== id)
    );
  };

  const addLabel = (label) => {
    setLabels((prev) => [
      ...prev,
      {
        id: `label-${Date.now()}`,
        ...label,
      },
    ]);
  };

  const deleteLabel = (id) => {
    setLabels((prev) =>
      prev.filter((label) => label.id !== id)
    );

    setTasks((prev) =>
      prev.map((task) => ({
        ...task,
        labelIds: task.labelIds.filter(
          (labelId) => labelId !== id
        ),
      }))
    );
  };

  const addSubtask = (taskId, title) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId
          ? {
              ...task,
              subtasks: [
                ...task.subtasks,
                {
                  id: Date.now(),
                  title,
                  completed: false,
                },
              ],
            }
          : task
      )
    );
  };

  const toggleSubtask = (taskId, subtaskId) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId
          ? {
              ...task,
              subtasks: task.subtasks.map(
                (subtask) =>
                  subtask.id === subtaskId
                    ? {
                        ...subtask,
                        completed:
                          !subtask.completed,
                      }
                    : subtask
              ),
            }
          : task
      )
    );
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        projects,
        labels,
        addTask,
        updateTask,
        deleteTask,
        toggleTask,
        addProject,
        deleteProject,
        addLabel,
        deleteLabel,
        addSubtask,
        toggleSubtask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  return useContext(TaskContext);
}
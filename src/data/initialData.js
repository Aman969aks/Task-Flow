export const initialProjects = [
  {
    id: "personal",
    name: "Personal",
    color: "#b8a58c",
  },
  {
    id: "college",
    name: "College",
    color: "#8f8170",
  },
  {
    id: "development",
    name: "Development",
    color: "#d2c1a5",
  },
];

export const initialLabels = [
  {
    id: "important",
    name: "Important",
    color: "#c8a97e",
  },
  {
    id: "study",
    name: "Study",
    color: "#a99a86",
  },
  {
    id: "coding",
    name: "Coding",
    color: "#e0d3bf",
  },
];

export const initialTasks = [
  {
    id: 1,
    title: "Complete React Project",
    description: "Finish the TaskFlow dashboard",
    completed: false,
    priority: 1,
    dueDate: new Date().toISOString().split("T")[0],
    projectId: "development",
    labelIds: ["coding", "important"],
    subtasks: [
      {
        id: 11,
        title: "Create components",
        completed: true,
      },
      {
        id: 12,
        title: "Create dashboard",
        completed: false,
      },
    ],
  },

  {
    id: 2,
    title: "Solve LeetCode Problems",
    description: "Practice binary search and arrays",
    completed: false,
    priority: 2,
    dueDate: new Date().toISOString().split("T")[0],
    projectId: "college",
    labelIds: ["coding", "study"],
    subtasks: [],
  },

  {
    id: 3,
    title: "Read Software Engineering",
    description: "Complete Unit 1",
    completed: false,
    priority: 3,
    dueDate: new Date().toISOString().split("T")[0],
    projectId: "college",
    labelIds: ["study"],
    subtasks: [],
  },

  {
    id: 4,
    title: "Plan Weekend",
    description: "",
    completed: true,
    priority: 4,
    dueDate: new Date().toISOString().split("T")[0],
    projectId: "personal",
    labelIds: [],
    subtasks: [],
  },
];
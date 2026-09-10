import {
  CheckCircle2,
  Circle,
  Clock3,
  ListTodo,
} from "lucide-react";

import { useTasks } from "../../context/TaskContext";

function Stats() {
  const { tasks } = useTasks();

  const completed = tasks.filter(
    (task) => task.completed
  ).length;

  const pending = tasks.filter(
    (task) => !task.completed
  ).length;

  const today = new Date()
    .toISOString()
    .split("T")[0];

  const dueToday = tasks.filter(
    (task) =>
      task.dueDate === today &&
      !task.completed
  ).length;

  const stats = [
    {
      title: "Total Tasks",
      value: tasks.length,
      icon: ListTodo,
    },
    {
      title: "Completed",
      value: completed,
      icon: CheckCircle2,
    },
    {
      title: "Pending",
      value: pending,
      icon: Circle,
    },
    {
      title: "Due Today",
      value: dueToday,
      icon: Clock3,
    },
  ];

  return (
    <div className="stats-grid">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div className="stat-card" key={stat.title}>
            <div className="stat-icon">
              <Icon size={18} />
            </div>

            <div>
              <span>{stat.title}</span>
              <strong>{stat.value}</strong>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Stats;
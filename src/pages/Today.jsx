import { useTasks } from "../context/TaskContext";
import TaskList from "../components/tasks/TaskList";

function Today({ search, onEdit }) {
  const { tasks } = useTasks();

  const today = new Date()
    .toISOString()
    .split("T")[0];

  const filtered = tasks.filter(
    (task) =>
      task.dueDate === today &&
      task.title
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="page">
      <div className="page-heading">
        <span className="eyebrow">
          FOCUS
        </span>

        <h1>Today</h1>

        <p>
          Focus on what matters today.
        </p>
      </div>

      <TaskList
        tasks={filtered}
        onEdit={onEdit}
      />
    </div>
  );
}

export default Today;
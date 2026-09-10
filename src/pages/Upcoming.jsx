import { useTasks } from "../context/TaskContext";
import TaskList from "../components/tasks/TaskList";

function Upcoming({ search, onEdit }) {
  const { tasks } = useTasks();

  const today = new Date()
    .toISOString()
    .split("T")[0];

  const filtered = tasks.filter(
    (task) =>
      task.dueDate &&
      task.dueDate > today &&
      task.title
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="page">
      <div className="page-heading">
        <span className="eyebrow">
          PLANNING
        </span>

        <h1>Upcoming</h1>

        <p>
          See what's coming next.
        </p>
      </div>

      <TaskList
        tasks={filtered}
        onEdit={onEdit}
      />
    </div>
  );
}

export default Upcoming;
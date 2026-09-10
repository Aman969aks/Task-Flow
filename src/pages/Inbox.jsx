import { useTasks } from "../context/TaskContext";
import TaskList from "../components/tasks/TaskList";

function Inbox({ search, onEdit }) {
  const { tasks } = useTasks();

  const filtered = tasks.filter((task) =>
    task.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="page">
      <div className="page-heading">
        <span className="eyebrow">
          WORKSPACE
        </span>

        <h1>Inbox</h1>

        <p>
          Everything that needs your
          attention.
        </p>
      </div>

      <TaskList
        tasks={filtered}
        onEdit={onEdit}
      />
    </div>
  );
}

export default Inbox;
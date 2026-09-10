import {
  Filter,
  Search,
  Flag,
} from "lucide-react";

import { useTasks } from "../../context/TaskContext";

function Filters() {
  const { tasks } = useTasks();

  const highPriority = tasks.filter(
    (task) =>
      task.priority === 1 ||
      task.priority === 2
  );

  const incomplete = tasks.filter(
    (task) => !task.completed
  );

  return (
    <div className="page">
      <div className="page-heading">
        <span className="eyebrow">
          SMART VIEWS
        </span>

        <h1>Filters</h1>

        <p>
          Quickly access tasks based on
          custom conditions.
        </p>
      </div>

      <div className="filters-grid">
        <div className="filter-card">
          <div className="filter-icon">
            <Flag size={19} />
          </div>

          <h3>High Priority</h3>

          <p>
            P1 and P2 priority tasks
          </p>

          <strong>
            {highPriority.length}
          </strong>
        </div>

        <div className="filter-card">
          <div className="filter-icon">
            <Filter size={19} />
          </div>

          <h3>Incomplete</h3>

          <p>
            All unfinished tasks
          </p>

          <strong>
            {incomplete.length}
          </strong>
        </div>

        <div className="filter-card">
          <div className="filter-icon">
            <Search size={19} />
          </div>

          <h3>All Tasks</h3>

          <p>
            Every task in your workspace
          </p>

          <strong>
            {tasks.length}
          </strong>
        </div>
      </div>
    </div>
  );
}

export default Filters;
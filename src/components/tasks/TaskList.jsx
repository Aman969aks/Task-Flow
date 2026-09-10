import TaskItem from "./TaskItem";

function TaskList({
  tasks,
  onEdit,
}) {
  if (!tasks.length) {
    return (
      <div className="empty">
        <div className="empty-check">
          ✓
        </div>

        <h3>Nothing here</h3>

        <p>
          You're all caught up. Enjoy your
          free time.
        </p>
      </div>
    );
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default TaskList;
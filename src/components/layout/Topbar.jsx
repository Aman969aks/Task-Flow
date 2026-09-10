import {
  Search,
  Bell,
  Plus,
  Command,
} from "lucide-react";

function Topbar({
  search,
  setSearch,
  onAddTask,
}) {
  return (
    <header className="topbar">
      <div className="search">
        <Search size={17} />

        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <span className="search-shortcut">
          <Command size={11} /> K
        </span>
      </div>

      <div className="top-actions">
        <button
          className="top-add"
          onClick={onAddTask}
        >
          <Plus size={17} />
        </button>

        <button className="top-icon">
          <Bell size={18} />
        </button>

        <div className="top-avatar">
          A
        </div>
      </div>
    </header>
  );
}

export default Topbar;
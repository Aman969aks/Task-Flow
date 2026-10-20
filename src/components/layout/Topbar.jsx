import {
  Search,
  Bell,
  Plus,
  Command,
  Sun,
  Moon,
} from "lucide-react";

import { useTheme } from "../../context/ThemeContext";

function Topbar({
  search,
  setSearch,
  onAddTask,
}) {
  const { theme, toggleTheme } = useTheme();

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
          title="Add Task"
        >
          <Plus size={17} />
        </button>

        <button
          className="top-icon"
          title="Notifications"
        >
          <Bell size={18} />
        </button>

        {/* THEME TOGGLE */}
        <button
          className={`theme-toggle ${
            theme === "light" ? "light" : "dark"
          }`}
          onClick={toggleTheme}
          title={
            theme === "dark"
              ? "Switch to light mode"
              : "Switch to dark mode"
          }
          aria-label="Toggle theme"
        >
          <span className="theme-toggle-track">
            <span className="theme-toggle-thumb">
              {theme === "dark" ? (
                <Moon size={13} />
              ) : (
                <Sun size={13} />
              )}
            </span>
          </span>
        </button>

        <div className="top-avatar">
          A
        </div>
      </div>
    </header>
  );
}

export default Topbar;
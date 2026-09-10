import {
  Inbox,
  CalendarDays,
  CalendarClock,
  Folder,
  Tag,
  SlidersHorizontal,
  Plus,
  LayoutDashboard,
} from "lucide-react";

import { NavLink } from "react-router-dom";

import { useTasks } from "../../context/TaskContext";

function Sidebar({ onAddTask }) {
  const { projects } = useTasks();

  const navigation = [
    {
      name: "Dashboard",
      path: "/",
      icon: LayoutDashboard,
    },
    {
      name: "Inbox",
      path: "/inbox",
      icon: Inbox,
    },
    {
      name: "Today",
      path: "/today",
      icon: CalendarDays,
    },
    {
      name: "Upcoming",
      path: "/upcoming",
      icon: CalendarClock,
    },
  ];

  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-icon">T</div>
        <span>TaskFlow</span>
      </div>

      <button
        className="quick-add"
        onClick={onAddTask}
      >
        <Plus size={18} />
        Add task
        <kbd>Q</kbd>
      </button>

      <div className="sidebar-group">
        <span className="sidebar-label">
          WORKSPACE
        </span>

        {navigation.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `nav-item ${
                  isActive ? "active" : ""
                }`
              }
            >
              <Icon size={17} />
              {item.name}
            </NavLink>
          );
        })}
      </div>

      <div className="sidebar-group">
        <div className="sidebar-heading">
          <span>PROJECTS</span>

          <NavLink to="/projects">
            <Plus size={15} />
          </NavLink>
        </div>

        {projects.map((project) => (
          <NavLink
            key={project.id}
            to={`/projects/${project.id}`}
            className="nav-item"
          >
            <span
              className="project-dot"
              style={{
                background: project.color,
              }}
            />

            {project.name}
          </NavLink>
        ))}
      </div>

      <div className="sidebar-group">
        <span className="sidebar-label">
          ORGANIZE
        </span>

        <NavLink
          to="/labels"
          className="nav-item"
        >
          <Tag size={17} />
          Labels
        </NavLink>

        <NavLink
          to="/filters"
          className="nav-item"
        >
          <SlidersHorizontal size={17} />
          Filters
        </NavLink>
      </div>

      <div className="sidebar-bottom">
        <div className="profile">
          <div className="profile-avatar">
            A
          </div>

          <div>
            <strong>Aman</strong>
            <span>Personal workspace</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
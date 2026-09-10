import { useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Sidebar from "./components/layout/Sidebar";
import Topbar from "./components/layout/Topbar";
import TaskModal from "./components/tasks/TaskModal";

import Home from "./pages/Home";
import Inbox from "./pages/Inbox";
import Today from "./pages/Today";
import Upcoming from "./pages/Upcoming";
import ProjectsPage from "./pages/ProjectsPage";
import LabelsPage from "./pages/LabelsPage";
import FiltersPage from "./pages/FiltersPage";

function App() {
  const [showTaskModal, setShowTaskModal] =
    useState(false);

  const [editingTask, setEditingTask] =
    useState(null);

  const [search, setSearch] =
    useState("");

  const openAddTask = () => {
    setEditingTask(null);
    setShowTaskModal(true);
  };

  const openEditTask = (task) => {
    setEditingTask(task);
    setShowTaskModal(true);
  };

  const closeModal = () => {
    setShowTaskModal(false);
    setEditingTask(null);
  };

  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar
          onAddTask={openAddTask}
        />

        <div className="main">
          <Topbar
            search={search}
            setSearch={setSearch}
            onAddTask={openAddTask}
          />

          <Routes>
            <Route
              path="/"
              element={
                <Home
                  onEdit={openEditTask}
                />
              }
            />

            <Route
              path="/inbox"
              element={
                <Inbox
                  search={search}
                  onEdit={openEditTask}
                />
              }
            />

            <Route
              path="/today"
              element={
                <Today
                  search={search}
                  onEdit={openEditTask}
                />
              }
            />

            <Route
              path="/upcoming"
              element={
                <Upcoming
                  search={search}
                  onEdit={openEditTask}
                />
              }
            />

            <Route
              path="/projects"
              element={<ProjectsPage />}
            />

            <Route
              path="/projects/:id"
              element={<Inbox search={search} />}
            />

            <Route
              path="/labels"
              element={<LabelsPage />}
            />

            <Route
              path="/filters"
              element={<FiltersPage />}
            />
          </Routes>
        </div>

        <TaskModal
          open={showTaskModal}
          onClose={closeModal}
          editingTask={editingTask}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
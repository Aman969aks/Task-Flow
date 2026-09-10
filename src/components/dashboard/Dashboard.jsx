import { useState } from "react";

import {
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
} from "lucide-react";

import { useTasks } from "../../context/TaskContext";

import Stats from "./Stats";
import TaskList from "../tasks/TaskList";

function Dashboard({ onEdit }) {
  const { tasks } = useTasks();

  const today = new Date()
    .toISOString()
    .split("T")[0];

  const todayTasks = tasks.filter(
    (task) => task.dueDate === today
  );

  const completedToday =
    todayTasks.filter(
      (task) => task.completed
    ).length;

  const percent =
    todayTasks.length === 0
      ? 0
      : Math.round(
          (completedToday /
            todayTasks.length) *
            100
        );

  return (
    <div className="page">
      <div className="welcome">
        <div>
          <span className="eyebrow">
            YOUR WORKSPACE
          </span>

          <h1>
            Good afternoon, Aman.
          </h1>

          <p>
            Here's what's on your plate
            today.
          </p>
        </div>

        <div className="date-display">
          <CalendarDays size={17} />
          {new Date().toLocaleDateString(
            "en-US",
            {
              weekday: "long",
              month: "short",
              day: "numeric",
            }
          )}
        </div>
      </div>

      <Stats />

      <div className="dashboard-grid">
        <section className="dashboard-section">
          <div className="section-header">
            <div>
              <h2>Today's tasks</h2>
              <span>
                {todayTasks.length} tasks
              </span>
            </div>

            <button>
              View all
              <ArrowUpRight size={15} />
            </button>
          </div>

          <TaskList
            tasks={todayTasks}
            onEdit={onEdit}
          />
        </section>

        <section className="progress-card">
          <div className="progress-top">
            <div>
              <span className="eyebrow">
                DAILY PROGRESS
              </span>

              <h3>
                {percent}% complete
              </h3>
            </div>

            <CheckCircle2 size={22} />
          </div>

          <div className="progress-circle">
            <div
              style={{
                "--progress": `${percent * 3.6}deg`,
              }}
            >
              <strong>{percent}%</strong>
            </div>
          </div>

          <p>
            {completedToday} of{" "}
            {todayTasks.length} tasks
            completed today.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
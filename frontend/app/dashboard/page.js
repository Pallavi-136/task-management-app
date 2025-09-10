"use client";
import { useEffect, useState } from "react";
import API_URL from "../config";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

export default function DashboardPage() {
  const [tasks, setTasks] = useState([]);
  const [msg, setMsg] = useState("");

  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const fetchTasks = async () => {
    try {
      const res = await fetch(`${API_URL}/api/tasks`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (!res.ok) return setMsg(data.error || "Failed to fetch tasks");
      setTasks(data);
    } catch {
      setMsg("Cannot reach backend.");
    }
  };

  useEffect(() => {
    if (!token) return (window.location.href = "/login");
    fetchTasks();
  }, []);

  const completedTasks = tasks.filter(t => t.status === "Completed");
  const pendingTasks = tasks.filter(t => t.status !== "Completed");

  const chartData = [
    { name: "Completed", value: completedTasks.length },
    { name: "Pending", value: pendingTasks.length },
  ];
  const COLORS = ["#22c55e", "#f59e0b"]; // green / amber

  return (
    <div className="tasks-background py-8 flex flex-col items-center min-h-screen space-y-8">
      <h1 className="text-3xl font-bold text-center text-blue-700">Dashboard</h1>
      {msg && <p className="text-red-600">{msg}</p>}

      <div className="card p-6 flex flex-col items-center md:flex-row gap-8 w-full max-w-5xl">
        {/* Pie Chart */}
        <div className="flex justify-center">
          <PieChart width={320} height={320}>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={120}
              label
              isAnimationActive={true}
            >
              {chartData.map((entry, idx) => (
                <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>

        {/* Tasks List */}
        <div className="flex flex-col md:flex-row gap-6 w-full">
          {/* Completed Tasks */}
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-center text-green-600 mb-2">Completed</h2>
            {completedTasks.length === 0 ? (
              <p className="text-center text-gray-600">No completed tasks</p>
            ) : (
              <ul className="list-disc list-inside space-y-1">
                {completedTasks.map((t) => (
                  <li key={t._id}>{t.title}</li>
                ))}
              </ul>
            )}
          </div>

          {/* Pending Tasks */}
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-center text-amber-600 mb-2">Pending</h2>
            {pendingTasks.length === 0 ? (
              <p className="text-center text-gray-600">No pending tasks</p>
            ) : (
              <ul className="list-disc list-inside space-y-1">
                {pendingTasks.map((t) => (
                  <li key={t._id}>{t.title}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Go to Tasks Button */}
      <a
        href="/alltasks"
        className="btn-primary px-6 py-2 rounded-lg shadow-md hover:scale-105 transition"
      >
        Go to Your Tasks
      </a>
    </div>
  );
}

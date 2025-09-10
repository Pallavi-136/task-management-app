"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import API_URL from "../config";
import { FaTrash, FaEdit } from "react-icons/fa";

export default function AllTasksPage() {
  const [tasks, setTasks] = useState([]);
  const router = useRouter();

  const fetchTasks = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;
    const res = await fetch(`${API_URL}/api/tasks`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const markDone = async (id) => {
    const token = localStorage.getItem("token");
    await fetch(`${API_URL}/api/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ status: "Completed" }),
    });
    router.push("/dashboard"); // Redirect after marking completed
  };

  const deleteTask = async (id) => {
    const token = localStorage.getItem("token");
    await fetch(`${API_URL}/api/tasks/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    setTasks(tasks.filter(t => t._id !== id));
  };

  const editTask = async (task) => {
    const newTitle = prompt("Edit Task Title", task.title);
    if (!newTitle) return;
    const token = localStorage.getItem("token");
    await fetch(`${API_URL}/api/tasks/${task._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ title: newTitle }),
    });
    fetchTasks(); // Refresh list
  };

  return (
    <div className="tasks-background flex flex-col items-center min-h-screen py-8 gap-6">
      <h1 className="text-3xl font-bold text-blue-700 text-center">All Tasks</h1>

      {/* Create Task button */}
      <div className="w-full max-w-3xl flex justify-end mb-4">
        <button onClick={() => router.push("/create")} className="btn-primary">
          + Create Task
        </button>
      </div>

      {/* Tasks List */}
      <div className="flex flex-col gap-4 w-full max-w-3xl">
        {tasks.length === 0 ? (
          <p className="text-center text-gray-500">No tasks yet.</p>
        ) : (
          tasks.map(task => (
            <div key={task._id} className="task-card flex justify-between items-start gap-4">
              <div className="flex flex-col gap-2">
                <h2 className="font-semibold text-lg">{task.title}</h2>
                <p className={task.status === "Completed" ? "text-green-600" : "text-red-500"}>
                  {task.status}
                </p>
                <p className="text-gray-700">{task.description}</p>
              </div>
              <div className="flex flex-col gap-2 items-end">
                {task.status !== "Completed" && (
                  <button onClick={() => markDone(task._id)} className="btn-primary-small">
                    Mark Done
                  </button>
                )}
                <button onClick={() => editTask(task)} className="text-blue-600 hover:text-blue-800">
                  <FaEdit />
                </button>
                <button onClick={() => deleteTask(task._id)} className="text-red-600 hover:text-red-800">
                  <FaTrash />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

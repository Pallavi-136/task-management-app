"use client";
import { useState } from "react";

export default function CreateTaskPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [pending, setPending] = useState(true);
  const [message, setMessage] = useState("");

  const token = localStorage.getItem("token");

  const handleCreate = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title, description, pending }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.error || "Task creation failed");
        return;
      }

      // Clear form
      setTitle("");
      setDescription("");
      setPending(true);
      setMessage("Task created successfully!");

      // Optionally redirect to tasks page
      setTimeout(() => {
        window.location.href = "/alltasks";
      }, 1000);
    } catch (err) {
      console.error(err);
      setMessage("Cannot reach backend!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-blue-200 to-green-200 flex items-center justify-center p-6">
      <form
        onSubmit={handleCreate}
        className="bg-white p-6 rounded shadow-md w-full max-w-md flex flex-col gap-4 animate-fadeIn"
      >
        <h1 className="text-2xl font-bold text-center text-purple-700">
          Create New Task
        </h1>

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded focus:outline-purple-500"
          required
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 rounded focus:outline-purple-500"
          required
        />

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={!pending}
            onChange={() => setPending(!pending)}
            id="completed"
          />
          <label htmlFor="completed" className="text-gray-700">
            Mark as Completed
          </label>
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white py-2 rounded hover:bg-green-700 transition-colors"
        >
          Create Task
        </button>

        {message && (
          <p className="text-center text-sm text-red-500 animate-pulse">{message}</p>
        )}
      </form>
    </div>
  );
}

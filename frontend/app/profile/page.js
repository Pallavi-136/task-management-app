"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState({ name: "", email: "" });
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user")) || {};
    setUser(storedUser);
    setName(storedUser.name);
    setEmail(storedUser.email);
  }, []);

  const handleUpdate = () => {
    const updatedUser = { name, email };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);
    setEditing(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/login");
  };

  return (
    <div className="page-background flex flex-col items-center min-h-screen py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Profile</h1>

      <div className="card flex flex-col items-center gap-6 p-8 w-full max-w-md">
        {/* Profile Icon */}
        <img
          src="/favicon.ico"
          alt="Profile Icon"
          className="w-24 h-24 rounded-full mb-2"
        />

        {/* Edit Mode */}
        {editing ? (
          <>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="auth-input"
              placeholder="Name"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="auth-input"
              placeholder="Email"
            />
            <div className="flex gap-4 w-full">
              <button className="btn-primary flex-1" onClick={handleUpdate}>
                Save
              </button>
              <button
                className="btn-danger flex-1"
                onClick={() => setEditing(false)}
              >
                Cancel
              </button>
            </div>
          </>
        ) : (
          <>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <button
              className="btn-primary w-full"
              onClick={() => setEditing(true)}
            >
              Edit Profile
            </button>
          </>
        )}

        {/* Logout */}
        <button
          className="btn-danger w-full mt-4"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

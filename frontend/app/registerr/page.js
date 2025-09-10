"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Registration successful! Redirecting to login...");
        router.push("/login"); // redirect to login page
      } else {
        setMessage(data.error || "Registration failed");
      }
    } catch {
      setMessage("Server error, try again later");
    }
  };

  return (
    <div className="auth-background flex items-center justify-center min-h-screen">
      <form onSubmit={handleRegister} className="auth-card">
        <h1 className="text-3xl font-bold text-center mb-4 flex items-center justify-center gap-2">
          <img src="/favicon.ico" alt="App Icon" width={28} height={28} />
          Task Manager
        </h1>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="auth-input"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="auth-input"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="auth-input"
          required
        />

        <button type="submit" className="btn-primary w-full">
          Register
        </button>

        <p className="text-center mt-2 text-sm">
          Already have an account? <Link href="/login" className="text-blue-600 hover:underline">Login</Link>
        </p>

        {message && <p className="text-red-500 text-center mt-2">{message}</p>}
      </form>
    </div>
  );
}


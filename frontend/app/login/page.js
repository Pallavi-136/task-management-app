"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        router.push("/dashboard");
      } else {
        setMessage(data.error || "Login failed");
      }
    } catch {
      setMessage("Server error, try again later");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-sky-200 px-4">
      {/* App name + icon */}
      <div className="flex items-center gap-2 mb-8">
        <Image src="/favicon.ico" alt="App Icon" width={36} height={36} />
        <span className="text-3xl font-bold text-blue-800">Task Manager</span>
      </div>

      <form className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md" onSubmit={handleLogin}>
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Login
        </button>

        {message && (
          <p className="text-center mt-4 text-red-500 text-sm">{message}</p>
        )}

        <p className="text-center mt-4 text-gray-500 text-sm">
          Don't have an account?{" "}
          <span
            className="text-blue-600 cursor-pointer hover:underline"
            onClick={() => router.push("/register")}
          >
            Register
          </span>
        </p>
      </form>
    </div>
  );
}


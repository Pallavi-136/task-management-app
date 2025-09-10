"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{
      backgroundColor: "#1E40AF",
      padding: "12px 20px",
      position: "sticky",
      top: 0,
      zIndex: 1000
    }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "900px",
        margin: "0 auto",
        color: "white"
      }}>
        <div style={{ fontWeight: "bold", fontSize: "20px" }}>
          <span>📝 Task Manager</span>
        </div>
        <div style={{ display: "flex", gap: "15px" }}>
          <Link href="/" style={{ color: "white" }}>Home</Link>
          <Link href="/tasks" style={{ color: "white" }}>Tasks</Link>
          <Link href="/login" style={{ color: "white" }}>Login</Link>
          <Link href="/registerr" style={{ color: "white" }}>Register</Link>
        </div>
      </div>
    </nav>
  );
}



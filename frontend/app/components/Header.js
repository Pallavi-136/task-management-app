"use client";

export default function Header() {
  return (
    <div className="flex items-center justify-start gap-2 bg-blue-500 p-4 rounded-b shadow-md mb-6">
      <img src="/favicon.ico" alt="App Icon" className="w-10 h-10" />
      <h1 className="text-2xl font-bold text-white">Task Manager</h1>
    </div>
  );
}

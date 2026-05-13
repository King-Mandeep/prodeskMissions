import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    onAddTask(text.trim(), priority);

    setText("");
    setPriority("Medium");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-8"
    >
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Enter a task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 px-4 py-3 rounded-xl bg-slate-800 border border-white/10 outline-none"
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="px-4 py-3 rounded-xl bg-slate-800 border border-white/10"
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-medium transition"
        >
          Add Task
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
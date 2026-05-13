import { useState } from "react";

function TaskCard({ task, onDelete, onMove, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const priorityColors = {
    High: "bg-red-500/20 text-red-300 border-red-500/30",
    Medium: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    Low: "bg-green-500/20 text-green-300 border-green-500/30",
  };

  const handleSave = () => {
    if (!editedText.trim()) return;

    onEdit(task.id, editedText.trim());
    setIsEditing(false);
  };

  return (
    <div className="bg-slate-800/80 border border-white/10 rounded-xl p-4 shadow-sm hover:border-white/20 transition">
      {/* Task Text / Input */}
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          className="w-full px-3 py-2 mb-3 rounded-lg bg-slate-900 border border-white/10 outline-none"
        />
      ) : (
        <p className="font-medium mb-3">{task.text}</p>
      )}

      {/* Priority + Actions */}
      <div className="flex items-center justify-between gap-3 mb-3">
        <span
          className={`px-3 py-1 rounded-full text-sm border ${
            priorityColors[task.priority]
          }`}
        >
          {task.priority}
        </span>

        <div className="flex gap-3 text-sm">
          {isEditing ? (
            <button
              onClick={handleSave}
              className="text-green-400 hover:text-green-300"
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="text-blue-400 hover:text-blue-300"
            >
              Edit
            </button>
          )}

          <button
            onClick={() => onDelete(task.id)}
            className="text-red-400 hover:text-red-300"
          >
            Delete
          </button>
        </div>
      </div>

      {/* Status Dropdown */}
      <select
        value={task.status}
        onChange={(e) => onMove(task.id, e.target.value)}
        className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-sm"
      >
        <option value="todo">To Do</option>
        <option value="inprogress">In Progress</option>
        <option value="done">Done</option>
      </select>
    </div>
  );
}

export default TaskCard;
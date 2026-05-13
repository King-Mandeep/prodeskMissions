import TaskCard from "./TaskCard";

function Column({
  title,
  tasks,
  onDelete,
  onMove,
  onEdit,
}) {
  const accentColors = {
    "To Do": "bg-blue-400",
    "In Progress": "bg-yellow-400",
    Done: "bg-green-400",
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 min-h-[500px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span
            className={`w-3 h-3 rounded-full ${accentColors[title]}`}
          ></span>

          <h2 className="text-xl font-semibold">{title}</h2>
        </div>

        <span className="text-sm px-2 py-1 rounded-full bg-white/10 text-gray-300">
          {tasks.length}
        </span>
      </div>

      {/* Tasks */}
      <div className="space-y-3">
        {tasks.length === 0 ? (
          <p className="text-gray-400 text-sm">
            No tasks yet.
          </p>
        ) : (
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onDelete={onDelete}
              onMove={onMove}
              onEdit={onEdit}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Column;
import { useState,useEffect } from "react";
import Column from "./components/Column";
import TaskForm from "./components/TaskForm";

function App() {

  const editTask = (id, newText) => {
  setTasks((prev) =>
    prev.map((task) =>
      task.id === id
        ? { ...task, text: newText }
        : task
    )
  );
};

const deleteTask = (id) => {
  setTasks((prev) => prev.filter((task) => task.id !== id));
};

const moveTask = (id, newStatus) => {
  setTasks((prevTasks) =>
    prevTasks.map((task) =>
      task.id === id
        ? { ...task, status: newStatus }
        : task
    )
  );
};

  const [tasks, setTasks] = useState(() => {
  const savedTasks = localStorage.getItem("kanbanTasks");

  if (savedTasks) {
    return JSON.parse(savedTasks);
  }

  return [];
});

  const addTask = (text, priority) => {
    const newTask = {
      id: Date.now(),
      text,
      priority,
      status: "todo",
    };

    setTasks((prev) => [...prev, newTask]);
  };

  const todoTasks = tasks.filter((task) => task.status === "todo");
  const inProgressTasks = tasks.filter(
    (task) => task.status === "inprogress"
  );
  const doneTasks = tasks.filter((task) => task.status === "done");

  useEffect(() => {
  localStorage.setItem(
    "kanbanTasks",
    JSON.stringify(tasks)
  );
}, [tasks]);

  return (
    <div className="min-h-screen bg-slate-950 text-white px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
       <div className="text-center mb-10">
  <p className="text-blue-400 uppercase tracking-[4px] text-sm mb-3">
    Productivity Dashboard
  </p>

  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
    Kanban Task Board
  </h1>

  <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
    Organize tasks, track progress, and stay productive with
    a modern Trello-inspired board.
  </p>
</div>

        <TaskForm onAddTask={addTask} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Column  title="To Do"
    tasks={todoTasks}
    onDelete={deleteTask}
    onMove={moveTask}
    onEdit={editTask} />
          <Column title="In Progress"
    tasks={inProgressTasks}
    onDelete={deleteTask}
    onMove={moveTask}
    onEdit={editTask} />
          <Column title="Done"
    tasks={doneTasks}
    onDelete={deleteTask}
    onMove={moveTask}
    onEdit={editTask} />
        </div>
      </div>
    </div>
  );
}

export default App;
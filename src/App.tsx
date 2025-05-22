import { useState, useEffect } from "react";
import { auth, googleProvider } from "./firebase";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import type { User } from "firebase/auth";
import TaskInput from "./components/TaskInput";
import TaskItem from "./components/TaskItem";
import type { Task } from "./types/task";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [user, setUser] = useState<User | null>(null);

  // 🔐 Track login state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error("Login Error:", err);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error("Logout Error:", err);
    }
  };

  const handleAddTask = (title: string, dueDate?: string) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false,
      dueDate,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const handleToggle = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDelete = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const handleEdit = (id: number, newTitle: string) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, title: newTitle } : task))
    );
  };

  // 🔒 If not logged in
  if (!user) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <div className="p-6 bg-white rounded shadow text-center">
          <h1 className="text-xl font-bold mb-4">Welcome to Task Manager</h1>
          <button
            onClick={handleLogin}
            className="bg-blue-500 text-white px-4 py-2 rounded transition-all duration-300 ease-in-out hover:bg-blue-600 hover:scale-105"
          >
            🔐 Sign in with Google
          </button>

        </div>
      </div>
    );
  }

  // ✅ If logged in, show tasks
  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded shadow">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">📝 Task Manager</h1>
        <button
          onClick={handleLogout}
          className="text-sm text-gray-700 px-4 py-2 rounded border border-gray-300 bg-white transition-all duration-300 ease-in-out hover:bg-red-500 hover:text-white hover:scale-105"
        >
          🔒 Logout
        </button>


      </div>

      <p className="text-sm text-gray-500 mb-4">
        Logged in as: <strong>{user.displayName}</strong>
      </p>

      <TaskInput onAdd={handleAddTask} />
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={handleToggle}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;

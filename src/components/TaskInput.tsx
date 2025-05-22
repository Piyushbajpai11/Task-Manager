import { useState } from "react";

interface TaskInputProps {
    onAdd: (title: string, dueDate?: string) => void;
}

export default function TaskInput({ onAdd }: TaskInputProps) {
    const [title, setTitle] = useState("");
    const [dueDate, setDueDate] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim()) return;
        onAdd(title.trim(), dueDate);
        setTitle("");
        setDueDate("");
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-4">
            <input
                type="text"
                placeholder="Add a new task..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="p-2 border rounded"
            />
            <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="p-2 border rounded text-gray-700"
            />
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded transition-all duration-300 ease-in-out hover:bg-blue-600 hover:scale-105"
            >
                ➕ Add Task
            </button>

        </form>
    );
}

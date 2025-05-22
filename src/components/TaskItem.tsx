import { useState } from "react";
import type { Task } from "../types/task";

interface TaskItemProps {
    task: Task;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
    onEdit: (id: number, newTitle: string) => void;
}

export default function TaskItem({ task, onToggle, onDelete, onEdit }: TaskItemProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(task.title);
    const isOverdue = task.dueDate && new Date(task.dueDate) < new Date() && !task.completed;


    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            finishEditing();
        }
    };

    const finishEditing = () => {
        if (editedTitle.trim()) {
            onEdit(task.id, editedTitle.trim());
        }
        setIsEditing(false);
    };

    return (
        <li className={`flex justify-between items-center mb-2 px-4 py-2 rounded shadow-sm ${isOverdue ? "bg-red-100" : "bg-gray-100"}`}>
            {isEditing ? (
                <input
                    className="flex-1 p-1 rounded border mr-2"
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                    onBlur={finishEditing}
                    onKeyDown={handleKeyDown}
                    autoFocus
                />
            ) : (
                <span
                    onDoubleClick={() => setIsEditing(true)}
                    onClick={() => onToggle(task.id)}
                    className={`flex-1 cursor-pointer ${task.completed ? "line-through text-gray-400" : ""
                        }`}
                >
                    {task.title}
                </span>
            )}
            {task.dueDate && (
                <span className="text-xs text-gray-500 ml-2">
                    Due: {task.dueDate}
                </span>
            )}

            <div className="flex items-center gap-2 ml-2">
                <button
                    onClick={() => setIsEditing(true)}
                    className="text-blue-500 hover:text-blue-700 text-sm"
                    title="Edit"
                >
                    ✏️
                </button>
                <button
                    onClick={() => onDelete(task.id)}
                    className="text-red-500 hover:text-red-700 font-bold text-sm"
                    title="Delete"
                >
                    ✕
                </button>
            </div>
        </li>
    );
}

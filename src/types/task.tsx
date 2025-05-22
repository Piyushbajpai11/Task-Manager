export interface Task {
    id: number;
    title: string;
    completed: boolean;
    dueDate?: string; // format: YYYY-MM-DD
}


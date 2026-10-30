import { useState } from 'react'
import type { Task, TaskStatus, TaskPriority } from './types';
import TaskList from './components/TaskList/TaskList';
import TaskFilter from './components/TaskFilter/TaskFilter';

import './App.css'


const initialTasks: Task[] = [
  { id: '1', title: 'Task 1', description: 'Description 1', status: 'pending', priority: 'low', dueDate: '2023-12-31' },
  { id: '2', title: 'Task 2', description: 'Description 2', status: 'in-progress', priority: 'medium', dueDate: '2024-01-01' },
  { id: '3', title: 'Task 3', description: 'Description 3', status: 'completed', priority: 'high', dueDate: '2024-01-02' },
]

export default function App() {
const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [filters, setFilters] = useState<{ status?: TaskStatus; priority?: TaskPriority }>({});

  const handleStatusChange = (taskId: string, newStatus: TaskStatus) => {
    setTasks(tasks.map((t) => (t.id === taskId ? { ...t, status: newStatus } : t)));
  };
   const handleDelete = (taskId: string) => {
    setTasks(tasks.filter((t) => t.id !== taskId));
  };

  const filteredTasks = tasks.filter(
    (t) =>
      (!filters.status || t.status === filters.status) &&
      (!filters.priority || t.priority === filters.priority)
  );

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <TaskFilter onFilterChange={setFilters} />
      <TaskList
        tasks={filteredTasks}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
      />
    </div>
  )
}


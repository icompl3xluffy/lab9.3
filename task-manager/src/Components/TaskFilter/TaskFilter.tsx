import { useState } from 'react';
import type { TaskFilterProps, TaskStatus, TaskPriority } from '../../types';

function TaskFilter({ onFilterChange }: TaskFilterProps){
const [status, setStatus] = useState<TaskStatus | ''>('');
  const [priority, setPriority] = useState<TaskPriority | ''>('');

    const handleStatus = (value: TaskStatus | '') => {
    setStatus(value);
    onFilterChange({ status: value || undefined, priority: priority || undefined });
  };

  const handlePriority = (value: TaskPriority | '') => {
    setPriority(value);
    onFilterChange({ status: status ||undefined, priority: value || undefined });
  };
    return (
       <div className="task-filter">
      <label>Status
        <select value={status} onChange={(e) => handleStatus(e.target.value as TaskStatus | '')}>
          <option value="">All Statuses</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </label>

      <label>Priority
        <select value={priority} onChange={(e) => handlePriority(e.target.value as TaskPriority | '')}>
          <option value="">All Priorities</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        </label>
      </div>
  );
}

export default TaskFilter;
import { useState } from 'react';
import type { TaskFilterProps, TaskStatus, TaskPriority } from '../../types';

export function TaskFilter({ onFilterChange }: TaskFilterProps){
const handleStatus = (value: TaskStatus | '') => {
    setStatus(value);
    onFilterChange({ status: value || null, priority: priority || null });
  };

  const handlePriority = (value: TaskPriority | '') => {
    setPriority(value);
    onFilterChange({ status: status ||null, priority: value || null });
  };
    return (
       <div className="task-filter">
      <label>
        Status
        <select value={status} onChange={(e) => handleStatus(e.target.value as TaskStatus | '')}>
          <option value="">All Statuses</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </label>

      <label>
        Priority
        <select value={priority} onChange={(e) => handlePriority(e.target.value as TaskPriority | '')}>
          <option value="">All Priorities</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label>
    )
}
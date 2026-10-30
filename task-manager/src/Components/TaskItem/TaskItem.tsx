import type { TaskItemProps, TaskStatus } from '../../types';



export function TaskItem({task, onStatusChange, onDelete}: TaskItemProps){

    return (
        <div >
            <h3>{task.title}</h3>
            <p>{task.description}</p>

            <select
        value={task.status}
        onChange={(e) => onStatusChange(task.id, e.target.value as TaskStatus)}>
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>

      <button onClick={() => onDelete(task.id)}>Delete</button>
        <p>
        Priority: {task.priority}
        {task.priority === 'high' && 'urgent'}
      </p>
      <p>Due: {new Date(task.dueDate + 'T00:00:00').toLocaleDateString()}</p>

      {task.status === 'completed' && <span className="done-badge"> Done!</span>}
        </div>
    );
}
import type { TaskListProps } from '../../types';
import TaskItem from '../TaskItem/TaskItem';

function TaskList({ tasks, onStatusChange, onDelete }: TaskListProps) {
  if (tasks.length === 0) {
    return <p className="empty">No tasks found.</p>;
  }

  return (
    <div> 
        

    </div>
  );
}

export default TaskList;
import { Link } from 'react-router-dom'
import Badge from './Badge.jsx'
import './TaskCard.css'

function TaskCard({ task }) {
  return (
    <Link to={`/tasks/${task.id}`} className="task-card">
      <div className="task-card__top">
        <h3>{task.header}</h3>
        <Badge type="status" value={task.status} />
      </div>
      <p className="task-card__desc">{task.description}</p>
      <div className="task-card__meta">
        <Badge type="priority" value={task.priority} />
        <span>{task.category}</span>
        <span>Due {task.dueDate}</span>
      </div>
    </Link>
  )
}

export default TaskCard

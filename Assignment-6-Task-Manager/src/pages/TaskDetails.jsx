import { useParams, useNavigate, Link } from 'react-router-dom'
import { useTasks } from '../context/TaskContext.jsx'
import Badge from '../components/Badge.jsx'
import './TaskDetails.css'

function TaskDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { getTaskById, updateStatus, deleteTask } = useTasks()

  const task = getTaskById(id)

  if (!task) {
    return (
      <div className="task-details">
        <p>Task not found.</p>
        <Link to="/tasks">← Back to Tasks</Link>
      </div>
    )
  }

  const handleDelete = () => {
    deleteTask(task.id)
    navigate('/tasks')
  }

  return (
    <div className="task-details">
      <Link to="/tasks" className="task-details__back">← Back to Tasks</Link>

      <div className="task-details__card">
        <div className="task-details__top">
          <h1>{task.header}</h1>
          <Badge type="status" value={task.status} />
        </div>

        <p className="task-details__desc">{task.description}</p>

        <div className="task-details__meta">
          <Badge type="priority" value={task.priority} />
          <span>{task.category}</span>
          <span>Raised: {new Date(task.raisedDate).toLocaleString()}</span>
          <span>Due: {task.dueDate}</span>
        </div>

        <div className="task-details__actions">
          <label htmlFor="status">Update Status</label>
          <select
            id="status"
            value={task.status}
            onChange={(e) => updateStatus(task.id, e.target.value)}
          >
            <option>Raised</option>
            <option>Pending</option>
            <option>Closed</option>
          </select>
          <button className="task-details__delete" onClick={handleDelete}>Delete Task</button>
        </div>
      </div>
    </div>
  )
}

export default TaskDetails

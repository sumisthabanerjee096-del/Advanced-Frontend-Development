import { useTasks } from '../context/TaskContext.jsx'
import './Dashboard.css'

function Dashboard() {
  const { tasks } = useTasks()

  const counts = {
    total: tasks.length,
    raised: tasks.filter((t) => t.status === 'Raised').length,
    pending: tasks.filter((t) => t.status === 'Pending').length,
    closed: tasks.filter((t) => t.status === 'Closed').length,
  }

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <p className="dashboard__subtitle">A quick overview of your tasks.</p>

      <div className="dashboard__stats">
        <div className="stat-card">
          <span className="stat-card__value">{counts.total}</span>
          <span className="stat-card__label">Total Tasks</span>
        </div>
        <div className="stat-card stat-card--raised">
          <span className="stat-card__value">{counts.raised}</span>
          <span className="stat-card__label">Raised</span>
        </div>
        <div className="stat-card stat-card--pending">
          <span className="stat-card__value">{counts.pending}</span>
          <span className="stat-card__label">Pending</span>
        </div>
        <div className="stat-card stat-card--closed">
          <span className="stat-card__value">{counts.closed}</span>
          <span className="stat-card__label">Closed</span>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

import { useState } from 'react'
import { useTasks } from '../context/TaskContext.jsx'
import TaskCard from '../components/TaskCard.jsx'
import './Tasks.css'

function Tasks() {
  const { tasks } = useTasks()
  const [priorityFilter, setPriorityFilter] = useState('All')
  const [categoryFilter, setCategoryFilter] = useState('All')
  const [statusFilter, setStatusFilter] = useState('All')

  const filtered = tasks.filter((t) =>
    (priorityFilter === 'All' || t.priority === priorityFilter) &&
    (categoryFilter === 'All' || t.category === categoryFilter) &&
    (statusFilter === 'All' || t.status === statusFilter)
  )

  return (
    <div className="tasks-page">
      <h1>All Tasks</h1>

      <div className="tasks-page__filters">
        <select value={priorityFilter} onChange={(e) => setPriorityFilter(e.target.value)}>
          <option value="All">All Priorities</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
          <option value="All">All Categories</option>
          <option>Academic</option>
          <option>Personal</option>
        </select>

        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="All">All Statuses</option>
          <option>Raised</option>
          <option>Pending</option>
          <option>Closed</option>
        </select>
      </div>

      {filtered.length === 0 ? (
        <p className="tasks-page__empty">No tasks match these filters.</p>
      ) : (
        <div className="tasks-page__list">
          {filtered.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Tasks

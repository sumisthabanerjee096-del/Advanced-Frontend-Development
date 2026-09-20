import { useTasks } from '../context/TaskContext.jsx'
import TaskCard from '../components/TaskCard.jsx'
import './Tasks.css'

function CompletedTasks() {
  const { tasks } = useTasks()
  const completed = tasks.filter((t) => t.status === 'Closed')

  return (
    <div className="tasks-page">
      <h1>Completed Tasks</h1>
      {completed.length === 0 ? (
        <p className="tasks-page__empty">No tasks completed yet.</p>
      ) : (
        <div className="tasks-page__list">
          {completed.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      )}
    </div>
  )
}

export default CompletedTasks

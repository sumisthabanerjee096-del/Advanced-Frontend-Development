import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTasks } from '../context/TaskContext.jsx'
import './AddTask.css'

function AddTask() {
  const { addTask } = useTasks()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    header: '',
    description: '',
    priority: 'Medium',
    category: 'Academic',
    dueDate: '',
  })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    addTask(form)
    navigate('/tasks')
  }

  return (
    <div className="add-task">
      <h1>Add Task</h1>
      <form onSubmit={handleSubmit} className="add-task__form">
        <div className="add-task__field">
          <label htmlFor="header">Task Header</label>
          <input id="header" name="header" value={form.header} onChange={handleChange} required />
        </div>

        <div className="add-task__field">
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" rows="4" value={form.description} onChange={handleChange} required />
        </div>

        <div className="add-task__row">
          <div className="add-task__field">
            <label htmlFor="priority">Priority</label>
            <select id="priority" name="priority" value={form.priority} onChange={handleChange}>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>

          <div className="add-task__field">
            <label htmlFor="category">Category</label>
            <select id="category" name="category" value={form.category} onChange={handleChange}>
              <option>Academic</option>
              <option>Personal</option>
            </select>
          </div>
        </div>

        <div className="add-task__field">
          <label htmlFor="dueDate">Due Date</label>
          <input id="dueDate" name="dueDate" type="date" value={form.dueDate} onChange={handleChange} required />
        </div>

        <button type="submit" className="add-task__submit">Create Task</button>
      </form>
    </div>
  )
}

export default AddTask

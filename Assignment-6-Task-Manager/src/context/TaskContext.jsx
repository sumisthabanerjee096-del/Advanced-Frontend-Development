import { createContext, useContext, useReducer } from 'react'

const TaskContext = createContext(null)

const initialTasks = [
  {
    id: 1,
    header: 'Submit React Assignment 6',
    description: 'Finish the task manager app and push to GitHub.',
    priority: 'High',
    category: 'Academic',
    raisedDate: new Date('2026-09-15T10:00:00').toISOString(),
    dueDate: '2026-09-25',
    status: 'Pending',
  },
  {
    id: 2,
    header: 'Buy groceries',
    description: 'Milk, eggs, vegetables for the week.',
    priority: 'Low',
    category: 'Personal',
    raisedDate: new Date('2026-09-14T18:30:00').toISOString(),
    dueDate: '2026-09-21',
    status: 'Raised',
  },
  {
    id: 3,
    header: 'Prepare for internal exam',
    description: 'Revise DBMS and Web Technology chapters.',
    priority: 'Medium',
    category: 'Academic',
    raisedDate: new Date('2026-09-10T09:00:00').toISOString(),
    dueDate: '2026-09-18',
    status: 'Closed',
  },
]

function taskReducer(state, action) {
  switch (action.type) {
    case 'ADD_TASK': {
      const newTask = {
        ...action.payload,
        id: Date.now(),
        raisedDate: new Date().toISOString(),
        status: 'Raised',
      }
      return [newTask, ...state]
    }
    case 'UPDATE_STATUS':
      return state.map((t) =>
        t.id === action.payload.id ? { ...t, status: action.payload.status } : t
      )
    case 'DELETE_TASK':
      return state.filter((t) => t.id !== action.payload)
    default:
      return state
  }
}

export function TaskProvider({ children }) {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks)

  const addTask = (data) => dispatch({ type: 'ADD_TASK', payload: data })
  const updateStatus = (id, status) => dispatch({ type: 'UPDATE_STATUS', payload: { id, status } })
  const deleteTask = (id) => dispatch({ type: 'DELETE_TASK', payload: id })
  const getTaskById = (id) => tasks.find((t) => String(t.id) === String(id))

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateStatus, deleteTask, getTaskById }}>
      {children}
    </TaskContext.Provider>
  )
}

export function useTasks() {
  return useContext(TaskContext)
}

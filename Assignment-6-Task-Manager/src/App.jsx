import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Tasks from './pages/Tasks.jsx'
import TaskDetails from './pages/TaskDetails.jsx'
import AddTask from './pages/AddTask.jsx'
import CompletedTasks from './pages/CompletedTasks.jsx'
import Login from './pages/Login.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="tasks">
          <Route index element={<Tasks />} />
          <Route path=":id" element={<TaskDetails />} />
        </Route>
        <Route
          path="tasks/add"
          element={
            <ProtectedRoute>
              <AddTask />
            </ProtectedRoute>
          }
        />
        <Route path="completed" element={<CompletedTasks />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App

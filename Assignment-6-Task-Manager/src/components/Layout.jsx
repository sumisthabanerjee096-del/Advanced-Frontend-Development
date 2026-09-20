import { NavLink, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import './Layout.css'

function Layout() {
  const { isAuthenticated, logout } = useAuth()

  return (
    <div className="shell">
      <nav className="shell__nav">
        <span className="shell__brand">TaskFlow</span>
        <div className="shell__links">
          <NavLink to="/" end>Dashboard</NavLink>
          <NavLink to="/tasks">Tasks</NavLink>
          <NavLink to="/tasks/add">Add Task</NavLink>
          <NavLink to="/completed">Completed</NavLink>
        </div>
        {isAuthenticated ? (
          <button className="shell__auth-btn" onClick={logout}>Logout</button>
        ) : (
          <NavLink to="/login" className="shell__auth-btn">Login</NavLink>
        )}
      </nav>
      <main className="shell__content">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout

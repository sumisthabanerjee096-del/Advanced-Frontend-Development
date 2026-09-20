import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import './Login.css'

function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/tasks/add'

  const handleLogin = () => {
    login()
    navigate(from, { replace: true })
  }

  return (
    <div className="login">
      <div className="login__card">
        <h1>Login required</h1>
        <p>The "Add Task" page is protected. Log in to continue (demo login, no real credentials needed).</p>
        <button onClick={handleLogin}>Log in</button>
      </div>
    </div>
  )
}

export default Login

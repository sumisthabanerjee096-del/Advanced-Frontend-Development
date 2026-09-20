import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import { getPasswordStrength } from '../utils/passwordStrength.js'
import './Login.css'

function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [errors, setErrors] = useState({})

  const strength = getPasswordStrength(password)

  const validate = () => {
    const newErrors = {}
    if (!username.trim()) newErrors.username = 'Username is required'
    if (!password) newErrors.password = 'Password is required'
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    login(username.trim(), password, rememberMe)
    navigate(from, { replace: true })
  }

  return (
    <div className="login">
      <form className="login__card" onSubmit={handleSubmit} noValidate>
        <h1>Welcome back</h1>
        <p className="login__subtitle">Log in to access your dashboard (demo — any username/password works).</p>

        <div className="login__field">
          <label htmlFor="username">Username</label>
          <input id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          {errors.username && <span className="login__error">{errors.username}</span>}
        </div>

        <div className="login__field">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {password && (
            <div className={`login__strength login__strength--${strength.label.toLowerCase()}`}>
              <div className="login__strength-bar">
                <span style={{ width: `${(strength.score / 5) * 100}%` }} />
              </div>
              <span className="login__strength-label">{strength.label}</span>
            </div>
          )}
          {errors.password && <span className="login__error">{errors.password}</span>}
        </div>

        <label className="login__remember">
          <input type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
          Remember me
        </label>

        <button type="submit">Log in</button>
      </form>
    </div>
  )
}

export default Login

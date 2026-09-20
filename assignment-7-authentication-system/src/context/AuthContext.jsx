import { createContext, useContext, useEffect, useState } from 'react'
import { createToken, parseToken, isTokenExpired } from '../utils/fakeJwt.js'

const AuthContext = createContext(null)
const STORAGE_KEY = 'taskflow_token'

function readStoredToken() {
  return localStorage.getItem(STORAGE_KEY) || sessionStorage.getItem(STORAGE_KEY)
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = readStoredToken()
    if (token) {
      const payload = parseToken(token)
      if (payload && !isTokenExpired(payload)) {
        setUser({ username: payload.username })
        setIsAuthenticated(true)
      } else {
        localStorage.removeItem(STORAGE_KEY)
        sessionStorage.removeItem(STORAGE_KEY)
      }
    }
    setLoading(false)
  }, [])

  const login = (username, password, rememberMe) => {
    // Demo only — no real backend, so any validated username/password pair is accepted.
    const token = createToken({ username })
    if (rememberMe) {
      localStorage.setItem(STORAGE_KEY, token)
    } else {
      sessionStorage.setItem(STORAGE_KEY, token)
    }
    setUser({ username })
    setIsAuthenticated(true)
  }

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY)
    sessionStorage.removeItem(STORAGE_KEY)
    setUser(null)
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}

import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div style={{ textAlign: 'center', paddingTop: '3rem' }}>
      <h1>404</h1>
      <p>Page not found.</p>
      <Link to="/">Back to Dashboard</Link>
    </div>
  )
}

export default NotFound

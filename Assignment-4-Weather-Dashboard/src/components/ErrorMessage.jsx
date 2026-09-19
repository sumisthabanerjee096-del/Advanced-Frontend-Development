import './ErrorMessage.css'

function ErrorMessage({ message }) {
  return (
    <div className="error-message" role="alert">
      {message}. Try searching a different city name.
    </div>
  )
}

export default ErrorMessage

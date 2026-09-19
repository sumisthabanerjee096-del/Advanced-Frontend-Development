import './Loader.css'

function Loader() {
  return (
    <div className="loader" role="status" aria-label="Loading weather data">
      <div className="loader__spinner" />
      <span>Fetching weather...</span>
    </div>
  )
}

export default Loader

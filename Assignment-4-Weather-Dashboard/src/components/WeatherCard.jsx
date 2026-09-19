import './WeatherCard.css'

// Converts a unix timestamp (seconds) into a readable time like "5:42 AM"
function formatTime(unixSeconds) {
  return new Date(unixSeconds * 1000).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  })
}

function WeatherCard({ data }) {
  const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

  return (
    <div className="weather-card">
      <div className="weather-card__top">
        <div>
          <h2>{data.name}, {data.sys.country}</h2>
          <p className="weather-card__desc">{data.weather[0].description}</p>
        </div>
        <img src={iconUrl} alt={data.weather[0].description} />
      </div>

      <p className="weather-card__temp">{Math.round(data.main.temp)}°C</p>

      <div className="weather-card__grid">
        <div>
          <span className="label">Humidity</span>
          <span className="value">{data.main.humidity}%</span>
        </div>
        <div>
          <span className="label">Wind Speed</span>
          <span className="value">{data.wind.speed} m/s</span>
        </div>
        <div>
          <span className="label">Sunrise</span>
          <span className="value">{formatTime(data.sys.sunrise)}</span>
        </div>
        <div>
          <span className="label">Sunset</span>
          <span className="value">{formatTime(data.sys.sunset)}</span>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard

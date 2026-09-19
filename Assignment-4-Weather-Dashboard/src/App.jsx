import { useEffect, useState } from 'react'
import SearchBar from './components/SearchBar.jsx'
import WeatherCard from './components/WeatherCard.jsx'
import Loader from './components/Loader.jsx'
import ErrorMessage from './components/ErrorMessage.jsx'

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY

function App() {
  const [city, setCity] = useState('Kolkata')
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function fetchWeather(cityName) {
    setLoading(true)
    setError('')
    setWeather(null)

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}&units=metric&appid=${API_KEY}`
      const response = await fetch(url)

      if (!response.ok) {
        throw new Error(response.status === 404 ? 'City not found' : 'Something went wrong')
      }

      const data = await response.json()
      setWeather(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchWeather(city)
  }, [city])

  return (
    <div className="app">
      <h1 className="app__title">Weather Dashboard</h1>
      <p className="app__subtitle">Check current conditions in any city</p>

      <SearchBar onSearch={setCity} />

      {loading && <Loader />}
      {error && !loading && <ErrorMessage message={error} />}
      {weather && !loading && !error && <WeatherCard data={weather} />}
    </div>
  )
}

export default App

import React, { useEffect, useState } from 'react'
import sunny from "../assets/images/sunny.png";
import cloudy from "../assets/images/cloudy.png";
import rainy from "../assets/images/rainy.png";
import snowy from "../assets/images/sunny.png";
import loadingGif from '../assets/images/loading.gif'

// load env variables 
const OPENWEATHER_API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY

const WeatherApp = () => {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const [weatherType, setWeatherType] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const searchWeather = async () => {
    setIsLoading(true)
    const defaultLocation = 'Porto Alegre'
    const locationAux = location.trim() !== '' ? location : defaultLocation
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${locationAux}&units=metric&appid=${OPENWEATHER_API_KEY}`
    const res = await fetch(url)
    const weatherData = await res.json()
    // console.log(weatherData);
    if (weatherData.cod !== 200) {
      setData({ notFound: true })
    } else {
      setData(weatherData)
      // setWeatherType(data.weather ? data.weather[0].main : null)
      setWeatherType(weatherData.weather[0].main)
    }
    setIsLoading(false)
  }
  
  useEffect(() => {
    const fetchDefaultWeather = async () => {
      await searchWeather()
    }

    fetchDefaultWeather()
  }, [])
  
  const handleInputChange = (e) => {
    setLocation(e.target.value)
  }

  const search = async () => {
    if(location.trim() !== ''){
      await searchWeather()
      setLocation('')
    }
  }

  const handleKeyDown = (e) => {
    if(e.key === 'Enter'){
      search()
    }
  }

  const weatherImages = {
    Clear: sunny,
    Clouds: cloudy,
    Rain: rainy,
    Snow: snowy,
    Haze: cloudy,
    Mist: cloudy,
  }

  const weatherImage = data.weather ? weatherImages[data.weather[0].main] : null

  const backgroundImages = {
    Clear: 'linear-gradient(to right, #f3b07c, #fcd283)',
    Clouds: 'linear-gradient(to right, #57d6d4, #71eeec)',
    Rain: 'linear-gradient(to right, #5bc8fb, #80eaff)',
    Snow: 'linear-gradient(to right, #aff2ff, #fff)',
    Haze: 'linear-gradient(to right, #57d6d4, #71eeec)',
    Mist: 'linear-gradient(to right, #57d6d4, #71eeec)',
  }

  const backgroundImage = data.weather
    ? backgroundImages[data.weather[0].main]
    : 'linear-gradient(to right, #f3b07c, #fcd283)'

  const currentDate = new Date()
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  const dayOfWeek = daysOfWeek[currentDate.getDay()]
  const month = months[currentDate.getMonth()]
  const dayOfMonth = currentDate.getDate()

  const formattedDate = `${dayOfWeek}, ${dayOfMonth} ${month}`

  return (
    <div className="container" style={{ backgroundImage }}>
      <div
        className="weather-app"
        style={{
          backgroundImage:
            backgroundImage && backgroundImage.replace
              ? backgroundImage.replace('to right', 'to top')
              : null,
        }}
      >
        <div className="search">
          <div className="search-top">
            <i className="fa-solid fa-location-dot"></i>
            <div className="location">{data.name}</div>
          </div>
          <div className="search-bar">
            <input
              type="text"
              placeholder='Enter Location'
              value={location}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown} />
            <i className="fa-solid fa-magnifying-glass" onClick={search}></i>
          </div>
        </div>
        {isLoading ? (
          <img className="loader" src={loadingGif} alt="loading" />
        ) : data.notFound ? (<div className="not-found">Not Found 😒</div>) : (
          <>
            <div className="weather">
              <img src={weatherImage} alt={weatherType} />
              <div className="weather-type">
                {weatherType}
              </div>
              <div className="temp">{ data.main ? `${Math.floor(data.main.temp)}°C`: null}</div>
            </div>
            <div className="weather-date">
              <p>{formattedDate}</p>
            </div>
            <div className="weather-data">
              <div className="humidity">
                <div className="data-name">Humidity</div>
                <i className="fa-solid fa-droplet"></i>
                <div className="data">{data.main ? data.main.humidity : null}%</div>
              </div>
              <div className="wind">
                <div className="data-name">Wind</div>
                <i className="fa-solid fa-wind"></i>
                <div className="data">{data.wind ? data.wind.speed : null}km/h</div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default WeatherApp
import React from 'react'
import sunny from "../assets/images/sunny.png";
import cloudy from "../assets/images/cloudy.png";
import rainy from "../assets/images/rainy.png";
import snowy from "../assets/images/sunny.png";


const WeatherApp = () => {
  return (
    <div className='container'>
      <h1>The Buhler Weather App</h1>
      <div className="weatherapp">
        <div className="search">
          <div className="search-top">
            <i className="fa-solid fa-location-dot"></i>
            <div className="location"></div>
          </div>
          <div className="serach-bar">
            <input type="text" placeholder='Enter Location' />
            <i className="fa-solid f"></i>a-magnifying-glass
          </div>
        </div>
        <div className="weather">
          <img src={sunny} alt="sunny" />
          <div className="weather-type">Clear</div>
          <div className="temp">28°C</div>
        </div>
        <div className="weather-date">
          <p>Monday, 11 Nov</p>
        </div>
        <div className="weather-data">
          <div className="humidity">
            <div className="data-name">Humidity</div>
            <i className="fa-solid fa-droplet"></i>
            <div className="data">55%</div>
          </div>
          <div className="wind">
            <div className="data-name">Humidity</div>
            <i className="fa-solid fa-wind"></i>
            <div className="data">5km/h</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherApp
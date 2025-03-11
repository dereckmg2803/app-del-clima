import React, { useState } from 'react'

function Weather({ weather, image }) {
  //    console.log(weather);

  const [isFah, setIsFah] = useState(false)

  const temperature = isFah ? `${(weather.temp * 9 / 5) + 32} °F` : `${weather.temp} °C`
  return (
    <div
      className="grid-container"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',

      }}
    >
      <div className='item header'>
        <span className='title'>
          <h1>Weather app</h1>
        </span>
        <p>{weather.city}, {weather.country}</p>
      </div>


      <div className='item icon'>
        {/* <img src="" alt="" /> */}
        <h2>icon</h2>
      </div>

      <div className='item middle'>
        <h2>{weather.description}</h2>
        <ul>
          <li className="weather-info">
            Wind Speed: <span className="value">{weather.speed}m/s</span>
          </li>
          <li className="weather-info">
            Clouds: <span className="value">{weather.clouds}%</span>
          </li>
          <li className="weather-info">
            Pressure: <span className="value">{weather.pressure}hPa</span>
          </li>
        </ul>
      </div>


      <div className='item footer'>
        <h3>{temperature}</h3>
        <button onClick={() => setIsFah(!isFah)}>
          Change to °F {isFah ? 'Celsius' : 'Fahrenheit'}
        </button>
      </div>
    </div>
  )
}

export default Weather
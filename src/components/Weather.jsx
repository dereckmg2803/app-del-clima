import React, { useState } from 'react'

function Weather({ weather, background, image }) {
  //    console.log(weather);

  const [isFah, setIsFah] = useState(false)

  const temperature = isFah ? `${((weather.temp * 9 / 5) + 32).toFixed(2)} °F` : `${weather.temp.toFixed(2)} °C`;
    return (
    <div
      className="grid-container"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='item header'>
        <span className='title'>
          <h1>App del clima</h1>
        </span>
        <p>{weather.city}, {weather.country}</p>
      </div>


      <div className='item icon' style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        
      }}>
         {/* <img src={image} alt="Icono del clima" />  */}
         {console.log(image)}
      </div>

      <div className='item middle'>
        <h1>"{weather.description.charAt(0).toUpperCase() + weather.description.slice(1)}"</h1>
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